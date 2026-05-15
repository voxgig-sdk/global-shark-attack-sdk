<?php
declare(strict_types=1);

// GlobalSharkAttack SDK utility: prepare_body

class GlobalSharkAttackPrepareBody
{
    public static function call(GlobalSharkAttackContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
