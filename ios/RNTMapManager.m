//
//  RNTMapManager.m
//  DouBanDemo
//
//  Created by wenpeifang on 2017/8/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"

@implementation RNTMapManager
RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)
- (UIView *)view
{
  return [[MKMapView alloc] init];
}


@end
