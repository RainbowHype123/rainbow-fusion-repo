// Integer Split - XNA port (All Platforms)
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
    class CRunIntegerSplit : CRunExtension
    {
        //const int CND_LAST = 0;

        const int EXP_LOWORD = 0;
        const int EXP_HIWORD = 1;
        const int EXP_MAKELONG = 2;

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
            // No actions
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_LOWORD:
                {
					int value = ho.getExpParam().getInt();
                    
                    return value & 0xFFFF;
                }
                case EXP_HIWORD:
                {
					int value = ho.getExpParam().getInt();
                    
                    return (int)((uint)value >> 16);
                }
                case EXP_MAKELONG:
                {
					int low = ho.getExpParam().getInt();
                    int high = ho.getExpParam().getInt();
                    
                    return (low & 0xFFFF) | ((high & 0xFFFF) << 16);
                }
            }
            return new CValue(0);
        }
    }
}