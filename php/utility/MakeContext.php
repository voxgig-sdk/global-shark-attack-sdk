<?php
declare(strict_types=1);

// GlobalSharkAttack SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GlobalSharkAttackMakeContext
{
    public static function call(array $ctxmap, ?GlobalSharkAttackContext $basectx): GlobalSharkAttackContext
    {
        return new GlobalSharkAttackContext($ctxmap, $basectx);
    }
}
