const t = String.raw;

export const FREQUENCIES = {
  most: "最頻出",
  frequent: "頻出",
  advanced: "発展"
};

export const FORMULAS = [
  {
    id: "basic-constants-pi-e",
    course: "共通",
    genre: "基本定数・特殊値",
    frequency: "frequent",
    title: "円周率と自然対数の底",
    prompt: t`円周率と自然対数の底の近似値は？`,
    answer: t`\(\pi \approx 3.14159,\quad e \approx 2.71828\)`
  },
  {
    id: "basic-constants-roots",
    course: "共通",
    genre: "基本定数・特殊値",
    frequency: "frequent",
    title: "平方根の近似値",
    prompt: t`\(\sqrt{2},\sqrt{3},\sqrt{5}\) の近似値は？`,
    answer: t`\(\sqrt{2}\approx1.414,\quad \sqrt{3}\approx1.732,\quad \sqrt{5}\approx2.236\)`
  },
  {
    id: "basic-constants-common-log",
    course: "共通",
    genre: "基本定数・特殊値",
    frequency: "frequent",
    title: "常用対数の近似値",
    prompt: t`\(\log_{10}2,\log_{10}3\) の近似値は？`,
    answer: t`\(\log_{10}2\approx0.301,\quad \log_{10}3\approx0.477\)`
  },
  {
    id: "special-angle-30",
    course: "共通",
    genre: "基本定数・特殊値",
    frequency: "frequent",
    title: "30度の三角比",
    prompt: t`30度の \(\sin,\cos,\tan\) は？`,
    answer: t`\(\sin30^\circ=\frac12,\quad \cos30^\circ=\frac{\sqrt3}{2},\quad \tan30^\circ=\frac1{\sqrt3}\)`
  },
  {
    id: "special-angle-45",
    course: "共通",
    genre: "基本定数・特殊値",
    frequency: "frequent",
    title: "45度の三角比",
    prompt: t`45度の \(\sin,\cos,\tan\) は？`,
    answer: t`\(\sin45^\circ=\frac1{\sqrt2},\quad \cos45^\circ=\frac1{\sqrt2},\quad \tan45^\circ=1\)`
  },
  {
    id: "special-angle-60",
    course: "共通",
    genre: "基本定数・特殊値",
    frequency: "frequent",
    title: "60度の三角比",
    prompt: t`60度の \(\sin,\cos,\tan\) は？`,
    answer: t`\(\sin60^\circ=\frac{\sqrt3}{2},\quad \cos60^\circ=\frac12,\quad \tan60^\circ=\sqrt3\)`
  },
  {
    id: "quadratic-general-form",
    course: "数学Ⅰ・A",
    genre: "2次関数",
    frequency: "most",
    title: "2次関数の基本形",
    prompt: t`2次関数の基本形は？`,
    answer: t`\(y=ax^2+bx+c\quad(a\ne0)\)`
  },
  {
    id: "quadratic-vertex-form",
    course: "数学Ⅰ・A",
    genre: "2次関数",
    frequency: "most",
    title: "2次関数の標準形",
    prompt: t`頂点 \((p,q)\) をもつ標準形は？`,
    answer: t`\(y=a(x-p)^2+q,\quad\text{頂点 }(p,q)\)`
  },
  {
    id: "quadratic-factored-form",
    course: "数学Ⅰ・A",
    genre: "2次関数",
    frequency: "most",
    title: "2次関数の因数分解形",
    prompt: t`x切片が \(\alpha,\beta\) の因数分解形は？`,
    answer: t`\(y=a(x-\alpha)(x-\beta),\quad x\text{切片 }\alpha,\beta\)`
  },
  {
    id: "quadratic-discriminant",
    course: "数学Ⅰ・A",
    genre: "2次関数",
    frequency: "most",
    title: "判別式",
    prompt: t`判別式 \(D=\) ?`,
    answer: t`\(D=b^2-4ac\)。\(D>0\) は2実解、\(D=0\) は重解、\(D<0\) は虚数解。`
  },
  {
    id: "quadratic-axis",
    course: "数学Ⅰ・A",
    genre: "2次関数",
    frequency: "most",
    title: "2次関数の軸",
    prompt: t`2次関数の軸 \(x=\) ?`,
    answer: t`\(x=-\frac{b}{2a}=\frac{\alpha+\beta}{2}\)`
  },
  {
    id: "quadratic-max-min",
    course: "数学Ⅰ・A",
    genre: "2次関数",
    frequency: "most",
    title: "最大・最小の判定",
    prompt: t`範囲つき2次関数の最大・最小はどこで判定する？`,
    answer: t`軸が範囲内なら頂点、範囲外なら端点で判定する。`
  },
  {
    id: "trig-ratio-definition",
    course: "数学Ⅰ・A",
    genre: "三角比",
    frequency: "frequent",
    title: "三角比の定義",
    prompt: t`\(\sin\theta,\cos\theta,\tan\theta\) の定義は？`,
    answer: t`\(\sin\theta=\frac{y}{r},\quad \cos\theta=\frac{x}{r},\quad \tan\theta=\frac{y}{x}\)`
  },
  {
    id: "trig-ratio-basic-relation",
    course: "数学Ⅰ・A",
    genre: "三角比",
    frequency: "frequent",
    title: "三角比の相互関係",
    prompt: t`\(\sin^2\theta+\cos^2\theta\) と \(\tan\theta\) は？`,
    answer: t`\(\sin^2\theta+\cos^2\theta=1,\quad \tan\theta=\frac{\sin\theta}{\cos\theta}\)`
  },
  {
    id: "trig-ratio-tan-relation",
    course: "数学Ⅰ・A",
    genre: "三角比",
    frequency: "frequent",
    title: "tanの相互関係",
    prompt: t`\(1+\tan^2\theta=\) ?`,
    answer: t`\(1+\tan^2\theta=\frac{1}{\cos^2\theta}\)`
  },
  {
    id: "sine-rule",
    course: "数学Ⅰ・A",
    genre: "三角比",
    frequency: "frequent",
    title: "正弦定理",
    prompt: t`正弦定理は？`,
    answer: t`\(\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R\)`
  },
  {
    id: "cosine-rule",
    course: "数学Ⅰ・A",
    genre: "三角比",
    frequency: "frequent",
    title: "余弦定理",
    prompt: t`余弦定理 \(a^2=\) ?`,
    answer: t`\(a^2=b^2+c^2-2bc\cos A\)`
  },
  {
    id: "triangle-area",
    course: "数学Ⅰ・A",
    genre: "三角比",
    frequency: "frequent",
    title: "三角形の面積",
    prompt: t`三角形の面積 \(S=\) ?`,
    answer: t`\(S=\frac12bc\sin A=\frac12ab\sin C\)`
  },
  {
    id: "permutation",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "順列",
    prompt: t`順列 \(P(n,r)=\) ?`,
    answer: t`\(P(n,r)=\frac{n!}{(n-r)!}=n(n-1)\cdots(n-r+1)\)`
  },
  {
    id: "combination",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "組合せ",
    prompt: t`組合せ \(C(n,r)=\) ?`,
    answer: t`\(C(n,r)=\frac{n!}{r!(n-r)!}=\frac{P(n,r)}{r!}\)`
  },
  {
    id: "repeated-permutation",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "重複順列",
    prompt: t`n個からr回、重複を許して選ぶ並べ方は？`,
    answer: t`\(n^r\)`
  },
  {
    id: "circular-permutation",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "円順列",
    prompt: t`n個を円形に並べる円順列は？`,
    answer: t`\((n-1)!\)`
  },
  {
    id: "probability-definition",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "確率の定義",
    prompt: t`確率の定義 \(P(A)=\) ?`,
    answer: t`\(P(A)=\frac{\text{事象Aの場合の数}}{\text{全場合の数}}\)`
  },
  {
    id: "complement-probability",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "余事象",
    prompt: t`余事象の確率 \(P(\overline{A})=\) ?`,
    answer: t`\(P(\overline{A})=1-P(A)\)`
  },
  {
    id: "addition-probability",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "確率の加法定理",
    prompt: t`加法定理 \(P(A\cup B)=\) ?`,
    answer: t`\(P(A\cup B)=P(A)+P(B)-P(A\cap B)\)`
  },
  {
    id: "multiplication-probability",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "確率の乗法定理",
    prompt: t`乗法定理 \(P(A\cap B)=\) ?`,
    answer: t`\(P(A\cap B)=P(A)P(B\mid A)=P(B)P(A\mid B)\)`
  },
  {
    id: "independent-probability",
    course: "数学Ⅰ・A",
    genre: "場合の数・確率",
    frequency: "frequent",
    title: "独立",
    prompt: t`AとBが独立のとき \(P(A\cap B)=\) ?`,
    answer: t`\(P(A\cap B)=P(A)P(B)\)`
  },
  {
    id: "euclidean-algorithm",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "ユークリッドの互除法",
    prompt: t`ユークリッドの互除法は？`,
    answer: t`\(\gcd(a,b)=\gcd(b,\ a\bmod b)\)`
  },
  {
    id: "linear-diophantine",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "1次不定方程式",
    prompt: t`\(ax+by=c\) が整数解をもつ条件は？`,
    answer: t`\(\gcd(a,b)\) が \(c\) を割り切るとき解がある。`
  },
  {
    id: "congruence",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "合同式",
    prompt: t`合同式 \(a\equiv b\pmod m\) の意味は？`,
    answer: t`\(a\equiv b\pmod m \Longleftrightarrow m\mid(a-b)\)`
  },
  {
    id: "mean",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "平均",
    prompt: t`平均 \(\bar{x}=\) ?`,
    answer: t`\(\bar{x}=\frac1n\sum_{i=1}^{n}x_i\)`
  },
  {
    id: "variance",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "分散",
    prompt: t`分散 \(s^2=\) ?`,
    answer: t`\(s^2=\frac1n\sum_{i=1}^{n}(x_i-\bar{x})^2=\overline{x^2}-\bar{x}^{\,2}\)`
  },
  {
    id: "standard-deviation",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "標準偏差",
    prompt: t`標準偏差 \(s=\) ?`,
    answer: t`\(s=\sqrt{s^2}\)`
  },
  {
    id: "covariance",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "共分散",
    prompt: t`共分散 \(s_{xy}=\) ?`,
    answer: t`\(s_{xy}=\overline{xy}-\bar{x}\bar{y}\)`
  },
  {
    id: "correlation",
    course: "数学Ⅰ・A",
    genre: "整数・データ分析",
    frequency: "frequent",
    title: "相関係数",
    prompt: t`相関係数 \(r=\) ?`,
    answer: t`\(r=\frac{s_{xy}}{s_xs_y}\)`
  },
  {
    id: "sin-addition",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "sinの加法定理",
    prompt: t`\(\sin(\alpha\pm\beta)=\) ?`,
    answer: t`\(\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta\)`
  },
  {
    id: "cos-addition",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "cosの加法定理",
    prompt: t`\(\cos(\alpha\pm\beta)=\) ?`,
    answer: t`\(\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta\)`
  },
  {
    id: "sin-double-angle",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "sinの倍角公式",
    prompt: t`\(\sin2\theta=\) ?`,
    answer: t`\(\sin2\theta=2\sin\theta\cos\theta\)`
  },
  {
    id: "cos-double-angle",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "cosの倍角公式",
    prompt: t`\(\cos2\theta=\) ?`,
    answer: t`\(\cos2\theta=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1=1-2\sin^2\theta\)`
  },
  {
    id: "half-angle",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "半角公式",
    prompt: t`半角公式 \(\sin^2\frac{\theta}{2},\cos^2\frac{\theta}{2}\) は？`,
    answer: t`\(\sin^2\frac{\theta}{2}=\frac{1-\cos\theta}{2},\quad \cos^2\frac{\theta}{2}=\frac{1+\cos\theta}{2}\)`
  },
  {
    id: "triple-angle",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "3倍角公式",
    prompt: t`\(\sin3\theta,\cos3\theta\) は？`,
    answer: t`\(\sin3\theta=3\sin\theta-4\sin^3\theta,\quad \cos3\theta=4\cos^3\theta-3\cos\theta\)`
  },
  {
    id: "trig-synthesis",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "三角関数の合成",
    prompt: t`\(a\sin\theta+b\cos\theta=\) ?`,
    answer: t`\(a\sin\theta+b\cos\theta=\sqrt{a^2+b^2}\sin(\theta+\alpha),\quad \tan\alpha=\frac{b}{a}\)`
  },
  {
    id: "product-to-sum",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "積和公式",
    prompt: t`\(\sin A\cos B=\) ?`,
    answer: t`\(\sin A\cos B=\frac12\{\sin(A+B)+\sin(A-B)\}\)`
  },
  {
    id: "sum-to-product",
    course: "数学Ⅱ・B",
    genre: "三角関数",
    frequency: "most",
    title: "和積公式",
    prompt: t`\(\sin A+\sin B=\) ?`,
    answer: t`\(\sin A+\sin B=2\sin\frac{A+B}{2}\cos\frac{A-B}{2}\)`
  },
  {
    id: "exponent-law-1",
    course: "数学Ⅱ・B",
    genre: "指数・対数",
    frequency: "most",
    title: "指数法則",
    prompt: t`積・累乗・商の指数法則は？`,
    answer: t`\(a^m a^n=a^{m+n},\quad (a^m)^n=a^{mn},\quad \frac{a^m}{a^n}=a^{m-n}\)`
  },
  {
    id: "exponent-law-2",
    course: "数学Ⅱ・B",
    genre: "指数・対数",
    frequency: "most",
    title: "積と商の累乗",
    prompt: t`\((ab)^n,\left(\frac{a}{b}\right)^n\) は？`,
    answer: t`\((ab)^n=a^nb^n,\quad \left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}\)`
  },
  {
    id: "log-definition",
    course: "数学Ⅱ・B",
    genre: "指数・対数",
    frequency: "most",
    title: "対数の定義",
    prompt: t`\(\log_a x=y\) の意味は？`,
    answer: t`\(\log_a x=y\Longleftrightarrow a^y=x\quad(a>0,\ a\ne1,\ x>0)\)`
  },
  {
    id: "log-law-product-quotient",
    course: "数学Ⅱ・B",
    genre: "指数・対数",
    frequency: "most",
    title: "対数法則",
    prompt: t`積と商の対数法則は？`,
    answer: t`\(\log_a(xy)=\log_a x+\log_a y,\quad \log_a\frac{x}{y}=\log_a x-\log_a y\)`
  },
  {
    id: "log-law-power",
    course: "数学Ⅱ・B",
    genre: "指数・対数",
    frequency: "most",
    title: "対数の累乗と基本値",
    prompt: t`\(\log_a x^n,\log_a1,\log_a a\) は？`,
    answer: t`\(\log_a x^n=n\log_a x,\quad \log_a1=0,\quad \log_a a=1\)`
  },
  {
    id: "change-of-base",
    course: "数学Ⅱ・B",
    genre: "指数・対数",
    frequency: "most",
    title: "底の変換",
    prompt: t`底の変換公式は？`,
    answer: t`\(\log_a x=\frac{\log_b x}{\log_b a}=\frac{\log x}{\log a}\)`
  },
  {
    id: "change-of-base-application",
    course: "数学Ⅱ・B",
    genre: "指数・対数",
    frequency: "most",
    title: "底変換の応用",
    prompt: t`\(\log_a b\log_b c\) と \(\log_a b\log_b a\) は？`,
    answer: t`\(\log_a b\cdot\log_b c=\log_a c,\quad \log_a b\cdot\log_b a=1\)`
  },
  {
    id: "derivative-definition",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "導関数の定義",
    prompt: t`導関数の定義 \(f'(x)=\) ?`,
    answer: t`\(f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\)`
  },
  {
    id: "derivative-basic-trig",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "基本関数の微分",
    prompt: t`\((x^n)',(\sin x)',(\cos x)'\) は？`,
    answer: t`\((x^n)'=nx^{n-1},\quad(\sin x)'=\cos x,\quad(\cos x)'=-\sin x\)`
  },
  {
    id: "derivative-exp-log",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "指数・対数の微分",
    prompt: t`\((e^x)',(\log x)',(a^x)'\) は？`,
    answer: t`\((e^x)'=e^x,\quad(\log x)'=\frac1x,\quad(a^x)'=a^x\log a\)`
  },
  {
    id: "derivative-loga-tan",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "底aの対数とtanの微分",
    prompt: t`\((\log_a x)',(\tan x)'\) は？`,
    answer: t`\((\log_a x)'=\frac{1}{x\log a},\quad(\tan x)'=\frac{1}{\cos^2 x}\)`
  },
  {
    id: "derivative-linearity",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "微分の線形性",
    prompt: t`\((f\pm g)'\) と \((cf)'\) は？`,
    answer: t`\((f\pm g)'=f'\pm g',\quad(cf)'=cf'\)`
  },
  {
    id: "product-rule",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "積の微分",
    prompt: t`\((fg)'=\) ?`,
    answer: t`\((fg)'=f'g+fg'\)`
  },
  {
    id: "quotient-rule",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "商の微分",
    prompt: t`\(\left(\frac{f}{g}\right)'=\) ?`,
    answer: t`\(\left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2}\)`
  },
  {
    id: "chain-rule",
    course: "数学Ⅱ・B",
    genre: "微分",
    frequency: "most",
    title: "合成関数の微分",
    prompt: t`\(\{f(g(x))\}'=\) ?`,
    answer: t`\(\{f(g(x))\}'=f'(g(x))g'(x)\)`
  },
  {
    id: "integral-power",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "べき関数の積分",
    prompt: t`\(\int x^n dx=\) ?`,
    answer: t`\(\int x^n dx=\frac{x^{n+1}}{n+1}+C\quad(n\ne-1)\)`
  },
  {
    id: "integral-log-exp",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "1/xと指数関数の積分",
    prompt: t`\(\int\frac1x dx,\int e^x dx\) は？`,
    answer: t`\(\int\frac1x dx=\log|x|+C,\quad \int e^x dx=e^x+C\)`
  },
  {
    id: "integral-sin-cos",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "三角関数の積分",
    prompt: t`\(\int\sin xdx,\int\cos xdx\) は？`,
    answer: t`\(\int\sin xdx=-\cos x+C,\quad\int\cos xdx=\sin x+C\)`
  },
  {
    id: "integral-sec-exp",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "sec^2とa^xの積分",
    prompt: t`\(\int\frac1{\cos^2x}dx,\int a^xdx\) は？`,
    answer: t`\(\int\frac1{\cos^2x}dx=\tan x+C,\quad\int a^xdx=\frac{a^x}{\log a}+C\)`
  },
  {
    id: "integral-linearity",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "積分の線形性",
    prompt: t`\(\int\{f(x)\pm g(x)\}dx=\) ?`,
    answer: t`\(\int\{f(x)\pm g(x)\}dx=\int f(x)dx\pm\int g(x)dx\)`
  },
  {
    id: "definite-integral",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "定積分",
    prompt: t`\(\int_a^b f(x)dx=\) ?`,
    answer: t`\(\int_a^b f(x)dx=F(b)-F(a)\quad(F'(x)=f(x))\)`
  },
  {
    id: "area-integral",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "面積",
    prompt: t`面積 \(S=\) ?`,
    answer: t`\(S=\int_a^b |f(x)|dx\)`
  },
  {
    id: "substitution-integral",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "置換積分",
    prompt: t`置換積分の公式は？`,
    answer: t`\(\int f(g(x))g'(x)dx=\int f(u)du\quad(u=g(x))\)`
  },
  {
    id: "integration-by-parts-iib",
    course: "数学Ⅱ・B",
    genre: "積分",
    frequency: "most",
    title: "部分積分",
    prompt: t`部分積分の公式は？`,
    answer: t`\(\int f(x)g'(x)dx=f(x)g(x)-\int f'(x)g(x)dx\)`
  },
  {
    id: "arithmetic-sequence",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "等差数列",
    prompt: t`等差数列の一般項と和は？`,
    answer: t`\(a_n=a_1+(n-1)d,\quad S_n=\frac{n(a_1+a_n)}2=\frac{n\{2a_1+(n-1)d\}}2\)`
  },
  {
    id: "geometric-sequence",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "等比数列",
    prompt: t`等比数列の一般項と和は？`,
    answer: t`\(a_n=a_1r^{n-1},\quad S_n=\frac{a_1(r^n-1)}{r-1}\quad(r\ne1)\)`
  },
  {
    id: "infinite-geometric-series",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "無限等比級数",
    prompt: t`無限等比級数の和 \(S_\infty=\) ?`,
    answer: t`\(S_\infty=\frac{a_1}{1-r}\quad(|r|<1)\)`
  },
  {
    id: "difference-sequence",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "階差数列",
    prompt: t`階差数列の関係は？`,
    answer: t`\(a_n=a_1+\sum_{k=1}^{n-1}b_k\quad(n\ge2),\quad b_k=a_{k+1}-a_k\)`
  },
  {
    id: "recurrence-linear",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "漸化式 \(a_{n+1}=pa_n+q\)",
    prompt: t`\(a_{n+1}=pa_n+q\) の解は？`,
    answer: t`\(a_n=p^{n-1}(a_1-\alpha)+\alpha,\quad \alpha=\frac{q}{1-p}\)`
  },
  {
    id: "recurrence-characteristic",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "特性方程式型",
    prompt: t`\(a_{n+1}=pa_n+qr^n\) の形の解は？`,
    answer: t`\(a_n=A\cdot p^{n-1}+B\cdot r^{n-1}\)`
  },
  {
    id: "sigma-k-k2",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "Σ公式",
    prompt: t`\(\sum_{k=1}^{n}k,\sum_{k=1}^{n}k^2\) は？`,
    answer: t`\(\sum_{k=1}^{n}k=\frac{n(n+1)}2,\quad \sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}6\)`
  },
  {
    id: "sigma-k3",
    course: "数学Ⅱ・B",
    genre: "数列",
    frequency: "frequent",
    title: "3乗和",
    prompt: t`\(\sum_{k=1}^{n}k^3=\) ?`,
    answer: t`\(\sum_{k=1}^{n}k^3=\left\{\frac{n(n+1)}2\right\}^2\)`
  },
  {
    id: "vector-dot-product",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "内積",
    prompt: t`内積 \(\vec{a}\cdot\vec{b}=\) ?`,
    answer: t`\(\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta=a_1b_1+a_2b_2\)`
  },
  {
    id: "vector-perpendicular",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "垂直条件",
    prompt: t`\(\vec{a}\perp\vec{b}\) の条件は？`,
    answer: t`\(\vec{a}\perp\vec{b}\Longleftrightarrow \vec{a}\cdot\vec{b}=0\)`
  },
  {
    id: "vector-parallel",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "平行条件",
    prompt: t`\(\vec{a}\parallel\vec{b}\) の条件は？`,
    answer: t`\(\vec{a}\parallel\vec{b}\Longleftrightarrow \vec{a}=k\vec{b}\) または \(a_1b_2-a_2b_1=0\)`
  },
  {
    id: "vector-magnitude",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "大きさ",
    prompt: t`大きさ \(|\vec{a}|=\) ?`,
    answer: t`\(|\vec{a}|=\sqrt{a_1^2+a_2^2},\quad |\vec{a}|^2=\vec{a}\cdot\vec{a}\)`
  },
  {
    id: "position-vector",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "位置ベクトル",
    prompt: t`Oを原点とする位置ベクトル \(\overrightarrow{OP}=\) ?`,
    answer: t`\(\overrightarrow{OP}=s\vec{a}+t\vec{b}\)`
  },
  {
    id: "internal-division",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "内分点",
    prompt: t`m:nに内分する点Pの \(\overrightarrow{OP}=\) ?`,
    answer: t`\(\overrightarrow{OP}=\frac{n\vec{a}+m\vec{b}}{m+n}\)`
  },
  {
    id: "centroid",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "重心",
    prompt: t`三角形の重心 \(\overrightarrow{OG}=\) ?`,
    answer: t`\(\overrightarrow{OG}=\frac{\vec{a}+\vec{b}+\vec{c}}3\)`
  },
  {
    id: "line-vector-equation",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "直線の方程式",
    prompt: t`ベクトルによる直線の方程式は？`,
    answer: t`\(\vec{r}=\vec{a}+t\vec{d}\quad(\vec{d}\text{ は方向ベクトル})\)`
  },
  {
    id: "point-line-distance",
    course: "数学Ⅱ・B",
    genre: "ベクトル",
    frequency: "frequent",
    title: "点と直線の距離",
    prompt: t`点Pと直線の距離 \(d=\) ?`,
    answer: t`\(d=\frac{|\overrightarrow{AP}\times\vec{d}|}{|\vec{d}|}\quad(A\text{ は直線上の点})\)`
  },
  {
    id: "limit-basic-sin-cos",
    course: "数学Ⅲ",
    genre: "極限",
    frequency: "most",
    title: "基本極限",
    prompt: t`\(\lim_{x\to0}\frac{\sin x}{x}\) と \(\lim_{x\to0}\frac{1-\cos x}{x^2}\) は？`,
    answer: t`\(\lim_{x\to0}\frac{\sin x}{x}=1,\quad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12\)`
  },
  {
    id: "limit-e",
    course: "数学Ⅲ",
    genre: "極限",
    frequency: "most",
    title: "eに関する基本極限",
    prompt: t`eに関する基本極限は？`,
    answer: t`\(\lim_{x\to\infty}\left(1+\frac1x\right)^x=e,\quad \lim_{x\to0}\frac{e^x-1}{x}=1\)`
  },
  {
    id: "limit-log-a",
    course: "数学Ⅲ",
    genre: "極限",
    frequency: "most",
    title: "対数と指数の基本極限",
    prompt: t`\(\lim_{x\to0}\frac{\log(1+x)}x\) と \(\lim_{x\to0}\frac{a^x-1}{x}\) は？`,
    answer: t`\(\lim_{x\to0}\frac{\log(1+x)}x=1,\quad \lim_{x\to0}\frac{a^x-1}{x}=\log a\)`
  },
  {
    id: "squeeze-theorem",
    course: "数学Ⅲ",
    genre: "極限",
    frequency: "most",
    title: "はさみうちの原理",
    prompt: t`はさみうちの原理は？`,
    answer: t`\(f(x)\le g(x)\le h(x)\) かつ \(\lim f(x)=\lim h(x)=L\) なら \(\lim g(x)=L\)。`
  },
  {
    id: "limit-infinity",
    course: "数学Ⅲ",
    genre: "極限",
    frequency: "most",
    title: "無限大の基本極限",
    prompt: t`\(x\to\infty\) での \(x^n,\frac1{x^n}\) は？`,
    answer: t`\(\lim_{x\to\infty}x^n=\infty\ (n>0),\quad \lim_{x\to\infty}\frac1{x^n}=0\ (n>0)\)`
  },
  {
    id: "asymptote",
    course: "数学Ⅲ",
    genre: "極限",
    frequency: "most",
    title: "漸近線",
    prompt: t`漸近線 \(y=ax+b\) の \(a,b\) は？`,
    answer: t`\(a=\lim_{x\to\infty}\frac{f(x)}x,\quad b=\lim_{x\to\infty}(f(x)-ax)\)`
  },
  {
    id: "inverse-function-derivative",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "逆関数の微分",
    prompt: t`逆関数の微分 \(\{f^{-1}(x)\}'=\) ?`,
    answer: t`\(\{f^{-1}(x)\}'=\frac1{f'(f^{-1}(x))}\)`
  },
  {
    id: "inverse-trig-derivative-1",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "逆三角関数の微分",
    prompt: t`\((\arcsin x)',(\arccos x)'\) は？`,
    answer: t`\((\arcsin x)'=\frac1{\sqrt{1-x^2}},\quad(\arccos x)'=-\frac1{\sqrt{1-x^2}}\)`
  },
  {
    id: "inverse-trig-derivative-2",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "arctanの微分",
    prompt: t`\((\arctan x)'=\) ?`,
    answer: t`\((\arctan x)'=\frac1{1+x^2}\)`
  },
  {
    id: "logarithmic-derivative",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "対数微分",
    prompt: t`\((\log f(x))'=\) ?`,
    answer: t`\((\log f(x))'=\frac{f'(x)}{f(x)}\)`
  },
  {
    id: "parametric-derivative",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "媒介変数の微分",
    prompt: t`媒介変数表示の \(\frac{dy}{dx}=\) ?`,
    answer: t`\(\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{y'(t)}{x'(t)}\)`
  },
  {
    id: "parametric-second-derivative",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "2階微分",
    prompt: t`媒介変数表示の \(\frac{d^2y}{dx^2}=\) ?`,
    answer: t`\(\frac{d^2y}{dx^2}=\frac{d}{dx}\left(\frac{dy}{dx}\right)=\frac{y''(t)x'(t)-y'(t)x''(t)}{(x'(t))^3}\)`
  },
  {
    id: "tangent-line",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "接線",
    prompt: t`\(x=a\) での接線の方程式は？`,
    answer: t`\(y-f(a)=f'(a)(x-a)\)`
  },
  {
    id: "normal-line",
    course: "数学Ⅲ",
    genre: "微分（発展）",
    frequency: "advanced",
    title: "法線",
    prompt: t`\(x=a\) での法線の方程式は？`,
    answer: t`\(y-f(a)=-\frac1{f'(a)}(x-a)\quad(f'(a)\ne0)\)`
  },
  {
    id: "integration-by-parts-iii",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "部分積分",
    prompt: t`\(\int u\,dv=\) ?`,
    answer: t`\(\int u\,dv=uv-\int v\,du\)`
  },
  {
    id: "substitution-integral-iii",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "置換積分",
    prompt: t`置換積分の公式は？`,
    answer: t`\(\int f(g(x))g'(x)dx=\int f(u)du\quad(u=g(x))\)`
  },
  {
    id: "definite-substitution",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "定積分の置換",
    prompt: t`定積分の置換公式は？`,
    answer: t`\(\int_a^b f(g(x))g'(x)dx=\int_{g(a)}^{g(b)}f(u)du\)`
  },
  {
    id: "parts-applications",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "部分積分の応用",
    prompt: t`部分積分でよく出る型は？`,
    answer: t`\(\int e^{ax}\sin bxdx,\quad \int x^ne^{ax}dx,\quad \int x^n\log xdx\)`
  },
  {
    id: "rational-integral",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "有理関数の積分",
    prompt: t`有理関数 \(\int\frac{P(x)}{Q(x)}dx\) は何を使う？`,
    answer: t`\(\int\frac{P(x)}{Q(x)}dx\) は部分分数分解を使う。`
  },
  {
    id: "trig-power-integral",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "三角関数の積分",
    prompt: t`\(\int\sin^m x\cos^n xdx\) は何で場合分けする？`,
    answer: t`\(\int\sin^m x\cos^n xdx\) は \(m,n\) の偶奇で場合分けする。`
  },
  {
    id: "volume-x-axis",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "回転体の体積（x軸周り）",
    prompt: t`x軸周りの回転体の体積 \(V=\) ?`,
    answer: t`\(V=\pi\int_a^b\{f(x)\}^2dx\)`
  },
  {
    id: "volume-y-axis-y",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "回転体の体積（y軸周り）",
    prompt: t`y軸周りを \(y\) で積分する体積 \(V=\) ?`,
    answer: t`\(V=\pi\int_c^d\{g(y)\}^2dy\)`
  },
  {
    id: "volume-shell",
    course: "数学Ⅲ",
    genre: "積分（発展）",
    frequency: "advanced",
    title: "回転体の体積（円筒殻）",
    prompt: t`y軸周り、\(x\ge0\) の円筒殻の体積 \(V=\) ?`,
    answer: t`\(V=2\pi\int_a^b x f(x)dx\)`
  },
  {
    id: "complex-polar",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "複素数の極形式",
    prompt: t`複素数 \(z\) の極形式は？`,
    answer: t`\(z=a+bi=r(\cos\theta+i\sin\theta)=re^{i\theta}\)`
  },
  {
    id: "complex-absolute-argument",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "絶対値・偏角",
    prompt: t`複素数 \(z=a+bi\) の \(|z|\) と \(\arg z\) は？`,
    answer: t`\(|z|=r=\sqrt{a^2+b^2},\quad \arg z=\theta\)`
  },
  {
    id: "complex-conjugate",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "共役複素数",
    prompt: t`共役複素数と \(z\bar{z}\) は？`,
    answer: t`\(\bar{z}=a-bi=re^{-i\theta},\quad z\bar{z}=|z|^2\)`
  },
  {
    id: "de-moivre",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "ド・モアブルの定理",
    prompt: t`ド・モアブルの定理は？`,
    answer: t`\(z^n=r^n(\cos n\theta+i\sin n\theta)\)`
  },
  {
    id: "nth-roots",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "n乗根",
    prompt: t`複素数のn乗根は？`,
    answer: t`\(\sqrt[n]{r}\left(\cos\frac{\theta+2\pi k}{n}+i\sin\frac{\theta+2\pi k}{n}\right)\quad(k=0,1,\ldots,n-1)\)`
  },
  {
    id: "euler-formula",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "オイラーの公式",
    prompt: t`オイラーの公式は？`,
    answer: t`\(e^{i\theta}=\cos\theta+i\sin\theta\)`
  },
  {
    id: "complex-rotation",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "回転",
    prompt: t`原点中心に角 \(\alpha\) 回転する式は？`,
    answer: t`\(w=ze^{i\alpha}\)`
  },
  {
    id: "complex-loci",
    course: "数学Ⅲ",
    genre: "複素数平面",
    frequency: "frequent",
    title: "図形の方程式",
    prompt: t`\(|z-a|=r\) と \(|z-a|=|z-b|\) は何を表す？`,
    answer: t`\(|z-a|=r\) は円、\(|z-a|=|z-b|\) は垂直二等分線。`
  },
  {
    id: "conic-parabola",
    course: "数学Ⅲ",
    genre: "2次曲線",
    frequency: "advanced",
    title: "放物線",
    prompt: t`放物線の標準形と焦点・準線は？`,
    answer: t`\(y^2=4px\)。焦点 \((p,0)\)、準線 \(x=-p\)。`
  },
  {
    id: "conic-ellipse",
    course: "数学Ⅲ",
    genre: "2次曲線",
    frequency: "advanced",
    title: "楕円",
    prompt: t`楕円の標準形と焦点は？`,
    answer: t`\(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\quad(a>b)\)。焦点 \((\pm c,0)\)、\(c^2=a^2-b^2\)。`
  },
  {
    id: "conic-hyperbola",
    course: "数学Ⅲ",
    genre: "2次曲線",
    frequency: "advanced",
    title: "双曲線",
    prompt: t`双曲線の標準形と焦点は？`,
    answer: t`\(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\)。焦点 \((\pm c,0)\)、\(c^2=a^2+b^2\)。`
  },
  {
    id: "conic-parametric",
    course: "数学Ⅲ",
    genre: "2次曲線",
    frequency: "advanced",
    title: "2次曲線の媒介変数表示",
    prompt: t`楕円と双曲線の媒介変数表示は？`,
    answer: t`楕円：\((a\cos t,b\sin t)\)、双曲線：\((a\sec t,b\tan t)\)。`
  },
  {
    id: "polar-coordinate",
    course: "数学Ⅲ",
    genre: "2次曲線",
    frequency: "advanced",
    title: "極座標",
    prompt: t`極座標と直交座標の関係は？`,
    answer: t`\(x=r\cos\theta,\quad y=r\sin\theta,\quad r^2=x^2+y^2\)`
  },
  {
    id: "am-gm",
    course: "重要公式",
    genre: "重要不等式",
    frequency: "frequent",
    title: "相加相乗平均",
    prompt: t`相加相乗平均の不等式は？`,
    answer: t`\(\frac{a+b}{2}\ge\sqrt{ab}\)。等号成立は \(a=b\)。`
  },
  {
    id: "cauchy-schwarz",
    course: "重要公式",
    genre: "重要不等式",
    frequency: "frequent",
    title: "コーシー・シュワルツ",
    prompt: t`2次元のコーシー・シュワルツの不等式は？`,
    answer: t`\((a_1b_1+a_2b_2)^2\le(a_1^2+a_2^2)(b_1^2+b_2^2)\)`
  },
  {
    id: "triangle-inequality",
    course: "重要公式",
    genre: "重要不等式",
    frequency: "frequent",
    title: "三角不等式",
    prompt: t`三角不等式は？`,
    answer: t`\(|a+b|\le|a|+|b|,\quad ||a|-|b||\le|a-b|\)`
  },
  {
    id: "bernoulli-inequality",
    course: "重要公式",
    genre: "重要不等式",
    frequency: "frequent",
    title: "ベルヌーイの不等式",
    prompt: t`ベルヌーイの不等式は？`,
    answer: t`\((1+x)^n\ge1+nx\quad(x\ge-1,\ n\ge1)\)`
  },
  {
    id: "taylor-exp",
    course: "重要公式",
    genre: "テイラー展開",
    frequency: "advanced",
    title: "指数関数の展開",
    prompt: t`\(e^x\) のテイラー展開は？`,
    answer: t`\(e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots\)`
  },
  {
    id: "taylor-sin",
    course: "重要公式",
    genre: "テイラー展開",
    frequency: "advanced",
    title: "sinの展開",
    prompt: t`\(\sin x\) のテイラー展開は？`,
    answer: t`\(\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots\)`
  },
  {
    id: "taylor-cos",
    course: "重要公式",
    genre: "テイラー展開",
    frequency: "advanced",
    title: "cosの展開",
    prompt: t`\(\cos x\) のテイラー展開は？`,
    answer: t`\(\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots\)`
  },
  {
    id: "taylor-log",
    course: "重要公式",
    genre: "テイラー展開",
    frequency: "advanced",
    title: "logの展開",
    prompt: t`\(\log(1+x)\) のテイラー展開は？`,
    answer: t`\(\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots\quad(|x|<1)\)`
  },
  {
    id: "taylor-binomial",
    course: "重要公式",
    genre: "テイラー展開",
    frequency: "advanced",
    title: "二項展開",
    prompt: t`\((1+x)^n\) の展開は？`,
    answer: t`\((1+x)^n=1+nx+\frac{n(n-1)}{2!}x^2+\cdots\)`
  }
];
