<?php
declare(strict_types=1);

// GlobalSharkAttack SDK utility: result_headers

class GlobalSharkAttackResultHeaders
{
    public static function call(GlobalSharkAttackContext $ctx): ?GlobalSharkAttackResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
