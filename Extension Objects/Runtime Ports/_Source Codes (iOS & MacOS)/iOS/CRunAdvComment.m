//#pragma once
#import "CRunAdvComment.h" // Replace this with your own
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
#define CND_OBJCOMMENT 1
#define CND_TXTREGCOMMENT 2
#define CND_TXTREGNOTE 3
#define CND_TXTREGREMINDER 4
#define CND_TXTREGIMPORTANT 5
#define CND_TXTREGAAE 6
#define CND_TXTCAPCOMMENT 7
#define CND_TXTCAPNOTE 8
#define CND_TXTCAPREMINDER 9
#define CND_TXTCAPIMPORTANT 10
#define CND_LAST 11

#define ACT_COMMENT 0
#define ACT_TXTREGCOMMENT 1
#define ACT_TXTREGNOTE 2
#define ACT_TXTREGREMINDER 3
#define ACT_TXTREGIMPORTANT 4
#define ACT_TXTREGAAA 5
#define ACT_TXTREGAAB 6
#define ACT_TXTCAPCOMMENT 7
#define ACT_TXTCAPNOTE 8
#define ACT_TXTCAPREMINDER 9
#define ACT_TXTCAPIMPORTANT 10

@implementation CRunAdvComment

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
    return REFLAG_ONESHOT; // Seemingly required
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
        case CND_OBJCOMMENT:
            return YES;
        case CND_TXTREGCOMMENT:
            return YES;
        case CND_TXTREGNOTE:
            return YES;
        case CND_TXTREGREMINDER:
            return YES;
        case CND_TXTREGIMPORTANT:
            return YES;
        case CND_TXTREGAAE:
            return YES;
        case CND_TXTCAPCOMMENT:
            return YES;
        case CND_TXTCAPNOTE:
            return YES;
        case CND_TXTCAPREMINDER:
            return YES;
        case CND_TXTCAPIMPORTANT:
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
        case ACT_TXTREGCOMMENT:
            break;
        case ACT_TXTREGNOTE:
            break;
        case ACT_TXTREGREMINDER:
            break;
        case ACT_TXTREGIMPORTANT:
            break;
        case ACT_TXTREGAAA:
            break;
        case ACT_TXTREGAAB:
            break;
        case ACT_TXTCAPCOMMENT:
            break;
        case ACT_TXTCAPNOTE:
            break;
        case ACT_TXTCAPREMINDER:
            break;
        case ACT_TXTCAPIMPORTANT:
            break;
    }
}

// ~~~~~~~ EXPRESSIONS ~~~~~~~

// NaN

@end // Don't forget this at the very bottom!
