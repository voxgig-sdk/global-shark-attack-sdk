<?php
declare(strict_types=1);

// GlobalSharkAttack SDK base feature

class GlobalSharkAttackBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GlobalSharkAttackContext $ctx, array $options): void {}
    public function PostConstruct(GlobalSharkAttackContext $ctx): void {}
    public function PostConstructEntity(GlobalSharkAttackContext $ctx): void {}
    public function SetData(GlobalSharkAttackContext $ctx): void {}
    public function GetData(GlobalSharkAttackContext $ctx): void {}
    public function GetMatch(GlobalSharkAttackContext $ctx): void {}
    public function SetMatch(GlobalSharkAttackContext $ctx): void {}
    public function PrePoint(GlobalSharkAttackContext $ctx): void {}
    public function PreSpec(GlobalSharkAttackContext $ctx): void {}
    public function PreRequest(GlobalSharkAttackContext $ctx): void {}
    public function PreResponse(GlobalSharkAttackContext $ctx): void {}
    public function PreResult(GlobalSharkAttackContext $ctx): void {}
    public function PreDone(GlobalSharkAttackContext $ctx): void {}
    public function PreUnexpected(GlobalSharkAttackContext $ctx): void {}
}
