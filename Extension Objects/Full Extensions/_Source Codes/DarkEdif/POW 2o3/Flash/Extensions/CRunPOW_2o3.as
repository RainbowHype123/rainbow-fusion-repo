//----------------------------------------------------------------------------------
//
// CRunPOW_2o3 : Advanced Comment Object
//
//----------------------------------------------------------------------------------

package Extensions
{
    import Actions.*;
	import Conditions.*;
	import Expressions.*;
	import Objects.CObject;
	import RunLoop.*;
	import Services.*;
	import Sprites.*;

    public class CRunPOW_2o3 extends CRunExtension
    {
		private static var CON_LAST:int = 0;

		private static var EXP_SQUAREPARAM:int = 0;
		private static var EXP_CUBEPARAM:int = 1;
        private static var EXP_POWFUNC:int = 2;
		
        public function CRunPOW_2o3()
        {

        }

        public override function getNumberOfConditions():int
        {
            return CON_LAST;
        }

        public override function createRunObject(file:CBinaryFile, cob:CCreateObjectInfo, version:int):Boolean
        {
			parameters=new CArrayList();
            return false;
        }
		
        public override function destroyRunObject(bFast:Boolean):void
        {

        }

        // Conditions
        // -------------------------------------------------
        public override function condition(num:int, cnd:CCndExtension):Boolean
        {
            return false;
        }

        // Actions
        // -------------------------------------------------
        public override function action(num:int, act:CActExtension):void
        {
            // No actions.
        }

        // Expressions
        // -------------------------------------------------
        public override function expression(num:int):CValue
        {
            switch (num)
            {
				case EXP_SQUAREPARAM:
                {
                	var BaseInput = ho.getExpParam().getInt();
                    
                    return new CValue(BaseInput * BaseInput);
                }
                case EXP_CUBEPARAM:
                {
                	var BaseInput = ho.getExpParam().getInt();
                    
                    return new CValue(BaseInput * BaseInput * BaseInput);
                }
            	case EXP_POWFUNC:
                {
                	var BaseInput = ho.getExpParam().getInt();
                    var ExponentInput = ho.getExpParam().getInt();
                    
                    return Math.pow(BaseInput, ExponentInput);
                }
            }
            return new CValue(0);
        }

    }
}
