<?php
declare(strict_types=1);

// GlobalSharkAttack SDK utility: result_body

class GlobalSharkAttackResultBody
{
    public static function call(GlobalSharkAttackContext $ctx): ?GlobalSharkAttackResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
