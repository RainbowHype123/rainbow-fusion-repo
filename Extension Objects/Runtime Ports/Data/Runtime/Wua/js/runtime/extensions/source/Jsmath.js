//----------------------------------------------------------------------------------
//
// CRunJsmath.js V 1.18 Gigatron 2022 Js math library 
// Clickteam Fusion 2.5 HTML5 runtime extension template
//
//----------------------------------------------------------------------------------
/* Copyright (c) 1996-2014 Clickteam
*
* This source code is part of the HTML5 exporter for Clickteam Fusion 2.5
* 
* Permission is hereby granted to any person obtaining a legal copy 
* of Clickteam Fusion 2.5 to use or modify this source code for 
* debugging, optimizing, or customizing applications created with 
* Clickteam Fusion 2.5. 
* Any other use of this source code is prohibited.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
* IN THE SOFTWARE.
*/

// Definition of the conditions, actions and expressions codes.
// ---------------------------------------------------------------
// This list must be identical to the list defined in the C version
// of your extension.
CRunJsmath.CND_CONDITION  = 0;
CRunJsmath.CND_LAST       = 1;

CRunJsmath.ACT_DUMMY = 0;
CRunJsmath.ACT_DUMMY2 = 1;
 
CRunJsmath.EXP_GET_ACOS		 = 0;
CRunJsmath.EXP_GET_ACOSH	 = 1;	
CRunJsmath.EXP_GET_ASIN      = 2;
CRunJsmath.EXP_GET_ASINH	 = 3; 	
CRunJsmath.EXP_GET_ATAN2     = 4; 
CRunJsmath.EXP_GET_CBROOT    = 5;
CRunJsmath.EXP_GET_CEIL      = 6;
CRunJsmath.EXP_GET_COSH      = 7;
CRunJsmath.EXP_GET_POW       = 8;
CRunJsmath.EXP_GET_PRECISION = 9;
CRunJsmath.EXP_GET_CHOOSE    = 10;
CRunJsmath.EXP_GET_RANDOM    = 11; 

CRunJsmath.EXP_LAST	         = 12; 
 

// Constructor of the object.
// ----------------------------------------------------------------
// Called during the creation process of the object, but before any 
// initialization. You may want (although you can do it in CreateRunObject), 
// to instantiate variables.
function CRunJsmath()
{
    // this.myVariable = 0;
    // this.anObject = null;
}

// Prototype definition
// -----------------------------------------------------------------
// This class is a sub-class of CRunExtension, by the mean of the 
// CServices.extend function which copies all the properties of 
// the parent class to the new class when it is created.
// As all the necessary functions are defined in the parent class,
// you only need to keep the ones that you actually need in your code.
CRunJsmath.prototype = 
{
    // Returns the number of conditions
    // --------------------------------------------------------------------
    // Warning, if this number is not correct, the application _will_ crash
    getNumberOfConditions:function()
    {
        return CRunJsmath.CND_LAST;
    },                                              // Don't forget the comma between each function
	
    // Creation of the object
    // --------------------------------------------------------------------
    // - file : a CFile object, pointing to the object's data zone
    // - cob : a CCreateObjectInfo containing infos about the created object
    // - version : the version number of the object, as defined in the C code
    createRunObject:function(file, cob, version)
    {
        // Use the "file" parameter to call the CFile object, and 
        // gather the data of the object in the order as they were saved
        // (same order as the definition of the data in the EDITDATA structure
        // of the C code).
        // Examples :
        // this.myIntegerValue = file.readAInt();   Reads 4 bytes as a signed number
        // this.myShortValue = file.readAShort();   Reads 2 bytes as a unsigned number
        // this.myString = file.readAString();      Reads a string, ending by 0
        // this.myString = file.readAString(size);  Reads a string out of a given sized buffer
        //                                            - The string can end before the end of the buffer with a 0
        //                                            - If the string is as long as the buffer, it does not 
        //                                              need to end by a 0
        //                                            > Whatever happens, this function will always position the file
        //                                              at the end of the buffer upon exit
        // this.myString = file.readAStringEOL();   Reads a string until a CR or a CR/LF (works with both)
        // this.myColor = file.readAColor();        Reads a RGB value
        // file.skipBytes(number);                  Skips a number of bytes in the file
        // Please report to the documentation for more information on the CFile object

        // The return value is not used in this version of the runtime but maybe later.
        // So please return false;
        return false;
    },
	
    // Handling of the object
    // ---------------------------------------------------------------------
    // This function is called at every loop of the game. You have to perform 
    // in it all the tasks necessary for your object to function.
    // Return values:
    //    - 0 : this function will be called during the next loop
    //    - CRunExtension.REFLAG_ONESHOT : this function will not be called anymore
    //      In this case, call the this.reHandle(); function of the base class 
    //      to have it called again.
    handleRunObject: function()
    {
        return 0;       // The object will be called next loop
    },
    
    // Destruction of the object
    // ---------------------------------------------------------------
    // Called when the object is actually destroyed. This will always be
    // after the main game loop, and out of the actions processing : the 
    // destroy process is queued until the very end of the game loop.
    destroyRunObject: function(bFast)
    {
    },

    // Displays the object
    // ----------------------------------------------------------------
    // Called when the object needs to be displayed in the browser.
    //    - renderer : the Renderer object which will draw the object
    //    - xDraw : an offset to add to every X coordinate for display
    //    - yDraw : an offset to add to every Y coordinate for display
    // This function will only be called if the object's flags in the C code
    // indicate that this is a displayable object (OEFLAG_SPRITE)
    displayRunObject:function(renderer, xDraw, yDraw)
    {
        // Example of display of an image, taking the layer and frame position
        // into account
        // var x = this.ho.hoX - this.rh.rhWindowX + this.ho.pLayer.x + xDraw;
        // var y = this.ho.hoY - this.rh.rhWindowY + this.ho.pLayer.y + yDraw;
        // renderer.renderSimpleImage(this.image, x, y, this.image.width, this.image.height, 0, 0);
    },

    // Put the object into pause
    // ----------------------------------------------------------------
    // Called when the game enters pause mode.
    pauseRunObject: function ()
    {
    },

    // Get the object out of pause mode
    // -----------------------------------------------------------------
    // Called when the game quits pause mode.
    continueRunObject: function ()
    {
    },

    // Returns the current font of the object
    // -----------------------------------------------------------------
    // Return value:
    //    The CFontInfo object of the current font used by the object
    // Only called for objects who have a OEFLAG_TEXT flag defined
    getRunObjectFont: function()
    {
        return null;
    },

    // Sets the current font of the object
    // ------------------------------------------------------------------
    //    - font : a CFontInfo object containing the font to set
    //    - rc : null, or a CRect object containing the new size of the object
    //           it it has to be resized while changing the font
    setRunObjectFont: function(font, rc)
    {
    },

    // Gets the current color of the text
    // ------------------------------------------------------------------
    // Return value :
    //     A RGB value containing the current color of the font used by the object
    getRunObjectTextColor: function()
    {
        return 0;
    },

    // Sets the current color of the text
    // ------------------------------------------------------------------
    //     - color : the new color to use to display the text
    setRunObjectTextColor: function(color)
    {
    },

    // Condition entry
    // -----------------------------------------------------------------
    // Called when a condition of this object is evaluated
    //    - num : the number of the condition, as defined on top of this source
    //    - cnd : a CCndExtension object, allowing you to retreive the parameters
    //            of the condition
    // Return value :
    //    true or false
    condition:function(num, cnd)
    {
        // You usually do a switch statement from the "num" parameter
        switch (num)
        {
            // Dummy condition : true if the parameter is equal to 0
            case CRunJsmath.CND_DUMMY:
                var parameter = cnd.getParamExpression(this.rh, 0);
                return (parameter == 0);

            // Dummy condition. Example of a condition called from within the object
            // by an action. Returns true if the parameter of the action is 
            // equal to the parameter of the condition.
            case CRunJsmath.CND_DUMMY2:
                var string = cnd.getParamExpString(this.rh, 0);
                var fromAction = this.rh.rhEvtProg.rhCurParam0;
                if (string == fromAction)
                    return true;
                break;
        }
        return false;
    },
    
    // Action entry
    // --------------------------------------------------------------
    // Called when an action of this object is executed
    //   - num : number of the action, as defined in the list on top of this source
    //   - act : a CActExtension object, allowing you to retreive the parameters
    //           of the action
    action:function(num, act)
    {   
        switch (num)
        {
            // Dummy action : changes the position of the object
            case CRunJsmath.ACT_DUMMY:
                var x = act.getParamExpression(this.rh, 0);
                var y = act.getParamExpression(this.rh, 1);
                this.setPosition(x, y);
                break;

            // Dummy action : calls the CND_DUMMY2 condition of this object
            case CRunJsmath.ACT_DUMMY2:
                var string = act.getParamExpString(this.rh, 0);
                this.generateEvent(CRunJsmath.CND_DUMMY2, string);
                break;
        }
    },

    // Expression entry
    // ------------------------------------------------------------------
    // Called during the evaluation of an expression.
    //    - num : the number of the expression, as defined on top of this source.
    // Note that it is important that your expression function asks for 
    // each and every one of the parameters of the function, each time it is 
    // called. The runtime will crash if you miss parameters.
    // Return value :
    //    - The result of the calculation, a number or a string
    expression: function(num)
    {
        switch (num)
        {
			    case CRunJsmath.EXP_GET_ACOS:
                var p1 = this.ho.getExpParam();     // Get first parameter
				if (p1>1.0 || p1<-1.0)  {window.alert("X must between -1.0, 1.0"); return "NaN";}
				else				 
                return Math.acos(p1);
          
		       case CRunJsmath.EXP_GET_ACOSH:
			   var p1 = this.ho.getExpParam();
			   return Math.acosh(p1);
			   	   
			   case CRunJsmath.EXP_GET_ASIN:  
			    var p1 = this.ho.getExpParam();
			   return Math.asin(p1);
			   
			   case CRunJsmath.EXP_GET_ASINH:
			    var p1 = this.ho.getExpParam();
			   return Math.asinh(p1);
			   
			   case CRunJsmath.EXP_GET_ATAN2:
				 var p1 = this.ho.getExpParam();
				 var p2 = this.ho.getExpParam();
			   return Math.atan2(p1, p2);;
			   
			   case CRunJsmath.EXP_GET_CBROOT:
			     var p1 = this.ho.getExpParam();
			       return Math.cbrt(p1);
			   
			   case CRunJsmath.EXP_GET_CEIL:
				  var p1 = this.ho.getExpParam();
			      return Math.ceil(p1);

			   
		       case CRunJsmath.EXP_GET_COSH:
                var p1 = this.ho.getExpParam();
			      return Math.cosh(p1);

				case CRunJsmath.EXP_GET_POW:
                var p1 = this.ho.getExpParam();
				var p2 = this.ho.getExpParam();
			       return Math.pow(p1,p2);			
		  
		  
                case CRunJsmath.EXP_GET_PRECISION:
                var p1 = this.ho.getExpParam();
				var p2 = this.ho.getExpParam();
                return p1.toPrecision(p2);
				
				case CRunJsmath.EXP_GET_CHOOSE:
		        var tb = this.ho.getExpParam();
				var b = tb.split(',').map(function(nb) {
					return parseInt(nb, 10);
				});
 	  			var result = Math.floor(Math.random() * (b.length - 1));
  				return b[result+1].toString();
			 
				case CRunJsmath.EXP_GET_RANDOM:
				var pick_num    = this.ho.getExpParam();
				var max_num     = this.ho.getExpParam();
				var min_num     = this.ho.getExpParam();
				
				var res_array = new Array;
                var res =0;
				if (!min_num)        min_num = 1;  
				var nombreMaxTirages = max_num - min_num +1;
				if (pick_num > nombreMaxTirages)           pick_num = nombreMaxTirages;  
				 for (i=0; i < pick_num ;i++){
						 res = Math.floor(Math.random() * max_num)+1;
						
						 if (res >= min_num){
								 res_array[i]= res;
						   
								 for (t=0 ; t < i ;t++){
										 if (res_array[t]==res){  
												 i--;
										 }
								 }
								 
						 }
						 else i--;
					
				 }
				 return res_array;
											
         
        }
        return 0;
    }                                                   // No comma for the last function : the Google compiler
                                                        // we use for final projects does not accept it
};

// You are perfectly free to define any new class or global function in this code.
// Avoid using generic names, as they may clash with future extensions. The best 
// option is to have a prefix specific to your name or object, inserted before the 
// name of the class or functions.

var intToHex = function (x) { 
  var hex = Number(x).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return "0x"+hex;
}

CServices.extend(CRunExtension, CRunJsmath);