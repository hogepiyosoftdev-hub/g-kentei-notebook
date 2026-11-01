// G検定 カンペ用 ビジュアル図表データ（SVG図解・構造化比較表）
// 各カードID（GKENTEI_ITEMS の id）に対応するHTML/SVG図表を定義
window.GKENTEI_DIAGRAMS = {
  // ==================== Chapter 1 ====================
  "c1-03": `
    <div class="vis-title">📊 松尾豊教授による「AI（エージェント）の4つのレベル」比較</div>
    <table class="vis-table">
      <thead>
        <tr>
          <th>レベル</th>
          <th>名称・仕組み</th>
          <th>特徴量の設計者</th>
          <th>代表例</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="vis-tag vis-tag-slate">Lv.1</span></td>
          <td><strong>単純な制御プログラム</strong><br>（あらかじめ決まった温度・閾値でON/OFF）</td>
          <td>—</td>
          <td>エアコンの温度制御、洗濯機</td>
        </tr>
        <tr>
          <td><span class="vis-tag vis-tag-blue">Lv.2</span></td>
          <td><strong>古典的な人工知能</strong><br>（探索・推論・知識ベースで多数のパターンに対応）</td>
          <td>—</td>
          <td>エキスパートシステム、ルンバ、将棋AI（ボナンザ以前）</td>
        </tr>
        <tr>
          <td><span class="vis-tag vis-tag-amber">Lv.3</span></td>
          <td><strong>機械学習を取り入れたAI</strong><br>（データから判断基準・重みを自動学習）</td>
          <td><strong class="vis-hl-amber">👤 人間が設計</strong><br>（特徴量エンジニアリング）</td>
          <td>スパムメール判定、初期の検索エンジン、SVM・決定木</td>
        </tr>
        <tr>
          <td><span class="vis-tag vis-tag-emerald">Lv.4</span></td>
          <td><strong>ディープラーニング</strong><br>（生データから特徴量自体を自動で獲得）</td>
          <td><strong class="vis-hl-emerald">🤖 AIが自動獲得</strong><br>（特徴表現学習）</td>
          <td>CNN画像認識、AlphaGo、Transformer・生成AI</td>
        </tr>
      </tbody>
    </table>
  `,

  "c1-06": `
    <div class="vis-title">📐 従来の機械学習（Lv.3）と ディープラーニング（Lv.4）の決定的な違い</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="機械学習とディープラーニングの比較図">
        <!-- Row 1: Traditional ML -->
        <text x="12" y="24" fill="#94a3b8" font-size="12" font-weight="bold">① 従来の機械学習（レベル3）：特徴量は「人間」が試行錯誤して設計</text>
        <rect x="12" y="34" width="95" height="42" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
        <text x="60" y="59" fill="#f8fafc" font-size="12" text-anchor="middle" font-weight="bold">生データ入力</text>
        <path d="M112 55 L142 55" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="148" y="32" width="180" height="46" rx="6" fill="rgba(245,158,11,0.16)" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="238" y="51" fill="#fde047" font-size="12" text-anchor="middle" font-weight="bold">👤 人間が特徴量を設計</text>
        <text x="238" y="68" fill="#cbd5e1" font-size="10.5" text-anchor="middle">（SIFT / HOG / 手動変数作成）</text>
        <path d="M334 55 L364 55" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="370" y="34" width="145" height="42" rx="6" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="442" y="53" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">🤖 分類・回帰のみ学習</text>
        <text x="442" y="68" fill="#cbd5e1" font-size="10.5" text-anchor="middle">（SVM / ロジスティック回帰）</text>
        <path d="M520 55 L548 55" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="554" y="34" width="74" height="42" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
        <text x="591" y="59" fill="#f8fafc" font-size="12" text-anchor="middle" font-weight="bold">予測出力</text>

        <!-- Row 2: Deep Learning -->
        <text x="12" y="106" fill="#38bdf8" font-size="12" font-weight="bold">② ディープラーニング（レベル4）：特徴抽出から分類まで「End-to-End」でAIが自動学習</text>
        <rect x="12" y="115" width="95" height="42" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
        <text x="60" y="140" fill="#f8fafc" font-size="12" text-anchor="middle" font-weight="bold">生データ入力</text>
        <path d="M112 136 L142 136" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="148" y="113" width="367" height="46" rx="6" fill="rgba(16,185,129,0.16)" stroke="#10b981" stroke-width="2"/>
        <text x="331" y="133" fill="#6ee7b7" font-size="12.5" text-anchor="middle" font-weight="bold">🧠 特徴表現学習（低次→高次特徴抽出）＋ 識別器</text>
        <text x="331" y="150" fill="#e2e8f0" font-size="10.5" text-anchor="middle">多層ニューラルネットが一気通貫（End-to-End）で自動獲得</text>
        <path d="M520 136 L548 136" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="554" y="115" width="74" height="42" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
        <text x="591" y="140" fill="#f8fafc" font-size="12" text-anchor="middle" font-weight="bold">予測出力</text>
      </svg>
    </div>
  `,

  "c1-15": `
    <div class="vis-title">🌳 幅優先探索（BFS）と 深さ優先探索（DFS）の探索順序と特性比較</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 175" class="vis-svg" role="img" aria-label="BFSとDFSの探索順序比較">
        <!-- Left: BFS -->
        <rect x="8" y="6" width="304" height="162" rx="8" fill="rgba(56,189,248,0.07)" stroke="#0284c7" stroke-width="1.2"/>
        <text x="160" y="25" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">幅優先探索（BFS）：横（浅い階層）から順に探索</text>
        <!-- BFS Tree Edges -->
        <line x1="160" y1="52" x2="100" y2="95" stroke="#64748b" stroke-width="2"/>
        <line x1="160" y1="52" x2="220" y2="95" stroke="#64748b" stroke-width="2"/>
        <line x1="100" y1="95" x2="65" y2="140" stroke="#64748b" stroke-width="2"/>
        <line x1="100" y1="95" x2="135" y2="140" stroke="#64748b" stroke-width="2"/>
        <line x1="220" y1="95" x2="185" y2="140" stroke="#64748b" stroke-width="2"/>
        <line x1="220" y1="95" x2="255" y2="140" stroke="#64748b" stroke-width="2"/>
        <!-- Horizontal scan arrows -->
        <path d="M118 95 L198 95" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
        <path d="M82 140 L236 140" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
        <!-- BFS Nodes -->
        <circle cx="160" cy="52" r="15" fill="#0284c7"/><text x="160" y="57" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">①</text>
        <circle cx="100" cy="95" r="15" fill="#0284c7"/><text x="100" y="100" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">②</text>
        <circle cx="220" cy="95" r="15" fill="#0284c7"/><text x="220" y="100" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">③</text>
        <circle cx="65" cy="140" r="15" fill="#0369a1"/><text x="65" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">④</text>
        <circle cx="135" cy="140" r="15" fill="#0369a1"/><text x="135" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">⑤</text>
        <circle cx="185" cy="140" r="15" fill="#0369a1"/><text x="185" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">⑥</text>
        <circle cx="255" cy="140" r="15" fill="#0369a1"/><text x="255" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">⑦</text>

        <!-- Right: DFS -->
        <rect x="328" y="6" width="304" height="162" rx="8" fill="rgba(245,158,11,0.07)" stroke="#d97706" stroke-width="1.2"/>
        <text x="480" y="25" fill="#fbbf24" font-size="11.5" text-anchor="middle" font-weight="bold">深さ優先探索（DFS）：縦（葉の底）まで進んで戻る</text>
        <!-- DFS Tree Edges -->
        <line x1="480" y1="52" x2="420" y2="95" stroke="#64748b" stroke-width="2"/>
        <line x1="480" y1="52" x2="540" y2="95" stroke="#64748b" stroke-width="2"/>
        <line x1="420" y1="95" x2="385" y2="140" stroke="#64748b" stroke-width="2"/>
        <line x1="420" y1="95" x2="455" y2="140" stroke="#64748b" stroke-width="2"/>
        <line x1="540" y1="95" x2="505" y2="140" stroke="#64748b" stroke-width="2"/>
        <line x1="540" y1="95" x2="575" y2="140" stroke="#64748b" stroke-width="2"/>
        <!-- DFS Nodes -->
        <circle cx="480" cy="52" r="15" fill="#d97706"/><text x="480" y="57" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">①</text>
        <circle cx="420" cy="95" r="15" fill="#d97706"/><text x="420" y="100" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">②</text>
        <circle cx="385" cy="140" r="15" fill="#b45309"/><text x="385" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">③</text>
        <circle cx="455" cy="140" r="15" fill="#b45309"/><text x="455" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">④</text>
        <circle cx="540" cy="95" r="15" fill="#d97706"/><text x="540" y="100" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">⑤</text>
        <circle cx="505" cy="140" r="15" fill="#b45309"/><text x="505" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">⑥</text>
        <circle cx="575" cy="140" r="15" fill="#b45309"/><text x="575" y="145" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">⑦</text>
      </svg>
    </div>
    <table class="vis-table">
      <thead>
        <tr><th>比較項目</th><th>幅優先探索（BFS）</th><th>深さ優先探索（DFS）</th></tr>
      </thead>
      <tbody>
        <tr><td>データ構造</td><td><strong class="vis-hl-cyan">キュー（Queue：FIFO 先入れ先出し）</strong></td><td><strong class="vis-hl-amber">スタック（Stack：LIFO 後入れ先出し）</strong></td></tr>
        <tr><td>最短経路の保証</td><td><strong>◎ 必ず最短ステップの解を発見できる</strong></td><td>× 最初に見つけた解が最短とは限らない</td></tr>
        <tr><td>メモリ消費量</td><td>△ 大（横幅分の全ノードを保持する必要がある）</td><td><strong>◎ 小（現在の深さ経路分だけで済む）</strong></td></tr>
      </tbody>
    </table>
  `,

  "c1-16": `
    <div class="vis-title">🧭 ヒューリスティック探索のコスト関数 f(n) = g(n) + h(n)</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 95" class="vis-svg" role="img" aria-label="A*アルゴリズムのg(n)とh(n)">
        <circle cx="70" cy="48" r="24" fill="#0284c7"/>
        <text x="70" y="52" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">Start S</text>
        <path d="M98 48 C 165 20, 225 75, 290 48" fill="none" stroke="#38bdf8" stroke-width="3"/>
        <text x="195" y="25" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">実コスト g(n)（確定した累積距離）</text>

        <circle cx="320" cy="48" r="24" fill="#f59e0b"/>
        <text x="320" y="52" fill="#0f172a" font-size="12" text-anchor="middle" font-weight="bold">現在地 n</text>

        <path d="M348 48 L535 48" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4"/>
        <text x="442" y="25" fill="#fde047" font-size="12" text-anchor="middle" font-weight="bold">推定コスト h(n)（ヒューリスティック関数）</text>
        <text x="442" y="75" fill="#fca5a5" font-size="11" text-anchor="middle">※A*の最適解保証条件：h(n) ≦ 真の最短距離 h*(n)</text>

        <circle cx="568" cy="48" r="24" fill="#10b981"/>
        <text x="568" y="52" fill="#0f172a" font-size="12" text-anchor="middle" font-weight="bold">Goal G</text>
      </svg>
    </div>
    <table class="vis-table">
      <thead>
        <tr><th>探索手法</th><th>評価関数 f(n)</th><th>特徴</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>均一コスト探索</strong>（ダイクストラ法）</td><td><code>f(n) = g(n)</code></td><td>スタートからの実コスト最小順に探索（最適解保証・遅い）</td></tr>
        <tr><td><strong>貪欲最良優先探索</strong>（Greedy）</td><td><code>f(n) = h(n)</code></td><td>ゴールへの推定距離だけで突っ走る（高速だが最適解保証なし）</td></tr>
        <tr><td><strong class="vis-hl-emerald">A*（エースター）アルゴリズム</strong></td><td><code>f(n) = g(n) + h(n)</code></td><td><strong>実コスト＋推定コストの和が最小の節点を開拓（効率的かつ最適解保証）</strong></td></tr>
      </tbody>
    </table>
  `,

  "c1-17": `
    <div class="vis-title">♟️ MiniMax法 と α-β（アルファ・ベータ）枝刈りの仕組み</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 185" class="vis-svg" role="img" aria-label="MiniMax法とα-β枝刈り">
        <!-- Layer Labels -->
        <text x="15" y="38" fill="#38bdf8" font-size="12" font-weight="bold">MAX層（自分）</text>
        <text x="15" y="54" fill="#94a3b8" font-size="10.5">最大値を選ぶ</text>
        <text x="15" y="100" fill="#fbbf24" font-size="12" font-weight="bold">MIN層（相手）</text>
        <text x="15" y="116" fill="#94a3b8" font-size="10.5">最小値を選ぶ</text>
        <text x="15" y="160" fill="#cbd5e1" font-size="12" font-weight="bold">葉（評価値）</text>

        <!-- Edges -->
        <line x1="290" y1="35" x2="190" y2="95" stroke="#38bdf8" stroke-width="2.5"/>
        <line x1="290" y1="35" x2="390" y2="95" stroke="#38bdf8" stroke-width="2.5"/>
        <line x1="190" y1="95" x2="145" y2="155" stroke="#94a3b8" stroke-width="2"/>
        <line x1="190" y1="95" x2="235" y2="155" stroke="#94a3b8" stroke-width="2"/>
        <line x1="390" y1="95" x2="345" y2="155" stroke="#94a3b8" stroke-width="2"/>
        <line x1="390" y1="95" x2="435" y2="155" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>

        <!-- Pruning Cut Mark -->
        <line x1="400" y1="128" x2="428" y2="118" stroke="#ef4444" stroke-width="3"/>
        <line x1="403" y1="115" x2="425" y2="132" stroke="#ef4444" stroke-width="3"/>
        <text x="465" y="122" fill="#fca5a5" font-size="11" font-weight="bold">✂️ βカット（探索不要！）</text>
        <text x="465" y="138" fill="#94a3b8" font-size="10">左の枝で「3」が確保済み。</text>
        <text x="465" y="152" fill="#94a3b8" font-size="10">右で「1」が出た時点で相手は</text>
        <text x="465" y="166" fill="#94a3b8" font-size="10">≦1しか選ばないため計算省略</text>

        <!-- Root Node (MAX) -->
        <rect x="245" y="16" width="90" height="34" rx="6" fill="#0284c7" stroke="#7dd3fc" stroke-width="1.5"/>
        <text x="290" y="38" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">MAX = 3</text>

        <!-- MIN Nodes -->
        <rect x="145" y="78" width="90" height="34" rx="6" fill="#d97706"/>
        <text x="190" y="100" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">MIN = 3</text>

        <rect x="345" y="78" width="90" height="34" rx="6" fill="#d97706"/>
        <text x="390" y="100" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">MIN ≦ 1</text>

        <!-- Leaf Nodes -->
        <circle cx="145" cy="155" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="145" y="160" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">3</text>
        <circle cx="235" cy="155" r="16" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/><text x="235" y="160" fill="#cbd5e1" font-size="13" text-anchor="middle">8</text>
        <circle cx="345" cy="155" r="16" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/><text x="345" y="160" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">1</text>
        <circle cx="435" cy="155" r="16" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/><text x="435" y="160" fill="#fca5a5" font-size="13" text-anchor="middle">?</text>
      </svg>
    </div>
  `,

  "c1-18": `
    <div class="vis-title">🔄 モンテカルロ木探索（MCTS）の4ステップ循環サイクル</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 1</div>
        <div class="vis-flow-head">① 選択 (Selection)</div>
        <div class="vis-flow-desc">UCB1値（勝率＋未探索ボーナス）に基づき根から有望な葉まで辿る</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 2</div>
        <div class="vis-flow-head">② 展開 (Expansion)</div>
        <div class="vis-flow-desc">到達した葉ノードから新しい未探索の子ノードを1つ以上追加する</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 3</div>
        <div class="vis-flow-head">③ プレイアウト</div>
        <div class="vis-flow-desc">終局までランダム等に打ち進めて勝敗を得る（※AlphaGo Zeroでは廃止）</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 4</div>
        <div class="vis-flow-head">④ 逆伝播 (Backprop)</div>
        <div class="vis-flow-desc">得られた勝敗結果・評価値を通ってきた親ノードへ遡って反映する</div>
      </div>
    </div>
  `,

  "c1-23": `
    <div class="vis-title">🕸️ 意味ネットワーク（Semantic Network）の4大リンク関係</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 115" class="vis-svg" role="img" aria-label="意味ネットワークのis-a, instance-of, part-of, has-a">
        <rect x="20" y="36" width="105" height="42" rx="20" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="72" y="61" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">ハチ公（個体）</text>

        <path d="M130 57 L218 57" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <text x="174" y="47" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">instance-of</text>
        <text x="174" y="75" fill="#94a3b8" font-size="10" text-anchor="middle">（具体例→概念）</text>

        <rect x="225" y="36" width="95" height="42" rx="20" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="272" y="61" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">犬</text>

        <path d="M325 57 L405 57" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <text x="365" y="47" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">is-a</text>
        <text x="365" y="75" fill="#94a3b8" font-size="10" text-anchor="middle">（下位→上位概念）</text>

        <rect x="412" y="36" width="95" height="42" rx="20" fill="#d97706" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="460" y="61" fill="#fff" font-size="13" text-anchor="middle" font-weight="bold">哺乳類</text>

        <path d="M512 45 L595 45" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <text x="553" y="36" fill="#6ee7b7" font-size="11" text-anchor="middle" font-weight="bold">has-a (全体→部分)</text>

        <path d="M595 69 L512 69" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <text x="553" y="88" fill="#fda4af" font-size="11" text-anchor="middle" font-weight="bold">part-of (部分→全体)</text>

        <rect x="600" y="36" width="35" height="42" rx="8" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
        <text x="617" y="61" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">心臓</text>
      </svg>
    </div>
  `,

  "c1-27": `
    <div class="vis-title">🧠 推論の3分類（演繹法・帰納法・アブダクション）の対比表</div>
    <table class="vis-table">
      <thead>
        <tr><th>推論法</th><th>推論の方向（前提 ⇒ 結論）</th><th>具体例</th><th>特徴</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">演繹法</strong><br>(Deduction)</td>
          <td><strong>［規則］＋［事例］ ⇒ ［結果］</strong></td>
          <td>人間は死ぬ(規則)＋ソクラテスは人間(事例) ⇒ <strong>ソクラテスは死ぬ(結果)</strong></td>
          <td>前提が真なら結論も100%真（真理保存的）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">帰納法</strong><br>(Induction)</td>
          <td><strong>［複数の事例＋結果］ ⇒ ［規則］</strong></td>
          <td>犬Aも犬Bも犬Cも吠えた ⇒ <strong>すべての犬は吠える(規則)</strong></td>
          <td>データから一般法則を導く（機械学習の基本）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">アブダクション</strong><br>(仮説形成)</td>
          <td><strong>［規則］＋［結果］ ⇒ ［事例(原因)］</strong></td>
          <td>雨が降ると芝生が濡れる(規則)＋今芝生が濡れている(結果) ⇒ <strong>雨が降ったのだろう(仮説)</strong></td>
          <td>観察結果から最も妥当な原因仮説を推論（医療診断等）</td>
        </tr>
      </tbody>
    </table>
  `,

  // ==================== Chapter 2 ====================
  "c2-03": `
    <div class="vis-title">🗂️ 機械学習の5大学習パラダイム比較</div>
    <table class="vis-table">
      <thead>
        <tr><th>学習枠組み</th><th>入力データと正解ラベル</th><th>目的・代表手法</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">教師あり学習</strong></td><td>入力 <code>X</code> ＋ <strong>すべてのデータに正解ラベル <code>Y</code> あり</strong></td><td>分類・回帰（線形回帰、SVM、決定木、CNN）</td></tr>
        <tr><td><strong class="vis-hl-amber">教師なし学習</strong></td><td>入力 <code>X</code> のみ（<strong>正解ラベル <code>Y</code> なし</strong>）</td><td>クラスタリング（k-means）、次元削減（PCA、t-SNE）</td></tr>
        <tr><td><strong>半教師あり学習</strong></td><td><strong>少量のラベル付きデータ</strong> ＋ <strong>大量のラベルなしデータ</strong></td><td>Pseudo-Labeling（擬似ラベル付与）、ラベル伝播法</td></tr>
        <tr><td><strong class="vis-hl-emerald">自己教師あり学習</strong></td><td>ラベルなしデータ自身から<strong>「穴埋め・変換予測」の擬似問題</strong>を自動生成</td><td>BERT（MLM）、GPT（次単語予測）、SimCLR、MAE</td></tr>
        <tr><td><strong>強化学習</strong></td><td>正解ラベルはなく、行動に対する環境からの<strong>「報酬（Reward）」</strong></td><td>累積報酬の最大化（Q学習、SARSA、DQN、PPO）</td></tr>
      </tbody>
    </table>
  `,

  "c2-07": `
    <div class="vis-title">💎 なぜ L1正則化（Lasso）は重みがちょうど 0 になるのか？（幾何学的図解）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 205" class="vis-svg" role="img" aria-label="L1正則化（ひし形）とL2正則化（円）の比較">
        <!-- Left: L1 Lasso -->
        <rect x="10" y="8" width="300" height="190" rx="8" fill="rgba(56,189,248,0.06)" stroke="#0284c7" stroke-width="1.2"/>
        <text x="160" y="26" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">L1正則化（Lasso）：|w₁| + |w₂| ≦ C（ひし形）</text>
        <!-- Axes -->
        <line x1="55" y1="112" x2="235" y2="112" stroke="#64748b" stroke-width="1.5"/>
        <line x1="130" y1="36" x2="130" y2="154" stroke="#64748b" stroke-width="1.5"/>
        <text x="242" y="116" fill="#94a3b8" font-size="11">w₁</text>
        <text x="115" y="46" fill="#94a3b8" font-size="11">w₂</text>
        <!-- Diamond constraint -->
        <polygon points="130,72 170,112 130,152 90,112" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="2.5"/>
        <!-- Loss contours (ellipses) touching top corner (0, w2) -->
        <ellipse cx="192" cy="58" rx="64" ry="26" transform="rotate(-16 192 58)" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
        <ellipse cx="192" cy="58" rx="36" ry="14" transform="rotate(-16 192 58)" fill="none" stroke="#f43f5e" stroke-width="1.4" stroke-dasharray="3,2"/>
        <circle cx="192" cy="58" r="3.5" fill="#f43f5e"/>
        <!-- Contact Point at w1 = 0 -->
        <circle cx="130" cy="72" r="6" fill="#fde047" stroke="#0f172a" stroke-width="1.5"/>
        <text x="160" y="172" fill="#fde047" font-size="11" text-anchor="middle" font-weight="bold">★ ひし形の角（w₂軸上）で等高線と接する！</text>
        <text x="160" y="188" fill="#f8fafc" font-size="10.5" text-anchor="middle" font-weight="bold">⇒ 不要な重み w₁ = 0 になる（スパース化・特徴量選択）</text>

        <!-- Right: L2 Ridge -->
        <rect x="330" y="8" width="300" height="190" rx="8" fill="rgba(16,185,129,0.06)" stroke="#10b981" stroke-width="1.2"/>
        <text x="480" y="26" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">L2正則化（Ridge）：w₁² + w₂² ≦ C（円）</text>
        <!-- Axes -->
        <line x1="375" y1="112" x2="555" y2="112" stroke="#64748b" stroke-width="1.5"/>
        <line x1="450" y1="36" x2="450" y2="154" stroke="#64748b" stroke-width="1.5"/>
        <text x="562" y="116" fill="#94a3b8" font-size="11">w₁</text>
        <text x="435" y="46" fill="#94a3b8" font-size="11">w₂</text>
        <!-- Circle constraint -->
        <circle cx="450" cy="112" r="38" fill="rgba(16,185,129,0.22)" stroke="#10b981" stroke-width="2.5"/>
        <!-- Loss contours touching off-axis -->
        <ellipse cx="512" cy="58" rx="60" ry="25" transform="rotate(-16 512 58)" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
        <ellipse cx="512" cy="58" rx="34" ry="14" transform="rotate(-16 512 58)" fill="none" stroke="#f43f5e" stroke-width="1.4" stroke-dasharray="3,2"/>
        <circle cx="512" cy="58" r="3.5" fill="#f43f5e"/>
        <!-- Contact Point off axis -->
        <circle cx="473" cy="82" r="6" fill="#fde047" stroke="#0f172a" stroke-width="1.5"/>
        <text x="480" y="172" fill="#6ee7b7" font-size="11" text-anchor="middle" font-weight="bold">★ 円は角がないため軸から外れた位置で接する</text>
        <text x="480" y="188" fill="#f8fafc" font-size="10.5" text-anchor="middle" font-weight="bold">⇒ 重みは 0 に近づくが、完全な 0 にはならない</text>
      </svg>
    </div>
  `,

  "c2-08": `
    <div class="vis-title">📏 サポートベクターマシン（SVM）：マージン最大化とスラック変数 ξ</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 190" class="vis-svg" role="img" aria-label="SVMのマージン最大化とサポートベクター">
        <rect x="10" y="6" width="620" height="178" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Margin Boundaries & Decision Hyperplane -->
        <line x1="120" y1="170" x2="360" y2="18" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5,4"/>
        <line x1="170" y1="170" x2="410" y2="18" stroke="#fde047" stroke-width="3"/>
        <line x1="220" y1="170" x2="460" y2="18" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="5,4"/>

        <!-- Class +1 points (Blue) -->
        <circle cx="95" cy="65" r="7" fill="#38bdf8"/>
        <circle cx="145" cy="48" r="7" fill="#38bdf8"/>
        <circle cx="115" cy="115" r="7" fill="#38bdf8"/>
        <!-- Support Vector on Blue Margin -->
        <circle cx="240" cy="94" r="9" fill="#38bdf8" stroke="#fde047" stroke-width="3"/>
        <circle cx="168" cy="140" r="9" fill="#38bdf8" stroke="#fde047" stroke-width="3"/>

        <!-- Class -1 points (Pink) -->
        <circle cx="385" cy="135" r="7" fill="#f43f5e"/>
        <circle cx="435" cy="105" r="7" fill="#f43f5e"/>
        <circle cx="450" cy="150" r="7" fill="#f43f5e"/>
        <!-- Support Vector on Pink Margin -->
        <circle cx="340" cy="94" r="9" fill="#f43f5e" stroke="#fde047" stroke-width="3"/>

        <!-- Slack variable point violating margin -->
        <circle cx="295" cy="62" r="7" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
        <line x1="295" y1="62" x2="390" y2="62" stroke="#fca5a5" stroke-width="1.8" stroke-dasharray="3,2"/>
        <text x="400" y="65" fill="#fca5a5" font-size="11" font-weight="bold">スラック変数 ξ &gt; 0（ソフトマージンで許容）</text>

        <!-- Labels -->
        <text x="415" y="34" fill="#fde047" font-size="11.5" font-weight="bold">決定境界（分離超平面）</text>
        <text x="425" y="128" fill="#38bdf8" font-size="11" font-weight="bold">● 黄枠の点 ＝ サポートベクター</text>
        <text x="425" y="145" fill="#cbd5e1" font-size="10">（境界に最も近い点だけで超平面が決まる）</text>
        <text x="425" y="163" fill="#6ee7b7" font-size="10.5" font-weight="bold">● 2本の破線間の幅（マージン）を最大化！</text>
      </svg>
    </div>
  `,

  "c2-09": `
    <div class="vis-title">🌀 カーネル法（カーネルトリック）：高次元空間への写像による線形分離</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="カーネルトリックによる高次元写像">
        <!-- Left: 2D Non-linear -->
        <rect x="15" y="12" width="225" height="142" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="127" y="30" fill="#cbd5e1" font-size="11.5" text-anchor="middle" font-weight="bold">元の低次元空間（直線で分離不可能）</text>
        <circle cx="127" cy="95" r="44" fill="none" stroke="#f43f5e" stroke-width="6" stroke-dasharray="8,10"/>
        <circle cx="127" cy="95" r="18" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="5" stroke-dasharray="6,6"/>

        <!-- Middle Arrow -->
        <path d="M252 82 L352 82" stroke="#fde047" stroke-width="3" marker-end="url(#arrow-ch1)"/>
        <text x="302" y="65" fill="#fde047" font-size="12" text-anchor="middle" font-weight="bold">高次元写像 φ(x)</text>
        <text x="302" y="102" fill="#94a3b8" font-size="10.5" text-anchor="middle">内積 K(x, x') だけで</text>
        <text x="302" y="116" fill="#94a3b8" font-size="10.5" text-anchor="middle">直接計算（カーネルトリック）</text>

        <!-- Right: 3D Linearly Separable -->
        <rect x="368" y="12" width="255" height="142" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="495" y="30" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">高次元特徴空間（超平面でスパッと分離！）</text>
        <!-- Blue points lifted up -->
        <circle cx="475" cy="55" r="5" fill="#38bdf8"/><circle cx="495" cy="50" r="5" fill="#38bdf8"/><circle cx="515" cy="56" r="5" fill="#38bdf8"/>
        <!-- Separating Plane -->
        <polygon points="390,92 440,74 600,74 550,92" fill="rgba(16,185,129,0.28)" stroke="#10b981" stroke-width="2"/>
        <!-- Red points at bottom -->
        <circle cx="430" cy="122" r="5" fill="#f43f5e"/><circle cx="465" cy="130" r="5" fill="#f43f5e"/><circle cx="510" cy="128" r="5" fill="#f43f5e"/><circle cx="550" cy="120" r="5" fill="#f43f5e"/>
      </svg>
    </div>
  `,

  "c2-11": `
    <div class="vis-title">🌲 バギング（並列学習：バリアンス低減）vs ブースティング（直列学習：バイアス低減）</div>
    <table class="vis-table">
      <thead>
        <tr><th>比較項目</th><th>バギング（Bagging / ランダムフォレスト）</th><th>ブースティング（AdaBoost / GBDT / LightGBM）</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>学習の進め方</strong></td><td><strong class="vis-hl-cyan">並列（Parallel）</strong>：ブートストラップ標本で同時に独立学習</td><td><strong class="vis-hl-amber">直列（Sequential）</strong>：前のモデルの誤差・誤分類を順番に補正</td></tr>
        <tr><td><strong>主に減らす誤差</strong></td><td><strong class="vis-hl-cyan">バリアンス（Variance：過学習・ばらつき）を低減</strong></td><td><strong class="vis-hl-amber">バイアス（Bias：未学習・偏り）を低減</strong></td></tr>
        <tr><td><strong>ベースモデル</strong></td><td>少し深めの決定木（ランダムフォレストでは特徴量もランダム抽出）</td><td>浅い決定木（弱学習器：Weak Learner）</td></tr>
      </tbody>
    </table>
  `,

  "c2-12": `
    <div class="vis-title">🌿 XGBoost（Level-wise：階層優先）と LightGBM（Leaf-wise：葉優先）の木成長方式の違い</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 155" class="vis-svg" role="img" aria-label="XGBoostのLevel-wiseとLightGBMのLeaf-wise比較">
        <!-- Left: Level-wise -->
        <rect x="10" y="8" width="300" height="140" rx="8" fill="rgba(56,189,248,0.06)" stroke="#0284c7"/>
        <text x="160" y="27" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">XGBoost：Level-wise（深さ・階層ごとに揃えて分割）</text>
        <line x1="160" y1="48" x2="105" y2="85" stroke="#38bdf8" stroke-width="2"/>
        <line x1="160" y1="48" x2="215" y2="85" stroke="#38bdf8" stroke-width="2"/>
        <line x1="105" y1="85" x2="75" y2="125" stroke="#38bdf8" stroke-width="2"/>
        <line x1="105" y1="85" x2="135" y2="125" stroke="#38bdf8" stroke-width="2"/>
        <line x1="215" y1="85" x2="185" y2="125" stroke="#38bdf8" stroke-width="2"/>
        <line x1="215" y1="85" x2="245" y2="125" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="160" cy="48" r="10" fill="#0284c7"/>
        <circle cx="105" cy="85" r="10" fill="#0284c7"/><circle cx="215" cy="85" r="10" fill="#0284c7"/>
        <circle cx="75" cy="125" r="10" fill="#38bdf8"/><circle cx="135" cy="125" r="10" fill="#38bdf8"/>
        <circle cx="185" cy="125" r="10" fill="#38bdf8"/><circle cx="245" cy="125" r="10" fill="#38bdf8"/>

        <!-- Right: Leaf-wise -->
        <rect x="330" y="8" width="300" height="140" rx="8" fill="rgba(16,185,129,0.06)" stroke="#10b981"/>
        <text x="480" y="27" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">LightGBM：Leaf-wise（損失が最も減る葉だけを深掘り）</text>
        <line x1="480" y1="42" x2="430" y2="74" stroke="#10b981" stroke-width="2"/>
        <line x1="480" y1="42" x2="530" y2="74" stroke="#64748b" stroke-width="2"/>
        <line x1="430" y1="74" x2="395" y2="106" stroke="#64748b" stroke-width="2"/>
        <line x1="430" y1="74" x2="465" y2="106" stroke="#10b981" stroke-width="2"/>
        <line x1="465" y1="106" x2="440" y2="136" stroke="#10b981" stroke-width="2"/>
        <line x1="465" y1="106" x2="490" y2="136" stroke="#10b981" stroke-width="2"/>
        <circle cx="480" cy="42" r="9" fill="#10b981"/>
        <circle cx="430" cy="74" r="9" fill="#10b981"/><circle cx="530" cy="74" r="9" fill="#475569"/>
        <circle cx="395" cy="106" r="9" fill="#475569"/><circle cx="465" cy="106" r="9" fill="#fde047"/>
        <circle cx="440" cy="136" r="9" fill="#10b981"/><circle cx="490" cy="136" r="9" fill="#10b981"/>
        <text x="562" y="112" fill="#fde047" font-size="10" text-anchor="middle" font-weight="bold">⚡高速・高精度</text>
        <text x="562" y="127" fill="#fca5a5" font-size="9.5" text-anchor="middle">（少データ時は過学習注意）</text>
      </svg>
    </div>
  `,

  "c2-17": `
    <div class="vis-title">📊 階層的クラスタリングの4つの距離定義比較</div>
    <table class="vis-table">
      <thead>
        <tr><th>手法名</th><th>クラスタ間距離の定義</th><th>特徴・注意点</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-emerald">ウォード法 (Ward)</strong></td><td>結合前後の<strong>「クラスタ内誤差平方和（分散）の増加量」</strong>が最小</td><td><strong>最もバランスが良く綺麗に分かれる（実務・試験で最頻出）</strong></td></tr>
        <tr><td><strong>最短距離法 (単連結)</strong></td><td>2つのクラスタ内の<strong>最も近い2点間</strong>の距離</td><td>数珠つなぎに細長く繋がる<strong>「鎖効果（Chaining Effect）」</strong>が起きやすい</td></tr>
        <tr><td><strong>最長距離法 (完全連結)</strong></td><td>2つのクラスタ内の<strong>最も遠い2点間</strong>の距離</td><td>鎖効果は防げるが、外れ値に敏感</td></tr>
        <tr><td><strong>群平均法</strong></td><td>2つのクラスタ内の<strong>すべての点ペア間の距離の平均</strong></td><td>外れ値に比較的強い</td></tr>
      </tbody>
    </table>
  `,

  "c2-19": `
    <div class="vis-title">📉 主成分分析（PCA）の直交する主成分軸（PC1・PC2）と累積寄与率</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="PCAの第1・第2主成分と累積寄与率">
        <!-- Left: Scatter + PC1/PC2 -->
        <rect x="10" y="8" width="300" height="150" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="160" y="26" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">データの分散が最大になる方向＝第1主成分（PC1）</text>
        <ellipse cx="160" cy="95" rx="85" ry="26" transform="rotate(-25 160 95)" fill="rgba(56,189,248,0.12)" stroke="#475569" stroke-dasharray="3,3"/>
        <!-- PC1 axis -->
        <line x1="72" y1="136" x2="248" y2="54" stroke="#fde047" stroke-width="3" marker-end="url(#arrow-ch1)"/>
        <text x="235" y="46" fill="#fde047" font-size="11.5" font-weight="bold">PC1（分散最大）</text>
        <!-- PC2 axis orthogonal -->
        <line x1="182" y1="142" x2="138" y2="48" stroke="#10b981" stroke-width="2.2" marker-end="url(#arrow-ch1)"/>
        <text x="105" y="52" fill="#6ee7b7" font-size="11" font-weight="bold">PC2（PC1と直交）</text>

        <!-- Right: Cumulative Variance -->
        <rect x="330" y="8" width="300" height="150" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="480" y="26" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">寄与率（棒）と 累積寄与率（折れ線：70〜80%目安）</text>
        <!-- Bars -->
        <rect x="375" y="65" width="34" height="75" fill="#0284c7"/><text x="392" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">PC1(55%)</text>
        <rect x="435" y="102" width="34" height="38" fill="#0284c7"/><text x="452" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">PC2(25%)</text>
        <rect x="495" y="122" width="34" height="18" fill="#0369a1"/><text x="512" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">PC3(12%)</text>
        <rect x="555" y="130" width="34" height="10" fill="#0369a1"/><text x="572" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">PC4(8%)</text>
        <!-- Cumulative Line -->
        <polyline points="392,65 452,48 512,38 572,34" fill="none" stroke="#fde047" stroke-width="2.5"/>
        <circle cx="392" cy="65" r="4" fill="#fde047"/><circle cx="452" cy="48" r="4" fill="#fde047"/>
        <circle cx="512" cy="38" r="4" fill="#fde047"/><circle cx="572" cy="34" r="4" fill="#fde047"/>
        <text x="452" y="42" fill="#fde047" font-size="10.5" text-anchor="middle" font-weight="bold">累積80%</text>
      </svg>
    </div>
  `,

  "c2-23": `
    <div class="vis-title">🛒 アソシエーション分析：ルール「商品X ⇒ 商品Y」の3指標公式</div>
    <table class="vis-table">
      <thead>
        <tr><th>指標名</th><th>数式（全取引数 N）</th><th>直感的な意味</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">支持度 (Support)</strong></td>
          <td><code>P(X ∩ Y) = (XかつYの件数) ÷ N</code></td>
          <td><strong>全取引のうち</strong>、XとYが同時に買われた割合（ルールの普遍性）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">確信度 (Confidence)</strong><br>（信頼度）</td>
          <td><code>P(Y | X) = (XかつYの件数) ÷ (Xの件数)</code></td>
          <td><strong>Xを買った人のうち</strong>、Yも一緒に買った人の割合（条件付き確率）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">リフト値 (Lift)</strong></td>
          <td><code>Confidence ÷ P(Y) = P(X ∩ Y) ÷ {P(X)×P(Y)}</code></td>
          <td>Y全体の購入率に比べ、Xを買うことで<strong>何倍Yが売れやすくなったか</strong>（<strong>1より大なら正の相関</strong>）</td>
        </tr>
      </tbody>
    </table>
  `,

  "c2-24": `
    <div class="vis-title">🔁 k分割交差検証（k=5 の場合：検証用データを1つずつズラして5回評価し平均）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 140" class="vis-svg" role="img" aria-label="5分割交差検証の模式図">
        <text x="15" y="30" fill="#cbd5e1" font-size="11.5" font-weight="bold">1回目</text>
        <rect x="65" y="14" width="85" height="20" rx="3" fill="#f59e0b"/><text x="107" y="28" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">検証 (Val)</text>
        <rect x="155" y="14" width="355" height="20" rx="3" fill="#0284c7"/><text x="332" y="28" fill="#fff" font-size="10.5" text-anchor="middle">訓練データ (Train × 4ブロック)</text>

        <text x="15" y="55" fill="#cbd5e1" font-size="11.5" font-weight="bold">2回目</text>
        <rect x="65" y="39" width="85" height="20" rx="3" fill="#0284c7"/>
        <rect x="155" y="39" width="85" height="20" rx="3" fill="#f59e0b"/><text x="197" y="53" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">検証 (Val)</text>
        <rect x="245" y="39" width="265" height="20" rx="3" fill="#0284c7"/>

        <text x="15" y="80" fill="#cbd5e1" font-size="11.5" font-weight="bold">3回目</text>
        <rect x="65" y="64" width="175" height="20" rx="3" fill="#0284c7"/>
        <rect x="245" y="64" width="85" height="20" rx="3" fill="#f59e0b"/><text x="287" y="78" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">検証 (Val)</text>
        <rect x="335" y="64" width="175" height="20" rx="3" fill="#0284c7"/>

        <text x="15" y="105" fill="#cbd5e1" font-size="11.5" font-weight="bold">4回目</text>
        <rect x="65" y="89" width="265" height="20" rx="3" fill="#0284c7"/>
        <rect x="335" y="89" width="85" height="20" rx="3" fill="#f59e0b"/><text x="377" y="103" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">検証 (Val)</text>
        <rect x="425" y="89" width="85" height="20" rx="3" fill="#0284c7"/>

        <text x="15" y="130" fill="#cbd5e1" font-size="11.5" font-weight="bold">5回目</text>
        <rect x="65" y="114" width="355" height="20" rx="3" fill="#0284c7"/>
        <rect x="425" y="114" width="85" height="20" rx="3" fill="#f59e0b"/><text x="467" y="128" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">検証 (Val)</text>

        <rect x="525" y="14" width="105" height="120" rx="6" fill="rgba(16,185,129,0.16)" stroke="#10b981" stroke-width="1.5"/>
        <text x="577" y="68" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">5回の評価の</text>
        <text x="577" y="86" fill="#fde047" font-size="13" text-anchor="middle" font-weight="bold">平均スコア</text>
        <text x="577" y="104" fill="#cbd5e1" font-size="11" text-anchor="middle">を算出！</text>
      </svg>
    </div>
  `,

  "c2-26": `
    <div class="vis-title">🎯 バイアス・バリアンスのトレードオフ（誤差曲線 ＆ 的当ての4象限）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 185" class="vis-svg" role="img" aria-label="バイアス・バリアンスのトレードオフ曲線とダーツの的">
        <!-- Left: Curve -->
        <rect x="8" y="6" width="315" height="172" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="165" y="24" fill="#e2e8f0" font-size="11.5" text-anchor="middle" font-weight="bold">モデルの複雑さと誤差の分解</text>
        <line x1="40" y1="150" x2="300" y2="150" stroke="#64748b" stroke-width="1.5"/>
        <line x1="40" y1="35" x2="40" y2="150" stroke="#64748b" stroke-width="1.5"/>
        <text x="170" y="168" fill="#94a3b8" font-size="10.5" text-anchor="middle">← 単純（未学習）　モデルの複雑さ　複雑（過学習）→</text>
        <!-- Bias^2 falling -->
        <path d="M50 55 Q 140 135, 290 142" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
        <text x="260" y="135" fill="#38bdf8" font-size="10.5" font-weight="bold">バイアス²</text>
        <!-- Variance rising -->
        <path d="M50 142 Q 190 135, 290 50" fill="none" stroke="#fbbf24" stroke-width="2.2"/>
        <text x="255" y="48" fill="#fbbf24" font-size="10.5" font-weight="bold">バリアンス</text>
        <!-- Total Error U-curve -->
        <path d="M50 45 Q 165 135, 290 42" fill="none" stroke="#f43f5e" stroke-width="2.8"/>
        <text x="165" y="68" fill="#fda4af" font-size="11" text-anchor="middle" font-weight="bold">汎化誤差（合計）</text>
        <line x1="168" y1="88" x2="168" y2="150" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3"/>
        <circle cx="168" cy="89" r="5" fill="#10b981"/>

        <!-- Right: 2x2 Matrix Summary -->
        <rect x="333" y="6" width="298" height="172" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="482" y="24" fill="#e2e8f0" font-size="11.5" text-anchor="middle" font-weight="bold">未学習 vs 過学習のステータス対比</text>
        <rect x="345" y="36" width="274" height="62" rx="6" fill="rgba(56,189,248,0.12)" stroke="#0284c7"/>
        <text x="355" y="55" fill="#38bdf8" font-size="12" font-weight="bold">① 未学習（Underfitting：単純すぎ）</text>
        <text x="355" y="74" fill="#f8fafc" font-size="11">・<tspan fill="#fde047" font-weight="bold">高バイアス</tspan>（的の中心から大きくズレる）</text>
        <text x="355" y="90" fill="#cbd5e1" font-size="11">・低バリアンス（訓練誤差も検証誤差も両方悪い）</text>

        <rect x="345" y="106" width="274" height="62" rx="6" fill="rgba(244,63,94,0.12)" stroke="#f43f5e"/>
        <text x="355" y="125" fill="#fda4af" font-size="12" font-weight="bold">② 過学習（Overfitting：複雑すぎ・丸暗記）</text>
        <text x="355" y="144" fill="#cbd5e1" font-size="11">・低バイアス（訓練データの平均は中心に合う）</text>
        <text x="355" y="160" fill="#f8fafc" font-size="11">・<tspan fill="#fde047" font-weight="bold">高バリアンス</tspan>（訓練データ次第で予測が激しく散らばる）</text>
      </svg>
    </div>
  `,

  // ==================== Chapter 3 ====================
  "c3-01": `
    <div class="vis-title">🧮 混同行列（Confusion Matrix）と 評価指標の分子・分母マップ</div>
    <table class="vis-table">
      <thead>
        <tr>
          <th>実際のクラス ＼ モデルの予測</th>
          <th>予測：陽性（Positive）</th>
          <th>予測：陰性（Negative）</th>
          <th>行方向の指標（実際のクラス基準）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>実際：陽性（Positive）</strong></td>
          <td style="background:rgba(16,185,129,0.2);"><strong class="vis-hl-emerald">TP（真陽性）</strong><br>陽性を正しく陽性と予測</td>
          <td style="background:rgba(239,68,68,0.18);"><strong class="vis-hl-rose">FN（偽陰性：見逃し）</strong><br>第2種の過誤（ぼんやりもの）</td>
          <td><strong class="vis-hl-emerald">再現率 (Recall / 感度 / TPR)</strong><br><code>= TP ÷ (TP + FN)</code></td>
        </tr>
        <tr>
          <td><strong>実際：陰性（Negative）</strong></td>
          <td style="background:rgba(245,158,11,0.18);"><strong class="vis-hl-amber">FP（偽陽性：誤報）</strong><br>第1種の過誤（あわてもの）</td>
          <td style="background:rgba(56,189,248,0.2);"><strong class="vis-hl-cyan">TN（真陰性）</strong><br>陰性を正しく陰性と予測</td>
          <td><strong class="vis-hl-cyan">特異度 (Specificity / TNR)</strong><br><code>= TN ÷ (FP + TN)</code><br><small>※偽陽性率 FPR = FP ÷ (FP + TN)</small></td>
        </tr>
        <tr>
          <td><strong>列方向の指標（予測基準）</strong></td>
          <td><strong class="vis-hl-amber">適合率 (Precision)</strong><br><code>= TP ÷ (TP + FP)</code></td>
          <td>陰性的中率 (NPV)<br><code>= TN ÷ (FN + TN)</code></td>
          <td><strong>正解率 (Accuracy)</strong><br><code>= (TP + TN) ÷ 全データ数</code></td>
        </tr>
      </tbody>
    </table>
  `,

  "c3-06": `
    <div class="vis-title">⚖️ 適合率（Precision）・再現率（Recall）・F1スコアの早見表</div>
    <table class="vis-table">
      <thead>
        <tr><th>指標名</th><th>公式</th><th>どんな時に重視するか（具体例）</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-amber">適合率 (Precision)</strong></td><td><code>TP / (TP + FP)</code></td><td><strong>誤報（FP）を絶対に減らしたい時</strong>：スパムメール判定（重要メールを誤って迷惑メールに入れたくない）、検索エンジンの上位表示</td></tr>
        <tr><td><strong class="vis-hl-emerald">再現率 (Recall / 感度)</strong></td><td><code>TP / (TP + FN)</code></td><td><strong>見逃し（FN）を絶対に減らしたい時</strong>：重大疾患（がん）検診、不良品検知、不正クレジットカード検知</td></tr>
        <tr><td><strong class="vis-hl-cyan">F1スコア（調和平均）</strong></td><td><code>2 × P × R / (P + R)</code></td><td>適合率と再現率のトレードオフをバランスよく1つの数値で評価したい時</td></tr>
      </tbody>
    </table>
  `,

  "c3-07": `
    <div class="vis-title">📈 ROC曲線（横軸：偽陽性率 FPR ／ 縦軸：真陽性率 TPR）と AUC</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 190" class="vis-svg" role="img" aria-label="ROC曲線とAUCの図解">
        <rect x="10" y="6" width="620" height="178" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Plot Box -->
        <rect x="65" y="22" width="160" height="135" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
        <!-- Shaded AUC -->
        <path d="M65 157 Q 72 35, 225 22 L 225 157 Z" fill="rgba(56,189,248,0.22)"/>
        <!-- Random Diagonal Line -->
        <line x1="65" y1="157" x2="225" y2="22" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
        <!-- ROC Curve -->
        <path d="M65 157 Q 72 35, 225 22" fill="none" stroke="#38bdf8" stroke-width="3"/>
        <!-- Ideal Point (0,1) -->
        <circle cx="65" cy="22" r="6" fill="#fde047" stroke="#0f172a" stroke-width="1.5"/>
        <!-- Axis Labels -->
        <text x="145" y="174" fill="#fde047" font-size="11" text-anchor="middle" font-weight="bold">横軸：FPR（偽陽性率 = 1 − 特異度）0→1</text>
        <text x="20" y="92" fill="#6ee7b7" font-size="11" font-weight="bold">縦軸：TPR</text>
        <text x="20" y="106" fill="#6ee7b7" font-size="10">（真陽性率</text>
        <text x="20" y="119" fill="#6ee7b7" font-size="10">＝再現率）</text>

        <!-- Right Explanations -->
        <text x="255" y="40" fill="#fde047" font-size="12.5" font-weight="bold">★ 左上の角 (FPR=0, TPR=1) に張り付くほど優秀！</text>
        <text x="255" y="66" fill="#38bdf8" font-size="12" font-weight="bold">・AUC = 1.0 ：完全な理想モデル（面積最大）</text>
        <text x="255" y="90" fill="#cbd5e1" font-size="12">・AUC = 0.5 ：対角の破線（コイン投げのランダム予測）</text>
        <text x="255" y="120" fill="#fca5a5" font-size="11.5" font-weight="bold">🚨 試験頻出ひっかけ：</text>
        <text x="255" y="140" fill="#e2e8f0" font-size="11">① 縦軸は「適合率」ではなく『真陽性率（TPR＝再現率）』！</text>
        <text x="255" y="158" fill="#e2e8f0" font-size="11">② 横軸は「特異度」ではなく『偽陽性率（FPR＝1−特異度）』！</text>
      </svg>
    </div>
  `,

  "c3-12": `
    <div class="vis-title">🔲 物体検出の評価指標 IoU（Intersection over Union）の視覚図</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 135" class="vis-svg" role="img" aria-label="IoUの積集合と和集合の図解">
        <!-- Intersection Box -->
        <rect x="25" y="15" width="230" height="105" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="140" y="33" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">分子：重なった面積（積集合 A ∩ B）</text>
        <rect x="75" y="45" width="75" height="52" fill="none" stroke="#38bdf8" stroke-width="2"/>
        <rect x="110" y="60" width="75" height="52" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <rect x="110" y="60" width="40" height="37" fill="rgba(16,185,129,0.55)" stroke="#10b981" stroke-width="2"/>

        <text x="285" y="75" fill="#fde047" font-size="22" text-anchor="middle" font-weight="bold">÷</text>

        <!-- Union Box -->
        <rect x="315" y="15" width="300" height="105" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="465" y="33" fill="#fbbf24" font-size="11.5" text-anchor="middle" font-weight="bold">分母：両方合わせた全面積（和集合 A ∪ B = A + B − A∩B）</text>
        <rect x="385" y="45" width="75" height="52" fill="rgba(56,189,248,0.35)" stroke="#38bdf8" stroke-width="2"/>
        <rect x="420" y="60" width="75" height="52" fill="rgba(245,158,11,0.35)" stroke="#f59e0b" stroke-width="2"/>
        <text x="548" y="75" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">完全一致で 1.0</text>
        <text x="548" y="93" fill="#94a3b8" font-size="10.5" text-anchor="middle">（一般に ≧0.5 で正解）</text>
      </svg>
    </div>
  `,

  "c3-13": `
    <div class="vis-title">📝 自然言語処理の3大評価指標（BLEU・ROUGE・Perplexity）の対比</div>
    <table class="vis-table">
      <thead>
        <tr><th>指標名</th><th>ベースとなる考え方</th><th>主な対象タスク</th><th>良否の向き</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">BLEU</strong></td><td>N-gramの<strong>適合率（Precision）</strong>ベース ＋ 短文ペナルティ（BP）</td><td><strong>機械翻訳</strong></td><td><strong>高いほど良い</strong>（最大1.0 / 100）</td></tr>
        <tr><td><strong class="vis-hl-amber">ROUGE</strong></td><td>N-gramや最長共通部分列の<strong>再現率（Recall）</strong>ベース</td><td><strong>自動要約</strong></td><td><strong>高いほど良い</strong></td></tr>
        <tr><td><strong class="vis-hl-emerald">Perplexity (PPL)</strong></td><td>交差エントロピー <code>H</code> の指数 <code>2<sup>H</sup></code>（次単語予測の実効分岐数）</td><td><strong>言語モデル（LLM等）</strong></td><td><strong class="vis-hl-rose">低い（小さい）ほど良い！</strong></td></tr>
      </tbody>
    </table>
  `,

  "c3-17": `
    <div class="vis-title">📐 4大距離尺度・類似度の比較表</div>
    <table class="vis-table">
      <thead>
        <tr><th>名称</th><th>数式・定義</th><th>幾何学的な意味・主な用途</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>ユークリッド距離 (L₂)</strong></td><td><code>√∑(xᵢ − yᵢ)²</code></td><td>2点間を<strong>直線で結んだ最短距離</strong>（k-means等で標準使用）</td></tr>
        <tr><td><strong>マンハッタン距離 (L₁)</strong></td><td><code>∑|xᵢ − yᵢ|</code></td><td>碁盤の目（格子状の道）を<strong>直角に曲がって進む距離</strong>（都市ブロック距離）</td></tr>
        <tr><td><strong class="vis-hl-amber">マハラノビス距離</strong></td><td><code>√((x−μ)ᵀ Σ⁻¹ (x−μ))</code></td><td>データの<strong>分散・共分散（相関）を考慮</strong>した距離（異常検知・外れ値検知で威力）</td></tr>
        <tr><td><strong class="vis-hl-cyan">コサイン類似度</strong></td><td><code>(x・y) / (‖x‖‖y‖) = cos θ</code></td><td>ベクトルの長さ（文字数）に依存せず<strong>「向きの近さ（角度 θ）」</strong>を評価（値域 −1〜+1、文書・埋め込み検索で標準）</td></tr>
      </tbody>
    </table>
  `,

  "c3-21": `
    <div class="vis-title">⚖️ 統計的仮説検定における「第1種の過誤（α）」と「第2種の過誤（β）」</div>
    <table class="vis-table">
      <thead>
        <tr><th>検定の判断 ＼ 真実の状態</th><th>帰無仮説 H₀ が「本当は正しい（差がない）」</th><th>帰無仮説 H₀ が「本当は誤り（差がある）」</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>H₀ を棄却する</strong><br>（「差がある」と判定）</td>
          <td style="background:rgba(245,158,11,0.2);"><strong class="vis-hl-amber">🚨 第1種の過誤（あわてものの誤り）</strong><br>発生確率 ＝ <strong>有意水準 α（例：5%）</strong></td>
          <td style="background:rgba(16,185,129,0.2);"><strong class="vis-hl-emerald">◎ 正しい判定（有意差を正しく検出）</strong><br>確率 ＝ <strong>検出力（Power：1 − β）</strong></td>
        </tr>
        <tr>
          <td><strong>H₀ を棄却しない</strong><br>（「差があるとは言えない」）</td>
          <td style="background:rgba(56,189,248,0.2);"><strong class="vis-hl-cyan">◎ 正しい判定</strong><br>確率 ＝ <code>1 − α</code></td>
          <td style="background:rgba(239,68,68,0.2);"><strong class="vis-hl-rose">🚨 第2種の過誤（ぼんやりものの誤り）</strong><br>本当は差があるのに見逃す（確率 ＝ <strong>β</strong>）</td>
        </tr>
      </tbody>
    </table>
  `,

  // ==================== Chapter 4 ====================
  "c4-01": `
    <div class="vis-title">⚡ 単純パーセプトロン（線形分離可能：AND / OR）と XOR問題（非線形・2層MLPで解決）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="AND, OR, XORの線形分離可能性">
        <!-- AND Gate -->
        <rect x="10" y="8" width="195" height="150" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="107" y="27" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">① AND（直線1本で分離◎）</text>
        <line x1="45" y1="130" x2="165" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <line x1="45" y1="45" x2="45" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="45" cy="130" r="7" fill="#475569"/><text x="45" y="146" fill="#94a3b8" font-size="10" text-anchor="middle">(0,0)</text>
        <circle cx="145" cy="130" r="7" fill="#475569"/><text x="145" y="146" fill="#94a3b8" font-size="10" text-anchor="middle">(1,0)</text>
        <circle cx="45" cy="55" r="7" fill="#475569"/><text x="26" y="59" fill="#94a3b8" font-size="10">(0,1)</text>
        <circle cx="145" cy="55" r="8" fill="#10b981"/><text x="170" y="59" fill="#6ee7b7" font-size="10" font-weight="bold">(1,1)=1</text>
        <line x1="80" y1="40" x2="170" y2="105" stroke="#fde047" stroke-width="2.5"/>

        <!-- OR Gate -->
        <rect x="222" y="8" width="195" height="150" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="320" y="27" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">② OR（直線1本で分離◎）</text>
        <line x1="257" y1="130" x2="377" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <line x1="257" y1="45" x2="257" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="257" cy="130" r="7" fill="#475569"/><text x="257" y="146" fill="#94a3b8" font-size="10" text-anchor="middle">(0,0)=0</text>
        <circle cx="357" cy="130" r="8" fill="#10b981"/><text x="357" y="146" fill="#6ee7b7" font-size="10" text-anchor="middle">(1,0)=1</text>
        <circle cx="257" cy="55" r="8" fill="#10b981"/><text x="238" y="59" fill="#6ee7b7" font-size="10">(0,1)</text>
        <circle cx="357" cy="55" r="8" fill="#10b981"/><text x="378" y="59" fill="#6ee7b7" font-size="10">(1,1)</text>
        <line x1="242" y1="82" x2="325" y2="142" stroke="#fde047" stroke-width="2.5"/>

        <!-- XOR Gate -->
        <rect x="435" y="8" width="195" height="150" rx="8" fill="rgba(239,68,68,0.08)" stroke="#ef4444"/>
        <text x="532" y="27" fill="#fca5a5" font-size="12" text-anchor="middle" font-weight="bold">③ XOR（直線1本では不可能×）</text>
        <line x1="470" y1="130" x2="590" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <line x1="470" y1="45" x2="470" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="470" cy="130" r="7" fill="#475569"/><text x="470" y="146" fill="#94a3b8" font-size="10" text-anchor="middle">(0,0)=0</text>
        <circle cx="570" cy="130" r="8" fill="#f43f5e"/><text x="570" y="146" fill="#fda4af" font-size="10" text-anchor="middle" font-weight="bold">(1,0)=1</text>
        <circle cx="470" cy="55" r="8" fill="#f43f5e"/><text x="450" y="59" fill="#fda4af" font-size="10" font-weight="bold">(0,1)</text>
        <circle cx="570" cy="55" r="7" fill="#475569"/><text x="592" y="59" fill="#94a3b8" font-size="10">(1,1)=0</text>
        <!-- Two lines (MLP hidden layer) -->
        <line x1="455" y1="82" x2="540" y2="142" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>
        <line x1="505" y1="42" x2="588" y2="105" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="532" y="96" fill="#fde047" font-size="10" text-anchor="middle" font-weight="bold">中間層（2層化）で解決！</text>
      </svg>
    </div>
  `,

  "c4-03": `
    <div class="vis-title">🔗 タスク別「出力層の活性化関数」×「損失関数」の鉄板ペア早見表</div>
    <table class="vis-table">
      <thead>
        <tr><th>タスクの種類</th><th>出力層の活性化関数</th><th>出力値の範囲・意味</th><th>ペアとなる損失関数</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>① 回帰問題</strong>（住宅価格・気温予測等）</td>
          <td><strong class="vis-hl-cyan">恒等関数</strong>（そのまま出力）</td>
          <td><code>(−∞, +∞)</code> の連続実数値</td>
          <td><strong>平均二乗誤差（MSE）</strong> / MAE / Huber損失</td>
        </tr>
        <tr>
          <td><strong>② 2値分類</strong>（スパム判定・疾患有無等）</td>
          <td><strong class="vis-hl-amber">シグモイド関数 (Sigmoid)</strong></td>
          <td><code>(0, 1)</code> の陽性確率 <code>p</code></td>
          <td><strong>2値交差エントロピー誤差（Binary Cross-Entropy）</strong></td>
        </tr>
        <tr>
          <td><strong>③ 多クラス分類</strong>（10種類の数字から1つ選択）</td>
          <td><strong class="vis-hl-emerald">ソフトマックス関数 (Softmax)</strong></td>
          <td>各クラス <code>(0, 1)</code> かつ <strong>全クラスの和＝1.0</strong></td>
          <td><strong>交差エントロピー誤差（Cross-Entropy Loss）</strong></td>
        </tr>
        <tr>
          <td><strong>④ マルチラベル分類</strong>（1枚の画像に複数タグ付与）</td>
          <td>各素子に独立な <strong>シグモイド関数</strong></td>
          <td>各クラス独立に <code>(0, 1)</code>（和は1にならない）</td>
          <td>各クラスの <strong>2値交差エントロピー誤差の和</strong></td>
        </tr>
      </tbody>
    </table>
  `,

  "c4-06": `
    <div class="vis-title">📉 シグモイド関数 vs tanh（ハイパボリックタンジェント）の値域・最大微分値の対比</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 175" class="vis-svg" role="img" aria-label="シグモイド関数とtanhの比較">
        <!-- Left: Sigmoid -->
        <rect x="10" y="8" width="300" height="160" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="160" y="25" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">シグモイド関数：値域 (0, 1)・中心 0.5</text>
        <line x1="40" y1="120" x2="280" y2="120" stroke="#64748b" stroke-width="1.2"/>
        <line x1="160" y1="36" x2="160" y2="128" stroke="#64748b" stroke-width="1.2"/>
        <line x1="40" y1="48" x2="280" y2="48" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="150" y="51" fill="#94a3b8" font-size="10" text-anchor="end">1.0</text>
        <text x="150" y="86" fill="#94a3b8" font-size="10" text-anchor="end">0.5</text>
        <!-- Sigmoid curve -->
        <path d="M45 118 C 120 118, 130 84, 160 84 C 190 84, 200 50, 275 50" fill="none" stroke="#38bdf8" stroke-width="2.8"/>
        <!-- Derivative bell curve (max 0.25) -->
        <path d="M55 119 Q 160 86, 265 119" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,2"/>
        <text x="160" y="143" fill="#fda4af" font-size="11" text-anchor="middle" font-weight="bold">★ 導関数（破線）の最大値 ＝ 0.25</text>
        <text x="160" y="159" fill="#fca5a5" font-size="10" text-anchor="middle">（多層で掛け合わされると 0.25ᴸ となり勾配消失！）</text>

        <!-- Right: tanh -->
        <rect x="330" y="8" width="300" height="160" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="480" y="25" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">tanh関数：値域 (−1, 1)・原点 (0,0) 対称</text>
        <line x1="360" y1="82" x2="600" y2="82" stroke="#64748b" stroke-width="1.2"/>
        <line x1="480" y1="36" x2="480" y2="128" stroke="#64748b" stroke-width="1.2"/>
        <text x="470" y="47" fill="#94a3b8" font-size="10" text-anchor="end">+1.0</text>
        <text x="470" y="124" fill="#94a3b8" font-size="10" text-anchor="end">−1.0</text>
        <!-- tanh curve -->
        <path d="M365 120 C 440 120, 455 82, 480 82 C 505 82, 520 44, 595 44" fill="none" stroke="#10b981" stroke-width="2.8"/>
        <!-- Derivative curve (max 1.0) -->
        <path d="M395 82 Q 480 8, 565 82" fill="none" stroke="#fde047" stroke-width="2" stroke-dasharray="4,2"/>
        <text x="480" y="143" fill="#fde047" font-size="11" text-anchor="middle" font-weight="bold">★ 導関数（破線）の最大値 ＝ 1.0</text>
        <text x="480" y="159" fill="#cbd5e1" font-size="10" text-anchor="middle">（ゼロ中心かつ勾配最大1.0のためRNN等で利用）</text>
      </svg>
    </div>
  `,

  "c4-07": `
    <div class="vis-title">⚡ ReLU（ランプ関数）と 派生活性化関数の比較表</div>
    <table class="vis-table">
      <thead>
        <tr><th>活性化関数</th><th>数式・定義</th><th>x &gt; 0 の微分</th><th>x &lt; 0 の挙動・特徴</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">ReLU</strong></td><td><code>f(x) = max(0, x)</code></td><td><strong>常に 1（勾配消失しない）</strong></td><td><strong>常に 0</strong>（負になり続けるとニューロンが死ぬ Dying ReLU 問題）</td></tr>
        <tr><td><strong>Leaky ReLU / PReLU</strong></td><td><code>x (x≧0), αx (x&lt;0)</code></td><td>1</td><td>負の領域でも小さな傾き <code>α</code>（0.01や学習パラメータ）を残し Dying ReLU を防止</td></tr>
        <tr><td><strong>ELU</strong></td><td><code>x (x≧0), α(eˣ−1) (x&lt;0)</code></td><td>1</td><td>負の領域を指数関数で滑らかに飽和させ、出力平均を 0 に近づける</td></tr>
        <tr><td><strong class="vis-hl-emerald">Swish / GELU</strong></td><td><code>Swish = x・σ(βx)</code></td><td>滑らかに1へ漸近</td><td>原点付近が滑らかに微分可能。<strong>Transformer（BERT/GPT）や最新CNNで標準採用</strong></td></tr>
      </tbody>
    </table>
  `,

  "c4-12": `
    <div class="vis-title">🚀 最適化手法（オプティマイザ）の進化系譜マップ：なぜ Adam が決定版なのか？</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="SGDからMomentum、AdaGrad、RMSProp、Adamへの進化系譜">
        <!-- Root: SGD -->
        <rect x="15" y="60" width="95" height="44" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.8"/>
        <text x="62" y="80" fill="#f8fafc" font-size="12" text-anchor="middle" font-weight="bold">SGD</text>
        <text x="62" y="95" fill="#94a3b8" font-size="9.5" text-anchor="middle">確率的勾配降下法</text>

        <!-- Upper Branch: Momentum -->
        <path d="M110 72 L162 38" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="168" y="14" width="265" height="46" rx="6" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="1.8"/>
        <text x="300" y="34" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">① 慣性・方向改善系：Momentum / NAG</text>
        <text x="300" y="50" fill="#cbd5e1" font-size="10" text-anchor="middle">過去の勾配の移動平均(1次モーメント)で振動抑制</text>

        <!-- Lower Branch: AdaGrad -> RMSProp -->
        <path d="M110 92 L168 122" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="175" y="100" width="115" height="48" rx="6" fill="rgba(245,158,11,0.14)" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="232" y="120" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">AdaGrad</text>
        <text x="232" y="136" fill="#fca5a5" font-size="9.5" text-anchor="middle">二乗和で割る(後半停止)</text>

        <path d="M292 124 L318 124" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="324" y="100" width="135" height="48" rx="6" fill="rgba(245,158,11,0.2)" stroke="#fbbf24" stroke-width="1.8"/>
        <text x="391" y="120" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">② RMSProp</text>
        <text x="391" y="136" fill="#e2e8f0" font-size="9.5" text-anchor="middle">二乗の指数移動平均(2次)</text>

        <!-- Merge into Adam -->
        <path d="M435 37 L485 68" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-ch1)"/>
        <path d="M460 120 L485 92" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-ch1)"/>
        <rect x="492" y="48" width="136" height="68" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2.2"/>
        <text x="560" y="72" fill="#6ee7b7" font-size="13.5" text-anchor="middle" font-weight="bold">★ Adam / AdamW</text>
        <text x="560" y="90" fill="#fde047" font-size="10.5" text-anchor="middle" font-weight="bold">Momentum ＋ RMSProp</text>
        <text x="560" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">（1次＋2次モーメント統合）</text>
      </svg>
    </div>
  `,

  "c4-16": `
    <div class="vis-title">🧊 4大正規化手法（Batch / Layer / Instance / Group Norm）が平均・分散をとる軸の比較</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 155" class="vis-svg" role="img" aria-label="Batch Norm, Layer Norm, Instance Norm, Group Normの正規化軸比較">
        <!-- 1. Batch Norm -->
        <rect x="8" y="8" width="148" height="138" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="82" y="26" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">① Batch Norm</text>
        <rect x="28" y="38" width="22" height="58" fill="#38bdf8" stroke="#fff" stroke-width="1.2"/>
        <rect x="52" y="38" width="66" height="58" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <text x="82" y="114" fill="#e2e8f0" font-size="10" text-anchor="middle">同じチャネルCを</text>
        <text x="82" y="128" fill="#fde047" font-size="10.5" text-anchor="middle" font-weight="bold">バッチ N 方向で正規化</text>
        <text x="82" y="141" fill="#94a3b8" font-size="9.5" text-anchor="middle">（CNNで標準・小バッチに弱い）</text>

        <!-- 2. Layer Norm -->
        <rect x="166" y="8" width="148" height="138" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="240" y="26" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">② Layer Norm</text>
        <rect x="186" y="38" width="90" height="18" fill="#10b981" stroke="#fff" stroke-width="1.2"/>
        <rect x="186" y="58" width="90" height="38" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <text x="240" y="114" fill="#e2e8f0" font-size="10" text-anchor="middle">1サンプル内の</text>
        <text x="240" y="128" fill="#6ee7b7" font-size="10.5" text-anchor="middle" font-weight="bold">全チャネル・特徴量を正規化</text>
        <text x="240" y="141" fill="#fde047" font-size="9.5" text-anchor="middle" font-weight="bold">（RNN・Transformerで標準！）</text>

        <!-- 3. Instance Norm -->
        <rect x="324" y="8" width="148" height="138" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="398" y="26" fill="#fbbf24" font-size="11.5" text-anchor="middle" font-weight="bold">③ Instance Norm</text>
        <rect x="344" y="38" width="90" height="58" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <rect x="344" y="38" width="22" height="18" fill="#f59e0b" stroke="#fff" stroke-width="1.2"/>
        <text x="398" y="114" fill="#e2e8f0" font-size="10" text-anchor="middle">1サンプル・1チャネルの</text>
        <text x="398" y="128" fill="#fbbf24" font-size="10.5" text-anchor="middle" font-weight="bold">空間 (H, W) のみ正規化</text>
        <text x="398" y="141" fill="#94a3b8" font-size="9.5" text-anchor="middle">（画風・スタイル変換で活躍）</text>

        <!-- 4. Group Norm -->
        <rect x="482" y="8" width="150" height="138" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="557" y="26" fill="#f43f5e" font-size="11.5" text-anchor="middle" font-weight="bold">④ Group Norm</text>
        <rect x="502" y="38" width="90" height="58" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <rect x="502" y="38" width="45" height="18" fill="#f43f5e" stroke="#fff" stroke-width="1.2"/>
        <text x="557" y="114" fill="#e2e8f0" font-size="10" text-anchor="middle">1サンプル内のチャネルを</text>
        <text x="557" y="128" fill="#fda4af" font-size="10.5" text-anchor="middle" font-weight="bold">数グループに分けて正規化</text>
        <text x="557" y="141" fill="#94a3b8" font-size="9.5" text-anchor="middle">（小バッチの物体検出で有効）</text>
      </svg>
    </div>
  `,

  "c4-18": `
    <div class="vis-title">🛑 学習曲線（Learning Curve）と 早期終了（Early Stopping）の打ち切りポイント</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="Early Stoppingの学習曲線">
        <rect x="10" y="6" width="620" height="152" rx="8" fill="#0f172a" stroke="#334155"/>
        <line x1="55" y1="135" x2="365" y2="135" stroke="#64748b" stroke-width="1.5"/>
        <line x1="55" y1="20" x2="55" y2="135" stroke="#64748b" stroke-width="1.5"/>
        <text x="210" y="152" fill="#94a3b8" font-size="10.5" text-anchor="middle">学習エポック数（Epoch） →</text>
        <text x="30" y="80" fill="#94a3b8" font-size="10.5" text-anchor="middle">Loss</text>

        <!-- Train Loss -->
        <path d="M65 30 Q 140 110, 350 126" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="348" y="118" fill="#38bdf8" font-size="10.5" text-anchor="end" font-weight="bold">訓練誤差 (Train Loss)</text>

        <!-- Validation Loss -->
        <path d="M65 38 Q 160 105, 210 95 T 350 45" fill="none" stroke="#f43f5e" stroke-width="2.8"/>
        <text x="348" y="42" fill="#fda4af" font-size="10.5" text-anchor="end" font-weight="bold">検証誤差 (Validation Loss)</text>

        <!-- Early Stopping Line -->
        <line x1="195" y1="22" x2="195" y2="135" stroke="#fde047" stroke-width="2" stroke-dasharray="4,3"/>
        <circle cx="195" cy="96" r="5.5" fill="#fde047" stroke="#0f172a" stroke-width="1.5"/>
        <text x="195" y="18" fill="#fde047" font-size="11" text-anchor="middle" font-weight="bold">★ Early Stopping（ここで停止！）</text>

        <!-- Right Note -->
        <text x="382" y="48" fill="#fde047" font-size="11.5" font-weight="bold">⚡ 試験で狙われるポイント：</text>
        <text x="382" y="72" fill="#f8fafc" font-size="10.5">・訓練誤差（青）は下がり続けているのに、</text>
        <text x="382" y="90" fill="#fda4af" font-size="10.5" font-weight="bold">　『検証誤差（赤）が底を打って上昇し始めた瞬間』</text>
        <text x="382" y="108" fill="#f8fafc" font-size="10.5">　＝ 過学習（Overfitting）の始まり！</text>
        <text x="382" y="132" fill="#6ee7b7" font-size="10.5">・この最小地点の重みを保存して学習を打ち切る。</text>
      </svg>
    </div>
  `,

  "c4-20": `
    <div class="vis-title">🖼️ 画像データ拡張の3大手法（Cutout・Mixup・CutMix）の比較</div>
    <table class="vis-table">
      <thead>
        <tr><th>手法名</th><th>画像の加工方法</th><th>正解ラベル（One-Hot）の扱い</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">① Cutout</strong><br>(Random Erasing)</td>
          <td>画像の一部の矩形領域を<strong>黒やランダム値で塗りつぶして隠す</strong></td>
          <td><strong>元のラベルのまま変えない</strong><br>例：<code>[犬: 1.0, 猫: 0.0]</code></td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">② Mixup</strong></td>
          <td>2枚の画像全体を<strong>半透明（比率 <code>λ : 1−λ</code>）で重ね合わせてブレンド</strong>する</td>
          <td><strong>比率 <code>λ</code> でラベルも線形混合する</strong><br>例：<code>[犬: 0.6, 猫: 0.4]</code></td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">③ CutMix</strong></td>
          <td>画像の一部を矩形に切り抜き、そこに<strong>別の画像のパッチをそのまま貼り付ける</strong></td>
          <td><strong>貼り付けた面積の比率でラベルを混合する</strong><br>例：面積30%貼付なら <code>[犬: 0.7, 猫: 0.3]</code></td>
        </tr>
      </tbody>
    </table>
  `,

  "c4-22": `
    <div class="vis-title">🔄 転移学習（Transfer Learning）と ファインチューニング（Fine-Tuning）の重み更新範囲の違い</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 140" class="vis-svg" role="img" aria-label="転移学習とファインチューニングの比較">
        <!-- Row 1: Transfer Learning -->
        <text x="15" y="25" fill="#38bdf8" font-size="12" font-weight="bold">① 狭義の転移学習（特徴抽出器として利用）：手元データが極少のとき</text>
        <rect x="15" y="33" width="410" height="32" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
        <text x="220" y="53" fill="#94a3b8" font-size="11.5" text-anchor="middle" font-weight="bold">🔒 事前学習済み中間層（重みを固定 Freeze：一切更新しない）</text>
        <path d="M430 49 L455 49" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="462" y="33" width="160" height="32" rx="6" fill="rgba(244,63,94,0.22)" stroke="#f43f5e" stroke-width="2"/>
        <text x="542" y="53" fill="#fda4af" font-size="11.5" text-anchor="middle" font-weight="bold">🔥 新しい出力層のみ学習</text>

        <!-- Row 2: Fine-Tuning -->
        <text x="15" y="92" fill="#6ee7b7" font-size="12" font-weight="bold">② ファインチューニング（微調整）：手元データがある程度あるとき</text>
        <rect x="15" y="100" width="410" height="32" rx="6" fill="rgba(16,185,129,0.18)" stroke="#10b981" stroke-width="2"/>
        <text x="220" y="120" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">🔓 事前学習済み中間層も「小さな学習率」で一緒に再学習（微調整）</text>
        <path d="M430 116 L455 116" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="462" y="100" width="160" height="32" rx="6" fill="rgba(244,63,94,0.22)" stroke="#f43f5e" stroke-width="2"/>
        <text x="542" y="120" fill="#fda4af" font-size="11.5" text-anchor="middle" font-weight="bold">🔥 新しい出力層を学習</text>
      </svg>
    </div>
  `,

  // ==================== Chapter 5 ====================
  "c5-03": `
    <div class="vis-title">🧮 【試験必出の2大計算公式】CNN出力サイズ ＆ 畳み込み層パラメータ数</div>
    <div class="vis-formula-grid">
      <div class="vis-formula-card">
        <div class="vis-formula-head">① 特徴マップの出力サイズ O</div>
        <div class="vis-formula-eq">O = ⌊ (入力 I ＋ 2×パディング P − フィルタ F) ÷ ストライド S ⌋ ＋ 1</div>
        <div class="vis-formula-sub">※パディングは上下（左右）両端に付くので<strong>「2P」</strong>！割った後に必ず<strong>「＋1」</strong>する！</div>
      </div>
      <div class="vis-formula-card">
        <div class="vis-formula-head">② 畳み込み層の重みパラメータ総数</div>
        <div class="vis-formula-eq">(タテ K × ヨコ K × 入力ch数 C<sub>in</sub> ＋ バイアス 1) × 出力フィルタ枚数 C<sub>out</sub></div>
        <div class="vis-formula-sub">※重み共有するため、<strong>入力画像の縦横サイズ (H, W) には一切依存しない！</strong></div>
      </div>
    </div>
  `,

  "c5-04": `
    <div class="vis-title">🔍 Depthwise Separable 畳み込み（MobileNet）と Dilated 畳み込み（WaveNet/DeepLab）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 155" class="vis-svg" role="img" aria-label="Depthwise Separable畳み込みとDilated畳み込み">
        <!-- Left: Depthwise Separable -->
        <rect x="8" y="8" width="355" height="140" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="185" y="27" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">Depthwise Separable 畳み込み（計算量を約1/8〜1/9に削減）</text>
        <rect x="22" y="45" width="142" height="65" rx="6" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="93" y="68" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">① Depthwise 畳み込み</text>
        <text x="93" y="86" fill="#cbd5e1" font-size="10" text-anchor="middle">各チャネルごとに独立して</text>
        <text x="93" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">空間方向 (3×3) のみ畳み込む</text>

        <path d="M168 78 L195 78" stroke="#fde047" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <rect x="202" y="45" width="148" height="65" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="1.5"/>
        <text x="276" y="68" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">② Pointwise 畳み込み</text>
        <text x="276" y="86" fill="#cbd5e1" font-size="10" text-anchor="middle">1×1 畳み込みで</text>
        <text x="276" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">チャネル方向の情報を統合</text>
        <text x="185" y="134" fill="#fde047" font-size="10.5" text-anchor="middle">採用モデル：MobileNet v1/v2、Xception</text>

        <!-- Right: Dilated Convolution -->
        <rect x="375" y="8" width="257" height="140" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="503" y="27" fill="#fbbf24" font-size="12" text-anchor="middle" font-weight="bold">Dilated（膨張）畳み込み</text>
        <!-- 5x5 grid with 9 dilated active cells -->
        <g transform="translate(395, 42)">
          <rect x="0" y="0" width="80" height="80" fill="#1e293b" stroke="#64748b"/>
          <circle cx="8" cy="8" r="5" fill="#fbbf24"/><circle cx="40" cy="8" r="5" fill="#fbbf24"/><circle cx="72" cy="8" r="5" fill="#fbbf24"/>
          <circle cx="8" cy="40" r="5" fill="#fbbf24"/><circle cx="40" cy="40" r="5" fill="#fde047"/><circle cx="72" cy="40" r="5" fill="#fbbf24"/>
          <circle cx="8" cy="72" r="5" fill="#fbbf24"/><circle cx="40" cy="72" r="5" fill="#fbbf24"/><circle cx="72" cy="72" r="5" fill="#fbbf24"/>
        </g>
        <text x="552" y="65" fill="#e2e8f0" font-size="10.5" text-anchor="middle">3×3のパラメータ数</text>
        <text x="552" y="82" fill="#fde047" font-size="10.5" text-anchor="middle" font-weight="bold">（9個）のまま隙間を</text>
        <text x="552" y="99" fill="#fde047" font-size="10.5" text-anchor="middle" font-weight="bold">空けて5×5の広い</text>
        <text x="552" y="116" fill="#6ee7b7" font-size="10.5" text-anchor="middle" font-weight="bold">受容野を獲得！</text>
      </svg>
    </div>
  `,

  "c5-07": `
    <div class="vis-title">🌉 ResNetの残差ブロック（Skip Connection：H(x) = F(x) + x）の構造図</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 135" class="vis-svg" role="img" aria-label="ResNetのスキップ接続と残差ブロック">
        <rect x="10" y="6" width="620" height="122" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Input x -->
        <text x="42" y="84" fill="#fde047" font-size="13" font-weight="bold">入力 x</text>
        <line x1="88" y1="80" x2="145" y2="80" stroke="#e2e8f0" stroke-width="2.5" marker-end="url(#arrow-ch1)"/>

        <!-- Weight Layers F(x) -->
        <rect x="150" y="58" width="110" height="44" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
        <text x="205" y="78" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">畳み込み層＋BN</text>
        <text x="205" y="93" fill="#94a3b8" font-size="10" text-anchor="middle">+ ReLU</text>

        <line x1="260" y1="80" x2="295" y2="80" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <rect x="300" y="58" width="110" height="44" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
        <text x="355" y="78" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">畳み込み層＋BN</text>
        <text x="355" y="93" fill="#cbd5e1" font-size="10.5" text-anchor="middle">残差 F(x)</text>

        <!-- Skip Connection Arch -->
        <path d="M110 80 L110 24 L465 24 L465 62" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-ch1)"/>
        <text x="288" y="19" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">★ スキップ接続（Shortcut：恒等写像 x をそのままバイパス → 微分しても +1 で勾配が消えない！）</text>

        <!-- Addition Node -->
        <line x1="410" y1="80" x2="447" y2="80" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <circle cx="465" cy="80" r="15" fill="#10b981"/>
        <text x="465" y="86" fill="#0f172a" font-size="18" text-anchor="middle" font-weight="bold">＋</text>

        <line x1="480" y1="80" x2="502" y2="80" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-ch1)"/>
        <text x="562" y="76" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">H(x) = F(x) + x</text>
        <text x="562" y="94" fill="#94a3b8" font-size="9.5" text-anchor="middle">（DenseNetは連結）</text>
      </svg>
    </div>
  `,

  "c5-09": `
    <div class="vis-title">🔄 通常ResNetボトルネック（太→細→太）vs MobileNet v2 逆残差（細→太→細）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 135" class="vis-svg" role="img" aria-label="ResNetボトルネックとMobileNet v2逆残差構造の比較">
        <!-- Left: Standard Bottleneck -->
        <rect x="10" y="8" width="300" height="120" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="160" y="27" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">通常のボトルネック（ResNet：太 → 細 → 太）</text>
        <rect x="45" y="40" width="42" height="72" rx="4" fill="#0284c7"/><text x="66" y="80" fill="#fff" font-size="10.5" text-anchor="middle" font-weight="bold">256ch</text>
        <path d="M92 76 L128 76" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="135" y="58" width="42" height="36" rx="4" fill="#38bdf8"/><text x="156" y="80" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">64ch</text>
        <path d="M182 76 L218 76" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="225" y="40" width="42" height="72" rx="4" fill="#0284c7"/><text x="246" y="80" fill="#fff" font-size="10.5" text-anchor="middle" font-weight="bold">256ch</text>

        <!-- Right: Inverted Residual -->
        <rect x="330" y="8" width="300" height="120" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="480" y="27" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">MobileNet v2 逆残差（Inverted Residual：細 → 太 → 細）</text>
        <rect x="365" y="58" width="42" height="36" rx="4" fill="#10b981"/><text x="386" y="80" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">24ch</text>
        <path d="M412 76 L448 76" stroke="#fde047" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="455" y="40" width="52" height="72" rx="4" fill="#f59e0b"/><text x="481" y="75" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">144ch</text><text x="481" y="90" fill="#0f172a" font-size="9" text-anchor="middle">(6倍拡大)</text>
        <path d="M512 76 L548 76" stroke="#fde047" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="555" y="58" width="42" height="36" rx="4" fill="#10b981"/><text x="576" y="80" fill="#0f172a" font-size="10.5" text-anchor="middle" font-weight="bold">24ch</text>
      </svg>
    </div>
  `,

  "c5-14": `
    <div class="vis-title">🎨 画像セグメンテーション3種類の決定的な違い（Semantic・Instance・Panoptic）</div>
    <table class="vis-table">
      <thead>
        <tr><th>種類</th><th>ピクセル分類の対象</th><th>同じクラス（例：3人の歩行者）の区別</th><th>代表モデル</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">① セマンティック<br>セグメンテーション</strong></td>
          <td>背景（空・道路）を含む<strong>全ピクセル</strong></td>
          <td><strong class="vis-hl-rose">× 区別しない</strong>（3人ともすべて同じ「人クラスの色」で塗る）</td>
          <td>FCN、SegNet、<strong>U-Net</strong>、DeepLab</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">② インスタンス<br>セグメンテーション</strong></td>
          <td>検出された<strong>物体（Thing）のみ</strong>（背景は塗らない）</td>
          <td><strong class="vis-hl-emerald">◎ 個体ごとに別々に区別する</strong>（人A・人B・人Cを別色で分離）</td>
          <td><strong>Mask R-CNN</strong>、YOLACT</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">③ パノプティック<br>セグメンテーション</strong></td>
          <td><strong>全ピクセル（背景Stuff ＋ 物体Thing の統合）</strong></td>
          <td><strong class="vis-hl-emerald">◎ 背景も塗り分けつつ、物体個体も1人ずつ区別する</strong></td>
          <td>Panoptic FPN、Mask2Former</td>
        </tr>
      </tbody>
    </table>
  `,

  "c5-17": `
    <div class="vis-title">🧠 LSTM（記憶セルCEC＋3ゲート）と GRU（記憶セル統合＋2ゲート）の構造比較</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 145" class="vis-svg" role="img" aria-label="LSTMのCECと3つのゲート構造">
        <rect x="10" y="6" width="620" height="132" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- CEC Conveyor Belt -->
        <line x1="30" y1="36" x2="605" y2="36" stroke="#10b981" stroke-width="4" marker-end="url(#arrow-ch1)"/>
        <text x="320" y="24" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">★ CEC（Constant Error Carousel：記憶セル Cₜ）＝ 勾配が消えずに流れるベルトコンベア</text>

        <!-- Gate 1: Forget Gate -->
        <circle cx="145" cy="36" r="11" fill="#f43f5e"/><text x="145" y="40" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">×</text>
        <rect x="85" y="68" width="120" height="54" rx="6" fill="rgba(244,63,94,0.16)" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="145" y="88" fill="#fda4af" font-size="11.5" text-anchor="middle" font-weight="bold">① 忘却ゲート</text>
        <text x="145" y="104" fill="#cbd5e1" font-size="10" text-anchor="middle">過去の記憶をどれだけ</text>
        <text x="145" y="116" fill="#cbd5e1" font-size="10" text-anchor="middle">忘れるか (0〜1)</text>
        <line x1="145" y1="68" x2="145" y2="49" stroke="#f43f5e" stroke-width="2"/>

        <!-- Gate 2: Input Gate -->
        <circle cx="320" cy="36" r="11" fill="#38bdf8"/><text x="320" y="40" fill="#0f172a" font-size="13" text-anchor="middle" font-weight="bold">＋</text>
        <rect x="260" y="68" width="120" height="54" rx="6" fill="rgba(56,189,248,0.16)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="320" y="88" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">② 入力ゲート</text>
        <text x="320" y="104" fill="#cbd5e1" font-size="10" text-anchor="middle">現在の新情報をどれだけ</text>
        <text x="320" y="116" fill="#cbd5e1" font-size="10" text-anchor="middle">書き込むか (0〜1)</text>
        <line x1="320" y1="68" x2="320" y2="49" stroke="#38bdf8" stroke-width="2"/>

        <!-- Gate 3: Output Gate -->
        <circle cx="495" cy="36" r="11" fill="#fbbf24"/><text x="495" y="40" fill="#0f172a" font-size="11" text-anchor="middle" font-weight="bold">→</text>
        <rect x="435" y="68" width="120" height="54" rx="6" fill="rgba(245,158,11,0.16)" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="495" y="88" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">③ 出力ゲート</text>
        <text x="495" y="104" fill="#cbd5e1" font-size="10" text-anchor="middle">記憶セルから隠れ状態 hₜ</text>
        <text x="495" y="116" fill="#cbd5e1" font-size="10" text-anchor="middle">へどれだけ出すか (0〜1)</text>
        <line x1="495" y1="68" x2="495" y2="49" stroke="#fbbf24" stroke-width="2"/>
      </svg>
    </div>
  `,

  "c5-20": `
    <div class="vis-title">🎙️ 音声特徴量 MFCC（メル周波数ケプストラム係数）の5段階抽出フロー（順序問題対策）</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 1</div>
        <div class="vis-flow-head">① 窓関数</div>
        <div class="vis-flow-desc">プリエンファシス（高域強調）＋ハミング窓で短時間フレーム切り出し</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 2</div>
        <div class="vis-flow-head">② フーリエ変換</div>
        <div class="vis-flow-desc">FFTにより時間領域の波形を周波数スペクトルへ変換</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 3</div>
        <div class="vis-flow-head">③ メルフィルタバンク</div>
        <div class="vis-flow-desc">人間の聴覚特性（低音に敏感・高音に鈍感）に合わせて丸める</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 4</div>
        <div class="vis-flow-head">④ 対数変換 (log)</div>
        <div class="vis-flow-desc">振幅の対数をとり声道特性と音源特性を加法分離</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 5</div>
        <div class="vis-flow-head">⑤ 離散コサイン変換</div>
        <div class="vis-flow-desc">DCT（逆フーリエ変換）し低次成分（12〜13次元）をMFCCとして抽出</div>
      </div>
    </div>
  `,

  "c5-22": `
    <div class="vis-title">🔤 Word2Vecの2大構造：CBOW（周辺語→中心語）vs Skip-gram（中心語→周辺語）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="CBOWとSkip-gramのネットワーク構造比較">
        <!-- Left: CBOW -->
        <rect x="10" y="8" width="300" height="150" rx="8" fill="rgba(56,189,248,0.06)" stroke="#0284c7"/>
        <text x="160" y="27" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">① CBOW：周辺の文脈語 ➔ 中心の1単語を予測</text>
        <rect x="25" y="45" width="72" height="24" rx="4" fill="#1e293b" stroke="#38bdf8"/><text x="61" y="61" fill="#e2e8f0" font-size="10.5" text-anchor="middle">周辺語 wₜ₋₁</text>
        <rect x="25" y="105" width="72" height="24" rx="4" fill="#1e293b" stroke="#38bdf8"/><text x="61" y="121" fill="#e2e8f0" font-size="10.5" text-anchor="middle">周辺語 wₜ₊₁</text>
        <line x1="97" y1="57" x2="148" y2="85" stroke="#38bdf8" stroke-width="2"/>
        <line x1="97" y1="117" x2="148" y2="89" stroke="#38bdf8" stroke-width="2"/>
        <rect x="148" y="68" width="42" height="38" rx="4" fill="#0284c7"/><text x="169" y="91" fill="#fff" font-size="10.5" text-anchor="middle" font-weight="bold">中間層</text>
        <line x1="190" y1="87" x2="218" y2="87" stroke="#fde047" stroke-width="2.5" marker-end="url(#arrow-ch1)"/>
        <rect x="224" y="72" width="75" height="30" rx="4" fill="#10b981"/><text x="261" y="91" fill="#0f172a" font-size="11" text-anchor="middle" font-weight="bold">中心語 wₜ</text>
        <text x="160" y="148" fill="#cbd5e1" font-size="10.5" text-anchor="middle">特徴：学習が<tspan fill="#fde047" font-weight="bold">高速</tspan>・頻出語に強い</text>

        <!-- Right: Skip-gram -->
        <rect x="330" y="8" width="300" height="150" rx="8" fill="rgba(245,158,11,0.06)" stroke="#d97706"/>
        <text x="480" y="27" fill="#fbbf24" font-size="12" text-anchor="middle" font-weight="bold">② Skip-gram：中心の1単語 ➔ 周辺の文脈語を予測</text>
        <rect x="345" y="72" width="75" height="30" rx="4" fill="#f59e0b"/><text x="382" y="91" fill="#0f172a" font-size="11" text-anchor="middle" font-weight="bold">中心語 wₜ</text>
        <line x1="420" y1="87" x2="452" y2="87" stroke="#fbbf24" stroke-width="2.5"/>
        <rect x="452" y="68" width="42" height="38" rx="4" fill="#d97706"/><text x="473" y="91" fill="#fff" font-size="10.5" text-anchor="middle" font-weight="bold">中間層</text>
        <line x1="494" y1="85" x2="538" y2="57" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <line x1="494" y1="89" x2="538" y2="117" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="544" y="45" width="72" height="24" rx="4" fill="#1e293b" stroke="#fbbf24"/><text x="580" y="61" fill="#e2e8f0" font-size="10.5" text-anchor="middle">周辺語 wₜ₋₁</text>
        <rect x="544" y="105" width="72" height="24" rx="4" fill="#1e293b" stroke="#fbbf24"/><text x="580" y="121" fill="#e2e8f0" font-size="10.5" text-anchor="middle">周辺語 wₜ₊₁</text>
        <text x="480" y="148" fill="#cbd5e1" font-size="10.5" text-anchor="middle">特徴：計算は重いが<tspan fill="#fde047" font-weight="bold">低頻度語・意味精度に強い</tspan></text>
      </svg>
    </div>
  `,

  "c5-24": `
    <div class="vis-title">⚡ Transformerの核心：Scaled Dot-Product Attention の計算フロー</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 125" class="vis-svg" role="img" aria-label="Scaled Dot-Product Attentionの計算ブロック図">
        <rect x="10" y="6" width="620" height="112" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Q and K -->
        <rect x="22" y="22" width="66" height="28" rx="5" fill="#0284c7"/><text x="55" y="40" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">Query (Q)</text>
        <rect x="22" y="58" width="66" height="28" rx="5" fill="#0369a1"/><text x="55" y="76" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">Key (K)</text>
        <line x1="88" y1="36" x2="120" y2="48" stroke="#38bdf8" stroke-width="2"/>
        <line x1="88" y1="72" x2="120" y2="56" stroke="#38bdf8" stroke-width="2"/>

        <!-- MatMul QK^T -->
        <rect x="120" y="34" width="78" height="36" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="159" y="50" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="bold">内積 QKᵀ</text>
        <text x="159" y="64" fill="#94a3b8" font-size="9.5" text-anchor="middle">類似度計算</text>

        <line x1="198" y1="52" x2="225" y2="52" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <!-- Scale / sqrt(d_k) -->
        <rect x="230" y="30" width="118" height="44" rx="6" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
        <text x="289" y="49" fill="#fde047" font-size="12" text-anchor="middle" font-weight="bold">÷ √dₖ (Scale)</text>
        <text x="289" y="65" fill="#fda4af" font-size="9.5" text-anchor="middle">勾配消失を防ぐスケーリング</text>

        <line x1="348" y1="52" x2="375" y2="52" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <!-- Softmax -->
        <rect x="380" y="34" width="84" height="36" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="422" y="50" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">Softmax</text>
        <text x="422" y="64" fill="#cbd5e1" font-size="9.5" text-anchor="middle">重みの和=1化</text>

        <!-- Value V -->
        <rect x="380" y="80" width="84" height="26" rx="5" fill="#d97706"/><text x="422" y="97" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">Value (V)</text>

        <line x1="464" y1="52" x2="500" y2="62" stroke="#fbbf24" stroke-width="2"/>
        <line x1="464" y1="93" x2="500" y2="72" stroke="#fbbf24" stroke-width="2"/>

        <!-- Output -->
        <rect x="500" y="46" width="118" height="42" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
        <text x="559" y="64" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">加重平均 × V</text>
        <text x="559" y="80" fill="#e2e8f0" font-size="10" text-anchor="middle">Attention出力</text>
      </svg>
    </div>
  `,

  "c5-26": `
    <div class="vis-title">🏗️ Transformer系言語モデルの3大アーキテクチャ分類（試験頻出の振り分け表）</div>
    <table class="vis-table">
      <thead>
        <tr><th>構造タイプ</th><th>Attentionの参照方向</th><th>代表モデル</th><th>得意なタスク</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">① Encoderのみ</strong><br>（双方向エンコーダ）</td>
          <td>文の<strong>前後双方向</strong>を同時に参照</td>
          <td><strong>BERT</strong>、RoBERTa、ALBERT、DeBERTa</td>
          <td>文分類、感情分析、固有表現抽出、検索埋め込み</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">② Decoderのみ</strong><br>（単方向・自己回帰型）</td>
          <td><strong>左から右（過去→未来）のみ</strong>参照（未来はマスク）</td>
          <td><strong>GPTシリーズ</strong>、LLaMA、Claude、PaLM、Gemini</td>
          <td><strong>次単語予測・自由な文章生成・対話・In-Context学習</strong></td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">③ Encoder-Decoder両方</strong><br>（系列変換型）</td>
          <td>Encoderは双方向 ＋ Decoderは単方向</td>
          <td><strong>初代Transformer</strong>、<strong>T5</strong>、<strong>BART</strong>、Whisper</td>
          <td>機械翻訳、要約、Text-to-Text変換</td>
        </tr>
      </tbody>
    </table>
  `,

  "c5-30": `
    <div class="vis-title">🎨 4大深層生成モデル（VAE・GAN・拡散モデル・Flowベース）の原理と特徴比較</div>
    <table class="vis-table">
      <thead>
        <tr><th>生成モデル</th><th>学習・生成の仕組み</th><th>長所</th><th>短所・注意点</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">VAE</strong><br>(変分AE)</td>
          <td>入力を正規分布 <code>(μ, σ²)</code> に圧縮し<strong>再パラメータ化トリック</strong>でサンプリング（変分下限ELBO最大化）</td>
          <td>学習が安定、潜在空間が連続で補間しやすい</td>
          <td>生成画像がやや<strong>ぼやけやすい</strong></td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">GAN</strong><br>(敵対的生成NW)</td>
          <td>偽造者（<strong>Generator</strong>）と鑑定士（<strong>Discriminator</strong>）のミニマックスゲーム</td>
          <td>くっきりした鮮明な画像を<strong>1ステップで高速生成</strong></td>
          <td>学習が不安定、特定の画像ばかり出す<strong>モード崩壊（Mode Collapse）</strong></td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">拡散モデル</strong><br>(DDPM / LDM)</td>
          <td>ガウスノイズを徐々に加える<strong>拡散過程</strong>の逆（<strong>逆拡散過程</strong>）で少しずつノイズを除去</td>
          <td><strong>超高画質かつ多様性が高い</strong>（モード崩壊しない）</td>
          <td>反復ノイズ除去のため<strong>推論に時間がかかる</strong>（Stable Diffusionは潜在空間で高速化）</td>
        </tr>
        <tr>
          <td><strong>Flowベース</strong><br>(Normalizing Flow)</td>
          <td><strong>可逆な変換関数</strong>とヤコビアンを用いて単純な分布を複雑な分布へ変換</td>
          <td>近似ではなく<strong>厳密な対数尤度</strong>を直接計算可能</td>
          <td>可逆制約のためモデルサイズが大きくなりやすい（例：Glow, RealNVP）</td>
        </tr>
      </tbody>
    </table>
  `,

  "c5-34": `
    <div class="vis-title">🧗 TD学習：SARSA（方策オン型）と Q学習（方策オフ型）の「崖歩き問題」ルート比較</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 165" class="vis-svg" role="img" aria-label="崖歩き問題におけるSARSAとQ学習のルート違い">
        <rect x="10" y="6" width="620" height="152" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Grid Map -->
        <rect x="28" y="22" width="330" height="118" rx="4" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
        <!-- Start S -->
        <rect x="34" y="102" width="48" height="32" rx="4" fill="#0284c7"/>
        <text x="58" y="122" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">Start</text>
        <!-- Cliff -->
        <rect x="88" y="102" width="210" height="32" rx="4" fill="rgba(239,68,68,0.28)" stroke="#ef4444" stroke-width="1.5"/>
        <text x="193" y="122" fill="#fca5a5" font-size="11" text-anchor="middle" font-weight="bold">⚠️ 崖（The Cliff：落下報酬 −100）</text>
        <!-- Goal G -->
        <rect x="304" y="102" width="48" height="32" rx="4" fill="#10b981"/>
        <text x="328" y="122" fill="#0f172a" font-size="12" text-anchor="middle" font-weight="bold">Goal</text>

        <!-- SARSA Safe Route (Green) -->
        <path d="M58 100 L58 36 L328 36 L328 98" fill="none" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrow-ch1)"/>
        <text x="193" y="52" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">🟢 SARSA（方策オン型）：安全な大回りルート</text>

        <!-- Q-Learning Optimal Route (Red/Yellow) -->
        <path d="M58 100 L58 82 L328 82 L328 98" fill="none" stroke="#fde047" stroke-width="3.5" stroke-dasharray="6,3" marker-end="url(#arrow-ch1)"/>
        <text x="193" y="76" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">🟡 Q学習（方策オフ型）：崖っぷち最短ルート</text>

        <!-- Explanation Right -->
        <text x="372" y="38" fill="#6ee7b7" font-size="11.5" font-weight="bold">● SARSA（On-policy）：Q(s', a') で更新</text>
        <text x="372" y="55" fill="#cbd5e1" font-size="10.5">ε-greedyのランダム探索も含めて実際に取った</text>
        <text x="372" y="70" fill="#cbd5e1" font-size="10.5">行動 a' で更新するため、崖から落ちる危険を</text>
        <text x="372" y="85" fill="#cbd5e1" font-size="10.5">避けて『崖から離れた安全ルート』を学ぶ。</text>

        <text x="372" y="110" fill="#fde047" font-size="11.5" font-weight="bold">● Q学習（Off-policy）：max Q(s', a') で更新</text>
        <text x="372" y="127" fill="#cbd5e1" font-size="10.5">探索とは切り離して理論上の最大値 max Q だけで</text>
        <text x="372" y="142" fill="#cbd5e1" font-size="10.5">更新するため『崖っぷちギリギリ最短』を学ぶ。</text>
      </svg>
    </div>
  `,

  "c5-37": `
    <div class="vis-title">🏆 AlphaGo ➔ AlphaGo Zero ➔ AlphaZero ➔ MuZero の4世代進化マトリクス</div>
    <table class="vis-table">
      <thead>
        <tr><th>モデル名（年）</th><th>対象ゲーム</th><th>人間のプロ棋譜</th><th>NW構造（Policy &amp; Value）</th><th>ロールアウト</th><th>ゲームのルール知識</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AlphaGo</strong> (2016)</td>
          <td>囲碁のみ</td>
          <td><strong class="vis-hl-amber">使用する（教師あり学習）</strong></td>
          <td>Policy網とValue網が<strong>別々</strong></td>
          <td><strong>あり</strong>（高速プレイアウト）</td>
          <td>必要（事前に与える）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-cyan">AlphaGo Zero</strong> (2017)</td>
          <td>囲碁のみ</td>
          <td><strong class="vis-hl-emerald">一切使わない（自己対局のみ）</strong></td>
          <td><strong>1つのResNetに統合</strong></td>
          <td><strong class="vis-hl-emerald">廃止（Value網のみ）</strong></td>
          <td>必要（事前に与える）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">AlphaZero</strong> (2017)</td>
          <td><strong>囲碁・将棋・チェス</strong></td>
          <td>一切使わない（自己対局のみ）</td>
          <td>1つのResNetに統合</td>
          <td>廃止</td>
          <td>必要（事前に与える）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">MuZero</strong> (2019)</td>
          <td><strong>囲碁・将棋・チェス＋Atari</strong></td>
          <td>一切使わない</td>
          <td>統合型＋環境内部モデル</td>
          <td>廃止</td>
          <td><strong class="vis-hl-rose">不要！（ルール自体も学習）</strong></td>
        </tr>
      </tbody>
    </table>
  `,
  "c2-25": `
    <div class="vis-title">🔍 ハイパーパラメータ探索3手法（グリッド・ランダム・ベイズ最適化）の探索点比較</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 155" class="vis-svg" role="img" aria-label="グリッドサーチ、ランダムサーチ、ベイズ最適化の比較">
        <!-- 1. Grid Search -->
        <rect x="8" y="8" width="198" height="140" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="107" y="26" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">① グリッドサーチ</text>
        <rect x="45" y="38" width="124" height="82" fill="#1e293b" stroke="#64748b"/>
        <circle cx="68" cy="54" r="4.5" fill="#38bdf8"/><circle cx="107" cy="54" r="4.5" fill="#38bdf8"/><circle cx="146" cy="54" r="4.5" fill="#38bdf8"/>
        <circle cx="68" cy="79" r="4.5" fill="#38bdf8"/><circle cx="107" cy="79" r="4.5" fill="#38bdf8"/><circle cx="146" cy="79" r="4.5" fill="#38bdf8"/>
        <circle cx="68" cy="104" r="4.5" fill="#38bdf8"/><circle cx="107" cy="104" r="4.5" fill="#38bdf8"/><circle cx="146" cy="104" r="4.5" fill="#38bdf8"/>
        <text x="107" y="136" fill="#cbd5e1" font-size="10" text-anchor="middle">等間隔の格子点を網羅（次元の呪い）</text>

        <!-- 2. Random Search -->
        <rect x="220" y="8" width="198" height="140" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="319" y="26" fill="#fbbf24" font-size="11.5" text-anchor="middle" font-weight="bold">② ランダムサーチ</text>
        <rect x="257" y="38" width="124" height="82" fill="#1e293b" stroke="#64748b"/>
        <circle cx="272" cy="48" r="4.5" fill="#fbbf24"/><circle cx="290" cy="96" r="4.5" fill="#fbbf24"/><circle cx="305" cy="65" r="4.5" fill="#fbbf24"/>
        <circle cx="318" cy="108" r="4.5" fill="#fbbf24"/><circle cx="332" cy="55" r="4.5" fill="#fbbf24"/><circle cx="348" cy="84" r="4.5" fill="#fbbf24"/>
        <circle cx="362" cy="45" r="4.5" fill="#fbbf24"/><circle cx="280" cy="74" r="4.5" fill="#fbbf24"/><circle cx="370" cy="105" r="4.5" fill="#fbbf24"/>
        <text x="319" y="136" fill="#cbd5e1" font-size="10" text-anchor="middle">各軸で9通りの異なる値を効率探索</text>

        <!-- 3. Bayesian Optimization -->
        <rect x="432" y="8" width="200" height="140" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="532" y="26" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">③ ベイズ最適化（Optuna等）</text>
        <rect x="469" y="38" width="124" height="82" fill="#1e293b" stroke="#64748b"/>
        <ellipse cx="548" cy="66" rx="28" ry="18" fill="rgba(16,185,129,0.28)" stroke="#10b981" stroke-dasharray="3,2"/>
        <circle cx="485" cy="102" r="4" fill="#64748b"/><circle cx="508" cy="88" r="4" fill="#64748b"/>
        <circle cx="538" cy="70" r="5" fill="#10b981"/><circle cx="552" cy="62" r="5" fill="#10b981"/>
        <circle cx="546" cy="66" r="6" fill="#fde047" stroke="#0f172a" stroke-width="1.2"/>
        <text x="532" y="136" fill="#6ee7b7" font-size="10" text-anchor="middle" font-weight="bold">ガウス過程で有望領域に集中探索！</text>
      </svg>
    </div>
  `,

  "c4-09": `
    <div class="vis-title">⛰️ 損失関数の地形：局所最適解・大域的最適解・プラトー・鞍点（Saddle Point）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 155" class="vis-svg" role="img" aria-label="局所最適解、大域的最適解、プラトー、鞍点">
        <rect x="10" y="6" width="620" height="142" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Landscape Curve -->
        <path d="M35 35 Q 60 85, 115 85 L 185 85 Q 215 85, 240 108 Q 265 130, 290 95 Q 315 60, 345 112 Q 375 162, 415 85 Q 445 35, 470 35" fill="none" stroke="#38bdf8" stroke-width="3"/>

        <!-- Plateau -->
        <text x="148" y="72" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="bold">プラトー（平坦部）</text>

        <!-- Local Minimum -->
        <circle cx="264" cy="113" r="6" fill="#f59e0b"/>
        <text x="245" y="138" fill="#fde047" font-size="11" text-anchor="middle" font-weight="bold">局所最適解 (Local Min)</text>

        <!-- Global Minimum -->
        <circle cx="378" cy="129" r="6.5" fill="#10b981" stroke="#fff" stroke-width="1.5"/>
        <text x="385" y="144" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">★ 大域的最適解 (Global Min)</text>

        <!-- Saddle Point Info Box -->
        <rect x="478" y="20" width="140" height="114" rx="6" fill="rgba(244,63,94,0.12)" stroke="#f43f5e"/>
        <text x="548" y="40" fill="#fda4af" font-size="11.5" text-anchor="middle" font-weight="bold">🐎 鞍点 (Saddle Point)</text>
        <text x="548" y="60" fill="#e2e8f0" font-size="10" text-anchor="middle">ある次元では「極小(谷)」</text>
        <text x="548" y="76" fill="#e2e8f0" font-size="10" text-anchor="middle">別の次元では「極大(山)」</text>
        <text x="548" y="96" fill="#fde047" font-size="10" text-anchor="middle" font-weight="bold">高次元DLで勾配=0に</text>
        <text x="548" y="110" fill="#fde047" font-size="10" text-anchor="middle" font-weight="bold">捕まる最大の原因！</text>
      </svg>
    </div>
  `,

  "c5-27": `
    <div class="vis-title">🎲 VAE（変分オートエンコーダ）と 再パラメータ化トリック（z = μ + σ ⊙ ε）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 125" class="vis-svg" role="img" aria-label="VAEの再パラメータ化トリック">
        <rect x="10" y="6" width="620" height="112" rx="8" fill="#0f172a" stroke="#334155"/>
        <rect x="22" y="40" width="76" height="44" rx="6" fill="#1e293b" stroke="#64748b"/><text x="60" y="66" fill="#f8fafc" font-size="12" text-anchor="middle" font-weight="bold">入力 x</text>
        <line x1="98" y1="62" x2="128" y2="62" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <polygon points="132,32 212,46 212,78 132,92" fill="#0284c7"/><text x="172" y="66" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">Encoder</text>

        <!-- mu and sigma -->
        <line x1="212" y1="52" x2="245" y2="38" stroke="#38bdf8" stroke-width="2"/>
        <line x1="212" y1="72" x2="245" y2="84" stroke="#38bdf8" stroke-width="2"/>
        <rect x="245" y="22" width="68" height="28" rx="4" fill="#1e293b" stroke="#38bdf8"/><text x="279" y="40" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">平均 μ</text>
        <rect x="245" y="70" width="68" height="28" rx="4" fill="#1e293b" stroke="#fbbf24"/><text x="279" y="88" fill="#fde047" font-size="11.5" text-anchor="middle" font-weight="bold">標準偏差 σ</text>

        <!-- Reparameterization Trick Box -->
        <rect x="332" y="20" width="155" height="84" rx="6" fill="rgba(16,185,129,0.16)" stroke="#10b981" stroke-width="2"/>
        <text x="409" y="40" fill="#6ee7b7" font-size="11" text-anchor="middle" font-weight="bold">★ 再パラメータ化トリック</text>
        <text x="409" y="62" fill="#fde047" font-size="13" text-anchor="middle" font-weight="bold">z = μ + σ ⊙ ε</text>
        <text x="409" y="80" fill="#cbd5e1" font-size="10" text-anchor="middle">乱数 ε ~ N(0, I) を外出しして</text>
        <text x="409" y="94" fill="#fda4af" font-size="10" text-anchor="middle" font-weight="bold">誤差逆伝播（微分）を可能に！</text>

        <line x1="487" y1="62" x2="515" y2="62" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <polygon points="520,46 600,32 600,92 520,78" fill="#0284c7"/><text x="560" y="66" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">Decoder</text>
      </svg>
    </div>
  `,

  "c5-28": `
    <div class="vis-title">⚔️ GAN（敵対的生成ネットワーク）：Generator（偽造者）vs Discriminator（警察）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 135" class="vis-svg" role="img" aria-label="GANのGeneratorとDiscriminatorの学習構造">
        <rect x="10" y="6" width="620" height="122" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Noise z -> Generator -->
        <rect x="22" y="24" width="78" height="36" rx="6" fill="#1e293b" stroke="#64748b"/>
        <text x="61" y="46" fill="#cbd5e1" font-size="11" text-anchor="middle" font-weight="bold">乱数ノイズ z</text>
        <line x1="100" y1="42" x2="132" y2="42" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <rect x="132" y="20" width="146" height="44" rx="6" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="2"/>
        <text x="205" y="39" fill="#38bdf8" font-size="11.5" text-anchor="middle" font-weight="bold">Generator (生成器)</text>
        <text x="205" y="55" fill="#cbd5e1" font-size="9.5" text-anchor="middle">本物そっくりの偽物を作る</text>

        <line x1="278" y1="42" x2="352" y2="56" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <text x="315" y="38" fill="#38bdf8" font-size="10.5" text-anchor="middle">生成データ G(z)</text>

        <!-- Real Data x -->
        <rect x="132" y="76" width="146" height="38" rx="6" fill="rgba(16,185,129,0.18)" stroke="#10b981" stroke-width="1.5"/>
        <text x="205" y="99" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">本物の訓練データ x</text>
        <line x1="278" y1="95" x2="352" y2="78" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <!-- Discriminator -->
        <rect x="358" y="42" width="155" height="50" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
        <text x="435" y="64" fill="#fde047" font-size="12" text-anchor="middle" font-weight="bold">Discriminator (識別器)</text>
        <text x="435" y="80" fill="#cbd5e1" font-size="10" text-anchor="middle">「本物(1)か偽物(0)か見破る」</text>

        <line x1="513" y1="67" x2="542" y2="67" stroke="#fde047" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="548" y="42" width="72" height="50" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="584" y="64" fill="#fda4af" font-size="11" text-anchor="middle" font-weight="bold">真偽判定</text>
        <text x="584" y="80" fill="#cbd5e1" font-size="10" text-anchor="middle">誤差逆伝播</text>
      </svg>
    </div>
  `,

  // ==================== Chapter 6 ====================
  "c6-06": `
    <div class="vis-title">🚀 現代LLMの3段階学習パイプライン（事前学習 ➔ SFT ➔ RLHF / DPO）</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">STAGE 1</div>
        <div class="vis-flow-head">① 事前学習 (Pre-training)</div>
        <div class="vis-flow-desc">Web等の超大規模ラベルなしテキストで「次の単語予測（自己教師あり学習）」を行い知識と文法を獲得（ベースモデル）</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STAGE 2</div>
        <div class="vis-flow-head">② SFT (Instruction Tuning)</div>
        <div class="vis-flow-desc">人間が作成した高品質な「指示（質問）と模範回答のペア」を用いて教師ありファインチューニングし対話形式に適応</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STAGE 3</div>
        <div class="vis-flow-head">③ アライメント（RLHF / DPO）</div>
        <div class="vis-flow-desc"><strong>RLHF</strong>：人間の比較評価から「報酬モデル」を学び<strong>PPO強化学習</strong>で調整<br><strong>DPO</strong>：報酬モデルもPPOも使わず選好ペアから直接最適化</div>
      </div>
    </div>
  `,

  "c6-10": `
    <div class="vis-title">🔎 RAG（Retrieval-Augmented Generation：検索拡張生成）のアーキテクチャ図</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 1</div>
        <div class="vis-flow-head">① 質問のベクトル化</div>
        <div class="vis-flow-desc">ユーザーの質問をEmbeddingモデルで埋め込みベクトルに変換（またはキーワード抽出）</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 2</div>
        <div class="vis-flow-head">② 外部知識DB検索</div>
        <div class="vis-flow-desc">社内規定や最新ニュースのベクトルDBからコサイン類似度等で関連文書チャンクを検索（Retriever）</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 3</div>
        <div class="vis-flow-head">③ プロンプト拡張</div>
        <div class="vis-flow-desc">「検索した根拠文書＋ユーザーの質問」を1つのプロンプトに結合してLLMへ入力</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 4</div>
        <div class="vis-flow-head">④ 根拠に基づく生成</div>
        <div class="vis-flow-desc">LLM本体の重みを再学習することなく、最新情報に基づきハルシネーションを抑えて回答生成</div>
      </div>
    </div>
  `,

  "c6-11": `
    <div class="vis-title">⚡ LoRA（Low-Rank Adaptation）：巨大重み W₀ を凍結し低ランク行列 A・B のみ学習</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 155" class="vis-svg" role="img" aria-label="LoRAの低ランク行列分解構造">
        <rect x="10" y="6" width="620" height="142" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Input x -->
        <rect x="22" y="58" width="68" height="38" rx="6" fill="#1e293b" stroke="#64748b"/>
        <text x="56" y="81" fill="#f8fafc" font-size="12" text-anchor="middle" font-weight="bold">入力 x</text>

        <!-- Frozen W0 -->
        <line x1="90" y1="68" x2="145" y2="42" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="150" y="18" width="235" height="46" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4,3"/>
        <text x="267" y="38" fill="#38bdf8" font-size="12" text-anchor="middle" font-weight="bold">❄️ 事前学習済み重み行列 W₀ (d × k)</text>
        <text x="267" y="54" fill="#94a3b8" font-size="10.5" text-anchor="middle">重みを完全凍結（Freeze：勾配計算・更新なし）</text>

        <!-- Trainable Low-Rank A and B -->
        <line x1="90" y1="86" x2="145" y2="110" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="150" y="84" width="102" height="50" rx="6" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
        <text x="201" y="106" fill="#fda4af" font-size="11.5" text-anchor="middle" font-weight="bold">🔥 行列 A (d×r)</text>
        <text x="201" y="122" fill="#fde047" font-size="10" text-anchor="middle">低ランク r ≪ d に圧縮</text>

        <line x1="252" y1="109" x2="278" y2="109" stroke="#fde047" stroke-width="3" marker-end="url(#arrow-ch1)"/>

        <rect x="283" y="84" width="102" height="50" rx="6" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
        <text x="334" y="106" fill="#fda4af" font-size="11.5" text-anchor="middle" font-weight="bold">🔥 行列 B (r×k)</text>
        <text x="334" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">初期値 0 で学習開始</text>

        <!-- Sum -->
        <line x1="385" y1="42" x2="438" y2="68" stroke="#38bdf8" stroke-width="2"/>
        <line x1="385" y1="109" x2="438" y2="82" stroke="#f43f5e" stroke-width="2"/>
        <circle cx="450" cy="75" r="14" fill="#10b981"/>
        <text x="450" y="81" fill="#0f172a" font-size="17" text-anchor="middle" font-weight="bold">＋</text>

        <line x1="464" y1="75" x2="492" y2="75" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <rect x="498" y="42" width="122" height="66" rx="6" fill="rgba(16,185,129,0.18)" stroke="#10b981" stroke-width="1.8"/>
        <text x="559" y="64" fill="#6ee7b7" font-size="11.5" text-anchor="middle" font-weight="bold">h = W₀x + BAx</text>
        <text x="559" y="82" fill="#fde047" font-size="10" text-anchor="middle" font-weight="bold">推論時は W₀+BA に</text>
        <text x="559" y="96" fill="#fde047" font-size="10" text-anchor="middle" font-weight="bold">合体でき遅延ゼロ！</text>
      </svg>
    </div>
  `,

  // ==================== Chapter 7 ====================
  "c7-02": `
    <div class="vis-title">⚖️ 文化庁『AIと著作権に関する考え方について』：2段階の判断フレームワーク</div>
    <table class="vis-table">
      <thead>
        <tr><th>フェーズ</th><th>適用される条文・判断基準</th><th>試験で問われる結論・例外ポイント</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">① AI開発・学習段階</strong><br>（データ収集・モデル訓練）</td>
          <td><strong>著作権法第30条の4</strong><br>（非享受目的の情報解析）</td>
          <td>・原則として<strong>著作権者の許諾なく利用可能</strong>。<br>・<strong class="vis-hl-rose">例外（ただし書き）</strong>：情報解析用に有償販売されているDBの無断利用や、特定作家の作品群のみを模倣する享受目的併存時は<strong>許諾が必要</strong>。</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-amber">② 生成・利用段階 A</strong><br>（既存著作物の権利侵害か？）</td>
          <td><strong>「類似性」×「依拠性」</strong><br>の2要件で判断</td>
          <td>・表現が似ており（類似性）、かつ<strong>学習データにその著作物が含まれていた場合</strong>は、利用者が元作品を知らなくても<strong>「依拠性あり」と推認</strong>され侵害となり得る。<br>・※単なる「画風・作風・アイデア」の類似は著作権侵害にならない。</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">③ 生成・利用段階 B</strong><br>（AI生成物に著作権はあるか？）</td>
          <td><strong>「創作的意図」×「創作的寄与」</strong><br>の有無で判断</td>
          <td>・短いプロンプトを入れただけの生成物には<strong>著作権は発生しない</strong>。<br>・大量の試行錯誤、プロンプト工夫、人間による加筆・修正など<strong>十分な創作的寄与</strong>があればAIを道具として使った著作物と認められる。</td>
        </tr>
      </tbody>
    </table>
  `,

  "c7-05": `
    <div class="vis-title">🛡️ 不正競争防止法：「営業秘密」と「限定提供データ」の3要件比較表</div>
    <table class="vis-table">
      <thead>
        <tr><th>比較項目</th><th>営業秘密（ノウハウ・非公開パラメータ等）</th><th>限定提供データ（2018年新設：販売・共有用ビッグデータ）</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>保護の3要件</strong></td>
          <td>① <strong class="vis-hl-cyan">秘密管理性</strong>（アクセス制限・秘密表示）<br>② <strong class="vis-hl-cyan">有用性</strong>（ビジネス上の価値）<br>③ <strong class="vis-hl-cyan">非公知性</strong>（外部に知られていない秘密）</td>
          <td>① <strong class="vis-hl-amber">限定提供性</strong>（一定の条件のもと特定の相手に提供）<br>② <strong class="vis-hl-amber">電磁的管理性</strong>（ID/PW等で電子的に管理）<br>③ <strong class="vis-hl-amber">相当蓄積性</strong>（電磁的に相当量蓄積された情報）</td>
        </tr>
        <tr>
          <td><strong>秘密（非公知）である必要</strong></td>
          <td><strong>必須</strong>（公開されたら営業秘密ではなくなる）</td>
          <td><strong class="vis-hl-emerald">不要！</strong>（他社へ販売・共有するデータが対象。ただし営業秘密と重複するものは除く）</td>
        </tr>
        <tr>
          <td><strong>登録制度・罰則</strong></td>
          <td>特許庁等への登録不要 ／ 差止・損害賠償 ＋ <strong>刑事罰あり</strong></td>
          <td>登録不要 ／ 差止・損害賠償の<strong>民事措置のみ（刑事罰なし）</strong></td>
        </tr>
      </tbody>
    </table>
  `,

  "c7-12": `
    <div class="vis-title">🤝 経産省『AI・データの利用に関する契約ガイドライン』探索的段階的開発の4フェーズ</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">PHASE 1</div>
        <div class="vis-flow-head">① アセスメント段階</div>
        <div class="vis-flow-desc">既存データでAI開発が可能か実現可能性（フィージビリティ）を調査<br><strong class="vis-hl-cyan">推奨：準委任契約</strong></div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">PHASE 2</div>
        <div class="vis-flow-head">② PoC（概念実証）段階</div>
        <div class="vis-flow-desc">少量データで試作モデルを構築し、実用化の見込み・目標精度を検証<br><strong class="vis-hl-cyan">推奨：準委任契約</strong></div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">PHASE 3</div>
        <div class="vis-flow-head">③ 開発段階</div>
        <div class="vis-flow-desc">本番用の学習済みモデルを構築（仕様確定の周辺システムのみ請負も可）<br><strong class="vis-hl-cyan">モデル開発は準委任</strong></div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">PHASE 4</div>
        <div class="vis-flow-head">④ 追加学習段階</div>
        <div class="vis-flow-desc">本番運用開始後のデータドリフト対応・精度維持のための再学習<br><strong class="vis-hl-cyan">推奨：準委任契約</strong></div>
      </div>
    </div>
  `,

  "c7-14": `
    <div class="vis-title">🚗 自動運転のレベル1〜レベル5（SAE基準）と運転主体・法規制の境界線</div>
    <table class="vis-table">
      <thead>
        <tr><th>レベル</th><th>名称</th><th>運転・監視の主体（責任）</th><th>日本の公道法制・特徴</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>レベル 1</strong></td><td>運転支援</td><td><strong class="vis-hl-amber">👤 人間ドライバー</strong></td><td>自動ブレーキ、車線維持支援、またはACCの<strong>どちらか一方</strong></td></tr>
        <tr><td><strong>レベル 2</strong></td><td>部分運転自動化</td><td><strong class="vis-hl-amber">👤 人間ドライバー</strong>（手放し可でも監視義務あり）</td><td>車線維持＋加減速（ACC）の<strong>両方</strong>を同時支援</td></tr>
        <tr style="border-top:2px solid #f43f5e;">
          <td><strong class="vis-hl-cyan">レベル 3</strong></td>
          <td><strong>条件付運転自動化</strong></td>
          <td><strong class="vis-hl-cyan">🤖 システム</strong>（※緊急時引き継ぎ要請時は人間が対応）</td>
          <td><strong>★責任の分水嶺！</strong> 2020年改正道交法で公道解禁（渋滞時アイズオフ等）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">レベル 4</strong></td>
          <td><strong>高度運転自動化</strong></td>
          <td><strong class="vis-hl-emerald">🤖 システムのみ（無人運転可）</strong></td>
          <td><strong>限定地域（ODD内）での完全自動運転</strong>。2023年4月改正道交法で許可制解禁</td>
        </tr>
        <tr>
          <td><strong>レベル 5</strong></td><td>完全運転自動化</td><td><strong class="vis-hl-emerald">🤖 システムのみ</strong></td><td>場所や天候の限定（ODD）が一切ない完全自動運転</td>
        </tr>
      </tbody>
    </table>
  `,

  "c7-19": `
    <div class="vis-title">🇪🇺 EU AI規制法（EU AI Act）の4段階リスクベースアプローチ（ピラミッド図）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 195" class="vis-svg" role="img" aria-label="EU AI Actの4段階リスクピラミッド">
        <!-- Tier 1: Unacceptable Risk (Top) -->
        <polygon points="125,12 180,52 70,52" fill="rgba(239,68,68,0.85)" stroke="#fca5a5" stroke-width="1.5"/>
        <text x="125" y="44" fill="#fff" font-size="11" text-anchor="middle" font-weight="bold">① 禁止</text>
        <text x="255" y="34" fill="#fca5a5" font-size="11.5" font-weight="bold">① 許容できないリスク（原則禁止）</text>
        <text x="255" y="50" fill="#cbd5e1" font-size="10">政府の社会的スコアリング、職場・学校での感情認識AI、サブリミナル操作</text>

        <!-- Tier 2: High Risk -->
        <polygon points="67,56 183,56 210,98 40,98" fill="rgba(245,158,11,0.85)" stroke="#fde047" stroke-width="1.5"/>
        <text x="125" y="82" fill="#0f172a" font-size="11.5" text-anchor="middle" font-weight="bold">② 高リスク</text>
        <text x="255" y="76" fill="#fde047" font-size="11.5" font-weight="bold">② 高リスク（厳格な適合性評価・人間監督・ログ記録義務）</text>
        <text x="255" y="92" fill="#cbd5e1" font-size="10">採用選考・人事評価、教育入試採点、ローン信用審査、医療機器、重要インフラ</text>

        <!-- Tier 3: Limited Risk -->
        <polygon points="37,102 213,102 236,144 14,144" fill="rgba(2,132,199,0.85)" stroke="#7dd3fc" stroke-width="1.5"/>
        <text x="125" y="128" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">③ 限定リスク</text>
        <text x="255" y="122" fill="#38bdf8" font-size="11.5" font-weight="bold">③ 限定リスク（透明性義務：AIであることの明示）</text>
        <text x="255" y="138" fill="#cbd5e1" font-size="10">対話チャットボット、ディープフェイク・AI生成物（透かし・ラベル付与）</text>

        <!-- Tier 4: Minimal Risk -->
        <polygon points="12,148 238,148 246,186 4,186" fill="rgba(16,185,129,0.8)" stroke="#6ee7b7" stroke-width="1.5"/>
        <text x="125" y="172" fill="#0f172a" font-size="11" text-anchor="middle" font-weight="bold">④ 最小リスク（規制なし）</text>
        <text x="255" y="166" fill="#6ee7b7" font-size="11.5" font-weight="bold">④ 最小リスク（法的義務なし・自主的行動規範）</text>
        <text x="255" y="182" fill="#cbd5e1" font-size="10">スパムメールフィルタ、ビデオゲーム内AIなど</text>
      </svg>
    </div>
  `,

  "c7-25": `
    <div class="vis-title">🛡️ AIセキュリティ攻撃の全体マップ（攻撃フェーズ × 攻撃目的の整理表）</div>
    <table class="vis-table">
      <thead>
        <tr><th>攻撃フェーズ</th><th>攻撃手法名</th><th>攻撃の仕組みと目的（ひっかけ対比ポイント）</th></tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"><strong class="vis-hl-amber">学習時</strong><br>（訓練データへの介入）</td>
          <td><strong>データポイズニング</strong><br>(Data Poisoning)</td>
          <td>学習データに悪意あるデータや誤ラベルを混入させ、<strong>モデル全体の精度破壊や偏見（例：Tay事件）</strong>を引き起こす。</td>
        </tr>
        <tr>
          <td><strong>バックドア攻撃</strong><br>(トロイの木馬)</td>
          <td>通常時は正常に動くが、<strong>特定の「トリガー（印・ステッカー）」が入力された時だけ</strong>攻撃者の意図通りに誤動作するよう仕込む。</td>
        </tr>
        <tr>
          <td rowspan="2"><strong class="vis-hl-rose">推論時①：誤動作</strong><br>（入力データの細工）</td>
          <td><strong class="vis-hl-rose">敵対的サンプル</strong><br>(Adversarial Examples)</td>
          <td>学習済みモデルへの入力画像に<strong>人間には知覚できない微小なノイズ（摂動）</strong>を加え、高確信度で別クラス（パンダ→テナガザル）に誤分類させる。</td>
        </tr>
        <tr>
          <td><strong>プロンプトインジェクション</strong></td>
          <td>LLMへの入力（またはRAGの外部参照Webページ＝<strong>間接的インジェクション</strong>）に悪意ある命令を仕込みシステム指示を乗っ取る。</td>
        </tr>
        <tr>
          <td rowspan="3"><strong class="vis-hl-cyan">推論時②：情報窃取</strong><br>（API入出力の悪用）</td>
          <td><strong>モデル抽出攻撃</strong><br>(Model Stealing)</td>
          <td>対象AIのAPIに大量のクエリを投げて入出力ペアを集め、<strong>学習済みモデル自体のコピー（複製）を盗み出す</strong>。</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-cyan">モデルインバージョン</strong><br>（モデル逆転攻撃）</td>
          <td>モデルの出力確率や勾配から逆算し、<strong>「学習に使われた顔画像や個人データそのもの」を復元・再構築</strong>する。</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">メンバーシップ推論攻撃</strong></td>
          <td>ある特定の個人のデータが<strong>「そのモデルの学習データに含まれていたかどうか（在籍有無）」</strong>を特定する（過学習モデルほど脆弱）。</td>
        </tr>
      </tbody>
    </table>
  `,

  "c7-30": `
    <div class="vis-title">🔄 CRISP-DM：データ分析・機械学習プロジェクトの6段階標準プロセス</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 1</div>
        <div class="vis-flow-head">① ビジネスの理解</div>
        <div class="vis-flow-desc">経営課題の定義・KPI設定（★必ずここから開始！）</div>
      </div>
      <div class="vis-flow-arrow">⇄</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 2</div>
        <div class="vis-flow-head">② データの理解</div>
        <div class="vis-flow-desc">データの収集・探索的データ解析（EDA）・品質確認</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 3</div>
        <div class="vis-flow-head">③ データの準備</div>
        <div class="vis-flow-desc">クレンジング・欠損値補完・特徴量生成</div>
      </div>
      <div class="vis-flow-arrow">⇄</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 4</div>
        <div class="vis-flow-head">④ モデリング</div>
        <div class="vis-flow-desc">アルゴリズム選択とパラメータ学習</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 5</div>
        <div class="vis-flow-head">⑤ 評価</div>
        <div class="vis-flow-desc">ビジネス目標を達成できるか検証（未達なら①へ戻る）</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 6</div>
        <div class="vis-flow-head">⑥ 展開 (Deploy)</div>
        <div class="vis-flow-desc">本番システムへの組み込みと継続的監視（MLOps）</div>
      </div>
    </div>
  `,

  "c7-32": `
    <div class="vis-title">🌐 クリエイティブ・コモンズ（CCライセンス）4つの基本要素の意味</div>
    <table class="vis-table">
      <thead>
        <tr><th>記号</th><th>英語表記・日本語名</th><th>ライセンス条件の内容（AIデータセット利用時の注意点）</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">BY</strong></td><td><strong>Attribution（表示）</strong></td><td>作品のクレジット（著作者名・タイトル等）を表示すること（すべてのCCライセンスに含まれる基本要素）</td></tr>
        <tr><td><strong class="vis-hl-rose">NC</strong></td><td><strong>Non-Commercial（非営利）</strong></td><td><strong class="vis-hl-rose">営利目的（商用利用）での利用を禁止！</strong>（企業の商用AI製品開発では利用規約違反に要注意）</td></tr>
        <tr><td><strong class="vis-hl-amber">ND</strong></td><td><strong>No Derivatives（改変禁止）</strong></td><td>元の作品を改変・翻案した二次的著作物を公開・配布してはならない</td></tr>
        <tr><td><strong class="vis-hl-emerald">SA</strong></td><td><strong>Share-Alike（継承）</strong></td><td>作品を改変して公開する場合は、<strong>元の作品と全く同じCCライセンス条件</strong>で公開しなければならない</td></tr>
      </tbody>
    </table>
  `,

  "c2-10": `
    <div class="vis-title">🌳 決定木のアルゴリズム比較（CART vs ID3/C4.5）と不純度計算式</div>
    <table class="vis-table">
      <thead>
        <tr><th>項目</th><th>CART（scikit-learn等の標準）</th><th>ID3 / C4.5</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>木の分岐構造</strong></td><td>必ず2つに分かれる<strong class="vis-hl-cyan">「二分木（Binary Tree）」</strong></td><td>3つ以上に分かれることもある<strong>「多分木」</strong></td></tr>
        <tr><td><strong>分類の不純度指標</strong></td><td><strong class="vis-hl-cyan">ジニ不純度</strong>：<code>I<sub>G</sub> = 1 − ∑ pᵢ²</code></td><td><strong class="vis-hl-amber">エントロピー（情報利得）</strong>：<code>H = − ∑ pᵢ log₂ pᵢ</code></td></tr>
        <tr><td><strong>対応タスク</strong></td><td><strong>分類 ＋ 回帰（回帰木はMSE最小化）の両方</strong></td><td>主に分類</td></tr>
      </tbody>
    </table>
  `,

  "c2-16": `
    <div class="vis-title">📍 k-means法（k平均法）の4ステップ反復フロー ＆ エルボー法</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 1</div>
        <div class="vis-flow-head">① クラスタ数 k 設定</div>
        <div class="vis-flow-desc">人間が事前に k を指定し、k個の初期重心を配置（k-means++なら離して配置）</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 2</div>
        <div class="vis-flow-head">② クラスタ割り当て</div>
        <div class="vis-flow-desc">各データ点から最も距離（ユークリッド距離）が近い重心のクラスタへ所属させる</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 3</div>
        <div class="vis-flow-head">③ 重心の再計算</div>
        <div class="vis-flow-desc">各クラスタに集まったデータ点の「平均座標」に重心を移動させる</div>
      </div>
      <div class="vis-flow-arrow">↺</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 4</div>
        <div class="vis-flow-head">④ 収束判定</div>
        <div class="vis-flow-desc">重心が動かなくなるまで②〜③を反復（最適kはSSEが折れ曲がる「エルボー法」で決定）</div>
      </div>
    </div>
  `,

  "c3-14": `
    <div class="vis-title">🧬 ベイズの定理：公式と「検査陽性時の真の罹患確率」計算手順</div>
    <div class="vis-formula-grid">
      <div class="vis-formula-card">
        <div class="vis-formula-head">ベイズの定理の基本公式</div>
        <div class="vis-formula-eq">事後確率 P(D|+) = { 感度 P(+|D) × 事前確率 P(D) } ÷ 全陽性確率 P(+)</div>
        <div class="vis-formula-sub">※分母 <code>P(+) = 本物の陽性 P(+|D)P(D) ＋ 偽陽性 P(+|非D)P(非D)</code></div>
      </div>
      <div class="vis-formula-card">
        <div class="vis-formula-head">💡 10,000人の具体人数に変換すると10秒で解ける！</div>
        <div class="vis-formula-eq">有病率 0.1%（病人10人 / 健康9,990人）、感度99%・特異度99%のとき：</div>
        <div class="vis-formula-sub">・本物の陽性 ＝ <code>10 × 0.99 ≈ 10人</code> ／ 偽陽性 ＝ <code>9,990 × 0.01 ≈ 100人</code><br>・陽性者のうち本当に病気の確率 ＝ <code>10 ÷ (10 + 100) ≈ 約 9%！</code></div>
      </div>
    </div>
  `,

  "c3-16": `
    <div class="vis-title">🎲 代表的な確率分布の全体対応マップ（離散 vs 連続・1回 vs n回）</div>
    <table class="vis-table">
      <thead>
        <tr><th>分布名</th><th>変数の型</th><th>どんな現象を表す分布か（DL・統計での登場場面）</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">ベルヌーイ分布</strong></td><td>離散（0 か 1）</td><td>コイントス<strong>1回</strong>の表裏（2値分類の<strong>シグモイド出力</strong>が仮定する分布）</td></tr>
        <tr><td><strong class="vis-hl-cyan">二項分布</strong></td><td>離散（0〜n回）</td><td>ベルヌーイ試行を <strong>n回</strong> 繰り返したときの成功回数</td></tr>
        <tr><td><strong class="vis-hl-amber">カテゴリカル分布</strong></td><td>離散（Kクラス）</td><td>K面サイコロ<strong>1回</strong>の出目（多クラス分類の<strong>ソフトマックス出力</strong>が仮定する分布）</td></tr>
        <tr><td><strong class="vis-hl-amber">多項分布</strong></td><td>離散（各出現回数）</td><td>K面サイコロを <strong>n回</strong> 振ったときの各目の出現回数</td></tr>
        <tr><td><strong class="vis-hl-emerald">ポアソン分布</strong></td><td>離散（0, 1, 2...）</td><td>単位時間あたりに平均 λ 回起きる<strong>稀な事象（交通事故・サーバ故障）の発生件数</strong>（平均＝分散＝λ）</td></tr>
        <tr><td><strong>正規分布（ガウス分布）</strong></td><td>連続（実数）</td><td>平均 μ・分散 σ² の釣鐘型分布（<strong>回帰の最小二乗法</strong>の誤差や<strong>VAEの潜在空間</strong>で仮定）</td></tr>
      </tbody>
    </table>
  `,

  "c4-13": `
    <div class="vis-title">⚖️ 重みの初期値（Xavier vs He）と活性化関数の鉄板ペア表</div>
    <table class="vis-table">
      <thead>
        <tr><th>初期化手法</th><th>標準偏差（前層ノード数 n）</th><th>組み合わせる活性化関数</th><th>理由</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-cyan">Xavier（Glorot）の初期値</strong></td>
          <td><code>σ = √(1 / n)</code></td>
          <td><strong class="vis-hl-cyan">シグモイド関数 ／ tanh関数</strong></td>
          <td>原点付近が線形な S字型関数において、各層の出力分散が一定に保たれるよう設計</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-emerald">He（Kaiming He）の初期値</strong></td>
          <td><code>σ = √(2 / n)</code></td>
          <td><strong class="vis-hl-emerald">ReLU ／ Leaky ReLU 等</strong></td>
          <td>ReLUは負の領域がすべて 0 に潰れて分散が半分になるため、あらかじめ分散を <strong>2倍</strong> にして補う</td>
        </tr>
      </tbody>
    </table>
  `,

  "c4-25": `
    <div class="vis-title">🪶 モデル軽量化・高速化の3大技術（知識蒸留・プルーニング・量子化）比較表</div>
    <table class="vis-table">
      <thead>
        <tr><th>軽量化手法</th><th>仕組み</th><th>試験の重要キーワード</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">① 知識蒸留</strong><br>(Distillation)</td><td>巨大な「教師モデル」の出力確率分布（ソフトターゲット）を小さな「生徒モデル」に模倣させる</td><td><strong>温度付きソフトマックス (Temperature T)</strong>、DistilBERT</td></tr>
        <tr><td><strong class="vis-hl-amber">② プルーニング</strong><br>（枝刈り）</td><td>寄与の小さい重み（0に近い重み）やニューロン・チャネルを削除してスパース化する</td><td><strong>宝くじ仮説（Lottery Ticket Hypothesis：当たりの初期値を維持）</strong></td></tr>
        <tr><td><strong class="vis-hl-emerald">③ 量子化</strong><br>(Quantization)</td><td>重みや活性化値のビット精度（FP32 → FP16 / INT8 / INT4）を落としてメモリと演算を削減</td><td><strong>PTQ（学習後量子化）</strong>、<strong>QAT（量子化考慮学習）</strong>、QLoRA</td></tr>
      </tbody>
    </table>
  `,

  "c5-01": `
    <div class="vis-title">👁️ ネオコグニトロン（1980年 福島邦彦）：S細胞とC細胞の交互階層構造</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">入力</div>
        <div class="vis-flow-head">入力画像</div>
        <div class="vis-flow-desc">手書き文字などの2次元視覚パターン</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">S細胞（単純型細胞）</div>
        <div class="vis-flow-head">① 局所特徴の抽出</div>
        <div class="vis-flow-desc">エッジや傾きを検出<br><strong class="vis-hl-cyan">＝ CNNの「畳み込み層」に相当！</strong></div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">C細胞（複雑型細胞）</div>
        <div class="vis-flow-head">② 位置ずれの許容</div>
        <div class="vis-flow-desc">特徴の位置が少しズレても吸収<br><strong class="vis-hl-amber">＝ CNNの「プーリング層」に相当！</strong></div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">交互に反復</div>
        <div class="vis-flow-head">S細胞 ➔ C細胞 ...</div>
        <div class="vis-flow-desc">自己組織化（教師なし）で学習（※誤差逆伝播を導入したのが後のLeNet）</div>
      </div>
    </div>
  `,

  "c5-08": `
    <div class="vis-title">🎛️ SENet（2017年優勝）：SEブロックの2ステップ（Squeeze ➔ Excitation）</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">入力特徴マップ</div>
        <div class="vis-flow-head">H × W × C</div>
        <div class="vis-flow-desc">畳み込み層から出力されたC枚のチャネル特徴マップ</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 1: Squeeze（圧縮）</div>
        <div class="vis-flow-head">① Global Average Pooling</div>
        <div class="vis-flow-desc">各チャネルの空間 (H×W) を平均して <strong>1 × 1 × C のベクトル</strong> に集約</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 2: Excitation（励起）</div>
        <div class="vis-flow-head">② 2層FC ＋ シグモイド</div>
        <div class="vis-flow-desc">ボトルネック全結合層とSigmoidで<strong>各チャネルの重要度重み (0〜1)</strong> を算出</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">Scale（重み付け）</div>
        <div class="vis-flow-head">③ 元のマップに乗算</div>
        <div class="vis-flow-desc">重要なチャネルを強調し不要なチャネルを抑制（チャネル方向Attention）</div>
      </div>
    </div>
  `,

  "c5-10": `
    <div class="vis-title">🧩 Vision Transformer（ViT）：画像を「16×16パッチの単語列」として扱う仕組み</div>
    <div class="vis-flow">
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 1</div>
        <div class="vis-flow-head">① パッチ分割</div>
        <div class="vis-flow-desc">入力画像を 16×16 ピクセル等の正方形グリッドに切り分け1列に並べる</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 2</div>
        <div class="vis-flow-head">② 線形射影＋[CLS]＋位置</div>
        <div class="vis-flow-desc">各パッチをベクトル化し、先頭に分類用 <code>[CLS]</code> トークンと位置埋め込みを付与</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 3</div>
        <div class="vis-flow-head">③ Transformer Encoder</div>
        <div class="vis-flow-desc">CNNを一切使わず、標準の Multi-Head Self-Attention で画像全体の関係性を計算</div>
      </div>
      <div class="vis-flow-arrow">➔</div>
      <div class="vis-flow-step">
        <div class="vis-flow-num">STEP 4</div>
        <div class="vis-flow-head">④ MLP Head で分類</div>
        <div class="vis-flow-desc">最終層の <code>[CLS]</code> トークン出力をMLPに通して画像クラスを予測</div>
      </div>
    </div>
  `,

  "c5-11": `
    <div class="vis-title">🎯 物体検出モデルの進化：2段階検出（R-CNN系）vs 1段階検出（YOLO/SSD/DETR）</div>
    <table class="vis-table">
      <thead>
        <tr><th>モデル名</th><th>タイプ</th><th>候補領域（Region Proposal）の作り方</th><th>特徴・ボトルネック解消の歴史</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>R-CNN</strong> (2014)</td><td>2段階</td><td><strong>Selective Search</strong>（固定アルゴリズム）</td><td>約2,000個の候補領域を<strong>1枚ずつ毎回CNNに通す</strong>ため非常に遅い</td></tr>
        <tr><td><strong>Fast R-CNN</strong> (2015)</td><td>2段階</td><td>Selective Search（ここが速度限界に）</td><td><strong>画像全体を1回だけCNNに通し</strong>、特徴マップ上で <strong>RoI Pooling</strong> して高速化</td></tr>
        <tr><td><strong class="vis-hl-cyan">Faster R-CNN</strong> (2015)</td><td>2段階</td><td><strong class="vis-hl-cyan">RPN（Region Proposal Network）＋アンカー</strong></td><td>候補領域抽出もCNN内部に組み込み、<strong>完全 End-to-End 化</strong>を達成</td></tr>
        <tr><td><strong class="vis-hl-amber">YOLO / SSD</strong></td><td><strong>1段階</strong></td><td>グリッド分割 ／ マルチスケール特徴マップ</td><td>候補領域抽出と分類を<strong>単一ネットワークで一括回帰</strong>しリアルタイム高速処理</td></tr>
        <tr><td><strong class="vis-hl-emerald">DETR</strong> (2020)</td><td><strong>1段階</strong></td><td>CNN ＋ <strong>Transformer ＋ Object Queries</strong></td><td><strong>二部マッチング損失</strong>により、アンカー設計も手作業の <strong>NMS（非極大値抑制）も不要化！</strong></td></tr>
      </tbody>
    </table>
  `,

  "c5-25": `
    <div class="vis-title">📘 BERT（双方向Transformer Encoder）の2つの事前学習タスクと派生モデル</div>
    <table class="vis-table">
      <thead>
        <tr><th>事前学習タスク・派生モデル</th><th>内容・仕組み</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">① MLM（マスク言語モデル）</strong></td><td>入力トークンの <strong>15%</strong> を選び（80%を <code>[MASK]</code>、10%を別単語、10%をそのまま）、前後の双方向文脈から元の単語を穴埋め予測</td></tr>
        <tr><td><strong class="vis-hl-amber">② NSP（次文予測）</strong></td><td><code>[CLS] 文A [SEP] 文B [SEP]</code> と入力し、文Bが本当に文Aの直後に続く文かどうかを <code>[CLS]</code> 出力で2値分類</td></tr>
        <tr><td><strong class="vis-hl-emerald">RoBERTa / ALBERT / DistilBERT</strong></td><td>・<strong>RoBERTa</strong>：NSPを廃止し動的マスク＋大データで強化<br>・<strong>ALBERT</strong>：全層パラメータ共有で超軽量化<br>・<strong>DistilBERT</strong>：知識蒸留で軽量・高速化</td></tr>
      </tbody>
    </table>
  `,

  "c5-29": `
    <div class="vis-title">🦓 画像変換GANの超頻出対比：Pix2Pix（ペア画像必須）vs CycleGAN（ペア画像不要）</div>
    <table class="vis-table">
      <thead>
        <tr><th>比較項目</th><th>Pix2Pix</th><th>CycleGAN</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>学習データの条件</strong></td><td><strong class="vis-hl-rose">対応する「ペア画像」が必須！</strong><br>（同じ構図の白黒とカラー、線画と実写など）</td><td><strong class="vis-hl-emerald">ペア画像が不要！（教師なしドメイン変換）</strong><br>（無関係な馬の写真集とシマウマの写真集だけでOK）</td></tr>
        <tr><td><strong>核心となる損失関数</strong></td><td>条件付きGAN損失 ＋ L1損失（正解ペアとのピクセル差）</td><td><strong class="vis-hl-cyan">サイクル一貫性損失（Cycle Consistency Loss）</strong><br>「馬→シマウマ→馬」と往復変換したときに元の画像に戻るよう制約</td></tr>
      </tbody>
    </table>
  `,

  "c5-38": `
    <div class="vis-title">🔍 説明可能なAI（XAI）の5大手法比較マトリクス</div>
    <table class="vis-table">
      <thead>
        <tr><th>手法名</th><th>対象モデル</th><th>判断根拠を可視化・算出する仕組み</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>CAM</strong></td><td>CNN限定（<strong>GAP層が必須</strong>）</td><td>最終畳み込み層の特徴マップと出力層の重みの線形結合で注目箇所をヒートマップ化</td></tr>
        <tr><td><strong class="vis-hl-cyan">Grad-CAM</strong></td><td><strong>任意のCNN</strong>（GAP層不要）</td><td>ターゲットクラスの出力から最終畳み込み層へ流れる<strong>「勾配（Gradient）」</strong>の平均を重みとしてヒートマップ化</td></tr>
        <tr><td><strong class="vis-hl-amber">LIME</strong></td><td><strong>モデル非依存</strong>（画像・表・文）</td><td>説明したい1データの周辺を少し変化（摂動）させ、<strong>局所的に解釈可能な単純モデル（線形回帰等）で近似</strong></td></tr>
        <tr><td><strong class="vis-hl-emerald">SHAP</strong></td><td><strong>モデル非依存</strong>（表データ等で定番）</td><td><strong>協力ゲーム理論の「シャープレイ値（Shapley Value）」</strong>に基づき、各特徴量の予測への限界貢献度を公平に算出</td></tr>
        <tr><td><strong>Permutation Importance</strong></td><td><strong>モデル非依存</strong></td><td>検証データの<strong>ある特徴量1列だけをランダムにシャッフル</strong>したとき、予測精度がどれだけ悪化するかで重要度を計測</td></tr>
      </tbody>
    </table>
  `,

  "c6-02": `
    <div class="vis-title">📈 LLMのスケーリング則：Kaplan則（2020）vs Chinchilla則（2022）の比較</div>
    <table class="vis-table">
      <thead>
        <tr><th>法則名（提唱年・組織）</th><th>計算予算 C を増やすときの最適配分</th><th>LLM開発トレンドへの影響</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Kaplanらのスケーリング則</strong><br>(2020年 / OpenAI)</td><td>学習データ量よりも<strong class="vis-hl-amber">「モデルのパラメータ数 N」を優先して大きくすべき</strong></td><td>GPT-3（1,750億パラメータ・3,000億トークン）など巨大モデル化を推進</td></tr>
        <tr><td><strong class="vis-hl-emerald">Chinchilla（チンチラ）則</strong><br>(2022年 / DeepMind Hoffmannら)</td><td><strong class="vis-hl-emerald">「パラメータ数 N と 学習トークン数 D は同じ比率（1:1）で増やすべき」</strong><br>（従来モデルはサイズに対して学習データ量が圧倒的に不足していたと判明）</td><td>パラメータ数を抑えても大量トークンで学習させる高性能モデル（Chinchilla 70B、LLaMA等）の礎に</td></tr>
      </tbody>
    </table>
  `,

  "c6-09": `
    <div class="vis-title">💬 プロンプトエンジニアリングの主要5手法の整理表</div>
    <table class="vis-table">
      <thead>
        <tr><th>手法名</th><th>プロンプトの工夫・仕組み</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">CoT (Chain-of-Thought)</strong></td><td>いきなり答えを出させず、例題の中で<strong>「途中の推論ステップ（思考の連鎖）」</strong>を示して段階的に考えさせる</td></tr>
        <tr><td><strong class="vis-hl-cyan">Zero-shot CoT</strong></td><td>例題を与えずに、プロンプト末尾に<strong>『ステップバイステップで考えてみましょう（Let's think step by step）』</strong>と一言添えるだけで推論力を引き出す</td></tr>
        <tr><td><strong class="vis-hl-amber">Self-Consistency（自己整合性）</strong></td><td>CoTで<strong>複数の異なる推論経路をサンプリング生成</strong>させ、最終回答の<strong>「多数決」</strong>をとって精度を高める</td></tr>
        <tr><td><strong>ToT (Tree of Thoughts)</strong></td><td>思考を1本道ではなく<strong>「木構造（Tree）」</strong>に分岐させ、複数の候補ステップを評価・バックトラックしながら探索する</td></tr>
        <tr><td><strong class="vis-hl-emerald">ReAct (Reasoning + Acting)</strong></td><td><strong>「思考（Thought）→ 行動（Action：外部検索やAPI実行）→ 観察（Observation）」</strong>を交互に繰り返して事実確認しながら解く</td></tr>
      </tbody>
    </table>
  `,

  "c6-15": `
    <div class="vis-title">🔀 MoE（Mixture of Experts：混合エキスパートモデル）のスパース活性化構造</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 135" class="vis-svg" role="img" aria-label="Mixture of Expertsのルーターとエキスパート選択">
        <rect x="10" y="6" width="620" height="122" rx="8" fill="#0f172a" stroke="#334155"/>
        <rect x="22" y="46" width="85" height="42" rx="6" fill="#1e293b" stroke="#64748b"/>
        <text x="64" y="71" fill="#f8fafc" font-size="11.5" text-anchor="middle" font-weight="bold">入力トークン</text>
        <line x1="107" y1="67" x2="138" y2="67" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <!-- Router -->
        <rect x="144" y="42" width="110" height="50" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
        <text x="199" y="64" fill="#fde047" font-size="12" text-anchor="middle" font-weight="bold">Router (ゲート)</text>
        <text x="199" y="80" fill="#cbd5e1" font-size="10" text-anchor="middle">Top-k のみ選択</text>

        <!-- Experts -->
        <line x1="254" y1="54" x2="315" y2="26" stroke="#10b981" stroke-width="2.5"/>
        <line x1="254" y1="62" x2="315" y2="54" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="254" y1="72" x2="315" y2="82" stroke="#10b981" stroke-width="2.5"/>
        <line x1="254" y1="80" x2="315" y2="110" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>

        <rect x="318" y="14" width="115" height="22" rx="4" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="1.8"/><text x="375" y="29" fill="#6ee7b7" font-size="10.5" text-anchor="middle" font-weight="bold">⚡ Expert 1 (ON)</text>
        <rect x="318" y="42" width="115" height="22" rx="4" fill="#1e293b" stroke="#475569"/><text x="375" y="57" fill="#64748b" font-size="10.5" text-anchor="middle">Expert 2 (休止)</text>
        <rect x="318" y="70" width="115" height="22" rx="4" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="1.8"/><text x="375" y="85" fill="#6ee7b7" font-size="10.5" text-anchor="middle" font-weight="bold">⚡ Expert 3 (ON)</text>
        <rect x="318" y="98" width="115" height="22" rx="4" fill="#1e293b" stroke="#475569"/><text x="375" y="113" fill="#64748b" font-size="10.5" text-anchor="middle">Expert 4 (休止)</text>

        <line x1="433" y1="25" x2="475" y2="60" stroke="#10b981" stroke-width="2"/>
        <line x1="433" y1="81" x2="475" y2="72" stroke="#10b981" stroke-width="2"/>

        <rect x="480" y="32" width="138" height="70" rx="6" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="549" y="54" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="bold">重み付き合算出力</text>
        <text x="549" y="72" fill="#fde047" font-size="10" text-anchor="middle" font-weight="bold">総パラメータは大容量</text>
        <text x="549" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">推論計算量は少量のまま！</text>
      </svg>
    </div>
  `,

  "c6-16": `
    <div class="vis-title">🖼️ CLIP（Contrastive Language-Image Pre-training）：画像×テキストの対照学習</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 140" class="vis-svg" role="img" aria-label="CLIPの画像とテキストの対照学習マトリクス">
        <rect x="10" y="6" width="620" height="128" rx="8" fill="#0f172a" stroke="#334155"/>
        <rect x="22" y="24" width="140" height="36" rx="6" fill="#0284c7"/><text x="92" y="46" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">画像 Encoder (ViT)</text>
        <rect x="22" y="76" width="140" height="36" rx="6" fill="#d97706"/><text x="92" y="98" fill="#fff" font-size="11.5" text-anchor="middle" font-weight="bold">テキスト Encoder</text>
        <line x1="162" y1="42" x2="215" y2="42" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-ch1)"/>
        <line x1="162" y1="94" x2="215" y2="94" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-ch1)"/>

        <!-- N x N Contrastive Matrix -->
        <rect x="225" y="22" width="90" height="90" fill="#1e293b" stroke="#64748b"/>
        <rect x="225" y="22" width="30" height="30" fill="#10b981" stroke="#fff"/><text x="240" y="41" fill="#0f172a" font-size="9.5" text-anchor="middle" font-weight="bold">正例</text>
        <rect x="255" y="52" width="30" height="30" fill="#10b981" stroke="#fff"/><text x="270" y="71" fill="#0f172a" font-size="9.5" text-anchor="middle" font-weight="bold">正例</text>
        <rect x="285" y="82" width="30" height="30" fill="#10b981" stroke="#fff"/><text x="300" y="101" fill="#0f172a" font-size="9.5" text-anchor="middle" font-weight="bold">正例</text>

        <text x="332" y="42" fill="#6ee7b7" font-size="11.5" font-weight="bold">● 対角成分（正しい画像と文のペア N個）：</text>
        <text x="342" y="60" fill="#f8fafc" font-size="10.5">コサイン類似度を <tspan fill="#fde047" font-weight="bold">最大化（1に近づける）</tspan></text>
        <text x="332" y="88" fill="#94a3b8" font-size="11.5" font-weight="bold">● 非対角成分（無関係なペア N²−N個）：</text>
        <text x="342" y="106" fill="#cbd5e1" font-size="10.5">類似度を <tspan fill="#fca5a5" font-weight="bold">最小化</tspan> ⇒ Zero-shot分類が可能に！</text>
      </svg>
    </div>
  `,

  "c7-01": `
    <div class="vis-title">⚖️ 著作権法第30条の4（AI学習・情報解析）の「原則OK」と「ただし書きNG」の境界</div>
    <table class="vis-table">
      <thead>
        <tr><th>区分</th><th>対象となるケース</th><th>著作権者の許諾</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong class="vis-hl-emerald">原則：非享受目的</strong><br>（第30条の4 本文）</td>
          <td>・AI開発のための学習データとしての複製・利用<br>・情報解析（トレンド分析・自然言語解析など）</td>
          <td><strong class="vis-hl-emerald">◎ 原則として許諾不要</strong></td>
        </tr>
        <tr>
          <td><strong class="vis-hl-rose">例外①：享受目的が併存</strong></td>
          <td>・特定のクリエイターの少数の作品群のみを学習させ、その表現・作風をそのまま模倣して出力させる目的など</td>
          <td><strong class="vis-hl-rose">× 第30条の4は適用されず許諾が必要</strong></td>
        </tr>
        <tr>
          <td><strong class="vis-hl-rose">例外②：ただし書き該当</strong><br>（利益を不当に害する場合）</td>
          <td>・情報解析（AI学習）向けに<strong>有償販売・ライセンス提供されているデータベース著作物</strong>を無断でAI学習に利用する場合など</td>
          <td><strong class="vis-hl-rose">× 権利者の利益を不当に害するため許諾が必要</strong></td>
        </tr>
      </tbody>
    </table>
  `,

  "c7-11": `
    <div class="vis-title">📑 経産省『AI・データの利用に関する契約ガイドライン』データ契約の3類型</div>
    <table class="vis-table">
      <thead>
        <tr><th>契約類型</th><th>当事者間のデータの流れ</th><th>典型例・契約上の重要チェックポイント</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">① データ提供型</strong></td><td>一方（保持者）が既に持っているデータを他方へ提供・譲渡・ライセンス</td><td>データの利用目的の範囲、第三者提供の可否、データ欠陥時の非保証（免責）</td></tr>
        <tr><td><strong class="vis-hl-amber">② データ創出型</strong></td><td>複数の当事者が協力して<strong>従来存在しなかった新しいデータを共同生成</strong></td><td>工場の工作機械メーカーと工場運営者のセンサーデータ等。<strong>誰がどの範囲で利用できるか・派生データの帰属を必ず事前に契約で定める！</strong></td></tr>
        <tr><td><strong class="vis-hl-emerald">③ データ共用型</strong><br>（プラットフォーム型）</td><td>複数の事業者が<strong>プラットフォームにデータを出し合って相互に共有・利活用</strong></td><td>参加規約による利用範囲、営業秘密・競合他社への漏洩防止ルール</td></tr>
      </tbody>
    </table>
  `,

  "c7-17": `
    <div class="vis-title">🏛️ 内閣府『人間中心のAI社会原則』(2019) ➔ 経産省・総務省『AI事業者ガイドライン』(2024) の対応表</div>
    <table class="vis-table">
      <thead>
        <tr><th>文書名</th><th>対象・基本構造</th><th>掲げられている原則・指針</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>内閣府<br>『人間中心のAI社会原則』</strong><br>(2019年3月)</td>
          <td><strong>3つの基本理念</strong>：<br>①人間の尊厳<br>②多様性と包摂性<br>③持続可能性</td>
          <td><strong>7つの原則</strong>：<br>①人間中心、②教育・リテラシー、③プライバシー確保、④セキュリティ確保、⑤公正競争確保、⑥公平性・説明責任及び透明性、⑦イノベーション</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-cyan">総務省・経済産業省<br>『AI事業者ガイドライン』</strong><br>(2024年4月策定・既存の3文書統合)</td>
          <td><strong>3つの主体</strong>：<br>①<strong class="vis-hl-cyan">AI開発者</strong><br>②<strong class="vis-hl-amber">AI提供者</strong><br>③<strong class="vis-hl-emerald">AI利用者</strong>（事業者）</td>
          <td><strong>共通の指針（10項目）</strong>：<br>①人間中心、②<strong>安全性</strong>、③<strong>公平性</strong>、④プライバシー保護、⑤セキュリティ確保、⑥<strong>透明性</strong>、⑦<strong>アカウンタビリティ</strong>、⑧教育・リテラシー、⑨公正競争確保、⑩イノベーション</td>
        </tr>
      </tbody>
    </table>
  `,

  "c7-28": `
    <div class="vis-title">🔐 4大プライバシー保護・機密計算技術の役割比較表</div>
    <table class="vis-table">
      <thead>
        <tr><th>技術名</th><th>プライバシーを守る仕組み</th><th>主な用途・特徴</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">① 差分プライバシー</strong><br>(Differential Privacy)</td><td>集計結果や学習時の勾配に<strong>数学的に調整されたノイズ（ラプラスノイズ等）</strong>を加える</td><td>「特定の1人のデータが入っていてもいなくても出力がほぼ変わらない」ことを保証（メンバーシップ推論対策）</td></tr>
        <tr><td><strong class="vis-hl-amber">② k-匿名化</strong><br>(k-Anonymity)</td><td>生年月日や住所などの準識別子を丸め、<strong>同じ属性の組み合わせを持つ人が必ず k人以上</strong>になるよう加工</td><td>特定の個人が識別される確率を <code>1/k</code> 以下に抑える（匿名加工情報の作成等で利用）</td></tr>
        <tr><td><strong class="vis-hl-emerald">③ 連合学習</strong><br>(Federated Learning)</td><td><strong>生データをスマホや各病院から外部に出さず</strong>、端末内で学習した<strong>「重みの更新差分（勾配）」だけ</strong>を中央サーバで集約</td><td>医療画像AIやスマホの予測変換など、生データを集められない環境での分散学習</td></tr>
        <tr><td><strong>④ 秘密計算</strong><br>（準同型暗号・マルチパーティ計算）</td><td>データを<strong>暗号化したまま（一度も復号することなく）</strong>足し算や掛け算・統計処理を実行</td><td>クラウド事業者にすら中身を見せずに機密データの分析・AI推論を実行可能</td></tr>
      </tbody>
    </table>
  `,

  "c7-29": `
    <div class="vis-title">📡 MLOps：モデル劣化の2大原因（ドリフト）と 本番デプロイ3方式の比較</div>
    <table class="vis-table">
      <thead>
        <tr><th>分類</th><th>用語名</th><th>定義・違い（ひっかけ頻出ポイント）</th></tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"><strong class="vis-hl-amber">モデルの劣化</strong><br>（ドリフト）</td>
          <td><strong class="vis-hl-cyan">データドリフト</strong><br>（共変量シフト）</td>
          <td>入出力の関係自体は変わっていないが、<strong>入力データ <code>X</code> の分布 <code>P(X)</code> が学習時と変化</strong>する現象（例：カメラ交換で画質が変わる、客層の年齢分布が変わる）</td>
        </tr>
        <tr>
          <td><strong class="vis-hl-rose">コンセプトドリフト</strong></td>
          <td>入力 <code>X</code> に対する<strong>正解ラベル <code>Y</code> の関係性 <code>P(Y|X)</code> 自体が変化</strong>する現象（例：コロナ禍や法改正で消費者の購買基準そのものが変わる）</td>
        </tr>
        <tr>
          <td rowspan="3"><strong class="vis-hl-emerald">安全な本番<br>デプロイ方式</strong></td>
          <td><strong>シャドーデプロイ</strong></td>
          <td>新モデルに本番データを流して裏で予測を記録するが、<strong>ユーザーにはまだ旧モデルの結果だけを返し安全性を検証</strong>する方式</td>
        </tr>
        <tr>
          <td><strong>カナリアリリース</strong></td>
          <td>最初は<strong>ごく一部のユーザー（例：5%）にだけ新モデルを公開</strong>し、異常がなければ段階的に100%へ切り替える方式</td>
        </tr>
        <tr>
          <td><strong>A/Bテスト</strong></td>
          <td>ユーザーをランダムにグループA（旧モデル）とグループB（新モデル）に分け、<strong>クリック率や売上などのビジネスKPIを統計的に比較</strong>する方式</td>
        </tr>
      </tbody>
    </table>
  `,

  "c2-22": `
    <div class="vis-title">🛍️ レコメンデーション（推薦システム）の2大方式比較</div>
    <table class="vis-table">
      <thead>
        <tr><th>比較項目</th><th>協調フィルタリング（Collaborative Filtering）</th><th>コンテンツベース・フィルタリング</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>推薦の仕組み</strong></td><td><strong>「あなたと購入・評価履歴が似ている他ユーザー」</strong>が好んだ商品を推薦</td><td>商品そのものの<strong>「属性・特徴（ジャンル・出演者・キーワード）」</strong>が過去購入品と似ているものを推薦</td></tr>
        <tr><td><strong>メリット</strong></td><td>商品自体の特徴データが不要。意外な掘り出し物が見つかる<strong>「セレンディピティ」</strong>がある</td><td><strong>新商品でも属性データさえあれば即座に推薦できる</strong></td></tr>
        <tr><td><strong>最大の弱点</strong></td><td>履歴が全くない新規ユーザー・新商品を推薦できない<strong class="vis-hl-rose">「コールドスタート問題」</strong></td><td>似たジャンルの商品ばかり推薦され視野が狭まる（タコツボ化）</td></tr>
      </tbody>
    </table>
  `,

  "c2-28": `
    <div class="vis-title">📏 特徴量のスケーリング：標準化（Standardization）vs 正規化（Normalization）</div>
    <table class="vis-table">
      <thead>
        <tr><th>手法名</th><th>計算式</th><th>変換後の値の特徴</th><th>外れ値への耐性</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">標準化 (Z-score)</strong></td><td><code>z = (x − 平均 μ) ÷ 標準偏差 σ</code></td><td><strong>平均 0、分散（標準偏差）1</strong> に揃う（最大・最小は固定されない）</td><td><strong>◎ 外れ値に比較的強い</strong></td></tr>
        <tr><td><strong class="vis-hl-amber">正規化 (Min-Max)</strong></td><td><code>x' = (x − min) ÷ (max − min)</code></td><td>すべてのデータが<strong>最小値 0 〜 最大値 1</strong> の範囲に収まる</td><td><strong class="vis-hl-rose">× 外れ値に非常に弱い</strong>（1つの極端な外れ値で他が潰れる）</td></tr>
      </tbody>
    </table>
  `,

  "c3-10": `
    <div class="vis-title">📉 回帰モデルの4大評価指標（MAE・MSE・RMSE・決定係数 R²）比較表</div>
    <table class="vis-table">
      <thead>
        <tr><th>指標名</th><th>数式</th><th>特徴・外れ値への感度</th></tr>
      </thead>
      <tbody>
        <tr><td><strong class="vis-hl-cyan">MAE（平均絶対誤差）</strong></td><td><code>(1/N) ∑ |yᵢ − ŷᵢ|</code></td><td>誤差の絶対値の平均。<strong>外れ値の影響を受けにくい（ロバスト）</strong>。元データと同じ単位。</td></tr>
        <tr><td><strong class="vis-hl-amber">MSE（平均二乗誤差）</strong></td><td><code>(1/N) ∑ (yᵢ − ŷᵢ)²</code></td><td>誤差を2乗するため、<strong>大きな外れ値に対して非常に強いペナルティを与える</strong>。微分しやすい。</td></tr>
        <tr><td><strong>RMSE（二乗平均平方根誤差）</strong></td><td><code>√MSE</code></td><td>MSEにルートをかぶせて<strong>目的変数と同じ単位（スケール）</strong>に戻した指標。</td></tr>
        <tr><td><strong class="vis-hl-emerald">決定係数 (R²)</strong></td><td><code>1 − { ∑(yᵢ − ŷᵢ)² ÷ ∑(yᵢ − ȳ)² }</code></td><td>「平均値で予測するだけのベースライン」よりどれだけ当てはまりが良いか（<strong>1に近いほど優秀</strong>）。</td></tr>
      </tbody>
    </table>
  `,

  "c4-08": `
    <div class="vis-title">🔄 バッチ勾配降下法・SGD・ミニバッチSGDの比較 ＆ エポック計算公式</div>
    <div class="vis-formula-grid">
      <div class="vis-formula-card">
        <div class="vis-formula-head">⚡ 頻出計算：1エポックあたりの重み更新回数（イテレーション数）</div>
        <div class="vis-formula-eq">1エポックのイテレーション数 ＝ 全訓練データ数 N ÷ ミニバッチサイズ B</div>
        <div class="vis-formula-sub">例：全データ 10,000件、バッチサイズ 100件 で 5エポック学習 ➔ <code>(10,000 ÷ 100) × 5 ＝ 合計 500回更新</code></div>
      </div>
    </div>
    <table class="vis-table" style="margin-top:8px;">
      <thead>
        <tr><th>手法名</th><th>1回の重み更新に使うデータ数</th><th>特徴</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>バッチ勾配降下法</strong>（最急降下法）</td><td><strong>全訓練データ N 件すべて</strong></td><td>勾配が安定するが計算・メモリが膨大で<strong>局所最適解や鞍点から抜け出しにくい</strong></td></tr>
        <tr><td><strong>確率的勾配降下法 (SGD)</strong></td><td>ランダムに選んだ <strong>1件のみ</strong></td><td>更新ごとのランダムな揺らぎにより<strong>局所最適解・鞍点から脱出しやすい</strong></td></tr>
        <tr><td><strong class="vis-hl-emerald">ミニバッチSGD</strong></td><td><strong>B 件（例：32〜256件）の小塊</strong></td><td><strong>GPU並列計算の高速性と、鞍点脱出の揺らぎを両立</strong>（深層学習の標準）</td></tr>
      </tbody>
    </table>
  `,

  "c5-32": `
    <div class="vis-title">🎮 強化学習の基本相互作用ループ（マルコフ決定過程 MDP）</div>
    <div class="vis-svg-wrap">
      <svg viewBox="0 0 640 135" class="vis-svg" role="img" aria-label="強化学習のエージェントと環境の相互作用">
        <rect x="10" y="6" width="620" height="122" rx="8" fill="#0f172a" stroke="#334155"/>
        <!-- Agent -->
        <rect x="65" y="38" width="165" height="58" rx="8" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="2"/>
        <text x="147" y="63" fill="#38bdf8" font-size="13" text-anchor="middle" font-weight="bold">🤖 エージェント (Agent)</text>
        <text x="147" y="81" fill="#cbd5e1" font-size="10.5" text-anchor="middle">方策 π(a|s) に従い行動選択</text>

        <!-- Environment -->
        <rect x="410" y="38" width="165" height="58" rx="8" fill="rgba(16,185,129,0.18)" stroke="#10b981" stroke-width="2"/>
        <text x="492" y="63" fill="#6ee7b7" font-size="13" text-anchor="middle" font-weight="bold">🌍 環境 (Environment)</text>
        <text x="492" y="81" fill="#cbd5e1" font-size="10.5" text-anchor="middle">状態遷移 P(s'|s,a) と報酬発生</text>

        <!-- Top Arrow: Action a_t -->
        <path d="M230 50 L405 50" stroke="#fde047" stroke-width="2.5" marker-end="url(#arrow-ch1)"/>
        <text x="318" y="40" fill="#fde047" font-size="12" text-anchor="middle" font-weight="bold">① 行動 aₜ を実行</text>

        <!-- Bottom Arrow: State s_{t+1} & Reward r_{t+1} -->
        <path d="M405 84 L235 84" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-ch1)"/>
        <text x="318" y="104" fill="#6ee7b7" font-size="12" text-anchor="middle" font-weight="bold">② 次の状態 sₜ₊₁ と 報酬 rₜ₊₁ を観測</text>
      </svg>
    </div>
  `
};
