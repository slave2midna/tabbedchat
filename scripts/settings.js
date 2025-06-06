export function registerSettings() {
  game.settings.register('tabbed-chatlog', 'oocWebhook', {
    name: game.i18n.localize("TC.SETTINGS.OocWebhookName"),
    hint: game.i18n.localize("TC.SETTINGS.OocWebhookHint"),
    scope: 'world',
    config: true,
    default: '',
    type: String,
  });

  game.settings.register('tabbed-chatlog', 'icBackupWebhook', {
    name: game.i18n.localize("TC.SETTINGS.IcFallbackWebhookName"),
    hint: game.i18n.localize("TC.SETTINGS.IcFallbackWebhookHint"),
    scope: 'world',
    config: true,
    default: '',
    type: String,
  });

  game.settings.register('tabbed-chatlog', 'icChatInOoc', {
    name: game.i18n.localize("TC.SETTINGS.IcChatInOocName"),
    hint: game.i18n.localize("TC.SETTINGS.IcChatInOocHint"),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register('tabbed-chatlog', 'hideInStreamView', {
    name: game.i18n.localize("TC.SETTINGS.HideInStreamViewName"),
    hint: game.i18n.localize("TC.SETTINGS.HideInStreamViewHint"),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register('tabbed-chatlog', 'perScene', {
    name: game.i18n.localize("TC.SETTINGS.PerSceneName"),
    hint: game.i18n.localize("TC.SETTINGS.PerSceneHint"),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register('tabbed-chatlog', 'icWhispers', {
    name: game.i18n.localize("TC.SETTINGS.IcWhispersName"),
    hint: game.i18n.localize("TC.SETTINGS.IcWhispersHint"),
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register('tabbed-chatlog', 'autoNavigate', {
    name: game.i18n.localize("TC.SETTINGS.AutoNavigateName"),
    hint: game.i18n.localize("TC.SETTINGS.AutoNavigateHint"),
    scope: 'client',
    config: true,
    default: false,
    type: Boolean,
  });
}
