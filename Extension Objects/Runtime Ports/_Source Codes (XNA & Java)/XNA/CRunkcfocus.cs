// Window Focus Object - XNA port (All Platforms)
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
    class CRunkcfocus : CRunExtension
    {
        const int CND_HASFOCUS = 0;

        const int ACT_FLASHTASKBAR = 0;

        public override int getNumberOfConditions()
        {
            return 1;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            switch (num)
            {
                case CND_HASFOCUS:
                    return true; // This was literally all Clickteam wrote for this condition in the Window Control object
            }
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            switch (num)
            {
                case ACT_FLASHTASKBAR:
                    break; // Is this actually possible to support in XNA?
            }
        }

        public override CValue expression(int num)
        {
            return new CValue(0);
        }
    }
}