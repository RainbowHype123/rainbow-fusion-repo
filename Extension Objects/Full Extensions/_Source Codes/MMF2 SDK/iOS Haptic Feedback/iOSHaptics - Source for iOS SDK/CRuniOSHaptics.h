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
    UIImpactFeedbackGenerator *softGen;
    UIImpactFeedbackGenerator *rigidGen;

    UISelectionFeedbackGenerator *selectionGen;

    UINotificationFeedbackGenerator *notificationGen;

    BOOL supportsImpact;
    BOOL supportsSoftRigid;

    BOOL clampExp;

    NString* lastHapticName;
    int lastHapticIndex;

    int lastErrorCode;
    NString* lastErrorMessage;
}
@end