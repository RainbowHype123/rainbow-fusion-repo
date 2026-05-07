//#pragma once
#import "CRuncommentor.h" // Replace this with your own
#import "CFile.h"
#import "CRunApp.h"
#import "CBitmap.h"
#import "CCreateObjectInfo.h"
#import "CValue.h"
#import "CExtension.h"
#import "CRun.h"
#import "CCndExtension.h" // Might not be needed, but just in case
#import "CActExtension.h"
//#import <AudioToolbox/AudioToolbox.h> // iOS only, I think

// ~~~~~~~ DEFINE A/C/Es HERE ~~~~~~~
#define CND_COMMENT 0
#define CND_LAST 1

#define ACT_COMMENT 0

@implementation CRuncommentor

-(int)getNumberOfConditions
{
    return CND_LAST; // Don't forget to update if adding new A/C/Es!
}

-(BOOL)createRunObject:(CFile*)file withCOB:(CCreateObjectInfo*)cob andVersion:(int)version
{
    return YES;
    // If specific code must run when the object's created, add it here. Otherwise, can be left as-is.
}

-(void)destroyRunObject:(BOOL)bFast
{
    // If specific code must run when the object's destroyed, add it here. Otherwise, can be left blank.
}

-(int)handleRunObject
{
    return REFLAG_ONESHOT; // Previously REFLAG_ONESHOT
}

-(void)displayRunObject:(CRenderer*)renderer
{
    // If the object must display something (such as an image), add code in here. Otherwise, can be left blank.
}

// ~~~~~~~ CONDITIONS ~~~~~~~

-(BOOL)condition:(int)num withCndExtension:(CCndExtension *)cnd
{
    switch(num)
    {
        case CND_COMMENT:
            return YES;
    }
    return NO;
}

// ~~~~~~~ ACTIONS ~~~~~~~

-(void)action:(int)num withActExtension:(CActExtension*)act
{
    switch(num)
    {
        case ACT_COMMENT:
            break;
    }
}

// ~~~~~~~ EXPRESSIONS ~~~~~~~

// NaN

@end // Don't forget this at the very bottom!
