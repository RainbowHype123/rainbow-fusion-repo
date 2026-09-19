// Object identifier "SAM3"
#define IDENTIFIER	MAKEID(H,P,T,F)		// REQUIRED: you MUST replace the letters in the MAKEID macro by others
										// and then remove the #pragma message above. If you do not do this, MMF2
										// could confuse your object with another in the event editor.

// ------------------------------
// DEFINITION OF CONDITIONS CODES
// ------------------------------
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

// ---------------------------
// DEFINITION OF ACTIONS CODES
// ---------------------------
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
#define	ACT_LAST 					13

// -------------------------------
// DEFINITION OF EXPRESSIONS CODES
// -------------------------------
#define EXP_LASTHAPTICNAME          0
#define EXP_LASTHAPTICINDEX         1
#define EXP_LASTERRORCODE           2
#define EXP_LASTERRORMESSAGE        3
#define	EXP_LAST 					4

// -------------------------------
// DEFINITION OF HAPTIC IDs
// -------------------------------
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

// -------------------------------
// DEFINITION OF ERROR CODES
// -------------------------------
#define ERR_IOS10_REQUIRED      0
#define ERR_IOS13_REQUIRED      1
#define ERR_OUT_OF_INDEX_RANGE  2

// ---------------------
// OBJECT DATA STRUCTURE 
// ---------------------
// Used at edit time and saved in the MFA/CCN/EXE files

typedef struct tagEDATA_V1
{
	// Header - required
	extHeader		eHeader;

	// Object's data
//	short			swidth;
//	short			sheight;

	signed char emulationMode;

	bool oobCheck;

} EDITDATA;
typedef EDITDATA *			LPEDATA;

// Object versions
#define	KCX_CURRENT_VERSION			1

// --------------------------------
// RUNNING OBJECT DATA STRUCTURE
// --------------------------------
// Used at runtime. Initialize it in the CreateRunObject function.
// Free any allocated memory or object in the DestroyRunObject function.
//
// Note: if you store C++ objects in this structure and do not store 
// them as pointers, you must call yourself their constructor in the
// CreateRunObject function and their destructor in the DestroyRunObject
// function. As the RUNDATA structure is a simple C structure and not a C++ object.

typedef struct tagRDATA
{
	// Main header - required
	headerObject	rHo;					// Header

	// Optional headers - depend on the OEFLAGS value, see documentation and examples for more info
//	rCom			rc;				// Common structure for movements & animations
//	rMvt			rm;				// Movements
//	rSpr			rs;				// Sprite (displayable objects)
	rVal			rv;				// Alterable values

	// Object's runtime data
	bool clampExp;

    TCHAR* lastHapticName;
    int lastHapticIndex;

    int lastErrorCode;
    TCHAR* lastErrorMessage;

} RUNDATA;
typedef	RUNDATA	*			LPRDATA;

// Size when editing the object under level editor
// -----------------------------------------------
#define	MAX_EDITSIZE			sizeof(EDITDATA)

// Default flags - see documentation for more info
// -------------
#define	OEFLAGS      			OEFLAG_VALUES
#define	OEPREFS      			0


// If to handle message, specify the priority of the handling procedure
// 0= low, 255= very high. You should use 100 as normal.                                                
// --------------------------------------------------------------------
#define	WINDOWPROC_PRIORITY		100
