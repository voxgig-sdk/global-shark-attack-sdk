<?php
declare(strict_types=1);

// GlobalSharkAttack SDK utility: feature_add

class GlobalSharkAttackFeatureAdd
{
    public static function call(GlobalSharkAttackContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
