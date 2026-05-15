package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAnalyzeEntityFunc func(client *GlobalSharkAttackSDK, entopts map[string]any) GlobalSharkAttackEntity

var NewDownloadEntityFunc func(client *GlobalSharkAttackSDK, entopts map[string]any) GlobalSharkAttackEntity

var NewSearchEntityFunc func(client *GlobalSharkAttackSDK, entopts map[string]any) GlobalSharkAttackEntity

