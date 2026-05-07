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

#define CND_LAST 0

#define ACT_VIBRATELEGACY 0
#define ACT_LIGHTHAPTIC 1
#define ACT_MEDIUMHAPTIC 2
#define ACT_HEAVYHAPTIC 3

@implementation CRuniOSHaptics

-(int)getNumberOfConditions
{
	return CND_LAST;
}

-(BOOL)createRunObject:(CFile*)file withCOB:(CCreateObjectInfo*)cob andVersion:(int)version
{
    lightGen  = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
    mediumGen = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleMedium];
    heavyGen  = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleHeavy];
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
}

// Conditions

-(BOOL)condition:(int)num withCndExtension:(CCndExtension *)cnd
{
    switch(num)
    {

    }
    return NO;
}

// Actions

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

-(void)action:(int)num withActExtension:(CActExtension*)act
{
    switch(num)
    {
        case ACT_VIBRATELEGACY:
            AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
            break;
        case ACT_VIBRATE:
            [self actLightHaptic:act];
            break;
        case ACT_AUTHORISEIAD:
            [self actMediumHaptic:act];
            break;
        case ACT_AUTHORISEIAD:
            [self actHeavyHaptic:act];
            break;
    }
}

@end
