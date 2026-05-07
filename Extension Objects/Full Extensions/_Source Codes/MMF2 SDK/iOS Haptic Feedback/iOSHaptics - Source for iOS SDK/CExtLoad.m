//----------------------------------------------------------------------------------
//
// CEXTLOAD Chargement des extensions
//
//----------------------------------------------------------------------------------
#import "CExtLoad.h"
#import "CFile.h"
#import "CRunExtension.h"

//F01
#import "CRunKcArray.h"
#import "CRunActiveBackdrop.h"
#import "CRunAdvGameBoard.h"
#import "CRunAdvPathMov.h"
#import "CRunCalcRect.h"
#import "CRunIIF.h"
#import "CRunInAndOutController.h"
#import "CRunkcdirect.h"
#import "CRunLayer.h"
#import "CRunMoveSafely2.h"
#import "CRunPlatform.h"
#import "CRunclickteam_movement_controller.h"
#import "CRunKcBoxA.h"
#import "CRunKcBoxB.h"
#import "CRunAccelerometer.h"
#import "CRunLocation.h"
#import "CRunkcini.h"
#import "CRunMultipleTouch.h"
#import "CRuniOSButton.h"
#import "CRuniOSSingleEdit.h"
#import "CRuniOSMultipleEdit.h"
#import "CRunJoystickControl.h"
#import "CRunAdvDir.h"
#import "CRunkcclock.h"
#import "CRunkchisc.h"
#import "CRunkcrandom.h"
#import "CRunObjectMover.h"
#import "CRunWargameMap.h"
#import "CRunparser.h"
#import "CRunMTRandom.h"
#import "CRunGet.h"
#import "CRunkclist.h"
#import "CRunkcinput.h"
#import "CRuniOSStore.h"
#import "CRunStringTokenizer.h"
#import "CRunMoveIt.h"
#import "CRunEasing.h"
#import "CRunkcedit.h"
#import "CRuniOS.h"
#import "CRunkcbutton.h"
#import "CRunCamera.h"
#import "CRunGameCenterConnect.h"
#import "CRunGameCenterLeaderboard.h"
#import "CRunGameCenterAchievements.h"
#import "CRunGameCenterAchievement.h"
#import "CRunGameCenterMultiplayer.h"

// My extensions
#import "CRuniOSHaptics.h"

//F01END

@implementation CExtLoad

-(void)dealloc
{
	[name release];
	[subType release];
	[super dealloc];
}
-(void)loadInfo:(CFile*)file
{
	int debut = [file getFilePointer];
	
	short size = [file readAShort];
	handle = [file readAShort];
	[file skipBytes:12];
	
	name = [file readAString];
	NSRange index = [name rangeOfString:@"."];
	if (index.location!=NSNotFound)
	{
		NSString* temp=[name substringToIndex:index.location];
		[name release];
		name=temp;
		[name retain];
	}
	subType = [file readAString];
	
	[file seek:debut + size];
}

-(CRunExtension*)loadRunObject 
{
	CRunExtension* object=nil;
	
//F02 			
	if ([name caseInsensitiveCompare:@"kcarray"]==0)
	{
		object=[[CRunKcArray alloc] init];
	}
	if ([name caseInsensitiveCompare:@"ActiveBackdrop"]==0)
	{
		object=[[CRunActiveBackdrop alloc] init];
	}
	if ([name caseInsensitiveCompare:@"AdvGameBoard"]==0)
	{
		object=[[CRunAdvGameBoard alloc] init];
	}
	if ([name caseInsensitiveCompare:@"AdvPathMov"]==0)
	{
		object=[[CRunAdvPathMov alloc] init];
	}
	if ([name caseInsensitiveCompare:@"CalcRect"]==0)
	{
		object=[[CRunCalcRect alloc] init];
	}
	if ([name caseInsensitiveCompare:@"IIF"]==0)
	{
		object=[[CRunIIF alloc] init];
	}
	if ([name caseInsensitiveCompare:@"InAndOutController"]==0)
	{
		object=[[CRunInAndOutController alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kcdirect"]==0)
	{
		object=[[CRunkcdirect alloc] init];
	}
	if ([name caseInsensitiveCompare:@"Layer"]==0)
	{
		object=[[CRunLayer alloc] init];
	}
	if ([name caseInsensitiveCompare:@"MoveSafely2"]==0)
	{
		object=[[CRunMoveSafely2 alloc] init];
	}
	if ([name caseInsensitiveCompare:@"Platform"]==0)
	{
		object=[[CRunPlatform alloc] init];
	}
	if ([name caseInsensitiveCompare:@"clickteam-movement-controller"]==0)
	{
		object=[[CRunclickteam_movement_controller alloc] init];
	}
	if ([name caseInsensitiveCompare:@"KcBoxA"]==0)
	{
		object=[[CRunKcBoxA alloc] init];
	}
	if ([name caseInsensitiveCompare:@"KcBoxB"]==0)
	{
		object=[[CRunKcBoxB alloc] init];
	}
	if ([name caseInsensitiveCompare:@"Accelerometer"]==0)
	{
		object=[[CRunAccelerometer alloc] init];
	}
	if ([name caseInsensitiveCompare:@"Location"]==0)
	{
		object=[[CRunLocation alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kcini"]==0)
	{
		object=[[CRunkcini alloc] init];
	}
	if ([name caseInsensitiveCompare:@"MultipleTouch"]==0)
	{
		object=[[CRunMultipleTouch alloc] init];
	}
	if ([name caseInsensitiveCompare:@"iOSButton"]==0)
	{
		object=[[CRuniOSButton alloc] init];
	}
	if ([name caseInsensitiveCompare:@"iOSSingleEdit"]==0)
	{
		object=[[CRuniOSSingleEdit alloc] init];
	}
	if ([name caseInsensitiveCompare:@"iOSMultipleEdit"]==0)
	{
		object=[[CRuniOSMultipleEdit alloc] init];
	}
	if ([name caseInsensitiveCompare:@"AdvDir"]==0)
	{
		object=[[CRunAdvDir alloc] init];
	}
	if ([name caseInsensitiveCompare:@"JoystickControl"]==0)
	{
		object=[[CRunJoystickControl alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kcclock"]==0)
	{
		object=[[CRunkcclock alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kchisc"]==0)
	{
		object=[[CRunkchisc alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kcrandom"]==0)
	{
		object=[[CRunkcrandom alloc] init];
	}
	if ([name caseInsensitiveCompare:@"ObjectMover"]==0)
	{
		object=[[CRunObjectMover alloc] init];
	}
	if ([name caseInsensitiveCompare:@"WargameMap"]==0)
	{
		object=[[CRunWargameMap alloc] init];
	}
	if ([name caseInsensitiveCompare:@"parse"]==0)
	{
		object=[[CRunparser alloc] init];
	}
	if ([name caseInsensitiveCompare:@"MTRandom"]==0)
	{
		object=[[CRunMTRandom alloc] init];
	}
	if ([name caseInsensitiveCompare:@"parser"]==0)
	{
		object=[[CRunparser alloc] init];
	}
	if ([name caseInsensitiveCompare:@"get"]==0)
	{
		object=[[CRunGet alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kclist"]==0)
	{
		object=[[CRunkclist alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kcinput"]==0)
	{
		object=[[CRunkcinput alloc] init];
	}
	if ([name caseInsensitiveCompare:@"iOSStore"]==0)
	{
		object=[[CRuniOSStore alloc] init];
	}	
	if ([name caseInsensitiveCompare:@"StringTokenizer"]==0)
	{
		object=[[CRunStringTokenizer alloc] init];
	}
	if ([name caseInsensitiveCompare:@"MoveIt"]==0)
	{
		object=[[CRunMoveIt alloc] init];
	}
	if ([name caseInsensitiveCompare:@"Easing"]==0)
	{
		object=[[CRunEasing alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kcedit"]==0)
	{
		object=[[CRunkcedit alloc] init];
	}
	if ([name caseInsensitiveCompare:@"iOS"]==0)
	{
		object=[[CRuniOS alloc] init];
	}
	if ([name caseInsensitiveCompare:@"kcbutton"]==0)
	{
		object=[[CRunkcbutton alloc] init];
	}
	if ([name caseInsensitiveCompare:@"Camera"]==0)
	{
		object=[[CRunCamera alloc] init];
	}
	if ([name caseInsensitiveCompare:@"GameCenterConnect"]==0)
	{
		object=[[CRunGameCenterConnect alloc] init];
	}
	if ([name caseInsensitiveCompare:@"GameCenterLeaderboard"]==0)
	{
		object=[[CRunGameCenterLeaderboard alloc] init];
	}
	if ([name caseInsensitiveCompare:@"GameCenterAchievements"]==0)
	{
		object=[[CRunGameCenterAchievements alloc] init];
	}
	if ([name caseInsensitiveCompare:@"GameCenterAchievement"]==0)
	{
		object=[[CRunGameCenterAchievement alloc] init];
	}
	if ([name caseInsensitiveCompare:@"GameCenterMultiplayer"]==0)
	{
		object=[[CRunGameCenterMultiplayer alloc] init];
	}

	// My extensions
	if ([name caseInsensitiveCompare:@"iOSHaptics"]==0)
	{
		object=[[CRuniOSHaptics alloc] init];
	}
	
	//F02END	
	
	return object;
}

@end
