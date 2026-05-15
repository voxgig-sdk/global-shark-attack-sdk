<?php
declare(strict_types=1);

// GlobalSharkAttack SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GlobalSharkAttackFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GlobalSharkAttackBaseFeature();
            case "test":
                return new GlobalSharkAttackTestFeature();
            default:
                return new GlobalSharkAttackBaseFeature();
        }
    }
}
