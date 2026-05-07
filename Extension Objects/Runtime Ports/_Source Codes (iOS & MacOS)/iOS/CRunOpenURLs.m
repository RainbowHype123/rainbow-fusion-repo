#import "CRunOpenURLs.h"
#import "CFile.h"
#import "CRunApp.h"
#import "CBitmap.h"
#import "CCreateObjectInfo.h"
#import "CValue.h"
#import "CExtension.h"
#import "CRun.h"
#import "CCndExtension.h"
#import "CActExtension.h"

// ~~~~~~~ DEFINE A/C/Es HERE ~~~~~~~
#define CND_LAST 0

#define ACT_OPENURL 0

@implementation CRunOpenURLs

-(int)getNumberOfConditions
{
    return CND_LAST;
}

-(BOOL)createRunObject:(CFile*)file withCOB:(CCreateObjectInfo*)cob andVersion:(int)version
{
    return YES;
}

-(void)destroyRunObject:(BOOL)bFast
{
    
}

-(int)handleRunObject
{
    return REFLAG_ONESHOT;
}

-(void)displayRunObject:(CRenderer*)renderer
{
    
}

// ~~~~~~~ CONDITIONS ~~~~~~~

-(BOOL)condition:(int)num withCndExtension:(CCndExtension *)cnd
{
    return NO;
}

// ~~~~~~~ ACTIONS ~~~~~~~

-(void)action:(int)num withActExtension:(CActExtension*)act
{
    switch(num)
    {
        case ACT_OPENURL:
            NSString* url=[act getParamExpString:rh withNum:0];
            [[UIApplication sharedApplication] openURL:[NSURL URLWithString:url]];
            break;
    }
}

// ~~~~~~~ EXPRESSIONS ~~~~~~~

// NaN

@end
