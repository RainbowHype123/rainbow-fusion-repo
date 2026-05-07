// commentor object - XNA port (All Platforms)
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RuntimeXNA.Extensions;
using RuntimeXNA.Services;
using RuntimeXNA.RunLoop;
using RuntimeXNA.Sprites;
using RuntimeXNA.Conditions;
using RuntimeXNA.Actions;
using RuntimeXNA.Expressions;
using RuntimeXNA.Objects;
using RuntimeXNA.Params;
using RuntimeXNA.Frame;
using RuntimeXNA.OI;
using RuntimeXNA.Movements;

namespace RuntimeXNA.Extensions
{
    class CRunAdvComment : CRunExtension
    {
        const int CND_COMMENT = 0;
        const int CND_OBJCOMMENT = 1;
        const int CND_TXTREGCOMMENT = 2;
        const int CND_TXTREGNOTE = 3;
        const int CND_TXTREGREMINDER = 4;
        const int CND_TXTREGIMPORTANT = 5;
        const int CND_TXTREGAAE = 6;
        const int CND_TXTCAPCOMMENT = 7;
        const int CND_TXTCAPNOTE = 8;
        const int CND_TXTCAPREMINDER = 9;
        const int CND_TXTCAPIMPORTANT = 10; // Huh, no CND_LAST

        const int ACT_COMMENT = 0;
        const int ACT_TXTREGCOMMENT = 1;
        const int ACT_TXTREGNOTE = 2;
        const int ACT_TXTREGREMINDER = 3;
        const int ACT_TXTREGIMPORTANT = 4;
        const int ACT_TXTREGAAA = 5;
        const int ACT_TXTREGAAB = 6;
        const int ACT_TXTCAPCOMMENT = 7;
        const int ACT_TXTCAPNOTE = 8;
        const int ACT_TXTCAPREMINDER = 9;
        const int ACT_TXTCAPIMPORTANT = 10;

        public override int getNumberOfConditions()
        {
            return 11;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            switch (num)
            {
                case CND_COMMENT:
					return true;
				case CND_OBJCOMMENT:
					return true;
				case CND_TXTREGCOMMENT:
					return true;
				case CND_TXTREGNOTE:
					return true;
				case CND_TXTREGREMINDER:
					return true;
				case CND_TXTREGIMPORTANT:
					return true;
				case CND_TXTREGAAE:
					return true;
				case CND_TXTCAPCOMMENT:
					return true;
				case CND_TXTCAPNOTE:
					return true;
				case CND_TXTCAPREMINDER:
					return true;
				case CND_TXTCAPIMPORTANT:
					return true;
            }
            return false;//won't happen
        }

        public override void action(int num, CActExtension act)
        {
            switch (num)
            {
                case ACT_COMMENT:
					break;
				case ACT_TXTREGCOMMENT:
					break;
				case ACT_TXTREGNOTE:
					break;
				case ACT_TXTREGREMINDER:
					break;
				case ACT_TXTREGIMPORTANT:
					break;
				case ACT_TXTREGAAA:
					break;
				case ACT_TXTREGAAB:
					break;
				case ACT_TXTCAPCOMMENT:
					break;
				case ACT_TXTCAPNOTE:
					break;
				case ACT_TXTCAPREMINDER:
					break;
				case ACT_TXTCAPIMPORTANT:
					break;
            }
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                // no expressions
            }
            return new CValue(0);// (Usually) won't be used
        }
    }
}
