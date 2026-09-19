// iOS Haptic Feedback extension - Header

#import <Foundation/Foundation.h>
#import "CRunExtension.h"

// Haptic IDs
#define LEGACY_VIBRATE    0
#define HAPTIC_LIGHT      1
#define HAPTIC_MEDIUM     2
#define HAPTIC_HEAVY      3
#define HAPTIC_SOFT       4
#define HAPTIC_RIGID      5
#define HAPTIC_SELECTION  6
#define HAPTIC_SUCCESS    7
#define HAPTIC_WARNING    8
#define HAPTIC_ERROR      9

// Error codes
#define ERR_IOS10_REQUIRED      0
#define ERR_IOS13_REQUIRED      1
#define ERR_OUT_OF_INDEX_RANGE  2

// Condition IDs (Fusion)
#define CND_ONLEGACYVIBRATE         0
#define CND_ONLIGHTHAPTIC           1
#define CND_ONMEDIUMHAPTIC          2
#define CND_ONHEAVYHAPTIC           3
#define CND_ONSOFTHAPTIC            4
#define CND_ONRIGIDHAPTIC           5
#define CND_ONSELECTIONHAPTIC       6
#define CND_ONNOTIFSUCCESSHAPTIC    7
#define CND_ONNOTIFWARNINGHAPTIC    8
#define CND_ONNOTIFERRORHAPTIC      9
#define CND_ONANYHAPTIC             10
#define CND_ONERROR                 11
#define CND_AREADVHAPTICSUPPORTED   12
#define CND_ISEMULATINGHAPTICS      13
#define CND_LAST                    14

// Action IDs (Fusion)
#define ACT_LEGACYVIBRATE           0
#define ACT_LIGHTHAPTIC             1
#define ACT_MEDIUMHAPTIC            2
#define ACT_HEAVYHAPTIC             3
#define ACT_SOFTHAPTIC              4
#define ACT_RIGIDHAPTIC             5
#define ACT_SELECTIONHAPTIC         6
#define ACT_NOTIFSUCCESSHAPTIC      7
#define ACT_NOTIFWARNINGHAPTIC      8
#define ACT_NOTIFERRORHAPTIC        9
#define ACT_PLAYHAPTICBYEXP         10
#define ACT_TOGGLEOUTOFRANGEERROR   11
#define ACT_TOGGLEEMULATIONFLAG     12

// Expression IDs (Fusion)
#define EXP_LASTHAPTICNAME          0
#define EXP_LASTHAPTICINDEX         1
#define EXP_LASTERRORCODE           2
#define EXP_LASTERRORMESSAGE        3

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