#import <Foundation/Foundation.h>
#import <CoreGraphics/CoreGraphics.h> // New addition
#import <AppKit/AppKit.h> // New addition x2
#import "CRunExtension.h"

@class CFile;
@class CCreateObjectInfo;
@class CValue;
@class CCndExtension;
@class CFontInfo;
@class CBitmap;

// Replace EXT_TEMPLATE with your own ext's name (with CRun at the start, of course)
@interface CRunSimpleMsgBox : CRunExtension
{
    // If tracking extra parameters internally, define them here
}

@end // Don't forget this at the very bottom!
