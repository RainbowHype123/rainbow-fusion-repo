// iOS Haptic Feedback extension - Header

#import <Foundation/Foundation.h>
#import "CRunExtension.h"

@class CFile;
@class CCreateObjectInfo;
@class CValue;
@class CCndExtension;
@class CFontInfo;
@class CBitmap;

@interface CRuniOSHaptics : CRunExtension 
{
    UIImpactFeedbackGenerator *lightGen;
    UIImpactFeedbackGenerator *mediumGen;
    UIImpactFeedbackGenerator *heavyGen;
}

@end
