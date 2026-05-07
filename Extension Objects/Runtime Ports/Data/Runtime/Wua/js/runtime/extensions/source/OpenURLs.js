//----------------------------------------------------------------------------------
//
// CRunOpenURLs : OpenURLs Object
//
//----------------------------------------------------------------------------------
/* Copyright (c) 1996-2026 Clickteam
 *
 * This source code is part of the HTML5 exporter for Clickteam Multimedia Fusion 2.
 *
 * Permission is hereby granted to any person obtaining a legal copy
 * of Clickteam Multimedia Fusion 2 to use or modify this source code for
 * debugging, optimizing, or customizing applications created with
 * Clickteam Multimedia Fusion 2.
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

CRunOpenURLs.CND_LAST = 0;

CRunOpenURLs.ACT_OPENURL = 0;

function CRunOpenURLs()
{
	CRunExtension.call(this);
	this.parameters = null;
	this.ret = 0;
	this.bError = false;
}

CRunOpenURLs.prototype = 
	{
		getNumberOfConditions: function ()
		{
			return CRunOpenURLs.CND_LAST;
		},

		createRunObject: function (file, cob, version)
		{
			this.parameters = new Array();
			return true;
		},

		handleRunObject: function ()
		{
			return 0;
		},

		destroyRunObject: function (bFast)
		{
			
		},

		condition: function (num, cnd)
		{
			switch (num)
			{
				
            }
			return false;
		},

		action:           function (num, act)
		{
			switch (num)
			{
				case CRunOpenURLs.ACT_OPENURL:
					this.actOpenURL(act);
					break;
			}
		},

		actOpenURL:    function (act)
		{
			var url = act.getParamExpString(this.rh, 0);
            var uri = new Windows.Foundation.Uri(url);
			Windows.System.Launcher.launchUriAsync(uri);
		},

		actResetParams:     function ()
		{
			this.parameters = null;
		},

		expression:         function (num)
		{
			switch (num)
			{
				
			}
			return 0;
		}
		
	};

	CServices.extend(CRunExtension, CRunOpenURLs);