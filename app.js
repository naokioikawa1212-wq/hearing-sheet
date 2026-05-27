// ===== データ定義 =====

const PLATFORMS = {
  crowdfunding: [
    { id: 'makuake',     label: 'Makuake',        logo: '🟠' },
    { id: 'campfire',   label: 'Campfire',        logo: '🔥' },
    { id: 'greenfunding', label: 'Greenfunding',  logo: '🌿' },
    { id: 'readyfor',   label: 'READYFOR',        logo: '💙' },
    { id: 'other_cf',   label: 'その他',           logo: '📋' },
  ],
  photography: [
    { id: 'amazon',     label: 'Amazon',          logo: '📦' },
    { id: 'rakuten',    label: '楽天市場',         logo: '🛒' },
    { id: 'yahoo',      label: 'Yahoo!ショッピング', logo: '🛍️' },
    { id: 'base',       label: 'BASE',            logo: '🏪' },
    { id: 'shopify',    label: 'Shopify',         logo: '💚' },
    { id: 'other_ec',   label: 'その他',           logo: '📋' },
  ],
};

// ===== 共通フィールド =====
const COMMON_FIELDS = [
  { section: '基本情報' },
  { id: 'company',   label: '会社名・屋号', type: 'text', required: true },
  { id: 'name',      label: 'ご担当者名',   type: 'text', required: true },
  { id: 'email',     label: 'メールアドレス', type: 'email', required: true },
  { id: 'tel',       label: '電話番号',     type: 'tel',  required: false },
  { id: 'deadline',  label: '希望納期',     type: 'date', required: false },
  { id: 'budget',    label: 'ご予算感（税込）', type: 'text', required: false, hint: '例：5万円〜10万円' },
];

// ===== クラウドファンディング向けフィールド =====
const CF_FIELDS = {
  base: [
    { section: 'プロジェクト概要' },
    { id: 'project_name',  label: 'プロジェクト名・商品名', type: 'text', required: true },
    { id: 'genre',         label: 'ジャンル・カテゴリ', type: 'text', required: false, hint: '例：ガジェット、食品、アパレル' },
    { id: 'target_amount', label: '目標金額',   type: 'text', required: false, hint: '例：100万円' },
    { id: 'launch_date',   label: '掲載開始予定日', type: 'date', required: false },
    { id: 'summary',       label: 'プロジェクトの概要・背景', type: 'textarea', required: true, hint: 'どんな課題を解決する商品・サービスか、など' },
    { section: '商品・サービス詳細' },
    { id: 'features',      label: '商品の特長・強み（他社との差別化）', type: 'textarea', required: true },
    { id: 'spec',          label: 'スペック・仕様（サイズ・素材・機能など）', type: 'textarea', required: false },
    { id: 'target_user',   label: 'ターゲットユーザー', type: 'text', required: false, hint: '例：30〜40代のビジネスマン' },
    { section: 'リターン・支援プラン' },
    { id: 'returns',       label: 'リターン内容（支援プラン）', type: 'textarea', required: false, hint: '各プランの価格・内容を記載してください' },
    { section: 'クリエイティブについて' },
    {
      id: 'deliverables',
      label: '制作物（複数選択可）',
      type: 'checkbox',
      required: false,
      options: ['メインビジュアル', 'プロジェクト本文デザイン', 'リターン画像', 'SNS用バナー', '動画編集', 'その他'],
    },
    { id: 'tone',          label: '希望するトーン・世界観', type: 'text', required: false, hint: '例：スタイリッシュ、温かみ、シンプル' },
    { id: 'reference',     label: '参考にしたいサイト・デザインのURL', type: 'textarea', required: false },
    { id: 'assets',        label: '素材の有無',
      type: 'radio',
      required: false,
      options: ['写真・素材あり', '一部あり', '素材なし（撮影から依頼）'] },
    { id: 'remarks',       label: 'その他・ご要望・補足', type: 'textarea', required: false },
  ],
  makuake: [
    { id: 'makuake_category', label: 'Makuakeカテゴリ', type: 'select', required: false,
      options: ['テクノロジー', 'ファッション', 'フード', 'デザイン・アート', 'アウトドア', 'ビューティー', 'その他'] },
    { id: 'makuake_past',     label: '過去のMakuake掲載経験', type: 'radio', required: false,
      options: ['初めて', '2回目以上'] },
  ],
  campfire: [
    { id: 'cf_type',   label: 'Campfireプロジェクトタイプ', type: 'radio', required: false,
      options: ['購入型', '寄付型', 'ファンクラブ型'] },
  ],
  greenfunding: [
    { id: 'eco_concept', label: 'エコ・サステナブルのコンセプト', type: 'textarea', required: false,
      hint: '環境・社会課題との関わりについて教えてください' },
  ],
  readyfor: [
    { id: 'cause',     label: '社会的意義・ストーリー', type: 'textarea', required: false,
      hint: 'READYFORは想いやストーリー重視です。プロジェクトに込めた想いを教えてください' },
  ],
  other_cf: [],
};

// ===== EC撮影・画像制作向けフィールド =====
const EC_FIELDS = {
  base: [
    { section: '商品情報' },
    { id: 'product_name',  label: '商品名',    type: 'text', required: true },
    { id: 'product_genre', label: '商品カテゴリ', type: 'text', required: false, hint: '例：ガジェット、食品、コスメ、アパレル' },
    { id: 'product_count', label: '商品数（SKU数）', type: 'number', required: false },
    { id: 'product_desc',  label: '商品の特長・アピールポイント', type: 'textarea', required: true },
    { section: '制作内容' },
    {
      id: 'ec_deliverables',
      label: '制作物（複数選択可）',
      type: 'checkbox',
      required: false,
      options: ['メイン画像（白抜き）', 'サブ画像', 'インフォグラフィック', 'ライフスタイル画像', 'A+コンテンツ / 特集ページ', 'ストアページ', 'バナー広告', 'その他'],
    },
    { id: 'image_count',   label: '1商品あたりの希望枚数', type: 'number', required: false },
    {
      id: 'shooting',
      label: '撮影の有無',
      type: 'radio',
      required: false,
      options: ['撮影から依頼したい', '画像データあり（加工のみ）', '一部撮影が必要'],
    },
    { id: 'shooting_detail', label: '撮影詳細・シーン指定', type: 'textarea', required: false,
      hint: '白背景のみ／モデル使用の有無／屋外撮影希望など' },
    { section: 'デザイン・クオリティ' },
    { id: 'ec_tone',       label: '希望トーン・デザインイメージ', type: 'text', required: false,
      hint: '例：高級感、ナチュラル、ポップ' },
    { id: 'ec_reference',  label: '参考にしたい競合商品・URLなど', type: 'textarea', required: false },
    {
      id: 'size_spec',
      label: '画像サイズ・規格',
      type: 'checkbox',
      required: false,
      options: ['Amazon規格（最短辺1000px以上）', '楽天規格', 'Yahoo!規格', 'その他（別途指定）'],
    },
    { id: 'ec_remarks',    label: 'その他・ご要望・補足', type: 'textarea', required: false },
  ],
  amazon: [
    { id: 'asin',          label: 'ASIN（既存商品の場合）', type: 'text', required: false },
    {
      id: 'amazon_content',
      label: 'Amazon掲載コンテンツ（複数選択可）',
      type: 'checkbox',
      required: false,
      options: ['メイン画像', 'サブ画像（最大6枚）', 'A+コンテンツ', 'ブランドストーリー', 'ストアページ'],
    },
    { id: 'brand_reg',     label: 'Amazon ブランド登録の有無', type: 'radio', required: false,
      options: ['登録済み', '未登録', '不明'] },
  ],
  rakuten: [
    {
      id: 'rakuten_content',
      label: '楽天掲載コンテンツ（複数選択可）',
      type: 'checkbox',
      required: false,
      options: ['商品画像', '商品説明文', 'スマートフォン向けページ', 'ショップトップ', 'バナー'],
    },
    { id: 'rakuten_shop',  label: '楽天ショップURL（既存店舗の場合）', type: 'url', required: false },
  ],
  yahoo: [
    {
      id: 'yahoo_content',
      label: 'Yahoo!掲載コンテンツ（複数選択可）',
      type: 'checkbox',
      required: false,
      options: ['商品画像', '商品説明ページ', 'ストアデザイン', 'バナー'],
    },
  ],
  base: [
    { id: 'base_shop', label: 'BASEショップURL（既存の場合）', type: 'url', required: false },
  ],
  shopify: [
    { id: 'shopify_shop', label: 'ShopifyストアURL（既存の場合）', type: 'url', required: false },
    { id: 'shopify_theme', label: '使用中のテーマ名', type: 'text', required: false },
  ],
  other_ec: [],
};

// ===== ユーティリティ =====

function buildFields(fieldDefs) {
  const container = document.getElementById('form-fields');
  container.innerHTML = '';

  fieldDefs.forEach(f => {
    if (f.section) {
      const title = document.createElement('div');
      title.className = 'form-section-title';
      title.textContent = f.section;
      container.appendChild(title);
      return;
    }

    const group = document.createElement('div');
    group.className = 'field-group';

    const label = document.createElement('label');
    label.setAttribute('for', f.id);
    label.innerHTML = f.label + (f.required ? '<span class="required-mark">*</span>' : '');
    group.appendChild(label);

    if (f.type === 'textarea') {
      const ta = document.createElement('textarea');
      ta.id = f.id;
      ta.name = f.id;
      if (f.required) ta.required = true;
      ta.rows = 4;
      group.appendChild(ta);
    } else if (f.type === 'select') {
      const sel = document.createElement('select');
      sel.id = f.id;
      sel.name = f.id;
      const defaultOpt = document.createElement('option');
      defaultOpt.value = '';
      defaultOpt.textContent = '選択してください';
      sel.appendChild(defaultOpt);
      f.options.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt;
        o.textContent = opt;
        sel.appendChild(o);
      });
      group.appendChild(sel);
    } else if (f.type === 'checkbox') {
      const wrap = document.createElement('div');
      wrap.className = 'check-group';
      f.options.forEach(opt => {
        const lbl = document.createElement('label');
        const inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.name = f.id;
        inp.value = opt;
        lbl.appendChild(inp);
        lbl.appendChild(document.createTextNode(opt));
        wrap.appendChild(lbl);
      });
      group.appendChild(wrap);
    } else if (f.type === 'radio') {
      const wrap = document.createElement('div');
      wrap.className = 'radio-group';
      f.options.forEach(opt => {
        const lbl = document.createElement('label');
        const inp = document.createElement('input');
        inp.type = 'radio';
        inp.name = f.id;
        inp.value = opt;
        if (f.required) inp.required = true;
        lbl.appendChild(inp);
        lbl.appendChild(document.createTextNode(opt));
        wrap.appendChild(lbl);
      });
      group.appendChild(wrap);
    } else {
      const inp = document.createElement('input');
      inp.type = f.type || 'text';
      inp.id = f.id;
      inp.name = f.id;
      if (f.required) inp.required = true;
      group.appendChild(inp);
    }

    if (f.hint) {
      const hint = document.createElement('p');
      hint.className = 'field-hint';
      hint.textContent = f.hint;
      group.appendChild(hint);
    }

    container.appendChild(group);
  });
}

function showStep(stepName) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-' + stepName).classList.add('active');

  document.querySelectorAll('.progress-step').forEach(el => {
    el.classList.remove('active', 'done');
  });

  const order = ['category', 'platform', 'form', 'complete'];
  const idx = order.indexOf(stepName);
  order.forEach((name, i) => {
    const el = document.querySelector(`.progress-step[data-step="${name}"]`);
    if (!el) return;
    if (i < idx) el.classList.add('done');
    else if (i === idx) el.classList.add('active');
  });
}

// ===== 状態 =====
let currentCategory = null;
let currentPlatform = null;

// ===== イベント =====

// カテゴリ選択
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    currentCategory = card.dataset.category;

    const title = document.getElementById('platform-title');
    title.textContent = currentCategory === 'crowdfunding'
      ? 'クラウドファンディングのプラットフォームを選択してください'
      : 'ECサイト・販売プラットフォームを選択してください';

    const platformContainer = document.getElementById('platform-cards');
    platformContainer.innerHTML = '';
    PLATFORMS[currentCategory].forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'platform-card';
      btn.dataset.platformId = p.id;
      btn.innerHTML = `<span class="platform-logo">${p.logo}</span><span>${p.label}</span>`;
      platformContainer.appendChild(btn);
    });

    showStep('platform');
  });
});

// プラットフォーム選択
document.getElementById('platform-cards').addEventListener('click', e => {
  const btn = e.target.closest('.platform-card');
  if (!btn) return;

  currentPlatform = btn.dataset.platformId;
  const platformLabel = btn.querySelector('span:last-child').textContent;

  document.getElementById('form-platform-label').textContent = platformLabel;

  // フィールドを組み立て
  let fields;
  if (currentCategory === 'crowdfunding') {
    const specific = CF_FIELDS[currentPlatform] || [];
    fields = [...COMMON_FIELDS, ...CF_FIELDS.base, ...specific];
  } else {
    // EC側はbase_idが衝突するためマージに注意
    const specific = EC_FIELDS[currentPlatform] || [];
    fields = [...COMMON_FIELDS, ...EC_FIELDS.base, ...specific];
  }

  buildFields(fields);
  showStep('form');
});

// 戻るボタン
document.getElementById('back-to-category').addEventListener('click', () => {
  showStep('category');
});

document.getElementById('back-to-platform').addEventListener('click', () => {
  showStep('platform');
});

// フォーム送信
document.getElementById('hearing-form').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // データ収集（コンソール確認用）
  const data = {};
  const fd = new FormData(form);
  for (const [key, val] of fd.entries()) {
    if (data[key]) {
      data[key] = Array.isArray(data[key]) ? [...data[key], val] : [data[key], val];
    } else {
      data[key] = val;
    }
  }
  data._category = currentCategory;
  data._platform = currentPlatform;
  console.log('送信データ:', data);

  showStep('complete');
});

// やり直し
document.getElementById('btn-restart').addEventListener('click', () => {
  currentCategory = null;
  currentPlatform = null;
  document.getElementById('hearing-form').reset();
  showStep('category');
});

// 初期表示
showStep('category');
