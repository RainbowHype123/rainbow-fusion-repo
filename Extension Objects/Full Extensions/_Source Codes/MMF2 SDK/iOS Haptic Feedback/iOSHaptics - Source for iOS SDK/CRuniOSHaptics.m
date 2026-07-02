// iOS Haptic Feedback extension - Contents

#import "CRuniOSHaptics.h"
#import "CFile.h"
#import "CRunApp.h"
#import "CBitmap.h"
#import "CCreateObjectInfo.h"
#import "CValue.h"
#import "CExtension.h"
#import "CRun.h"
#import "CActExtension.h"
#import <AudioToolbox/AudioToolbox.h>
#import <UIKit/UIKit.h>

#import <CoreHaptics/CoreHaptics.h> // For advanced haptics support check

#define LEGACY_VIBRATE    0
#define HAPTIC_LIGHT      1
#define HAPTIC_MEDIUM     2
#define HAPTIC_HEAVY      3
#define HAPTIC_SOFT       4
#define HAPTIC_RIGID      5
#define HAPTIC_SELECTION  6
#define HAPTIC_SUCCESS    7
#define HAPTIC_WARNING    8
#define HAPTIC_ERROR      9

// Condition IDs
#define CND_ONLEGACYVIBRATE         0
#define CND_ONLIGHTHAPTIC           1
#define CND_ONMEDIUMHAPTIC          2
#define CND_ONHEAVYHAPTIC           3
#define CND_ONSOFTHAPTIC            4
#define CND_ONRIGIDHAPTIC           5
#define CND_ONSELECTIONHAPTIC       6
#define CND_ONNOTIFSUCCESSHAPTIC    7
#define CND_ONNOTIFWARNINGHAPTIC    8
#define CND_ONNOTIFERRORHAPTIC      9
#define CND_ONANYHAPTIC             10
#define CND_ONERROR                 11
#define CND_AREADVHAPTICSUPPORTED   12
#define CND_ISEMULATINGHAPTICS      13
#define CND_LAST                    14

// Action IDs
#define ACT_LEGACYVIBRATE           0
#define ACT_LIGHTHAPTIC             1
#define ACT_MEDIUMHAPTIC            2
#define ACT_HEAVYHAPTIC             3
#define ACT_SOFTHAPTIC              4
#define ACT_RIGIDHAPTIC             5
#define ACT_SELECTIONHAPTIC         6
#define ACT_NOTIFSUCCESSHAPTIC      7
#define ACT_NOTIFWARNINGHAPTIC      8
#define ACT_NOTIFERRORHAPTIC        9
#define ACT_PLAYHAPTICBYEXP         10
#define ACT_TOGGLEEMULATIONFLAG     11

// Expression IDs
#define EXP_LASTHAPTICNAME          0
#define EXP_LASTHAPTICINDEX         1
#define EXP_LASTERRORCODE           2
#define EXP_LASTERRORMESSAGE        3

@implementation CRuniOSHaptics

-(int)getNumberOfConditions
{
	return CND_LAST;
}

-(BOOL)createRunObject:(CFile*)file withCOB:(CCreateObjectInfo*)cob andVersion:(int)version
{
    if (@available(iOS 10.0, *))
    {
        lightGen        = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
        mediumGen       = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleMedium];
        heavyGen        = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleHeavy];
        if (@available(iOS 13.0, *))
        {
            softGen     = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleSoft];
            rigidGen    = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleRigid];
        }
        selectionGen    = [[UISelectionFeedbackGenerator alloc] init];
        notificationGen = [[UINotificationFeedbackGenerator alloc] init];
    }

    supportsImpact = NO;
    supportsSoftRigid = NO;

    if (@available(iOS 10.0, *)) { supportsImpact = YES; }
    if (@available(iOS 13.0, *)) { supportsSoftRigid = YES; }

    return YES;
}

-(int)handleRunObject
{
    return REFLAG_ONESHOT;
}

-(void)destroyRunObject:(BOOL)bFast
{
    lightGen = nil;
    mediumGen = nil;
    heavyGen = nil;
    softGen = nil;
    rigidGen = nil;
    selectionGen = nil;
    notificationGen = nil;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Conditions

-(BOOL)condition:(int)num withCndExtension:(CCndExtension *)cnd
{
    switch(num)
    {
        case CND_ONLEGACYVIBRATE:
        case CND_ONLIGHTHAPTIC:
        case CND_ONMEDIUMHAPTIC:
        case CND_ONHEAVYHAPTIC:
        case CND_ONSOFTHAPTIC:
        case CND_ONRIGIDHAPTIC:
        case CND_ONSELECTIONHAPTIC:
        case CND_ONNOTIFSUCCESSHAPTIC:
        case CND_ONNOTIFWARNINGHAPTIC:
        case CND_ONNOTIFERRORHAPTIC:
        case CND_ONANYHAPTIC:
        case CND_ONERROR:
            return YES;
        case CND_AREADVHAPTICSUPPORTED:
        {
            if (@available(iOS 13.0, *))
            {
                return [CHHapticEngine capabilitiesForHardware].supportsHaptics;
            }
            return NO; // Does NOT mean that haptics won't occur at all.
        }
        case CND_ISEMULATINGHAPTICS:
            return NO;
    }
    return NO;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Actions

-(void)actLegacyVibrate:(CActExtension*)act
{
    AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
}

-(void)actLightHaptic:(CActExtension*)act
{
    [lightGen prepare];
    [lightGen impactOccurred];
}

-(void)actMediumHaptic:(CActExtension*)act
{
    [mediumGen prepare];
    [mediumGen impactOccurred];
}

-(void)actHeavyHaptic:(CActExtension*)act
{
    [heavyGen prepare];
    [heavyGen impactOccurred];
}

-(void)actSoftHaptic:(CActExtension*)act
{
    [softGen prepare];
    [softGen impactOccurred];
}

-(void)actRigidHaptic:(CActExtension*)act
{
    [rigidGen prepare];
    [rigidGen impactOccurred];
}

-(void)actSelectionHaptic:(CActExtension*)act
{
    [selectionGen prepare];
    [selectionGen selectionChanged];
}

-(void)actSuccessHaptic:(CActExtension*)act
{
    [notificationGen prepare];
    [notificationGen notificationOccurred:UINotificationFeedbackTypeSuccess];
}

-(void)actWarningHaptic:(CActExtension*)act
{
    [notificationGen prepare];
    [notificationGen notificationOccurred:UINotificationFeedbackTypeWarning];
}

-(void)actErrorHaptic:(CActExtension*)act
{
    [notificationGen prepare];
    [notificationGen notificationOccurred:UINotificationFeedbackTypeError];
}

-(void)playHaptic:(int)hapticType
{
    // LEGACY_VIBRATE = 0
    // HAPTIC_LIGHT = 1 | HAPTIC_MEDIUM = 2 | HAPTIC_HEAVY = 3
    // HAPTIC_SOFT = 4 | HAPTIC_RIGID = 5
    // HAPTIC_SELECTION = 6
    // HAPTIC_SUCCESS = 7 | HAPTIC_WARNING = 8 | HAPTIC_ERROR = 9

    if ((hapticType >= HAPTIC_LIGHT && hapticType <= HAPTIC_HEAVY) ||
        (hapticType >= HAPTIC_SELECTION && hapticType <= HAPTIC_ERROR))
    {
        if (!supportsImpact)
        {
            [self reportError:ERROR_IOS10_REQUIRED];
            return;
        }
    }

    if (hapticType >= HAPTIC_SOFT && hapticType <= HAPTIC_RIGID)
    {
        if (!supportsSoftRigid)
        {
            [self reportError:ERROR_IOS13_REQUIRED];
            return;
        }
    }

    switch (hapticType)
    {
        case ACT_LEGACYVIBRATE:
            [self actLegacyVibrate:hapticType];
            break;
        case ACT_LIGHTHAPTIC:
            [self actLightHaptic:hapticType];
            break;
        case ACT_MEDIUMHAPTIC:
            [self actMediumHaptic:hapticType];
            break;
        case ACT_HEAVYHAPTIC:
            [self actHeavyHaptic:hapticType];
            break;
        case ACT_SOFTHAPTIC:
            [self actSoftHaptic:hapticType];
            break;
        case ACT_RIGIDHAPTIC:
            [self actRigidHaptic:hapticType];
            break;
        case ACT_SELECTIONHAPTIC:
            [self actSelectionHaptic:hapticType];
            break;
        case ACT_NOTIFSUCCESSHAPTIC:
            [self actSuccessHaptic:hapticType];
            break;
        case ACT_NOTIFWARNINGHAPTIC:
            [self actWarningHaptic:hapticType];
            break;
        case ACT_NOTIFERRORHAPTIC:
            [self actErrorHaptic:hapticType];
            break;
    }
}

-(void)action:(int)num withActExtension:(CActExtension*)act
{
    switch(num)
    {
        case ACT_LEGACYVIBRATE:
        case ACT_LIGHTHAPTIC:
        case ACT_MEDIUMHAPTIC:
        case ACT_HEAVYHAPTIC:
        case ACT_SOFTHAPTIC:
        case ACT_RIGIDHAPTIC:
        case ACT_SELECTIONHAPTIC:
        case ACT_NOTIFSUCCESSHAPTIC:
        case ACT_NOTIFWARNINGHAPTIC:
        case ACT_NOTIFERRORHAPTIC:
            [self playHaptic:num];
            break;
        case ACT_PLAYHAPTICBYEXP:
        {
            int type = MAX(HAPTIC_LEGACY, MIN([act getParamExpression:rh withNum:0], HAPTIC_ERROR));

            [self playHaptic:type];
            break;
        }
        case ACT_TOGGLEEMULATIONFLAG:
            break;
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Expressions
-(CValue*)expression:(int)num
{
	switch (num)
	{
		case EXP_LASTHAPTICNAME:
			return 0;
        case EXP_LASTHAPTICINDEX:
			return 0;
        case EXP_LASTERRORCODE:
			return 0;
        case EXP_LASTERRORMESSAGE:
			return 0;
	}
	CValue* v=[rh getTempValue:0];
	[v forceDouble:ret];
	return v;
}
@end