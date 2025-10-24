// app/page.tsx
'use client';

import React from 'react';

export default function Page() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section className="section hero">
        <div className="container">
          <div className="badge">Open Data × Public Transit × UX</div>
          <h1 className="title">
            最短ではなく、<br />最善の経路を。
          </h1>
          <p className="lead">
            MoveMint は、移動時間を“体験”に変える新しい経路アプリ。<br />
            目的（Why）からはじめて、移動前・移動中・移動後のすべてをつなぎ、
            使うたびに公共交通を賢くします。
          </p>
          <div className="cta">
            <a href="#problem" className="btn primary">Why MoveMint?</a>
            <a href="#open-data" className="btn ghost">Open Data</a>
          </div>
        </div>
      </section>

      {/* ===== Problem (差別化) ===== */}
      <section id="problem" className="section alt">
        <div className="container">
          <h2 className="h2">地図アプリが見落としてきたもの</h2>
          <p className="desc">
            Google / Yahoo! は「距離・時間・料金」を最適化します。<br />
            MoveMint は「<strong>目的・体験・意味</strong>」を最適化します。
          </p>

          <div className="grid compare">
            <div className="card">
              <h3>従来の経路アプリ</h3>
              <ul>
                <li>所要時間・乗換回数の最小化</li>
                <li>検索したら体験は終わり</li>
                <li>クローズドなデータに依存</li>
              </ul>
            </div>
            <div className="card highlight">
              <h3>MoveMint</h3>
              <ul>
                <li><strong>目的（通勤/通学/観光）</strong>を考慮</li>
                <li><strong>時間に合うコンテンツ</strong>を提案</li>
                <li><strong>フィードバック</strong>で公共交通を改善</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Open Data（どこで使うか） ===== */}
      <section id="open-data" className="section">
        <div className="container">
          <h2 className="h2">MoveMintはオープンデータで動く</h2>
          <p className="desc">GTFS / GTFS-RT を核に、現実の“体験時間”で最善の経路を導きます。</p>

          <div className="grid three">
            <div className="card">
              <div className="kicker">① ルート検索</div>
              <h3>GTFS（時刻表・経路）</h3>
              <p>
                <code>routes.txt / trips.txt / stop_times.txt</code> などを用いて、
                候補経路と<strong>所要時間</strong>を算出。
              </p>
            </div>
            <div className="card">
              <div className="kicker">② 運行補正</div>
              <h3>GTFS-RT（リアルタイム）</h3>
              <p>
                遅延・位置情報を反映し、<strong>実時間ベース</strong>に補正。
                「理論値ではなく現実の時間」で最善を提示。
              </p>
            </div>
            <div className="card">
              <div className="kicker">③ 学習</div>
              <h3>行動ログ × 目的</h3>
              <p>
                ユーザーの<strong>目的選択・フィードバック</strong>と照合して、
                接続品質や混雑回避効果を学習・改善。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== User Flow（移動前・中・後） ===== */}
      <section id="flow" className="section alt">
        <div className="container">
          <h2 className="h2">移動の3フェーズをつなぐ</h2>

          <div className="timeline">
            <div className="step">
              <div className="dot">1</div>
              <div>
                <h3>移動前：意思決定</h3>
                <p>
                  出発地・目的地を入力 → <strong>所要時間</strong>を取得（GTFS/GTFS-RT）。<br />
                  さらに<strong>目的（通勤/通学/観光…）</strong>を選択。
                </p>
                <div className="hint">ここで「オープンデータ」を使用しています。</div>
              </div>
            </div>

            <div className="step">
              <div className="dot">2</div>
              <div>
                <h3>移動中：時間価値化</h3>
                <p>
                  所要時間に合った<strong>コンテンツ提案</strong>（音声・短編動画・記事朗読）。<br />
                  完走でポイント加算。混雑回避ルート選択も評価。
                </p>
              </div>
            </div>

            <div className="step">
              <div className="dot">3</div>
              <div>
                <h3>移動後：フィードバック</h3>
                <p>
                  予定通り到着？乗換はスムーズ？経路変更は？を簡単入力。<br />
                  フィードバックで<strong>追加ポイント</strong>、データは公共交通の改善へ。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Insight（事業者メリット） ===== */}
      <section id="insight" className="section">
        <div className="container">
          <h2 className="h2">公共交通への還元（MoveMint Insight）</h2>

          <div className="grid two">
            <div className="card">
              <h3>新しいKPI</h3>
              <ul className="bullets">
                <li>Transfer Wait Index（乗換待ち時間）</li>
                <li>Purpose Mix Ratio（目的別利用比）</li>
                <li>Connection Reliability（接続信頼度）</li>
              </ul>
            </div>
            <div className="card">
              <h3>意思決定を変える</h3>
              <ul className="bullets">
                <li>ダイヤの接続改善ポイントを特定</li>
                <li>混雑分散・経路誘導の実効性を可視化</li>
                <li>観光/通勤など目的別の施策設計</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Incentive（使う理由） ===== */}
      <section id="incentive" className="section alt">
        <div className="container">
          <h2 className="h2">使うたびに、社会が少し良くなる</h2>
          <div className="grid three">
            <div className="card">
              <h3>検索＋目的入力</h3>
              <p>+10pt / 利用意図データで改善に貢献</p>
            </div>
            <div className="card">
              <h3>コンテンツ完走</h3>
              <p>+20pt / 移動時間を価値化</p>
            </div>
            <div className="card">
              <h3>到着後フィードバック</h3>
              <p>+30pt / 接続品質の見える化</p>
            </div>
          </div>
          <p className="desc small">
            ポイントは交通割引や沿線クーポンに交換（想定）。<br />
            利用者にも事業者にも価値が循環します。
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta">
        <div className="container">
          <h2 className="h2">MoveMint — Move with Meaning.</h2>
          <p className="lead">
            オープンデータ × 体験設計 × 社会還元。<br />
            「最善の経路」を、ここから。
          </p>
          <a href="#open-data" className="btn primary">オープンデータの使い所を見る</a>
        </div>
      </section>
    </main>
  );
}