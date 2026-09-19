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

// View header file for codes

@implementation CRuniOSHaptics

-(int)getNumberOfConditions
{
	return CND_LAST;
}

-(BOOL)createRunObject:(CFile*)file withCOB:(CCreateObjectInfo*)cob andVersion:(int)version
{
    supportsImpact = NO;
    supportsSoftRigid = NO;

    lastHapticName = @"N/A";
    lastHapticIndex = -1;

    lastErrorCode = -1;
    lastErrorMessage = @"N/A";
    
    if (@available(iOS 10.0, *))
    {
        supportsImpact = YES;
        lightGen        = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
        mediumGen       = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleMedium];
        heavyGen        = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleHeavy];
        if (@available(iOS 13.0, *))
        {
            supportsSoftRigid = YES;
            softGen     = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleSoft];
            rigidGen    = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleRigid];
        }
        selectionGen    = [[UISelectionFeedbackGenerator alloc] init];
        notificationGen = [[UINotificationFeedbackGenerator alloc] init];
    }

    return YES; // Idk if it matters whether or not it returns YES or NO
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

-(void)actLegacyVibrate
{
    AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
    
    // Trigger "on legacy vibrate" condition
    [ho generateEvent:CND_ONLEGACYVIBRATE withParam:0];
}

-(void)actLightHaptic
{
    [lightGen prepare];
    [lightGen impactOccurred];

    // Trigger "on light haptic" condition
    [ho generateEvent:CND_ONLIGHTHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actMediumHaptic
{
    [mediumGen prepare];
    [mediumGen impactOccurred];

    // Trigger "on medium haptic" condition
    [ho generateEvent:CND_ONMEDIUMHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actHeavyHaptic
{
    [heavyGen prepare];
    [heavyGen impactOccurred];

    // Trigger "on heavy haptic" condition
    [ho generateEvent:CND_ONHEAVYHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actSoftHaptic
{
    [softGen prepare];
    [softGen impactOccurred];

    // Trigger "on soft haptic" condition
    [ho generateEvent:CND_ONSOFTHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actRigidHaptic
{
    [rigidGen prepare];
    [rigidGen impactOccurred];

    // Trigger "on rigid haptic" condition
    [ho generateEvent:CND_ONRIGIDHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actSelectionHaptic
{
    [selectionGen prepare];
    [selectionGen selectionChanged];

    // Trigger "on selection haptic" condition
    [ho generateEvent:CND_ONSELECTIONHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actSuccessHaptic
{
    [notificationGen prepare];
    [notificationGen notificationOccurred:UINotificationFeedbackTypeSuccess];

    // Trigger "on success haptic" condition
    [ho generateEvent:CND_ONNOTIFSUCCESSHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actWarningHaptic
{
    [notificationGen prepare];
    [notificationGen notificationOccurred:UINotificationFeedbackTypeWarning];

    // Trigger "on warning haptic" condition
    [ho generateEvent:CND_ONNOTIFWARNINGHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)actErrorHaptic
{
    [notificationGen prepare];
    [notificationGen notificationOccurred:UINotificationFeedbackTypeError];

    // Trigger "on error haptic" condition
    [ho generateEvent:CND_ONNOTIFERRORHAPTIC withParam:0];
    // Trigger "on any haptic" condition
    [ho generateEvent:CND_ONANYHAPTIC withParam:0];
}

-(void)reportError:(int)errorCode
{
    // Error func

    lastErrorCode = errorCode;

    // 0 = iOS 10 needed, 1 = iOS 13 needed, 2 = Out of range
    switch (errorCode)
    {
        case ERR_IOS10_REQUIRED:
        {
            lastErrorMessage = @"The requested haptic requires iOS 10 or later.";

            // Trigger "on error" condition
            [ho generateEvent:CND_ONERROR withParam:0];
            break;
        }
        case ERR_IOS13_REQUIRED:
        {
            lastErrorMessage = @"The requested haptic requires iOS 13 or later.";

            // Trigger "on error" condition
            [ho generateEvent:CND_ONERROR withParam:1];
            break;
        }
        case ERR_OUT_OF_INDEX_RANGE:
        {
            lastErrorMessage = @"The requested haptic ID was outside valid range (0-9)";

            // Trigger "on error" condition
            [ho generateEvent:CND_ONERROR withParam:2];
            break;
        }
    }
}

-(void)playHaptic:(int)hapticType
{
    // LEGACY_VIBRATE = 0
    // HAPTIC_LIGHT = 1 | HAPTIC_MEDIUM = 2 | HAPTIC_HEAVY = 3
    // HAPTIC_SOFT = 4 | HAPTIC_RIGID = 5
    // HAPTIC_SELECTION = 6
    // HAPTIC_SUCCESS = 7 | HAPTIC_WARNING = 8 | HAPTIC_ERROR = 9

    // I plan to add a toggleable clamping function here, which if false and out of range would trigger an "out of range" error on the user/dev's end

    if ((hapticType >= HAPTIC_LIGHT && hapticType <= HAPTIC_HEAVY) ||
        (hapticType >= HAPTIC_SELECTION && hapticType <= HAPTIC_ERROR))
    {
        if (!supportsImpact)
        {
            [self reportError:ERR_IOS10_REQUIRED];
            return;
        }
    }

    if (hapticType >= HAPTIC_SOFT && hapticType <= HAPTIC_RIGID)
    {
        if (!supportsSoftRigid)
        {
            [self reportError:ERR_IOS13_REQUIRED];
            return;
        }
    }

    static NSString * const HapticNames[] =
    {
        @"Legacy Vibrate",
        @"Light",
        @"Medium",
        @"Heavy",
        @"Soft",
        @"Rigid",
        @"Selection",
        @"Success",
        @"Warning",
        @"Error"
    };

    lastHapticIndex = hapticType;
    lastHapticName = HapticNames[hapticType];

    switch (hapticType)
    {
        case LEGACY_VIBRATE:
            [self actLegacyVibrate];
            break;
        case HAPTIC_LIGHT:
            [self actLightHaptic];
            break;
        case HAPTIC_MEDIUM:
            [self actMediumHaptic];
            break;
        case HAPTIC_HEAVY:
            [self actHeavyHaptic];
            break;
        case HAPTIC_SOFT:
            [self actSoftHaptic];
            break;
        case HAPTIC_RIGID:
            [self actRigidHaptic];
            break;
        case HAPTIC_SELECTION:
            [self actSelectionHaptic];
            break;
        case HAPTIC_SUCCESS:
            [self actSuccessHaptic];
            break;
        case HAPTIC_WARNING:
            [self actWarningHaptic];
            break;
        case HAPTIC_ERROR:
            [self actErrorHaptic];
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
            int type = MAX(LEGACY_VIBRATE, MIN([act getParamExpression:rh withNum:0], HAPTIC_ERROR));

            [self playHaptic:type];
            break;
        }
        case ACT_TOGGLEOUTOFRANGEERROR:
        {
            clampExp = ([act getParamExpDouble:rh withNum:0] >= 1);// Turns into bool. YES if condition is met, NO otherwise.
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
			return lastHapticName;
        case EXP_LASTHAPTICINDEX:
			return lastHapticIndex;
        case EXP_LASTERRORCODE:
			return lastErrorCode;
        case EXP_LASTERRORMESSAGE:
			return lastErrorMessage;
	}
	CValue* v=[rh getTempValue:0];
	[v forceDouble:ret];
	return v;
}
@end