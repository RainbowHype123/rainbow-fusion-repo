//#pragma once
#import "CRunSimpleMsgBox.h" // Replace this with your own
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
#define CND_LAST 0

#define ACT_SHOWMSGBOX 0

@implementation CRunSimpleMsgBox

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
    return 0; // Seemingly required
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
        // I could potentially remove this whole block, but just to be safe I'm leaving it in
    }
    return NO;
}

// ~~~~~~~ ACTIONS ~~~~~~~

-(void)action:(int)num withActExtension:(CActExtension*)act
{
    switch(num)
    {
        case ACT_SHOWMSGBOX:
            
            NSString* caption = [act getParamExpString:rh withNum:0];
            NSString* text    = [act getParamExpString:rh withNum:1];
            
            dispatch_async(dispatch_get_main_queue(), ^{
                NSAlert* alert = [[NSAlert alloc] init];
                
                [alert setMessageText:caption ?: @""];
                [alert setInformativeText:text ?: @""];
                [alert addButtonWithTitle:@"OK"];
                
                //NSImage* emptyImage = [[NSImage alloc] initWithSize:NSMakeSize(1,1)];
                //[alert setIcon:emptyImage];
                
                /*
                [alert beginSheetModalForWindow:[NSApp mainWindow]
                              completionHandler:nil];*/
                
                [alert runModal];
            });
            
            break;
    }
}

// ~~~~~~~ EXPRESSIONS ~~~~~~~

-(CValue*)expression:(int)num
{
    switch (num)
    {
        // I could potentially remove this whole block, but just to be safe I'm leaving it in
    }
    return nil;
}

@end // Don't forget this at the very bottom!
