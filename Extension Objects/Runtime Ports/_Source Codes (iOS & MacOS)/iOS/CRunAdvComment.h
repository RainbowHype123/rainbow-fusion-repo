#import <Foundation/Foundation.h>
#import "CRunExtension.h"

@class CFile;
@class CCreateObjectInfo;
@class CValue;
@class CCndExtension;
@class CFontInfo;
@class CBitmap;

// Replace EXT_TEMPLATE with your own ext's name (with CRun at the start, of course)
@interface CRunAdvComment : CRunExtension
{
    // If tracking extra parameters internally, define them here
}

@end // Don't forget this at the very bottom!
