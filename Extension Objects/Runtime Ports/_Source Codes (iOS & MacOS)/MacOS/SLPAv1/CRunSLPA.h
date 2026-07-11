//
//  CRunSLPA.h
//
//  Created by azarl on 2019/11/11.
//  Copyright © 2019年 Clickteam. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreGraphics/CoreGraphics.h>
#import <AppKit/AppKit.h>

@class CCreateObjectInfo;
@class CActExtension;
@class CCndExtension;
@class CValue;
@class CRCom;
@class CSprite;
@class CObject;

#define DEF_BLOCK_SIZE 4

@interface CRunSLPA : CRunExtension<NSStreamDelegate> {
@public
    int Active_Check;
    int BackDrop_Check;
    int block_size;
    int area_w, area_h;
    int max_x, max_y, max_z;
    class FadeAreaList{
    public:
        NSMutableArray *lq;
    };
    FadeAreaList *a_map;
    int fade_size;
    int old_block_x, old_block_y;
    NSMutableDictionary *fixed_map;
    NSMutableArray *phin_fixed_list;
    NSMutableArray *phchange_fixed_list;
    short *oinum_tbl;
    CSprite **cash_spr_lay;
    CValue *expRet;
}
// エクステンション基本ゲート部分 ----
-(int)getNumberOfConditions;
-(BOOL)createRunObject:(CFile*)file withCOB:(CCreateObjectInfo*)cob andVersion:(int)version;
-(int)handleRunObject;
-(void)displayRunObject:(CRenderer *)renderer;
-(void)destroyRunObject:(BOOL)bFast;

-(BOOL)condition:(int)num withCndExtension:(CCndExtension*)cnd;
-(void)action:(int)num withActExtension:(CActExtension*)act;
-(CValue*)expression:(int)num;
// ------------------------------
// CF25
//-(void)addParams:(NSMutableArray*)list name:(NSString *)name val:(float)val weight:(float)weight;

//-(void)SetFixed:(int)fixed ;
//-(void)UpdateActionPoint ;
-(void)PhaseOut_RECT:(int)left top:(int)top right:(int)right bottom:(int)bottom ; // 保留
-(void)PhaseIN_map:(int)map_x map_y:(int)map_y; // 保留
-(void)PhaseIN_ALL;
-(void)PhaseIn_ALL;
-(void)autoPhaseExecute;
-(void)addFixedValueMap:(CObject*)obj val:(short)val; // PARAM_OBJECTはない
-(void)phaseOutAct;
-(void)phaseInAct;
-(void)PhaseIn_map:(int)x y:(int)y z:(int)z destroy:(BOOL)destroy;
-(short)getNullPos:(short)offset;
-(void)PhaseOutRect:(int)left top:(int)top right:(int)right bottom:(int)bottom;
-(void)oi_Delete:(CObject*)pHo;
-(void)oi_Insert:(CObject*)pHo;
-(void)ChangePixedValue;
-(void)winFreeSprite:(CSprite*)spr;
-(void)linkLastSprite:(CSprite*)spr layer:(int)layer;
-(CSprite*)GetFirstSprite_EX:(int)nLayer dwFlags:(int)dwFlags;


@end

