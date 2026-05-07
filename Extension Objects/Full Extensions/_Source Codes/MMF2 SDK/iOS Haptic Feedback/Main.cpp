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
			// No conditions
			0
		};

// Definitions of parameters for each action
short actionsInfos[]=
		{
		IDMN_ACT_VIBRATELEGACY, M_ACT_VIBRATELEGACY, ACT_VIBRATELEGACY, 0, 0,
		IDMN_ACT_LIGHTHAPTIC, M_ACT_LIGHTHAPTIC, ACT_LIGHTHAPTIC, 0, 0,
		IDMN_ACT_MEDIUMHAPTIC, M_ACT_MEDIUMHAPTIC, ACT_MEDIUMHAPTIC, 0, 0,
		IDMN_ACT_HEAVYHAPTIC, M_ACT_HEAVYHAPTIC, ACT_HEAVYHAPTIC, 0, 0
		};

// Definitions of parameters for each expression
short expressionsInfos[]=
		{
			// No expressions
			0
		};



// ============================================================================
//
// CONDITION ROUTINES
// 
// ============================================================================

// No conditions

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

// ============================================================================
//
// EXPRESSIONS ROUTINES
// 
// ============================================================================

// No expressions

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
			0
			};
	
short (WINAPI * ActionJumps[])(LPRDATA rdPtr, long param1, long param2) =
			{
			PerformLegacyVibration,
			PerformLightHaptic,
			PerformMediumHaptic,
			PerformHeavyHaptic,
			0
			};

long (WINAPI * ExpressionJumps[])(LPRDATA rdPtr, long param) = 
			{     
			0
			};