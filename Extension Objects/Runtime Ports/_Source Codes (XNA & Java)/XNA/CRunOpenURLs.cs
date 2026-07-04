// OpenURLs - XNA port (Windows & Windows Phone)

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
    class CRunOpenURLs : CRunExtension
    {
        //const int CND_LAST = 0;
        
        const int ACT_OPENURL = 0;

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
                case ACT_OPENURL:
                {
                    string url = act.getParamExpression(rh, 0);

                    #if WINDOWS
                        Process.Start(url);
                    #elif WINDOWS_PHONE
                        WebBrowserTask browser = new WebBrowserTask();
                        browser.Uri = new Uri(url);
                        browser.Show();
                    #elif XBOX
                        // Xbox-specific implementation. (Idk how it would be implemented on Xbox.)
                    #endif
                    break;
                }
            }
        }

        public override CValue expression(int num)
        {
            return new CValue(0);
        }
    }
}
