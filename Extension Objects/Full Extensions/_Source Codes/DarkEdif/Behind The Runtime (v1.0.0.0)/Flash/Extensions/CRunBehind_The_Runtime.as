//----------------------------------------------------------------------------------
//
// CRunBehind_The_Runtime : Behind The Runtime
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

    public class CRunBehind_The_Runtime extends CRunExtension
    {
        private static var CON_COMMENT:int = 0;
    	private static var CON_COMMENTOBJ:int = 1;
		private static var CON_LAST:int = 2;

    	private static var ACT_COMMENT:int = 0;
    	private static var ACT_COMMENTOBJ:int = 1;

		private static var EXP_COMMENTSTR:int = 0;
		private static var EXP_COMMENTINT:int = 1;
		
        public function CRunBehind_The_Runtime()
        {

        }

        public override function getNumberOfConditions():int
        {
            return CON_LAST;
        }

        public override function createRunObject(file:CBinaryFile, cob:CCreateObjectInfo, version:int):Boolean
        {
            return false;
        }
		
        public override function destroyRunObject(bFast:Boolean):void
        {

        }

        // Conditions
        // -------------------------------------------------
        public override function condition(num:int, cnd:CCndExtension):Boolean
        {
			switch (num)
            {
            case CON_COMMENT:
                return true;
			case CON_COMMENTOBJ:
                return true;
            }
            return false;
        }

        // Actions
        // -------------------------------------------------
        public override function action(num:int, act:CActExtension):void
        {
            switch (num)
            {
            case ACT_COMMENT:
                break;
			case ACT_COMMENTOBJ:
                break;
            }
        }

        // Expressions
        // -------------------------------------------------
        public override function expression(num:int):CValue
        {
            switch (num)
            {
				case EXP_COMMENTSTR:
                	return new CValue(0);
            	case EXP_COMMENTINT:
                	return new CValue(0);
            }
            return new CValue(0);
        }

    }
}
