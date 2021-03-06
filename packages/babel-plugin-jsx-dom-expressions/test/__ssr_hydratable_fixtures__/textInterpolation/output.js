import { escape as _$escape } from "r-dom";
import { ssr as _$ssr } from "r-dom";
import { getHydrationKey as _$getHydrationKey } from "r-dom";

const trailing = _$ssr(['<span _hk="', '">Hello </span>'], _$getHydrationKey());

const leading = _$ssr(['<span _hk="', '"> John</span>'], _$getHydrationKey());
/* prettier-ignore */

const extraSpaces = _$ssr(["<span _hk=\"", "\">Hello John</span>"], _$getHydrationKey());

const trailingExpr = _$ssr(
  ['<span _hk="', '">Hello <!--#-->', "<!--/--></span>"],
  _$getHydrationKey(),
  _$escape(name)
);

const leadingExpr = _$ssr(
  ['<span _hk="', '"><!--#-->', "<!--/--> John</span>"],
  _$getHydrationKey(),
  _$escape(greeting)
);
/* prettier-ignore */

const multiExpr = _$ssr(["<span _hk=\"", "\"><!--#-->", "<!--/--> <!--#-->", "<!--/--></span>"], _$getHydrationKey(), _$escape(greeting), _$escape(name));
/* prettier-ignore */

const multiExprSpaced = _$ssr(["<span _hk=\"", "\"> <!--#-->", "<!--/--> <!--#-->", "<!--/--> </span>"], _$getHydrationKey(), _$escape(greeting), _$escape(name));
/* prettier-ignore */

const multiExprTogether = _$ssr(["<span _hk=\"", "\"> <!--#-->", "<!--/--><!--#-->", "<!--/--> </span>"], _$getHydrationKey(), _$escape(greeting), _$escape(name));
/* prettier-ignore */

const multiLine = _$ssr(["<span _hk=\"", "\">Hello</span>"], _$getHydrationKey());
/* prettier-ignore */

const multiLineTrailingSpace = _$ssr(["<span _hk=\"", "\">Hello John</span>"], _$getHydrationKey());
/* prettier-ignore */

const escape = _$ssr(["<span _hk=\"", "\">&nbsp;&lt;Hi&gt;&nbsp;</span>"], _$getHydrationKey());
