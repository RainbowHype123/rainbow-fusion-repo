// rSDK demonstration release - www.aquadasoft.com
// Jamie McLaughlin and Jean Villy Edberg

// Send any queries or bug reports to support@aquadasoft.com

// --------------------------------
// Condition menu
// --------------------------------

//#error CONDITION_MENU section reached
#ifdef CONDITION_MENU

	SEPARATOR
	ITEM(0, "Compare to Value")
	ITEM(1, "Compare to String")
	SEPARATOR

#endif

// --------------------------------
// Action menu
// --------------------------------

#ifdef ACTION_MENU

	SEPARATOR
	ITEM(0,"Set Value")
	ITEM(1,"Spread Value")
	ITEM(2,"Set String")
	SEPARATOR

#endif


// --------------------------------
// Expression menu
// --------------------------------

#ifdef EXPRESSION_MENU

	SEPARATOR
	ITEM(0,"Get Value")
	ITEM(1,"Get String")
	SEPARATOR

#endif