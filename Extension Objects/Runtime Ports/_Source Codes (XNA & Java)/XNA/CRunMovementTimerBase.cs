// Movement Timer Base - XNA port (All Platforms)

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
    class CRunMovementTimerBase : CRunExtension
    {
        const int ACT_SETMOVEMENTTIMERBASE = 0;
        
        const int EXP_GETMOVEMENTTIMERBASE = 0;

        public override int getNumberOfConditions()
        {
            return 0;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            switch (num)
            {
                case ACT_SETMOVEMENTTIMERBASE:
                {
                    int timerBase = act.getParamExpression(rh, 0);
                    ho.hoAdRunHeader.rhFrame.m_dwMvtTimerBase = Math.Max(timerBase, 0);
                    break;
                }
            }
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_GETMOVEMENTTIMERBASE:
                    return new CValue(ho.hoAdRunHeader.rhFrame.m_dwMvtTimerBase);
            }
            return new CValue(0);
        }
    }
}