/**
 * voiceModel.js
 * ボイスボタン データ定義
 * ▼ ボタンを追加・カテゴリを追加する場合はこのファイルのみ変更してください
 *
 * 【ファイルの置き場所】
 *   voice.html と同じ階層に audio/ フォルダを作り、
 *   その中に .mp3 ファイルを入れてください。
 *
 *   例)  audio/anri_yoroshiku.mp3
 *
 * 【src の書き方】
 *   src: "audio/ファイル名.mp3"
 *
 * 【ファイルがまだない場合】
 *   src: "" のままにしておけばボタンは表示されます
 *   （クリックしても音は鳴りません）
 */

const VOICE_CATEGORIES = [
  {
    id: "anri",
    en: "Tossano Anri",
    jp: "トッサノ Anri",
    icon: "fa-solid fa-microphone",
    voices: [
      { id: "anri-01", label: "よろしくお願いします！",     src: "/audio/ジト目マヌカのUTANだよ～.wav" },
      { id: "anri-02", label: "えっ、マジで!?",             src: "/audio/ジト目マヌカのUTANだよ～.wav" },
      { id: "anri-03", label: "いや待って待って",            src: "/audio/ジト目マヌカのUTANだよ～.wav" },
      { id: "anri-04", label: "隅っこラジオ始まるよ〜",      src: "/audio/ジト目マヌカのUTANだよ～.wav" },
      { id: "anri-05", label: "そんなことある!?",            src: "/audio/ジト目マヌカのUTANだよ～.wav" },
      { id: "anri-06", label: "ありがとうございます！",      src: "/audio/ジト目マヌカのUTANだよ～.wav" },
    ]
  },
  {
    id: "majente",
    en: "Majente",
    jp: "まじぇんて",
    icon: "fa-solid fa-wine-glass",
    voices: [
      { id: "mj-01", label: "お酒飲みながら話しましょ",      src: "voice/majente_osake.mp3" },
      { id: "mj-02", label: "ほろ酔いですよ〜",              src: "voice/majente_horoyoi.mp3" },
      { id: "mj-03", label: "深い話しようか",                src: "voice/majente_fukai.mp3" },
      { id: "mj-04", label: "乾杯！",                        src: "voice/majente_kanpai.mp3" },
      { id: "mj-05", label: "それ分かる気がする",            src: "voice/majente_wakaru.mp3" },
    ]
  },
  {
    id: "eriri",
    en: "Eriri Eri",
    jp: "エリリ・エリ",
    icon: "fa-solid fa-shirt",
    voices: [
      { id: "er-01", label: "おしゃれ番長ですから！",        src: "voice/eriri_oshare.mp3" },
      { id: "er-02", label: "このコーデ見て！",              src: "voice/eriri_code.mp3" },
      { id: "er-03", label: "センスが光るでしょ",            src: "voice/eriri_sense.mp3" },
      { id: "er-04", label: "ゆるふわが一番！",              src: "voice/eriri_yurufuwa.mp3" },
      { id: "er-05", label: "え〜かわいい〜",               src: "voice/eriri_kawaii.mp3" },
    ]
  },
  {
    id: "greeting",
    en: "Greeting",
    jp: "挨拶・日常",
    icon: "fa-solid fa-hand",
    voices: [
      { id: "gr-01", label: "こんにちは〜",                  src: "voice/greeting_konnichiwa.mp3" },
      { id: "gr-02", label: "おはようございます",            src: "voice/greeting_ohayou.mp3" },
      { id: "gr-03", label: "おやすみなさい",                src: "voice/greeting_oyasumi.mp3" },
      { id: "gr-04", label: "またね〜！",                   src: "voice/greeting_matane.mp3" },
      { id: "gr-05", label: "お疲れ様です",                  src: "voice/greeting_otsukaresama.mp3" },
      { id: "gr-06", label: "よろしく！",                    src: "voice/greeting_yoroshiku.mp3" },
    ]
  },
  {
    id: "gaming",
    en: "Gaming",
    jp: "ゲーム・実況",
    icon: "fa-solid fa-gamepad",
    voices: [
      { id: "gm-01", label: "行くぞ！",                      src: "voice/gaming_ikuzo.mp3" },
      { id: "gm-02", label: "やばいやばい！",               src: "voice/gaming_yabai.mp3" },
      { id: "gm-03", label: "勝ったぁ！",                   src: "voice/gaming_katta.mp3" },
      { id: "gm-04", label: "なんで死んだの俺",              src: "voice/gaming_nande_shinda.mp3" },
      { id: "gm-05", label: "強すぎでしょ",                 src: "voice/gaming_tsuyosugi.mp3" },
      { id: "gm-06", label: "もう一回！",                   src: "voice/gaming_mouikkai.mp3" },
      { id: "gm-07", label: "集中集中…",                    src: "voice/gaming_shuuchuu.mp3" },
    ]
  },
  {
    id: "reaction",
    en: "Reaction",
    jp: "リアクション",
    icon: "fa-solid fa-face-laugh-squint",
    voices: [
      { id: "rc-01", label: "え〜〜〜！！",                  src: "voice/reaction_eee.mp3" },
      { id: "rc-02", label: "すごい！！",                    src: "voice/reaction_sugoi.mp3" },
      { id: "rc-03", label: "ウソだぁ",                      src: "voice/reaction_uso.mp3" },
      { id: "rc-04", label: "草",                            src: "voice/reaction_kusa.mp3" },
      { id: "rc-05", label: "それはちょっと…",              src: "voice/reaction_chotto.mp3" },
      { id: "rc-06", label: "天才か",                        src: "voice/reaction_tensai.mp3" },
      { id: "rc-07", label: "わかりみが深い",                src: "voice/reaction_wakarimi.mp3" },
    ]
  },
  {
    id: "vrc",
    en: "VRChat",
    jp: "VRChat",
    icon: "fa-solid fa-vr-cardboard",
    voices: [
      { id: "vr-01", label: "ワールド入ろ〜",               src: "voice/vrc_world_hairo.mp3" },
      { id: "vr-02", label: "アバター可愛くない？",          src: "voice/vrc_avatar_kawaii.mp3" },
      { id: "vr-03", label: "フレンドになろ！",              src: "voice/vrc_friend.mp3" },
      { id: "vr-04", label: "VRCが楽しい",                  src: "voice/vrc_tanoshii.mp3" },
      { id: "vr-05", label: "全身トラッキングすごい",        src: "voice/vrc_tracking.mp3" },
    ]
  },
  {
    id: "event",
    en: "Event",
    jp: "大会・イベント",
    icon: "fa-solid fa-trophy",
    voices: [
      { id: "ev-01", label: "大会始まるよ！",               src: "voice/event_taikai_start.mp3" },
      { id: "ev-02", label: "絶対優勝する",                  src: "voice/event_yusho.mp3" },
      { id: "ev-03", label: "熱い戦いでした",               src: "voice/event_atsui.mp3" },
      { id: "ev-04", label: "次も頑張ろう！",               src: "voice/event_tsugi.mp3" },
      { id: "ev-05", label: "応援ありがとう！",             src: "voice/event_ouen.mp3" },
    ]
  },
  {
    id: "radio",
    en: "Radio",
    jp: "ラジオ・雑談",
    icon: "fa-solid fa-radio",
    voices: [
      { id: "rd-01", label: "今日のテーマはね〜",           src: "voice/radio_theme.mp3" },
      { id: "rd-02", label: "それ面白いね！",               src: "voice/radio_omoshiroi.mp3" },
      { id: "rd-03", label: "話膨らませて〜",               src: "voice/radio_fukuramase.mp3" },
      { id: "rd-04", label: "そこ突っ込む？",               src: "voice/radio_tsukkomi.mp3" },
      { id: "rd-05", label: "なるほどね〜",                 src: "voice/radio_naruhodo.mp3" },
    ]
  },
  {
    id: "song",
    en: "Song",
    jp: "歌・音楽",
    icon: "fa-solid fa-music",
    voices: [
      { id: "sg-01", label: "歌ってみたよ！",               src: "voice/song_utatte.mp3" },
      { id: "sg-02", label: "この曲好きすぎる",             src: "voice/song_suki.mp3" },
      { id: "sg-03", label: "一緒に歌おう",                 src: "voice/song_issho.mp3" },
      { id: "sg-04", label: "音程外れた…",                 src: "voice/song_onteihazure.mp3" },
    ]
  },
  {
    id: "tsukkomi",
    en: "Tsukkomi",
    jp: "ツッコミ・怒り",
    icon: "fa-solid fa-triangle-exclamation",
    voices: [
      { id: "tk-01", label: "なんでや！",                    src: "voice/tsukkomi_nandeyа.mp3" },
      { id: "tk-02", label: "ちゃんとして！",               src: "voice/tsukkomi_chanto.mp3" },
      { id: "tk-03", label: "そこじゃないよ！",             src: "voice/tsukkomi_sokojanai.mp3" },
      { id: "tk-04", label: "信じてたのに",                  src: "voice/tsukkomi_shinjiteta.mp3" },
      { id: "tk-05", label: "もうええわ",                    src: "voice/tsukkomi_mouewa.mp3" },
    ]
  },
  {
    id: "funny",
    en: "Funny",
    jp: "ネタ・小ネタ",
    icon: "fa-solid fa-face-grin-tears",
    voices: [
      { id: "fn-01", label: "それ言っちゃう？",              src: "voice/funny_icchau.mp3" },
      { id: "fn-02", label: "天丼！",                        src: "voice/funny_tendon.mp3" },
      { id: "fn-03", label: "何回目だよ",                   src: "voice/funny_nankaime.mp3" },
      { id: "fn-04", label: "伏線回収！",                   src: "voice/funny_fukusen.mp3" },
      { id: "fn-05", label: "これはわかる人にはわかる",     src: "voice/funny_wakaru_hito.mp3" },
    ]
  },
  {
    id: "positive",
    en: "Positive",
    jp: "応援・ポジティブ",
    icon: "fa-solid fa-star",
    voices: [
      { id: "ps-01", label: "頑張れ〜！",                    src: "voice/positive_ganbare.mp3" },
      { id: "ps-02", label: "絶対大丈夫！",                  src: "voice/positive_daijoubu.mp3" },
      { id: "ps-03", label: "その調子！",                    src: "voice/positive_choushi.mp3" },
      { id: "ps-04", label: "最高だよ！",                    src: "voice/positive_saikou.mp3" },
      { id: "ps-05", label: "諦めないで！",                  src: "voice/positive_akirame.mp3" },
    ]
  },
  {
    id: "collab",
    en: "Collab",
    jp: "コラボ・掛け合い",
    icon: "fa-solid fa-people-group",
    voices: [
      { id: "cl-01", label: "一緒にやろう！",               src: "voice/collab_issho.mp3" },
      { id: "cl-02", label: "息ぴったり！",                 src: "voice/collab_iki_pittari.mp3" },
      { id: "cl-03", label: "チームEGU！",                  src: "voice/collab_team_egu.mp3" },
      { id: "cl-04", label: "みんなで楽しもう",             src: "voice/collab_minna.mp3" },
    ]
  },
  {
    id: "stream",
    en: "Stream",
    jp: "配信・コメント",
    icon: "fa-solid fa-tower-broadcast",
    voices: [
      { id: "st-01", label: "配信見てくれてありがとう！",    src: "voice/stream_mitekureta.mp3" },
      { id: "st-02", label: "コメントきた〜！",             src: "voice/stream_comment.mp3" },
      { id: "st-03", label: "スパチャありがとう！",          src: "voice/stream_superchat.mp3" },
      { id: "st-04", label: "今日も来てくれた！",           src: "voice/stream_kitekureta.mp3" },
      { id: "st-05", label: "チャンネル登録よろしく",       src: "voice/stream_touroku.mp3" },
    ]
  },
];
