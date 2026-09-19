// ============================================================================
//
// This file are where the Conditions/Actions/Expressions are defined.
// You can manually enter these, or use CICK (recommended)
// See the Extension FAQ in this SDK for more info and where to download it
//
// ============================================================================

// Common Include
#include	"common.h"

// Quick memo: content of the eventInformations arrays
// ---------------------------------------------------
// Menu ID
// String ID
// Code
// Flags
// Number_of_parameters
// Parameter_type [Number_of_parameters]
// Parameter_TitleString [Number_of_parameters]

// Definitions of parameters for each condition
short conditionsInfos[]=
        {
        IDMN_CND_ONLEGACYVIBRATE, M_CND_ONLEGACYVIBRATE, CND_ONLEGACYVIBRATE, 0, 0,
        IDMN_CND_ONLIGHTHAPTIC, M_CND_ONLIGHTHAPTIC, CND_ONLIGHTHAPTIC, 0, 0,
        IDMN_CND_ONMEDIUMHAPTIC, M_CND_ONMEDIUMHAPTIC, CND_ONMEDIUMHAPTIC, 0, 0,
        IDMN_CND_ONHEAVYHAPTIC, M_CND_ONHEAVYHAPTIC, CND_ONHEAVYHAPTIC, 0, 0,
        IDMN_CND_ONSOFTHAPTIC, M_CND_ONSOFTHAPTIC, CND_ONSOFTHAPTIC, 0, 0,
        IDMN_CND_ONRIGIDHAPTIC, M_CND_ONRIGIDHAPTIC, CND_ONRIGIDHAPTIC, 0, 0,
        IDMN_CND_ONSELECTIONHAPTIC, M_CND_ONSELECTIONHAPTIC, CND_ONSELECTIONHAPTIC, 0, 0,
        IDMN_CND_ONNOTIFSUCCESSHAPTIC, M_CND_ONNOTIFSUCCESSHAPTIC, CND_ONNOTIFSUCCESSHAPTIC, 0, 0,
        IDMN_CND_ONNOTIFWARNINGHAPTIC, M_CND_ONNOTIFWARNINGHAPTIC, CND_ONNOTIFWARNINGHAPTIC, 0, 0,
        IDMN_CND_ONNOTIFERRORHAPTIC, M_CND_ONNOTIFERRORHAPTIC, CND_ONNOTIFERRORHAPTIC, 0, 0,
        IDMN_CND_ONANYHAPTIC, M_CND_ONANYHAPTIC, CND_ONANYHAPTIC, 0, 0,
        IDMN_CND_ONERROR, M_CND_ONERROR, CND_ONERROR, 0, 0,
        IDMN_CND_AREADVHAPTICSUPPORTED, M_CND_AREADVHAPTICSUPPORTED, CND_AREADVHAPTICSUPPORTED, EVFLAGS_ALWAYS + EVFLAGS_NOTABLE, 0,
        IDMN_CND_ISEMULATINGHAPTICS, M_CND_ISEMULATINGHAPTICS, CND_ISEMULATINGHAPTICS, EVFLAGS_ALWAYS + EVFLAGS_NOTABLE, 0,
        0
        };

// Definitions of parameters for each action
short actionsInfos[]=
        {
        IDMN_ACT_LEGACYVIBRATE, M_ACT_LEGACYVIBRATE, ACT_LEGACYVIBRATE, 0, 0,
        IDMN_ACT_LIGHTHAPTIC, M_ACT_LIGHTHAPTIC, ACT_LIGHTHAPTIC, 0, 0,
        IDMN_ACT_MEDIUMHAPTIC, M_ACT_MEDIUMHAPTIC, ACT_MEDIUMHAPTIC, 0, 0,
        IDMN_ACT_HEAVYHAPTIC, M_ACT_HEAVYHAPTIC, ACT_HEAVYHAPTIC, 0, 0,
        IDMN_ACT_SOFTHAPTIC, M_ACT_SOFTHAPTIC, ACT_SOFTHAPTIC, 0, 0,
        IDMN_ACT_RIGIDHAPTIC, M_ACT_RIGIDHAPTIC, ACT_RIGIDHAPTIC, 0, 0,
        IDMN_ACT_SELECTIONHAPTIC, M_ACT_SELECTIONHAPTIC, ACT_SELECTIONHAPTIC, 0, 0,
        IDMN_ACT_NOTIFSUCCESSHAPTIC, M_ACT_NOTIFSUCCESSHAPTIC, ACT_NOTIFSUCCESSHAPTIC, 0, 0,
        IDMN_ACT_NOTIFWARNINGHAPTIC, M_ACT_NOTIFWARNINGHAPTIC, ACT_NOTIFWARNINGHAPTIC, 0, 0,
        IDMN_ACT_NOTIFERRORHAPTIC, M_ACT_NOTIFERRORHAPTIC, ACT_NOTIFERRORHAPTIC, 0, 0,
        IDMN_ACT_PLAYHAPTICBYEXP, M_ACT_PLAYHAPTICBYEXP, ACT_PLAYHAPTICBYEXP, 1, 0,
        IDMN_ACT_TOGGLEOUTOFRANGEERROR, M_ACT_TOGGLEOUTOFRANGEERROR, ACT_TOGGLEOUTOFRANGEERROR, 1, 0,
        IDMN_ACT_TOGGLEEMULATIONFLAG, M_ACT_TOGGLEEMULATIONFLAG, ACT_TOGGLEEMULATIONFLAG, 1, 0,
        0
        };

// Definitions of parameters for each expression
short expressionsInfos[]=
		{
		IDMN_EXPRESSION_LASTHAPTICNAME, M_EXPRESSION_LASTHAPTICNAME, EXP_LASTHAPTICNAME, EXPFLAG_STRING, 0,
		IDMN_EXPRESSION_LASTHAPTICINDEX, M_EXPRESSION_LASTHAPTICINDEX, EXP_LASTHAPTICINDEX, 0, 0,
		IDMN_EXPRESSION_LASTERRORCODE, M_EXPRESSION_LASTERRORCODE, EXP_LASTERRORCODE, 0, 0,
		IDMN_EXPRESSION_LASTERRORMESSAGE, M_EXPRESSION_LASTERRORMESSAGE, EXP_LASTERRORMESSAGE, EXPFLAG_STRING, 0,
		0
		};



// ============================================================================
//
// CONDITION ROUTINES
// 
// ============================================================================

long WINAPI DLLExport OnLegacyVibrate(LPRDATA rdPtr, long param1, long param2) {
	//return (GetProcessIDByName((LPCTSTR)param1) != 0) ? TRUE : FALSE;
	return 0;
}

long WINAPI DLLExport OnLightHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnMediumHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnHeavyHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnSoftHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnRigidHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnSelectionHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnNotifSuccessHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnNotifWarningHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnNotifErrorHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnAnyHaptic(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport OnError(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport AreAdvHapticsSupported(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

long WINAPI DLLExport IsEmulatingHaptics(LPRDATA rdPtr, long param1, long param2) {
	return 0;
}

// ============================================================================
//
// ACTIONS ROUTINES
// 
// ============================================================================

// Since this extension is meant specifically for iOS, it can be the equivilant of a commentor object on the Windows runtime.

short WINAPI DLLExport PerformLegacyVibration(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformLightHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformMediumHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformHeavyHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformSoftHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformRigidHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformSelectionHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformNotifSuccessHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformNotifWarningHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PerformNotifErrorHaptic(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport PlayHapticByExp(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport ToggleOutOfRangeError(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

short WINAPI DLLExport ToggleEmulationFlag(LPRDATA rdPtr, long param1, long param2)
{
	return 0;
}

// ============================================================================
//
// EXPRESSIONS ROUTINES
// 
// ============================================================================

// No expressions

long WINAPI DLLExport GetLastHapticName(LPRDATA rdPtr, long param1) {
	//return  rdPtr->Lock ? rdPtr->CurrentLockRect.left : 0;

	//Setting the HOF_STRING flag lets MMF know that you are a string.
	rdPtr->rHo.hoFlags |= HOF_STRING;
	return 0;
}

long WINAPI DLLExport GetLastHapticIndex(LPRDATA rdPtr, long param1) {
	return 0;
}

long WINAPI DLLExport GetLastErrorCode(LPRDATA rdPtr, long param1) {
	return 0;
}

long WINAPI DLLExport GetLastErrorMessage(LPRDATA rdPtr, long param1) {
	//Setting the HOF_STRING flag lets MMF know that you are a string.
	rdPtr->rHo.hoFlags |= HOF_STRING;
	return 0;
}

// ----------------------------------------------------------
// Condition / Action / Expression jump table
// ----------------------------------------------------------
// Contains the address inside the extension of the different
// routines that handle the action, conditions and expressions.
// Located at the end of the source for convinience
// Must finish with a 0
//
long (WINAPI * ConditionJumps[])(LPRDATA rdPtr, long param1, long param2) = 
			{
			OnLegacyVibrate,
			OnLightHaptic,
			OnMediumHaptic,
			OnHeavyHaptic,
			OnSoftHaptic,
			OnRigidHaptic,
			OnSelectionHaptic,
			OnNotifSuccessHaptic,
			OnNotifWarningHaptic,
			OnNotifErrorHaptic,
			OnAnyHaptic,
			OnError,
			AreAdvHapticsSupported,
			IsEmulatingHaptics,
			0
			};
	
short (WINAPI * ActionJumps[])(LPRDATA rdPtr, long param1, long param2) =
			{
			PerformLegacyVibration,
			PerformLightHaptic,
			PerformMediumHaptic,
			PerformHeavyHaptic,
			PerformSoftHaptic,
			PerformRigidHaptic,
			PerformSelectionHaptic,
			PerformNotifSuccessHaptic,
			PerformNotifWarningHaptic,
			PerformNotifErrorHaptic,
			PlayHapticByExp,
			ToggleOutOfRangeError,
			ToggleEmulationFlag,
			0
			};

long (WINAPI * ExpressionJumps[])(LPRDATA rdPtr, long param) = 
			{
			GetLastHapticName,
			GetLastHapticIndex,
			GetLastErrorCode,
			GetLastErrorMessage,
			0
			};