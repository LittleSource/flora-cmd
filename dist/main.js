var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler_exports = {};
__export(shared_esm_bundler_exports, {
  EMPTY_ARR: () => EMPTY_ARR,
  EMPTY_OBJ: () => EMPTY_OBJ,
  NO: () => NO,
  NOOP: () => NOOP,
  PatchFlagNames: () => PatchFlagNames,
  camelize: () => camelize,
  capitalize: () => capitalize,
  def: () => def,
  escapeHtml: () => escapeHtml,
  escapeHtmlComment: () => escapeHtmlComment,
  extend: () => extend,
  genPropsAccessExp: () => genPropsAccessExp,
  generateCodeFrame: () => generateCodeFrame,
  getGlobalThis: () => getGlobalThis,
  hasChanged: () => hasChanged,
  hasOwn: () => hasOwn,
  hyphenate: () => hyphenate,
  includeBooleanAttr: () => includeBooleanAttr,
  invokeArrayFns: () => invokeArrayFns,
  isArray: () => isArray,
  isBooleanAttr: () => isBooleanAttr,
  isBuiltInDirective: () => isBuiltInDirective,
  isDate: () => isDate,
  isFunction: () => isFunction,
  isGloballyWhitelisted: () => isGloballyWhitelisted,
  isHTMLTag: () => isHTMLTag,
  isIntegerKey: () => isIntegerKey,
  isKnownHtmlAttr: () => isKnownHtmlAttr,
  isKnownSvgAttr: () => isKnownSvgAttr,
  isMap: () => isMap,
  isModelListener: () => isModelListener,
  isNoUnitNumericStyleProp: () => isNoUnitNumericStyleProp,
  isObject: () => isObject,
  isOn: () => isOn,
  isPlainObject: () => isPlainObject,
  isPromise: () => isPromise,
  isReservedProp: () => isReservedProp,
  isSSRSafeAttrName: () => isSSRSafeAttrName,
  isSVGTag: () => isSVGTag,
  isSet: () => isSet,
  isSpecialBooleanAttr: () => isSpecialBooleanAttr,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isVoidTag: () => isVoidTag,
  looseEqual: () => looseEqual,
  looseIndexOf: () => looseIndexOf,
  makeMap: () => makeMap,
  normalizeClass: () => normalizeClass,
  normalizeProps: () => normalizeProps,
  normalizeStyle: () => normalizeStyle,
  objectToString: () => objectToString,
  parseStringStyle: () => parseStringStyle,
  propsToAttrMap: () => propsToAttrMap,
  remove: () => remove,
  slotFlagsText: () => slotFlagsText,
  stringifyStyle: () => stringifyStyle,
  toDisplayString: () => toDisplayString,
  toHandlerKey: () => toHandlerKey,
  toNumber: () => toNumber,
  toRawType: () => toRawType,
  toTypeString: () => toTypeString
});
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
var PatchFlagNames, slotFlagsText, GLOBALS_WHITE_LISTED, isGloballyWhitelisted, range, specialBooleanAttrs, isSpecialBooleanAttr, isBooleanAttr, unsafeAttrCharRE, attrValidationCache, propsToAttrMap, isNoUnitNumericStyleProp, isKnownHtmlAttr, isKnownSvgAttr, listDelimiterRE, propertyDelimiterRE, HTML_TAGS, SVG_TAGS, VOID_TAGS, isHTMLTag, isSVGTag, isVoidTag, escapeRE, commentStripRE, toDisplayString, replacer, EMPTY_OBJ, EMPTY_ARR, NOOP, NO, onRE, isOn, isModelListener, extend, remove, hasOwnProperty, hasOwn, isArray, isMap, isSet, isDate, isFunction, isString, isSymbol, isObject, isPromise, objectToString, toTypeString, toRawType, isPlainObject, isIntegerKey, isReservedProp, isBuiltInDirective, cacheStringFunction, camelizeRE, camelize, hyphenateRE, hyphenate, capitalize, toHandlerKey, hasChanged, invokeArrayFns, def, toNumber, _globalThis, getGlobalThis, identRE;
var init_shared_esm_bundler = __esm({
  "node_modules/@vue/shared/dist/shared.esm-bundler.js"() {
    PatchFlagNames = {
      [1]: `TEXT`,
      [2]: `CLASS`,
      [4]: `STYLE`,
      [8]: `PROPS`,
      [16]: `FULL_PROPS`,
      [32]: `HYDRATE_EVENTS`,
      [64]: `STABLE_FRAGMENT`,
      [128]: `KEYED_FRAGMENT`,
      [256]: `UNKEYED_FRAGMENT`,
      [512]: `NEED_PATCH`,
      [1024]: `DYNAMIC_SLOTS`,
      [2048]: `DEV_ROOT_FRAGMENT`,
      [-1]: `HOISTED`,
      [-2]: `BAIL`
    };
    slotFlagsText = {
      [1]: "STABLE",
      [2]: "DYNAMIC",
      [3]: "FORWARDED"
    };
    GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
    isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
    range = 2;
    specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
    unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    attrValidationCache = {};
    propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
    isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
    isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
    listDelimiterRE = /;(?![^(]*\))/g;
    propertyDelimiterRE = /:(.+)/;
    HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
    isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
    isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
    escapeRE = /["'&<>]/;
    commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
    toDisplayString = (val) => {
      return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
    };
    replacer = (_key, val) => {
      if (val && val.__v_isRef) {
        return replacer(_key, val.value);
      } else if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
            entries[`${key} =>`] = val2;
            return entries;
          }, {})
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()]
        };
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    EMPTY_OBJ = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
    EMPTY_ARR = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
    NOOP = () => {
    };
    NO = () => false;
    onRE = /^on[^a-z]/;
    isOn = (key) => onRE.test(key);
    isModelListener = (key) => key.startsWith("onUpdate:");
    extend = Object.assign;
    remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    hasOwnProperty = Object.prototype.hasOwnProperty;
    hasOwn = (val, key) => hasOwnProperty.call(val, key);
    isArray = Array.isArray;
    isMap = (val) => toTypeString(val) === "[object Map]";
    isSet = (val) => toTypeString(val) === "[object Set]";
    isDate = (val) => toTypeString(val) === "[object Date]";
    isFunction = (val) => typeof val === "function";
    isString = (val) => typeof val === "string";
    isSymbol = (val) => typeof val === "symbol";
    isObject = (val) => val !== null && typeof val === "object";
    isPromise = (val) => {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch);
    };
    objectToString = Object.prototype.toString;
    toTypeString = (value) => objectToString.call(value);
    toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    isPlainObject = (val) => toTypeString(val) === "[object Object]";
    isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    isReservedProp = /* @__PURE__ */ makeMap(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    );
    isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
    cacheStringFunction = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    camelizeRE = /-(\w)/g;
    camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
    });
    hyphenateRE = /\B([A-Z])/g;
    hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
    capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
    toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
    hasChanged = (value, oldValue) => !Object.is(value, oldValue);
    invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };
    def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
      });
    };
    toNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
  }
});

// node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js
function defaultOnError(error) {
  throw error;
}
function defaultOnWarn(msg) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${msg.message}`);
}
function createCompilerError(code, loc, messages, additionalMessage) {
  const msg = process.env.NODE_ENV !== "production" || false ? (messages || errorMessages)[code] + (additionalMessage || ``) : code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}
function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach((s) => {
    helperNameMap[s] = helpers[s];
  });
}
function createRoot(children, loc = locStub) {
  return {
    type: 0,
    children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc
  };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent2));
    }
    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2,
    loc
  };
}
function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17,
    loc,
    elements
  };
}
function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15,
    loc,
    properties
  };
}
function createObjectProperty(key, value) {
  return {
    type: 16,
    loc: locStub,
    key: isString(key) ? createSimpleExpression(key, true) : key,
    value
  };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
  return {
    type: 4,
    loc,
    content,
    isStatic,
    constType: isStatic ? 3 : constType
  };
}
function createInterpolation(content, loc) {
  return {
    type: 5,
    loc,
    content: isString(content) ? createSimpleExpression(content, false, loc) : content
  };
}
function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8,
    loc,
    children
  };
}
function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14,
    loc,
    callee,
    arguments: args
  };
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
  return {
    type: 19,
    test,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}
function createCacheExpression(index, value, isVNode = false) {
  return {
    type: 20,
    index,
    value,
    isVNode,
    loc: locStub
  };
}
function createBlockStatement(body) {
  return {
    type: 21,
    body,
    loc: locStub
  };
}
function createTemplateLiteral(elements) {
  return {
    type: 22,
    elements,
    loc: locStub
  };
}
function createIfStatement(test, consequent, alternate) {
  return {
    type: 23,
    test,
    consequent,
    alternate,
    loc: locStub
  };
}
function createAssignmentExpression(left, right) {
  return {
    type: 24,
    left,
    right,
    loc: locStub
  };
}
function createSequenceExpression(expressions) {
  return {
    type: 25,
    expressions,
    loc: locStub
  };
}
function createReturnStatement(returns) {
  return {
    type: 26,
    returns,
    loc: locStub
  };
}
function isCoreComponent(tag) {
  if (isBuiltInType(tag, "Teleport")) {
    return TELEPORT;
  } else if (isBuiltInType(tag, "Suspense")) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, "KeepAlive")) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, "BaseTransition")) {
    return BASE_TRANSITION;
  }
}
function getInnerRange(loc, offset, length) {
  const source = loc.source.slice(offset, offset + length);
  const newLoc = {
    source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };
  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }
  return newLoc;
}
function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
  return advancePositionWithMutation(extend({}, pos), source, numberOfCharacters);
}
function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
  let linesCount = 0;
  let lastNewLinePos = -1;
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10) {
      linesCount++;
      lastNewLinePos = i;
    }
  }
  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg || `unexpected compiler condition`);
  }
}
function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p2 = node.props[i];
    if (p2.type === 7 && (allowEmpty || p2.exp) && (isString(name) ? p2.name === name : name.test(p2.name))) {
      return p2;
    }
  }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p2 = node.props[i];
    if (p2.type === 6) {
      if (dynamicOnly)
        continue;
      if (p2.name === name && (p2.value || allowEmpty)) {
        return p2;
      }
    } else if (p2.name === "bind" && (p2.exp || allowEmpty) && isStaticArgOf(p2.arg, name)) {
      return p2;
    }
  }
}
function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
  return node.props.some(
    (p2) => p2.type === 7 && p2.name === "bind" && (!p2.arg || p2.arg.type !== 4 || !p2.arg.isStatic)
  );
}
function isText(node) {
  return node.type === 5 || node.type === 2;
}
function isVSlot(p2) {
  return p2.type === 7 && p2.name === "slot";
}
function isTemplateNode(node) {
  return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
  return node.type === 1 && node.tagType === 2;
}
function getVNodeHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function getUnnormalizedProps(props, callPath = []) {
  if (props && !isString(props) && props.type === 14) {
    const callee = props.callee;
    if (!isString(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
    }
  }
  return [props, callPath];
}
function injectProp(node, prop, context) {
  let propsWithInjection;
  let props = node.type === 13 ? node.props : node.arguments[2];
  let callPath = [];
  let parentCall;
  if (props && !isString(props) && props.type === 14) {
    const ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }
  if (props == null || isString(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14) {
    const first = props.arguments[0];
    if (!isString(first) && first.type === 15) {
      first.properties.unshift(prop);
    } else {
      if (props.callee === TO_HANDLERS) {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props
        ]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }
    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15) {
    let alreadyExists = false;
    if (prop.key.type === 4) {
      const propKeyName = prop.key.content;
      alreadyExists = props.properties.some((p2) => p2.key.type === 4 && p2.key.content === propKeyName);
    }
    if (!alreadyExists) {
      props.properties.unshift(prop);
    }
    propsWithInjection = props;
  } else {
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
      createObjectExpression([prop]),
      props
    ]);
    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }
  if (node.type === 13) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}
function toValidAssetId(name, type) {
  return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
  })}`;
}
function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }
  switch (node.type) {
    case 1:
      for (let i = 0; i < node.props.length; i++) {
        const p2 = node.props[i];
        if (p2.type === 7 && (hasScopeRef(p2.arg, ids) || hasScopeRef(p2.exp, ids))) {
          return true;
        }
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 11:
      if (hasScopeRef(node.source, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 9:
      return node.branches.some((b) => hasScopeRef(b, ids));
    case 10:
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 4:
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
    case 8:
      return node.children.some((c) => isObject(c) && hasScopeRef(c, ids));
    case 5:
    case 12:
      return hasScopeRef(node.content, ids);
    case 2:
    case 3:
      return false;
    default:
      if (process.env.NODE_ENV !== "production")
        ;
      return false;
  }
}
function getMemoedVNodeCall(node) {
  if (node.type === 14 && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}
function makeBlock(node, { helper, removeHelper, inSSR }) {
  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}
function getCompatValue(key, context) {
  const config = context.options ? context.options.compatConfig : context.compatConfig;
  const value = config && config[key];
  if (key === "MODE") {
    return value || 3;
  } else {
    return value;
  }
}
function isCompatEnabled(key, context) {
  const mode = getCompatValue("MODE", context);
  const value = getCompatValue(key, context);
  return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
  const enabled = isCompatEnabled(key, context);
  if (process.env.NODE_ENV !== "production" && enabled) {
    warnDeprecation(key, context, loc, ...args);
  }
  return enabled;
}
function warnDeprecation(key, context, loc, ...args) {
  const val = getCompatValue(key, context);
  if (val === "suppress-warning") {
    return;
  }
  const { message, link } = deprecationData[key];
  const msg = `(deprecation ${key}) ${typeof message === "function" ? message(...args) : message}${link ? `
  Details: ${link}` : ``}`;
  const err = new SyntaxError(msg);
  err.code = key;
  if (loc)
    err.loc = loc;
  context.onWarn(err);
}
function baseParse(content, options = {}) {
  const context = createParserContext(content, options);
  const start = getCursor(context);
  return createRoot(parseChildren(context, 0, []), getSelection(context, start));
}
function createParserContext(content, rawOptions) {
  const options = extend({}, defaultParserOptions);
  let key;
  for (key in rawOptions) {
    options[key] = rawOptions[key] === void 0 ? defaultParserOptions[key] : rawOptions[key];
  }
  return {
    options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false,
    onWarn: options.onWarn
  };
}
function parseChildren(context, mode, ancestors) {
  const parent = last(ancestors);
  const ns = parent ? parent.ns : 0;
  const nodes = [];
  while (!isEnd(context, mode, ancestors)) {
    const s = context.source;
    let node = void 0;
    if (mode === 0 || mode === 1) {
      if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
        node = parseInterpolation(context, mode);
      } else if (mode === 0 && s[0] === "<") {
        if (s.length === 1) {
          emitError(context, 5, 1);
        } else if (s[1] === "!") {
          if (startsWith(s, "<!--")) {
            node = parseComment(context);
          } else if (startsWith(s, "<!DOCTYPE")) {
            node = parseBogusComment(context);
          } else if (startsWith(s, "<![CDATA[")) {
            if (ns !== 0) {
              node = parseCDATA(context, ancestors);
            } else {
              emitError(context, 1);
              node = parseBogusComment(context);
            }
          } else {
            emitError(context, 11);
            node = parseBogusComment(context);
          }
        } else if (s[1] === "/") {
          if (s.length === 2) {
            emitError(context, 5, 2);
          } else if (s[2] === ">") {
            emitError(context, 14, 2);
            advanceBy(context, 3);
            continue;
          } else if (/[a-z]/i.test(s[2])) {
            emitError(context, 23);
            parseTag(context, 1, parent);
            continue;
          } else {
            emitError(context, 12, 2);
            node = parseBogusComment(context);
          }
        } else if (/[a-z]/i.test(s[1])) {
          node = parseElement(context, ancestors);
          if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE", context) && node && node.tag === "template" && !node.props.some((p2) => p2.type === 7 && isSpecialTemplateDirective(p2.name))) {
            process.env.NODE_ENV !== "production" && warnDeprecation("COMPILER_NATIVE_TEMPLATE", context, node.loc);
            node = node.children;
          }
        } else if (s[1] === "?") {
          emitError(context, 21, 1);
          node = parseBogusComment(context);
        } else {
          emitError(context, 12, 1);
        }
      }
    }
    if (!node) {
      node = parseText(context, mode);
    }
    if (isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  }
  let removedWhitespace = false;
  if (mode !== 2 && mode !== 1) {
    const shouldCondense = context.options.whitespace !== "preserve";
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.type === 2) {
        if (!context.inPre) {
          if (!/[^\t\r\n\f ]/.test(node.content)) {
            const prev = nodes[i - 1];
            const next = nodes[i + 1];
            if (!prev || !next || shouldCondense && (prev.type === 3 || next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node.content))) {
              removedWhitespace = true;
              nodes[i] = null;
            } else {
              node.content = " ";
            }
          } else if (shouldCondense) {
            node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
          }
        } else {
          node.content = node.content.replace(/\r\n/g, "\n");
        }
      } else if (node.type === 3 && !context.options.comments) {
        removedWhitespace = true;
        nodes[i] = null;
      }
    }
    if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
      const first = nodes[0];
      if (first && first.type === 2) {
        first.content = first.content.replace(/^\r?\n/, "");
      }
    }
  }
  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function pushNode(nodes, node) {
  if (node.type === 2) {
    const prev = last(nodes);
    if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
      prev.content += node.content;
      prev.loc.end = node.loc.end;
      prev.loc.source += node.loc.source;
      return;
    }
  }
  nodes.push(node);
}
function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  const nodes = parseChildren(context, 3, ancestors);
  if (context.source.length === 0) {
    emitError(context, 6);
  } else {
    advanceBy(context, 3);
  }
  return nodes;
}
function parseComment(context) {
  const start = getCursor(context);
  let content;
  const match = /--(\!)?>/.exec(context.source);
  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7);
  } else {
    if (match.index <= 3) {
      emitError(context, 0);
    }
    if (match[1]) {
      emitError(context, 10);
    }
    content = context.source.slice(4, match.index);
    const s = context.source.slice(0, match.index);
    let prevIndex = 1, nestedIndex = 0;
    while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);
      if (nestedIndex + 4 < s.length) {
        emitError(context, 16);
      }
      prevIndex = nestedIndex + 1;
    }
    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }
  return {
    type: 3,
    content,
    loc: getSelection(context, start)
  };
}
function parseBogusComment(context) {
  const start = getCursor(context);
  const contentStart = context.source[1] === "?" ? 1 : 2;
  let content;
  const closeIndex = context.source.indexOf(">");
  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }
  return {
    type: 3,
    content,
    loc: getSelection(context, start)
  };
}
function parseElement(context, ancestors) {
  const wasInPre = context.inPre;
  const wasInVPre = context.inVPre;
  const parent = last(ancestors);
  const element = parseTag(context, 0, parent);
  const isPreBoundary = context.inPre && !wasInPre;
  const isVPreBoundary = context.inVPre && !wasInVPre;
  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    if (isPreBoundary) {
      context.inPre = false;
    }
    if (isVPreBoundary) {
      context.inVPre = false;
    }
    return element;
  }
  ancestors.push(element);
  const mode = context.options.getTextMode(element, parent);
  const children = parseChildren(context, mode, ancestors);
  ancestors.pop();
  {
    const inlineTemplateProp = element.props.find((p2) => p2.type === 6 && p2.name === "inline-template");
    if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", context, inlineTemplateProp.loc)) {
      const loc = getSelection(context, element.loc.end);
      inlineTemplateProp.value = {
        type: 2,
        content: loc.source,
        loc
      };
    }
  }
  element.children = children;
  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1, parent);
  } else {
    emitError(context, 24, 0, element.loc.start);
    if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
      const first = children[0];
      if (first && startsWith(first.loc.source, "<!--")) {
        emitError(context, 8);
      }
    }
  }
  element.loc = getSelection(context, element.loc.start);
  if (isPreBoundary) {
    context.inPre = false;
  }
  if (isVPreBoundary) {
    context.inVPre = false;
  }
  return element;
}
function parseTag(context, type, parent) {
  const start = getCursor(context);
  const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  const tag = match[1];
  const ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context);
  const cursor = getCursor(context);
  const currentSource = context.source;
  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  }
  let props = parseAttributes(context, type);
  if (type === 0 && !context.inVPre && props.some((p2) => p2.type === 7 && p2.name === "pre")) {
    context.inVPre = true;
    extend(context, cursor);
    context.source = currentSource;
    props = parseAttributes(context, type).filter((p2) => p2.name !== "v-pre");
  }
  let isSelfClosing = false;
  if (context.source.length === 0) {
    emitError(context, 9);
  } else {
    isSelfClosing = startsWith(context.source, "/>");
    if (type === 1 && isSelfClosing) {
      emitError(context, 4);
    }
    advanceBy(context, isSelfClosing ? 2 : 1);
  }
  if (type === 1) {
    return;
  }
  if (process.env.NODE_ENV !== "production" && isCompatEnabled("COMPILER_V_IF_V_FOR_PRECEDENCE", context)) {
    let hasIf = false;
    let hasFor = false;
    for (let i = 0; i < props.length; i++) {
      const p2 = props[i];
      if (p2.type === 7) {
        if (p2.name === "if") {
          hasIf = true;
        } else if (p2.name === "for") {
          hasFor = true;
        }
      }
      if (hasIf && hasFor) {
        warnDeprecation("COMPILER_V_IF_V_FOR_PRECEDENCE", context, getSelection(context, start));
        break;
      }
    }
  }
  let tagType = 0;
  if (!context.inVPre) {
    if (tag === "slot") {
      tagType = 2;
    } else if (tag === "template") {
      if (props.some((p2) => p2.type === 7 && isSpecialTemplateDirective(p2.name))) {
        tagType = 3;
      }
    } else if (isComponent(tag, props, context)) {
      tagType = 1;
    }
  }
  return {
    type: 1,
    ns,
    tag,
    tagType,
    props,
    isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: void 0
  };
}
function isComponent(tag, props, context) {
  const options = context.options;
  if (options.isCustomElement(tag)) {
    return false;
  }
  if (tag === "component" || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
    return true;
  }
  for (let i = 0; i < props.length; i++) {
    const p2 = props[i];
    if (p2.type === 6) {
      if (p2.name === "is" && p2.value) {
        if (p2.value.content.startsWith("vue:")) {
          return true;
        } else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", context, p2.loc)) {
          return true;
        }
      }
    } else {
      if (p2.name === "is") {
        return true;
      } else if (p2.name === "bind" && isStaticArgOf(p2.arg, "is") && true && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", context, p2.loc)) {
        return true;
      }
    }
  }
}
function parseAttributes(context, type) {
  const props = [];
  const attributeNames = /* @__PURE__ */ new Set();
  while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
    if (startsWith(context.source, "/")) {
      emitError(context, 22);
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }
    if (type === 1) {
      emitError(context, 3);
    }
    const attr = parseAttribute(context, attributeNames);
    if (attr.type === 6 && attr.value && attr.name === "class") {
      attr.value.content = attr.value.content.replace(/\s+/g, " ").trim();
    }
    if (type === 0) {
      props.push(attr);
    }
    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15);
    }
    advanceSpaces(context);
  }
  return props;
}
function parseAttribute(context, nameSet) {
  const start = getCursor(context);
  const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  const name = match[0];
  if (nameSet.has(name)) {
    emitError(context, 2);
  }
  nameSet.add(name);
  if (name[0] === "=") {
    emitError(context, 19);
  }
  {
    const pattern = /["'<]/g;
    let m;
    while (m = pattern.exec(name)) {
      emitError(context, 17, m.index);
    }
  }
  advanceBy(context, name.length);
  let value = void 0;
  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);
    if (!value) {
      emitError(context, 13);
    }
  }
  const loc = getSelection(context, start);
  if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
    const match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
    let isPropShorthand = startsWith(name, ".");
    let dirName = match2[1] || (isPropShorthand || startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
    let arg;
    if (match2[2]) {
      const isSlot = dirName === "slot";
      const startOffset = name.lastIndexOf(match2[2]);
      const loc2 = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match2[2].length + (isSlot && match2[3] || "").length));
      let content = match2[2];
      let isStatic = true;
      if (content.startsWith("[")) {
        isStatic = false;
        if (!content.endsWith("]")) {
          emitError(context, 27);
          content = content.slice(1);
        } else {
          content = content.slice(1, content.length - 1);
        }
      } else if (isSlot) {
        content += match2[3] || "";
      }
      arg = {
        type: 4,
        content,
        isStatic,
        constType: isStatic ? 3 : 0,
        loc: loc2
      };
    }
    if (value && value.isQuoted) {
      const valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }
    const modifiers = match2[3] ? match2[3].slice(1).split(".") : [];
    if (isPropShorthand)
      modifiers.push("prop");
    if (dirName === "bind" && arg) {
      if (modifiers.includes("sync") && checkCompatEnabled("COMPILER_V_BIND_SYNC", context, loc, arg.loc.source)) {
        dirName = "model";
        modifiers.splice(modifiers.indexOf("sync"), 1);
      }
      if (process.env.NODE_ENV !== "production" && modifiers.includes("prop")) {
        checkCompatEnabled("COMPILER_V_BIND_PROP", context, loc);
      }
    }
    return {
      type: 7,
      name: dirName,
      exp: value && {
        type: 4,
        content: value.content,
        isStatic: false,
        constType: 0,
        loc: value.loc
      },
      arg,
      modifiers,
      loc
    };
  }
  if (!context.inVPre && startsWith(name, "v-")) {
    emitError(context, 26);
  }
  return {
    type: 6,
    name,
    value: value && {
      type: 2,
      content: value.content,
      loc: value.loc
    },
    loc
  };
}
function parseAttributeValue(context) {
  const start = getCursor(context);
  let content;
  const quote = context.source[0];
  const isQuoted = quote === `"` || quote === `'`;
  if (isQuoted) {
    advanceBy(context, 1);
    const endIndex = context.source.indexOf(quote);
    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4);
    } else {
      content = parseTextData(context, endIndex, 4);
      advanceBy(context, 1);
    }
  } else {
    const match = /^[^\t\r\n\f >]+/.exec(context.source);
    if (!match) {
      return void 0;
    }
    const unexpectedChars = /["'<=`]/g;
    let m;
    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18, m.index);
    }
    content = parseTextData(context, match[0].length, 4);
  }
  return { content, isQuoted, loc: getSelection(context, start) };
}
function parseInterpolation(context, mode) {
  const [open, close] = context.options.delimiters;
  const closeIndex = context.source.indexOf(close, open.length);
  if (closeIndex === -1) {
    emitError(context, 25);
    return void 0;
  }
  const start = getCursor(context);
  advanceBy(context, open.length);
  const innerStart = getCursor(context);
  const innerEnd = getCursor(context);
  const rawContentLength = closeIndex - open.length;
  const rawContent = context.source.slice(0, rawContentLength);
  const preTrimContent = parseTextData(context, rawContentLength, mode);
  const content = preTrimContent.trim();
  const startOffset = preTrimContent.indexOf(content);
  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }
  const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5,
    content: {
      type: 4,
      isStatic: false,
      constType: 0,
      content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}
function parseText(context, mode) {
  const endTokens = mode === 3 ? ["]]>"] : ["<", context.options.delimiters[0]];
  let endIndex = context.source.length;
  for (let i = 0; i < endTokens.length; i++) {
    const index = context.source.indexOf(endTokens[i], 1);
    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }
  const start = getCursor(context);
  const content = parseTextData(context, endIndex, mode);
  return {
    type: 2,
    content,
    loc: getSelection(context, start)
  };
}
function parseTextData(context, length, mode) {
  const rawText = context.source.slice(0, length);
  advanceBy(context, length);
  if (mode === 2 || mode === 3 || !rawText.includes("&")) {
    return rawText;
  } else {
    return context.options.decodeEntities(rawText, mode === 4);
  }
}
function getCursor(context) {
  const { column, line, offset } = context;
  return { column, line, offset };
}
function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start,
    end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}
function last(xs) {
  return xs[xs.length - 1];
}
function startsWith(source, searchString) {
  return source.startsWith(searchString);
}
function advanceBy(context, numberOfCharacters) {
  const { source } = context;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}
function advanceSpaces(context) {
  const match = /^[\t\r\n\f ]+/.exec(context.source);
  if (match) {
    advanceBy(context, match[0].length);
  }
}
function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}
function emitError(context, code, offset, loc = getCursor(context)) {
  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }
  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ""
  }));
}
function isEnd(context, mode, ancestors) {
  const s = context.source;
  switch (mode) {
    case 0:
      if (startsWith(s, "</")) {
        for (let i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }
      break;
    case 1:
    case 2: {
      const parent = last(ancestors);
      if (parent && startsWithEndTagOpen(s, parent.tag)) {
        return true;
      }
      break;
    }
    case 3:
      if (startsWith(s, "]]>")) {
        return true;
      }
      break;
  }
  return !s;
}
function startsWithEndTagOpen(source, tag) {
  return startsWith(source, "</") && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
}
function hoistStatic(root, context) {
  walk(
    root,
    context,
    isSingleElementRoot(root, root.children[0])
  );
}
function isSingleElementRoot(root, child) {
  const { children } = root;
  return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
}
function walk(node, context, doNotHoistNode = false) {
  const { children } = node;
  const originalCount = children.length;
  let hoistedCount = 0;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 1 && child.tagType === 0) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType > 0) {
        if (constantType >= 2) {
          child.codegenNode.patchFlag = -1 + (process.env.NODE_ENV !== "production" ? ` /* HOISTED */` : ``);
          child.codegenNode = context.hoist(child.codegenNode);
          hoistedCount++;
          continue;
        }
      } else {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          const flag = getPatchFlag(codegenNode);
          if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
            const props = getNodeProps(child);
            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }
          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    }
    if (child.type === 1) {
      const isComponent2 = child.tagType === 1;
      if (isComponent2) {
        context.scopes.vSlot++;
      }
      walk(child, context);
      if (isComponent2) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11) {
      walk(child, context, child.children.length === 1);
    } else if (child.type === 9) {
      for (let i2 = 0; i2 < child.branches.length; i2++) {
        walk(child.branches[i2], context, child.branches[i2].children.length === 1);
      }
    }
  }
  if (hoistedCount && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
  if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
    node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
  }
}
function getConstantType(node, context) {
  const { constantCache } = context;
  switch (node.type) {
    case 1:
      if (node.tagType !== 0) {
        return 0;
      }
      const cached = constantCache.get(node);
      if (cached !== void 0) {
        return cached;
      }
      const codegenNode = node.codegenNode;
      if (codegenNode.type !== 13) {
        return 0;
      }
      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") {
        return 0;
      }
      const flag = getPatchFlag(codegenNode);
      if (!flag) {
        let returnType2 = 3;
        const generatedPropsType = getGeneratedPropsConstantType(node, context);
        if (generatedPropsType === 0) {
          constantCache.set(node, 0);
          return 0;
        }
        if (generatedPropsType < returnType2) {
          returnType2 = generatedPropsType;
        }
        for (let i = 0; i < node.children.length; i++) {
          const childType = getConstantType(node.children[i], context);
          if (childType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (childType < returnType2) {
            returnType2 = childType;
          }
        }
        if (returnType2 > 1) {
          for (let i = 0; i < node.props.length; i++) {
            const p2 = node.props[i];
            if (p2.type === 7 && p2.name === "bind" && p2.exp) {
              const expType = getConstantType(p2.exp, context);
              if (expType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (expType < returnType2) {
                returnType2 = expType;
              }
            }
          }
        }
        if (codegenNode.isBlock) {
          for (let i = 0; i < node.props.length; i++) {
            const p2 = node.props[i];
            if (p2.type === 7) {
              constantCache.set(node, 0);
              return 0;
            }
          }
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }
        constantCache.set(node, returnType2);
        return returnType2;
      } else {
        constantCache.set(node, 0);
        return 0;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return getConstantType(node.content, context);
    case 4:
      return node.constType;
    case 8:
      let returnType = 3;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isString(child) || isSymbol(child)) {
          continue;
        }
        const childType = getConstantType(child, context);
        if (childType === 0) {
          return 0;
        } else if (childType < returnType) {
          returnType = childType;
        }
      }
      return returnType;
    default:
      if (process.env.NODE_ENV !== "production")
        ;
      return 0;
  }
}
function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    const arg = value.arguments[0];
    if (arg.type === 4) {
      return getConstantType(arg, context);
    } else if (arg.type === 14) {
      return getConstantTypeOfHelperCall(arg, context);
    }
  }
  return 0;
}
function getGeneratedPropsConstantType(node, context) {
  let returnType = 3;
  const props = getNodeProps(node);
  if (props && props.type === 15) {
    const { properties } = props;
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      const keyType = getConstantType(key, context);
      if (keyType === 0) {
        return keyType;
      }
      if (keyType < returnType) {
        returnType = keyType;
      }
      let valueType;
      if (value.type === 4) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14) {
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0;
      }
      if (valueType === 0) {
        return valueType;
      }
      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }
  return returnType;
}
function getNodeProps(node) {
  const codegenNode = node.codegenNode;
  if (codegenNode.type === 13) {
    return codegenNode.props;
  }
}
function getPatchFlag(node) {
  const flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : void 0;
}
function createTransformContext(root, { filename = "", prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = NOOP, isCustomElement = NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig }) {
  const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const context = {
    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
    prefixIdentifiers,
    hoistStatic: hoistStatic2,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    slotted,
    ssr,
    inSSR,
    ssrCssVars,
    bindingMetadata,
    inline,
    isTS,
    onError,
    onWarn,
    compatConfig,
    root,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new Map(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    helper(name) {
      const count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper(name) {
      const count = context.helpers.get(name);
      if (count) {
        const currentCount = count - 1;
        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },
    replaceNode(node) {
      if (process.env.NODE_ENV !== "production") {
        if (!context.currentNode) {
          throw new Error(`Node being replaced is already removed.`);
        }
        if (!context.parent) {
          throw new Error(`Cannot replace root node.`);
        }
      }
      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode(node) {
      if (process.env.NODE_ENV !== "production" && !context.parent) {
        throw new Error(`Cannot remove root node.`);
      }
      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      if (process.env.NODE_ENV !== "production" && removalIndex < 0) {
        throw new Error(`node being removed is not a child of current parent`);
      }
      if (!node || node === context.currentNode) {
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }
      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: () => {
    },
    addIdentifiers(exp) {
    },
    removeIdentifiers(exp) {
    },
    hoist(exp) {
      if (isString(exp))
        exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
      identifier.hoisted = exp;
      return identifier;
    },
    cache(exp, isVNode = false) {
      return createCacheExpression(context.cached++, exp, isVNode);
    }
  };
  {
    context.filters = /* @__PURE__ */ new Set();
  }
  return context;
}
function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  if (options.hoistStatic) {
    hoistStatic(root, context);
  }
  if (!options.ssr) {
    createRootCodegen(root, context);
  }
  root.helpers = [...context.helpers.keys()];
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  {
    root.filters = [...context.filters];
  }
}
function createRootCodegen(root, context) {
  const { helper } = context;
  const { children } = root;
  if (children.length === 1) {
    const child = children[0];
    if (isSingleElementRoot(root, child) && child.codegenNode) {
      const codegenNode = child.codegenNode;
      if (codegenNode.type === 13) {
        makeBlock(codegenNode, context);
      }
      root.codegenNode = codegenNode;
    } else {
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    let patchFlag = 64;
    let patchFlagText = PatchFlagNames[64];
    if (process.env.NODE_ENV !== "production" && children.filter((c) => c.type !== 3).length === 1) {
      patchFlag |= 2048;
      patchFlagText += `, ${PatchFlagNames[2048]}`;
    }
    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, root.children, patchFlag + (process.env.NODE_ENV !== "production" ? ` /* ${patchFlagText} */` : ``), void 0, void 0, true, void 0, false);
  } else
    ;
}
function traverseChildren(parent, context) {
  let i = 0;
  const nodeRemoved = () => {
    i--;
  };
  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (isString(child))
      continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}
function traverseNode(node, context) {
  context.currentNode = node;
  const { nodeTransforms } = context;
  const exitFns = [];
  for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
    const onExit = nodeTransforms[i2](node, context);
    if (onExit) {
      if (isArray(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }
    if (!context.currentNode) {
      return;
    } else {
      node = context.currentNode;
    }
  }
  switch (node.type) {
    case 3:
      if (!context.ssr) {
        context.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }
      break;
    case 9:
      for (let i2 = 0; i2 < node.branches.length; i2++) {
        traverseNode(node.branches[i2], context);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      traverseChildren(node, context);
      break;
  }
  context.currentNode = node;
  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}
function createStructuralDirectiveTransform(name, fn) {
  const matches = isString(name) ? (n) => n === name : (n) => name.test(n);
  return (node, context) => {
    if (node.type === 1) {
      const { props } = node;
      if (node.tagType === 3 && props.some(isVSlot)) {
        return;
      }
      const exitFns = [];
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 7 && matches(prop.name)) {
          props.splice(i, 1);
          i--;
          const onExit = fn(node, prop, context);
          if (onExit)
            exitFns.push(onExit);
        }
      }
      return exitFns;
    }
  };
}
function createCodegenContext(ast, { mode = "function", prefixIdentifiers = mode === "module", sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = "vue/server-renderer", ssr = false, isTS = false, inSSR = false }) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssrRuntimeModuleName,
    ssr,
    isTS,
    inSSR,
    source: ast.loc.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(key) {
      return `_${helperNameMap[key]}`;
    },
    push(code, node) {
      context.code += code;
    },
    indent() {
      newline(++context.indentLevel);
    },
    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },
    newline() {
      newline(context.indentLevel);
    }
  };
  function newline(n) {
    context.push("\n" + `  `.repeat(n));
  }
  return context;
}
function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated)
    options.onContextCreated(context);
  const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
  const hasHelpers = ast.helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== "module";
  const preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  }
  const functionName = ssr ? `ssrRender` : `render`;
  const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  const signature = args.join(", ");
  {
    push(`function ${functionName}(${signature}) {`);
  }
  indent();
  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent();
    if (hasHelpers) {
      push(`const { ${ast.helpers.map(aliasHelper).join(", ")} } = _Vue`);
      push(`
`);
      newline();
    }
  }
  if (ast.components.length) {
    genAssets(ast.components, "component", context);
    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }
  if (ast.directives.length) {
    genAssets(ast.directives, "directive", context);
    if (ast.temps > 0) {
      newline();
    }
  }
  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, "filter", context);
    newline();
  }
  if (ast.temps > 0) {
    push(`let `);
    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }
  if (ast.components.length || ast.directives.length || ast.temps) {
    push(`
`);
    newline();
  }
  if (!ssr) {
    push(`return `);
  }
  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }
  if (useWithBlock) {
    deindent();
    push(`}`);
  }
  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    preamble: ``,
    map: context.map ? context.map.toJSON() : void 0
  };
}
function genFunctionPreamble(ast, context) {
  const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName } = context;
  const VueBinding = runtimeGlobalName;
  if (ast.helpers.length > 0) {
    {
      push(`const _Vue = ${VueBinding}
`);
      if (ast.hoists.length) {
        const staticHelpers = [
          CREATE_VNODE,
          CREATE_ELEMENT_VNODE,
          CREATE_COMMENT,
          CREATE_TEXT,
          CREATE_STATIC
        ].filter((helper) => ast.helpers.includes(helper)).map(aliasHelper).join(", ");
        push(`const { ${staticHelpers} } = _Vue
`);
      }
    }
  }
  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
  const resolver = helper(type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
  for (let i = 0; i < assets.length; i++) {
    let id = assets[i];
    const maybeSelfReference = id.endsWith("__self");
    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }
    push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
    if (i < assets.length - 1) {
      newline();
    }
  }
}
function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }
  context.pure = true;
  const { push, newline, helper, scopeId, mode } = context;
  newline();
  for (let i = 0; i < hoists.length; i++) {
    const exp = hoists[i];
    if (exp) {
      push(`const _hoisted_${i + 1} = ${``}`);
      genNode(exp, context);
      newline();
    }
  }
  context.pure = false;
}
function isText$1(n) {
  return isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
}
function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 || process.env.NODE_ENV !== "production" && nodes.some((n) => isArray(n) || !isText$1(n));
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
  const { push, newline } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (isString(node)) {
      push(node);
    } else if (isArray(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }
    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(",");
        newline();
      } else {
        comma && push(", ");
      }
    }
  }
}
function genNode(node, context) {
  if (isString(node)) {
    context.push(node);
    return;
  }
  if (isSymbol(node)) {
    context.push(context.helper(node));
    return;
  }
  switch (node.type) {
    case 1:
    case 9:
    case 11:
      process.env.NODE_ENV !== "production" && assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`);
      genNode(node.codegenNode, context);
      break;
    case 2:
      genText(node, context);
      break;
    case 4:
      genExpression(node, context);
      break;
    case 5:
      genInterpolation(node, context);
      break;
    case 12:
      genNode(node.codegenNode, context);
      break;
    case 8:
      genCompoundExpression(node, context);
      break;
    case 3:
      genComment(node, context);
      break;
    case 13:
      genVNodeCall(node, context);
      break;
    case 14:
      genCallExpression(node, context);
      break;
    case 15:
      genObjectExpression(node, context);
      break;
    case 17:
      genArrayExpression(node, context);
      break;
    case 18:
      genFunctionExpression(node, context);
      break;
    case 19:
      genConditionalExpression(node, context);
      break;
    case 20:
      genCacheExpression(node, context);
      break;
    case 21:
      genNodeList(node.body, context, true, false);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (process.env.NODE_ENV !== "production") {
        assert(false, `unhandled codegen node type: ${node.type}`);
        const exhaustiveCheck = node;
        return exhaustiveCheck;
      }
  }
}
function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}
function genExpression(node, context) {
  const { content, isStatic } = node;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}
function genInterpolation(node, context) {
  const { push, helper, pure } = context;
  if (pure)
    push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}
function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isString(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}
function genExpressionAsPropertyKey(node, context) {
  const { push } = context;
  if (node.type === 8) {
    push(`[`);
    genCompoundExpression(node, context);
    push(`]`);
  } else if (node.isStatic) {
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push(`[${node.content}]`, node);
  }
}
function genComment(node, context) {
  const { push, helper, pure } = context;
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
}
function genVNodeCall(node, context) {
  const { push, helper, pure } = context;
  const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent: isComponent2 } = node;
  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }
  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }
  if (pure) {
    push(PURE_ANNOTATION);
  }
  const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
  push(helper(callHelper) + `(`, node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(`)`);
  if (isBlock) {
    push(`)`);
  }
  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}
function genNullableArgs(args) {
  let i = args.length;
  while (i--) {
    if (args[i] != null)
      break;
  }
  return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
  const { push, helper, pure } = context;
  const callee = isString(node.callee) ? node.callee : helper(node.callee);
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(callee + `(`, node);
  genNodeList(node.arguments, context);
  push(`)`);
}
function genObjectExpression(node, context) {
  const { push, indent, deindent, newline } = context;
  const { properties } = node;
  if (!properties.length) {
    push(`{}`, node);
    return;
  }
  const multilines = properties.length > 1 || process.env.NODE_ENV !== "production" && properties.some((p2) => p2.value.type !== 4);
  push(multilines ? `{` : `{ `);
  multilines && indent();
  for (let i = 0; i < properties.length; i++) {
    const { key, value } = properties[i];
    genExpressionAsPropertyKey(key, context);
    push(`: `);
    genNode(value, context);
    if (i < properties.length - 1) {
      push(`,`);
      newline();
    }
  }
  multilines && deindent();
  push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
  const { push, indent, deindent } = context;
  const { params, returns, body, newline, isSlot } = node;
  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }
  push(`(`, node);
  if (isArray(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }
  push(`) => `);
  if (newline || body) {
    push(`{`);
    indent();
  }
  if (returns) {
    if (newline) {
      push(`return `);
    }
    if (isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }
  if (newline || body) {
    deindent();
    push(`}`);
  }
  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(`, undefined, true`);
    }
    push(`)`);
  }
}
function genConditionalExpression(node, context) {
  const { test, consequent, alternate, newline: needNewline } = node;
  const { push, indent, deindent, newline } = context;
  if (test.type === 4) {
    const needsParens = !isSimpleIdentifier(test.content);
    needsParens && push(`(`);
    genExpression(test, context);
    needsParens && push(`)`);
  } else {
    push(`(`);
    genNode(test, context);
    push(`)`);
  }
  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19;
  if (!isNested) {
    context.indentLevel++;
  }
  genNode(alternate, context);
  if (!isNested) {
    context.indentLevel--;
  }
  needNewline && deindent(true);
}
function genCacheExpression(node, context) {
  const { push, helper, indent, deindent, newline } = context;
  push(`_cache[${node.index}] || (`);
  if (node.isVNode) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
    newline();
  }
  push(`_cache[${node.index}] = `);
  genNode(node.value, context);
  if (node.isVNode) {
    push(`,`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }
  push(`)`);
}
function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = /* @__PURE__ */ Object.create(null)) {
  {
    return;
  }
}
function isReferencedIdentifier(id, parent, parentStack) {
  {
    return false;
  }
}
function isInDestructureAssignment(parent, parentStack) {
  if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
    let i = parentStack.length;
    while (i--) {
      const p2 = parentStack[i];
      if (p2.type === "AssignmentExpression") {
        return true;
      } else if (p2.type !== "ObjectProperty" && !p2.type.endsWith("Pattern")) {
        break;
      }
    }
  }
  return false;
}
function walkFunctionParams(node, onIdent) {
  for (const p2 of node.params) {
    for (const id of extractIdentifiers(p2)) {
      onIdent(id);
    }
  }
}
function walkBlockDeclarations(block, onIdent) {
  for (const stmt of block.body) {
    if (stmt.type === "VariableDeclaration") {
      if (stmt.declare)
        continue;
      for (const decl of stmt.declarations) {
        for (const id of extractIdentifiers(decl.id)) {
          onIdent(id);
        }
      }
    } else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
      if (stmt.declare || !stmt.id)
        continue;
      onIdent(stmt.id);
    }
  }
}
function extractIdentifiers(param, nodes = []) {
  switch (param.type) {
    case "Identifier":
      nodes.push(param);
      break;
    case "MemberExpression":
      let object = param;
      while (object.type === "MemberExpression") {
        object = object.object;
      }
      nodes.push(object);
      break;
    case "ObjectPattern":
      for (const prop of param.properties) {
        if (prop.type === "RestElement") {
          extractIdentifiers(prop.argument, nodes);
        } else {
          extractIdentifiers(prop.value, nodes);
        }
      }
      break;
    case "ArrayPattern":
      param.elements.forEach((element) => {
        if (element)
          extractIdentifiers(element, nodes);
      });
      break;
    case "RestElement":
      extractIdentifiers(param.argument, nodes);
      break;
    case "AssignmentPattern":
      extractIdentifiers(param.left, nodes);
      break;
  }
  return nodes;
}
function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
  const exp = node.content;
  if (!exp.trim()) {
    return;
  }
  try {
    new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
  } catch (e) {
    let message = e.message;
    const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
    if (keywordMatch) {
      message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
    }
    context.onError(createCompilerError(44, node.loc, void 0, message));
  }
}
function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
  {
    if (process.env.NODE_ENV !== "production") {
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }
    return node;
  }
}
function processIf(node, dir, context, processCodegen) {
  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(28, dir.loc));
    dir.exp = createSimpleExpression(`true`, false, loc);
  }
  if (process.env.NODE_ENV !== "production" && true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }
  if (dir.name === "if") {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);
    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    const siblings = context.parent.children;
    const comments = [];
    let i = siblings.indexOf(node);
    while (i-- >= -1) {
      const sibling = siblings[i];
      if (process.env.NODE_ENV !== "production" && sibling && sibling.type === 3) {
        context.removeNode(sibling);
        comments.unshift(sibling);
        continue;
      }
      if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 9) {
        if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
          context.onError(createCompilerError(30, node.loc));
        }
        context.removeNode();
        const branch = createIfBranch(node, dir);
        if (process.env.NODE_ENV !== "production" && comments.length && !(context.parent && context.parent.type === 1 && isBuiltInType(context.parent.tag, "transition"))) {
          branch.children = [...comments, ...branch.children];
        }
        if (process.env.NODE_ENV !== "production" || false) {
          const key = branch.userKey;
          if (key) {
            sibling.branches.forEach(({ userKey }) => {
              if (isSameKey(userKey, key)) {
                context.onError(createCompilerError(29, branch.userKey.loc));
              }
            });
          }
        }
        sibling.branches.push(branch);
        const onExit = processCodegen && processCodegen(sibling, branch, false);
        traverseNode(branch, context);
        if (onExit)
          onExit();
        context.currentNode = null;
      } else {
        context.onError(createCompilerError(30, node.loc));
      }
      break;
    }
  }
}
function createIfBranch(node, dir) {
  const isTemplateIf = node.tagType === 3;
  return {
    type: 10,
    loc: node.loc,
    condition: dir.name === "else" ? void 0 : dir.exp,
    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
    userKey: findProp(node, `key`),
    isTemplateIf
  };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, keyIndex, context),
      createCallExpression(context.helper(CREATE_COMMENT), [
        process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
        "true"
      ])
    );
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
  const { helper } = context;
  const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2));
  const { children } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11) {
      const vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      let patchFlag = 64;
      let patchFlagText = PatchFlagNames[64];
      if (process.env.NODE_ENV !== "production" && !branch.isTemplateIf && children.filter((c) => c.type !== 3).length === 1) {
        patchFlag |= 2048;
        patchFlagText += `, ${PatchFlagNames[2048]}`;
      }
      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + (process.env.NODE_ENV !== "production" ? ` /* ${patchFlagText} */` : ``), void 0, void 0, true, false, false, branch.loc);
    }
  } else {
    const ret = firstChild.codegenNode;
    const vnodeCall = getMemoedVNodeCall(ret);
    if (vnodeCall.type === 13) {
      makeBlock(vnodeCall, context);
    }
    injectProp(vnodeCall, keyProperty, context);
    return ret;
  }
}
function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }
  if (a.type === 6) {
    if (a.value.content !== b.value.content) {
      return false;
    }
  } else {
    const exp = a.exp;
    const branchExp = b.exp;
    if (exp.type !== branchExp.type) {
      return false;
    }
    if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }
  return true;
}
function getParentCondition(node) {
  while (true) {
    if (node.type === 19) {
      if (node.alternate.type === 19) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20) {
      node = node.value;
    }
  }
}
function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(31, dir.loc));
    return;
  }
  const parseResult = parseForExpression(
    dir.exp,
    context
  );
  if (!parseResult) {
    context.onError(createCompilerError(32, dir.loc));
    return;
  }
  const { addIdentifiers, removeIdentifiers, scopes } = context;
  const { source, value, key, index } = parseResult;
  const forNode = {
    type: 11,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode);
  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit)
      onExit();
  };
}
function parseForExpression(input, context) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch)
    return;
  const [, LHS, RHS] = inMatch;
  const result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: void 0,
    key: void 0,
    index: void 0
  };
  if (process.env.NODE_ENV !== "production" && true) {
    validateBrowserExpression(result.source, context);
  }
  let valueContent = LHS.trim().replace(stripParensRE, "").trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);
  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, "").trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;
    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);
      if (process.env.NODE_ENV !== "production" && true) {
        validateBrowserExpression(result.key, context, true);
      }
    }
    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();
      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));
        if (process.env.NODE_ENV !== "production" && true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }
  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);
    if (process.env.NODE_ENV !== "production" && true) {
      validateBrowserExpression(result.value, context, true);
    }
  }
  return result;
}
function createAliasExpression(range2, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range2, offset, content.length));
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
  return createParamsList([value, key, index, ...memoArgs]);
}
function createParamsList(args) {
  let i = args.length;
  while (i--) {
    if (args[i])
      break;
  }
  return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const { children, loc } = node;
  const slotsProperties = [];
  const dynamicSlots = [];
  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
  const onComponentSlot = findDir(node, "slot", true);
  if (onComponentSlot) {
    const { arg, exp } = onComponentSlot;
    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }
    slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, children, loc)));
  }
  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = /* @__PURE__ */ new Set();
  let conditionalBranchIndex = 0;
  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;
    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
      if (slotElement.type !== 3) {
        implicitDefaultChildren.push(slotElement);
      }
      continue;
    }
    if (onComponentSlot) {
      context.onError(createCompilerError(37, slotDir.loc));
      break;
    }
    hasTemplateSlots = true;
    const { children: slotChildren, loc: slotLoc } = slotElement;
    const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
    let staticSlotName;
    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }
    const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
    let vIf;
    let vElse;
    let vFor;
    if (vIf = findDir(slotElement, "if")) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true)) {
      let j = i;
      let prev;
      while (j--) {
        prev = children[j];
        if (prev.type !== 3) {
          break;
        }
      }
      if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
        children.splice(i, 1);
        i--;
        let conditional = dynamicSlots[dynamicSlots.length - 1];
        while (conditional.alternate.type === 19) {
          conditional = conditional.alternate;
        }
        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(createCompilerError(30, vElse.loc));
      }
    } else if (vFor = findDir(slotElement, "for")) {
      hasDynamicSlots = true;
      const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
      if (parseResult) {
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
          parseResult.source,
          createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true)
        ]));
      } else {
        context.onError(createCompilerError(32, vFor.loc));
      }
    } else {
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(38, dirLoc));
          continue;
        }
        seenSlotNames.add(staticSlotName);
        if (staticSlotName === "default") {
          hasNamedDefaultSlot = true;
        }
      }
      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }
  if (!onComponentSlot) {
    const buildDefaultSlotProperty = (props, children2) => {
      const fn = buildSlotFn(props, children2, loc);
      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }
      return createObjectProperty(`default`, fn);
    };
    if (!hasTemplateSlots) {
      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
    } else if (implicitDefaultChildren.length && implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(39, implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
      }
    }
  }
  const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
  let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(
    `_`,
    createSimpleExpression(slotFlag + (process.env.NODE_ENV !== "production" ? ` /* ${slotFlagsText[slotFlag]} */` : ``), false)
  )), loc);
  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [
      slots,
      createArrayExpression(dynamicSlots)
    ]);
  }
  return {
    slots,
    hasDynamicSlots
  };
}
function buildDynamicSlot(name, fn, index) {
  const props = [
    createObjectProperty(`name`, name),
    createObjectProperty(`fn`, fn)
  ];
  if (index != null) {
    props.push(createObjectProperty(`key`, createSimpleExpression(String(index), true)));
  }
  return createObjectExpression(props);
}
function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    switch (child.type) {
      case 1:
        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
          return true;
        }
        break;
      case 9:
        if (hasForwardedSlots(child.branches))
          return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(child.children))
          return true;
        break;
    }
  }
  return false;
}
function isNonWhitespaceContent(node) {
  if (node.type !== 2 && node.type !== 12)
    return true;
  return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}
function resolveComponentType(node, context, ssr = false) {
  let { tag } = node;
  const isExplicitDynamic = isComponentTag(tag);
  const isProp = findProp(node, "is");
  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context)) {
      const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
      tag = isProp.value.content.slice(4);
    }
  }
  const isDir = !isExplicitDynamic && findDir(node, "is");
  if (isDir && isDir.exp) {
    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
      isDir.exp
    ]);
  }
  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
  if (builtIn) {
    if (!ssr)
      context.helper(builtIn);
    return builtIn;
  }
  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
  const { tag, loc: elementLoc, children } = node;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = [];
  const hasChildren = children.length > 0;
  let shouldUseBlock = false;
  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];
  const pushMergeArg = (arg) => {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
      properties = [];
    }
    if (arg)
      mergeArgs.push(arg);
  };
  const analyzePatchFlag = ({ key, value }) => {
    if (isStaticExp(key)) {
      const name = key.content;
      const isEventHandler = isOn(name);
      if (isEventHandler && (!isComponent2 || isDynamicComponent) && name.toLowerCase() !== "onclick" && name !== "onUpdate:modelValue" && !isReservedProp(name)) {
        hasHydrationEventBinding = true;
      }
      if (isEventHandler && isReservedProp(name)) {
        hasVnodeHook = true;
      }
      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
        return;
      }
      if (name === "ref") {
        hasRef = true;
      } else if (name === "class") {
        hasClassBinding = true;
      } else if (name === "style") {
        hasStyleBinding = true;
      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
      if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (prop.type === 6) {
      const { loc, name, value } = prop;
      let isStatic = true;
      if (name === "ref") {
        hasRef = true;
        if (context.scopes.vFor > 0) {
          properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
        }
      }
      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context))) {
        continue;
      }
      properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
    } else {
      const { name, arg, exp, loc } = prop;
      const isVBind = name === "bind";
      const isVOn = name === "on";
      if (name === "slot") {
        if (!isComponent2) {
          context.onError(createCompilerError(40, loc));
        }
        continue;
      }
      if (name === "once" || name === "memo") {
        continue;
      }
      if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context))) {
        continue;
      }
      if (isVOn && ssr) {
        continue;
      }
      if (isVBind && isStaticArgOf(arg, "key") || isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")) {
        shouldUseBlock = true;
      }
      if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) {
        properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
      }
      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;
        if (exp) {
          if (isVBind) {
            pushMergeArg();
            {
              if (process.env.NODE_ENV !== "production") {
                const hasOverridableKeys = mergeArgs.some((arg2) => {
                  if (arg2.type === 15) {
                    return arg2.properties.some(({ key }) => {
                      if (key.type !== 4 || !key.isStatic) {
                        return true;
                      }
                      return key.content !== "class" && key.content !== "style" && !isOn(key.content);
                    });
                  } else {
                    return true;
                  }
                });
                if (hasOverridableKeys) {
                  checkCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", context, loc);
                }
              }
              if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", context)) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            pushMergeArg({
              type: 14,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent2 ? [exp] : [exp, `true`]
            });
          }
        } else {
          context.onError(createCompilerError(isVBind ? 34 : 35, loc));
        }
        continue;
      }
      const directiveTransform = context.directiveTransforms[name];
      if (directiveTransform) {
        const { props: props2, needRuntime } = directiveTransform(prop, node, context);
        !ssr && props2.forEach(analyzePatchFlag);
        if (isVOn && arg && !isStaticExp(arg)) {
          pushMergeArg(createObjectExpression(props2, elementLoc));
        } else {
          properties.push(...props2);
        }
        if (needRuntime) {
          runtimeDirectives.push(prop);
          if (isSymbol(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!isBuiltInDirective(name)) {
        runtimeDirectives.push(prop);
        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }
  let propsExpression = void 0;
  if (mergeArgs.length) {
    pushMergeArg();
    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  }
  if (hasDynamicKeys) {
    patchFlag |= 16;
  } else {
    if (hasClassBinding && !isComponent2) {
      patchFlag |= 2;
    }
    if (hasStyleBinding && !isComponent2) {
      patchFlag |= 4;
    }
    if (dynamicPropNames.length) {
      patchFlag |= 8;
    }
    if (hasHydrationEventBinding) {
      patchFlag |= 32;
    }
  }
  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512;
  }
  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15:
        let classKeyIndex = -1;
        let styleKeyIndex = -1;
        let hasDynamicKey = false;
        for (let i = 0; i < propsExpression.properties.length; i++) {
          const key = propsExpression.properties[i].key;
          if (isStaticExp(key)) {
            if (key.content === "class") {
              classKeyIndex = i;
            } else if (key.content === "style") {
              styleKeyIndex = i;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }
        const classProp = propsExpression.properties[classKeyIndex];
        const styleProp = propsExpression.properties[styleKeyIndex];
        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
          }
          if (styleProp && (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || styleProp.value.type === 17)) {
            styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
          }
        } else {
          propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
        }
        break;
      case 14:
        break;
      default:
        propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [
          createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
            propsExpression
          ])
        ]);
        break;
    }
  }
  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames,
    shouldUseBlock
  };
}
function dedupeProperties(properties) {
  const knownProps = /* @__PURE__ */ new Map();
  const deduped = [];
  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.key.type === 8 || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }
    const name = prop.key.content;
    const existing = knownProps.get(name);
    if (existing) {
      if (name === "style" || name === "class" || isOn(name)) {
        mergeAsArray(existing, prop);
      }
    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }
  return deduped;
}
function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}
function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);
  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
  }
  const { loc } = dir;
  if (dir.exp)
    dirArgs.push(dir.exp);
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }
    dirArgs.push(dir.arg);
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(`void 0`);
    }
    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map((modifier) => createObjectProperty(modifier, trueExpression)), loc));
  }
  return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;
  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1)
      propsNamesString += ", ";
  }
  return propsNamesString + `]`;
}
function isComponentTag(tag) {
  return tag === "component" || tag === "Component";
}
function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = void 0;
  const nonNameProps = [];
  for (let i = 0; i < node.props.length; i++) {
    const p2 = node.props[i];
    if (p2.type === 6) {
      if (p2.value) {
        if (p2.name === "name") {
          slotName = JSON.stringify(p2.value.content);
        } else {
          p2.name = camelize2(p2.name);
          nonNameProps.push(p2);
        }
      }
    } else {
      if (p2.name === "bind" && isStaticArgOf(p2.arg, "name")) {
        if (p2.exp)
          slotName = p2.exp;
      } else {
        if (p2.name === "bind" && p2.arg && isStaticExp(p2.arg)) {
          p2.arg.content = camelize2(p2.arg.content);
        }
        nonNameProps.push(p2);
      }
    }
  }
  if (nonNameProps.length > 0) {
    const { props, directives } = buildProps(node, context, nonNameProps, false, false);
    slotProps = props;
    if (directives.length) {
      context.onError(createCompilerError(36, directives[0].loc));
    }
  }
  return {
    slotName,
    slotProps
  };
}
function createTransformProps(props = []) {
  return { props };
}
function rewriteFilter(node, context) {
  if (node.type === 4) {
    parseFilter(node, context);
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child !== "object")
        continue;
      if (child.type === 4) {
        parseFilter(child, context);
      } else if (child.type === 8) {
        rewriteFilter(node, context);
      } else if (child.type === 5) {
        rewriteFilter(child.content, context);
      }
    }
  }
}
function parseFilter(node, context) {
  const exp = node.content;
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c, prev, i, expression, filters = [];
  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 39 && prev !== 92)
        inSingle = false;
    } else if (inDouble) {
      if (c === 34 && prev !== 92)
        inDouble = false;
    } else if (inTemplateString) {
      if (c === 96 && prev !== 92)
        inTemplateString = false;
    } else if (inRegex) {
      if (c === 47 && prev !== 92)
        inRegex = false;
    } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
      if (expression === void 0) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 34:
          inDouble = true;
          break;
        case 39:
          inSingle = true;
          break;
        case 96:
          inTemplateString = true;
          break;
        case 40:
          paren++;
          break;
        case 41:
          paren--;
          break;
        case 91:
          square++;
          break;
        case 93:
          square--;
          break;
        case 123:
          curly++;
          break;
        case 125:
          curly--;
          break;
      }
      if (c === 47) {
        let j = i - 1;
        let p2;
        for (; j >= 0; j--) {
          p2 = exp.charAt(j);
          if (p2 !== " ")
            break;
        }
        if (!p2 || !validDivisionCharRE.test(p2)) {
          inRegex = true;
        }
      }
    }
  }
  if (expression === void 0) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }
  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }
  if (filters.length) {
    process.env.NODE_ENV !== "production" && warnDeprecation("COMPILER_FILTER", context, node.loc);
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }
    node.content = expression;
  }
}
function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  const i = filter.indexOf("(");
  if (i < 0) {
    context.filters.add(filter);
    return `${toValidAssetId(filter, "filter")}(${exp})`;
  } else {
    const name = filter.slice(0, i);
    const args = filter.slice(i + 1);
    context.filters.add(name);
    return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
  }
}
function getBaseTransformPreset(prefixIdentifiers) {
  return [
    [
      transformOnce,
      transformIf,
      transformMemo,
      transformFor,
      ...[transformFilter],
      ...process.env.NODE_ENV !== "production" ? [transformExpression] : [],
      transformSlotOutlet,
      transformElement,
      trackSlotScopes,
      transformText
    ],
    {
      on: transformOn,
      bind: transformBind,
      model: transformModel
    }
  ];
}
function baseCompile(template, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === "module";
  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(46));
    } else if (isModuleMode) {
      onError(createCompilerError(47));
    }
  }
  const prefixIdentifiers = false;
  if (options.cacheHandlers) {
    onError(createCompilerError(48));
  }
  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(49));
  }
  const ast = isString(template) ? baseParse(template, options) : template;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(ast, extend({}, options, {
    prefixIdentifiers,
    nodeTransforms: [
      ...nodeTransforms,
      ...options.nodeTransforms || []
    ],
    directiveTransforms: extend(
      {},
      directiveTransforms,
      options.directiveTransforms || {}
    )
  }));
  return generate(ast, extend({}, options, {
    prefixIdentifiers
  }));
}
var errorMessages, FRAGMENT, TELEPORT, SUSPENSE, KEEP_ALIVE, BASE_TRANSITION, OPEN_BLOCK, CREATE_BLOCK, CREATE_ELEMENT_BLOCK, CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC, RESOLVE_COMPONENT, RESOLVE_DYNAMIC_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_FILTER, WITH_DIRECTIVES, RENDER_LIST, RENDER_SLOT, CREATE_SLOTS, TO_DISPLAY_STRING, MERGE_PROPS, NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS, TO_HANDLERS, CAMELIZE, CAPITALIZE, TO_HANDLER_KEY, SET_BLOCK_TRACKING, PUSH_SCOPE_ID, POP_SCOPE_ID, WITH_CTX, UNREF, IS_REF, WITH_MEMO, IS_MEMO_SAME, helperNameMap, locStub, isStaticExp, isBuiltInType, nonIdentifierRE, isSimpleIdentifier, validFirstIdentCharRE, validIdentCharRE, whitespaceRE, isMemberExpressionBrowser, isMemberExpressionNode, isMemberExpression, propsHelperSet, deprecationData, decodeRE, decodeMap, defaultParserOptions, isSpecialTemplateDirective, allowHoistedHelperSet, PURE_ANNOTATION, aliasHelper, isFunctionType, isStaticProperty, isStaticPropertyKey, prohibitedKeywordRE, stripStringRE, transformExpression, transformIf, transformFor, forAliasRE, forIteratorRE, stripParensRE, defaultFallback, trackSlotScopes, trackVForSlotScopes, buildClientSlotFn, directiveImportMap, transformElement, cacheStringFunction2, camelizeRE2, camelize2, transformSlotOutlet, fnExpRE, transformOn, transformBind, injectPrefix, transformText, seen, transformOnce, transformModel, validDivisionCharRE, transformFilter, seen$1, transformMemo, noopDirectiveTransform;
var init_compiler_core_esm_bundler = __esm({
  "node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js"() {
    init_shared_esm_bundler();
    init_shared_esm_bundler();
    errorMessages = {
      [0]: "Illegal comment.",
      [1]: "CDATA section is allowed only in XML context.",
      [2]: "Duplicate attribute.",
      [3]: "End tag cannot have attributes.",
      [4]: "Illegal '/' in tags.",
      [5]: "Unexpected EOF in tag.",
      [6]: "Unexpected EOF in CDATA section.",
      [7]: "Unexpected EOF in comment.",
      [8]: "Unexpected EOF in script.",
      [9]: "Unexpected EOF in tag.",
      [10]: "Incorrectly closed comment.",
      [11]: "Incorrectly opened comment.",
      [12]: "Illegal tag name. Use '&lt;' to print '<'.",
      [13]: "Attribute value was expected.",
      [14]: "End tag name was expected.",
      [15]: "Whitespace was expected.",
      [16]: "Unexpected '<!--' in comment.",
      [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
      [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
      [19]: "Attribute name cannot start with '='.",
      [21]: "'<?' is allowed only in XML context.",
      [20]: `Unexpected null character.`,
      [22]: "Illegal '/' in tags.",
      [23]: "Invalid end tag.",
      [24]: "Element is missing end tag.",
      [25]: "Interpolation end sign was not found.",
      [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
      [26]: "Legal directive name was expected.",
      [28]: `v-if/v-else-if is missing expression.`,
      [29]: `v-if/else branches must use unique keys.`,
      [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
      [31]: `v-for is missing expression.`,
      [32]: `v-for has invalid expression.`,
      [33]: `<template v-for> key should be placed on the <template> tag.`,
      [34]: `v-bind is missing expression.`,
      [35]: `v-on is missing expression.`,
      [36]: `Unexpected custom directive on <slot> outlet.`,
      [37]: `Mixed v-slot usage on both the component and nested <template>.When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
      [38]: `Duplicate slot names found. `,
      [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
      [40]: `v-slot can only be used on components or <template> tags.`,
      [41]: `v-model is missing expression.`,
      [42]: `v-model value must be a valid JavaScript member expression.`,
      [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
      [44]: `Error parsing JavaScript expression: `,
      [45]: `<KeepAlive> expects exactly one child component.`,
      [46]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
      [47]: `ES module mode is not supported in this build of compiler.`,
      [48]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
      [49]: `"scopeId" option is only supported in module mode.`,
      [50]: ``
    };
    FRAGMENT = Symbol(process.env.NODE_ENV !== "production" ? `Fragment` : ``);
    TELEPORT = Symbol(process.env.NODE_ENV !== "production" ? `Teleport` : ``);
    SUSPENSE = Symbol(process.env.NODE_ENV !== "production" ? `Suspense` : ``);
    KEEP_ALIVE = Symbol(process.env.NODE_ENV !== "production" ? `KeepAlive` : ``);
    BASE_TRANSITION = Symbol(process.env.NODE_ENV !== "production" ? `BaseTransition` : ``);
    OPEN_BLOCK = Symbol(process.env.NODE_ENV !== "production" ? `openBlock` : ``);
    CREATE_BLOCK = Symbol(process.env.NODE_ENV !== "production" ? `createBlock` : ``);
    CREATE_ELEMENT_BLOCK = Symbol(process.env.NODE_ENV !== "production" ? `createElementBlock` : ``);
    CREATE_VNODE = Symbol(process.env.NODE_ENV !== "production" ? `createVNode` : ``);
    CREATE_ELEMENT_VNODE = Symbol(process.env.NODE_ENV !== "production" ? `createElementVNode` : ``);
    CREATE_COMMENT = Symbol(process.env.NODE_ENV !== "production" ? `createCommentVNode` : ``);
    CREATE_TEXT = Symbol(process.env.NODE_ENV !== "production" ? `createTextVNode` : ``);
    CREATE_STATIC = Symbol(process.env.NODE_ENV !== "production" ? `createStaticVNode` : ``);
    RESOLVE_COMPONENT = Symbol(process.env.NODE_ENV !== "production" ? `resolveComponent` : ``);
    RESOLVE_DYNAMIC_COMPONENT = Symbol(process.env.NODE_ENV !== "production" ? `resolveDynamicComponent` : ``);
    RESOLVE_DIRECTIVE = Symbol(process.env.NODE_ENV !== "production" ? `resolveDirective` : ``);
    RESOLVE_FILTER = Symbol(process.env.NODE_ENV !== "production" ? `resolveFilter` : ``);
    WITH_DIRECTIVES = Symbol(process.env.NODE_ENV !== "production" ? `withDirectives` : ``);
    RENDER_LIST = Symbol(process.env.NODE_ENV !== "production" ? `renderList` : ``);
    RENDER_SLOT = Symbol(process.env.NODE_ENV !== "production" ? `renderSlot` : ``);
    CREATE_SLOTS = Symbol(process.env.NODE_ENV !== "production" ? `createSlots` : ``);
    TO_DISPLAY_STRING = Symbol(process.env.NODE_ENV !== "production" ? `toDisplayString` : ``);
    MERGE_PROPS = Symbol(process.env.NODE_ENV !== "production" ? `mergeProps` : ``);
    NORMALIZE_CLASS = Symbol(process.env.NODE_ENV !== "production" ? `normalizeClass` : ``);
    NORMALIZE_STYLE = Symbol(process.env.NODE_ENV !== "production" ? `normalizeStyle` : ``);
    NORMALIZE_PROPS = Symbol(process.env.NODE_ENV !== "production" ? `normalizeProps` : ``);
    GUARD_REACTIVE_PROPS = Symbol(process.env.NODE_ENV !== "production" ? `guardReactiveProps` : ``);
    TO_HANDLERS = Symbol(process.env.NODE_ENV !== "production" ? `toHandlers` : ``);
    CAMELIZE = Symbol(process.env.NODE_ENV !== "production" ? `camelize` : ``);
    CAPITALIZE = Symbol(process.env.NODE_ENV !== "production" ? `capitalize` : ``);
    TO_HANDLER_KEY = Symbol(process.env.NODE_ENV !== "production" ? `toHandlerKey` : ``);
    SET_BLOCK_TRACKING = Symbol(process.env.NODE_ENV !== "production" ? `setBlockTracking` : ``);
    PUSH_SCOPE_ID = Symbol(process.env.NODE_ENV !== "production" ? `pushScopeId` : ``);
    POP_SCOPE_ID = Symbol(process.env.NODE_ENV !== "production" ? `popScopeId` : ``);
    WITH_CTX = Symbol(process.env.NODE_ENV !== "production" ? `withCtx` : ``);
    UNREF = Symbol(process.env.NODE_ENV !== "production" ? `unref` : ``);
    IS_REF = Symbol(process.env.NODE_ENV !== "production" ? `isRef` : ``);
    WITH_MEMO = Symbol(process.env.NODE_ENV !== "production" ? `withMemo` : ``);
    IS_MEMO_SAME = Symbol(process.env.NODE_ENV !== "production" ? `isMemoSame` : ``);
    helperNameMap = {
      [FRAGMENT]: `Fragment`,
      [TELEPORT]: `Teleport`,
      [SUSPENSE]: `Suspense`,
      [KEEP_ALIVE]: `KeepAlive`,
      [BASE_TRANSITION]: `BaseTransition`,
      [OPEN_BLOCK]: `openBlock`,
      [CREATE_BLOCK]: `createBlock`,
      [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
      [CREATE_VNODE]: `createVNode`,
      [CREATE_ELEMENT_VNODE]: `createElementVNode`,
      [CREATE_COMMENT]: `createCommentVNode`,
      [CREATE_TEXT]: `createTextVNode`,
      [CREATE_STATIC]: `createStaticVNode`,
      [RESOLVE_COMPONENT]: `resolveComponent`,
      [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
      [RESOLVE_DIRECTIVE]: `resolveDirective`,
      [RESOLVE_FILTER]: `resolveFilter`,
      [WITH_DIRECTIVES]: `withDirectives`,
      [RENDER_LIST]: `renderList`,
      [RENDER_SLOT]: `renderSlot`,
      [CREATE_SLOTS]: `createSlots`,
      [TO_DISPLAY_STRING]: `toDisplayString`,
      [MERGE_PROPS]: `mergeProps`,
      [NORMALIZE_CLASS]: `normalizeClass`,
      [NORMALIZE_STYLE]: `normalizeStyle`,
      [NORMALIZE_PROPS]: `normalizeProps`,
      [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
      [TO_HANDLERS]: `toHandlers`,
      [CAMELIZE]: `camelize`,
      [CAPITALIZE]: `capitalize`,
      [TO_HANDLER_KEY]: `toHandlerKey`,
      [SET_BLOCK_TRACKING]: `setBlockTracking`,
      [PUSH_SCOPE_ID]: `pushScopeId`,
      [POP_SCOPE_ID]: `popScopeId`,
      [WITH_CTX]: `withCtx`,
      [UNREF]: `unref`,
      [IS_REF]: `isRef`,
      [WITH_MEMO]: `withMemo`,
      [IS_MEMO_SAME]: `isMemoSame`
    };
    locStub = {
      source: "",
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 1, column: 1, offset: 0 }
    };
    isStaticExp = (p2) => p2.type === 4 && p2.isStatic;
    isBuiltInType = (tag, expected) => tag === expected || tag === hyphenate(expected);
    nonIdentifierRE = /^\d|[^\$\w]/;
    isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
    validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
    validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
    whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
    isMemberExpressionBrowser = (path) => {
      path = path.trim().replace(whitespaceRE, (s) => s.trim());
      let state = 0;
      let stateStack = [];
      let currentOpenBracketCount = 0;
      let currentOpenParensCount = 0;
      let currentStringType = null;
      for (let i = 0; i < path.length; i++) {
        const char = path.charAt(i);
        switch (state) {
          case 0:
            if (char === "[") {
              stateStack.push(state);
              state = 1;
              currentOpenBracketCount++;
            } else if (char === "(") {
              stateStack.push(state);
              state = 2;
              currentOpenParensCount++;
            } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
              return false;
            }
            break;
          case 1:
            if (char === `'` || char === `"` || char === "`") {
              stateStack.push(state);
              state = 3;
              currentStringType = char;
            } else if (char === `[`) {
              currentOpenBracketCount++;
            } else if (char === `]`) {
              if (!--currentOpenBracketCount) {
                state = stateStack.pop();
              }
            }
            break;
          case 2:
            if (char === `'` || char === `"` || char === "`") {
              stateStack.push(state);
              state = 3;
              currentStringType = char;
            } else if (char === `(`) {
              currentOpenParensCount++;
            } else if (char === `)`) {
              if (i === path.length - 1) {
                return false;
              }
              if (!--currentOpenParensCount) {
                state = stateStack.pop();
              }
            }
            break;
          case 3:
            if (char === currentStringType) {
              state = stateStack.pop();
              currentStringType = null;
            }
            break;
        }
      }
      return !currentOpenBracketCount && !currentOpenParensCount;
    };
    isMemberExpressionNode = NOOP;
    isMemberExpression = isMemberExpressionBrowser;
    propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
    deprecationData = {
      ["COMPILER_IS_ON_ELEMENT"]: {
        message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
        link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
      },
      ["COMPILER_V_BIND_SYNC"]: {
        message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
      },
      ["COMPILER_V_BIND_PROP"]: {
        message: `.prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate.`
      },
      ["COMPILER_V_BIND_OBJECT_ORDER"]: {
        message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
      },
      ["COMPILER_V_ON_NATIVE"]: {
        message: `.native modifier for v-on has been removed as is no longer necessary.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
      },
      ["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
        message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
      },
      ["COMPILER_NATIVE_TEMPLATE"]: {
        message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.`
      },
      ["COMPILER_INLINE_TEMPLATE"]: {
        message: `"inline-template" has been removed in Vue 3.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
      },
      ["COMPILER_FILTER"]: {
        message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
      }
    };
    decodeRE = /&(gt|lt|amp|apos|quot);/g;
    decodeMap = {
      gt: ">",
      lt: "<",
      amp: "&",
      apos: "'",
      quot: '"'
    };
    defaultParserOptions = {
      delimiters: [`{{`, `}}`],
      getNamespace: () => 0,
      getTextMode: () => 0,
      isVoidTag: NO,
      isPreTag: NO,
      isCustomElement: NO,
      decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
      onError: defaultOnError,
      onWarn: defaultOnWarn,
      comments: process.env.NODE_ENV !== "production"
    };
    isSpecialTemplateDirective = /* @__PURE__ */ makeMap(`if,else,else-if,for,slot`);
    allowHoistedHelperSet = /* @__PURE__ */ new Set([
      NORMALIZE_CLASS,
      NORMALIZE_STYLE,
      NORMALIZE_PROPS,
      GUARD_REACTIVE_PROPS
    ]);
    PURE_ANNOTATION = `/*#__PURE__*/`;
    aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
    isFunctionType = (node) => {
      return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
    };
    isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
    isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
    prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b");
    stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
    transformExpression = (node, context) => {
      if (node.type === 5) {
        node.content = processExpression(node.content, context);
      } else if (node.type === 1) {
        for (let i = 0; i < node.props.length; i++) {
          const dir = node.props[i];
          if (dir.type === 7 && dir.name !== "for") {
            const exp = dir.exp;
            const arg = dir.arg;
            if (exp && exp.type === 4 && !(dir.name === "on" && arg)) {
              dir.exp = processExpression(
                exp,
                context,
                dir.name === "slot"
              );
            }
            if (arg && arg.type === 4 && !arg.isStatic) {
              dir.arg = processExpression(arg, context);
            }
          }
        }
      }
    };
    transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
      return processIf(node, dir, context, (ifNode, branch, isRoot) => {
        const siblings = context.parent.children;
        let i = siblings.indexOf(ifNode);
        let key = 0;
        while (i-- >= 0) {
          const sibling = siblings[i];
          if (sibling && sibling.type === 9) {
            key += sibling.branches.length;
          }
        }
        return () => {
          if (isRoot) {
            ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
          } else {
            const parentCondition = getParentCondition(ifNode.codegenNode);
            parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
          }
        };
      });
    });
    transformFor = createStructuralDirectiveTransform("for", (node, dir, context) => {
      const { helper, removeHelper } = context;
      return processFor(node, dir, context, (forNode) => {
        const renderExp = createCallExpression(helper(RENDER_LIST), [
          forNode.source
        ]);
        const isTemplate = isTemplateNode(node);
        const memo = findDir(node, "memo");
        const keyProp = findProp(node, `key`);
        const keyExp = keyProp && (keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
        const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
        const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
        const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
        forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag + (process.env.NODE_ENV !== "production" ? ` /* ${PatchFlagNames[fragmentFlag]} */` : ``), void 0, void 0, true, !isStableFragment, false, node.loc);
        return () => {
          let childBlock;
          const { children } = forNode;
          if ((process.env.NODE_ENV !== "production" || false) && isTemplate) {
            node.children.some((c) => {
              if (c.type === 1) {
                const key = findProp(c, "key");
                if (key) {
                  context.onError(createCompilerError(33, key.loc));
                  return true;
                }
              }
            });
          }
          const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
          const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
          if (slotOutlet) {
            childBlock = slotOutlet.codegenNode;
            if (isTemplate && keyProperty) {
              injectProp(childBlock, keyProperty, context);
            }
          } else if (needFragmentWrapper) {
            childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : void 0, node.children, 64 + (process.env.NODE_ENV !== "production" ? ` /* ${PatchFlagNames[64]} */` : ``), void 0, void 0, true, void 0, false);
          } else {
            childBlock = children[0].codegenNode;
            if (isTemplate && keyProperty) {
              injectProp(childBlock, keyProperty, context);
            }
            if (childBlock.isBlock !== !isStableFragment) {
              if (childBlock.isBlock) {
                removeHelper(OPEN_BLOCK);
                removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
              } else {
                removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
              }
            }
            childBlock.isBlock = !isStableFragment;
            if (childBlock.isBlock) {
              helper(OPEN_BLOCK);
              helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
            } else {
              helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
            }
          }
          if (memo) {
            const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [
              createSimpleExpression(`_cached`)
            ]));
            loop.body = createBlockStatement([
              createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
              createCompoundExpression([
                `if (_cached`,
                ...keyExp ? [` && _cached.key === `, keyExp] : [],
                ` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`
              ]),
              createCompoundExpression([`const _item = `, childBlock]),
              createSimpleExpression(`_item.memo = _memo`),
              createSimpleExpression(`return _item`)
            ]);
            renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached++)));
          } else {
            renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true));
          }
        };
      });
    });
    forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    stripParensRE = /^\(|\)$/g;
    defaultFallback = createSimpleExpression(`undefined`, false);
    trackSlotScopes = (node, context) => {
      if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
        const vSlot = findDir(node, "slot");
        if (vSlot) {
          vSlot.exp;
          context.scopes.vSlot++;
          return () => {
            context.scopes.vSlot--;
          };
        }
      }
    };
    trackVForSlotScopes = (node, context) => {
      let vFor;
      if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
        const result = vFor.parseResult = parseForExpression(vFor.exp, context);
        if (result) {
          const { value, key, index } = result;
          const { addIdentifiers, removeIdentifiers } = context;
          value && addIdentifiers(value);
          key && addIdentifiers(key);
          index && addIdentifiers(index);
          return () => {
            value && removeIdentifiers(value);
            key && removeIdentifiers(key);
            index && removeIdentifiers(index);
          };
        }
      }
    };
    buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
    directiveImportMap = /* @__PURE__ */ new WeakMap();
    transformElement = (node, context) => {
      return function postTransformElement() {
        node = context.currentNode;
        if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
          return;
        }
        const { tag, props } = node;
        const isComponent2 = node.tagType === 1;
        let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
        const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
        let vnodeProps;
        let vnodeChildren;
        let vnodePatchFlag;
        let patchFlag = 0;
        let vnodeDynamicProps;
        let dynamicPropNames;
        let vnodeDirectives;
        let shouldUseBlock = isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && (tag === "svg" || tag === "foreignObject");
        if (props.length > 0) {
          const propsBuildResult = buildProps(node, context, void 0, isComponent2, isDynamicComponent);
          vnodeProps = propsBuildResult.props;
          patchFlag = propsBuildResult.patchFlag;
          dynamicPropNames = propsBuildResult.dynamicPropNames;
          const directives = propsBuildResult.directives;
          vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir) => buildDirectiveArgs(dir, context))) : void 0;
          if (propsBuildResult.shouldUseBlock) {
            shouldUseBlock = true;
          }
        }
        if (node.children.length > 0) {
          if (vnodeTag === KEEP_ALIVE) {
            shouldUseBlock = true;
            patchFlag |= 1024;
            if (process.env.NODE_ENV !== "production" && node.children.length > 1) {
              context.onError(createCompilerError(45, {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
              }));
            }
          }
          const shouldBuildAsSlots = isComponent2 && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE;
          if (shouldBuildAsSlots) {
            const { slots, hasDynamicSlots } = buildSlots(node, context);
            vnodeChildren = slots;
            if (hasDynamicSlots) {
              patchFlag |= 1024;
            }
          } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
            const child = node.children[0];
            const type = child.type;
            const hasDynamicTextChild = type === 5 || type === 8;
            if (hasDynamicTextChild && getConstantType(child, context) === 0) {
              patchFlag |= 1;
            }
            if (hasDynamicTextChild || type === 2) {
              vnodeChildren = child;
            } else {
              vnodeChildren = node.children;
            }
          } else {
            vnodeChildren = node.children;
          }
        }
        if (patchFlag !== 0) {
          if (process.env.NODE_ENV !== "production") {
            if (patchFlag < 0) {
              vnodePatchFlag = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`;
            } else {
              const flagNames = Object.keys(PatchFlagNames).map(Number).filter((n) => n > 0 && patchFlag & n).map((n) => PatchFlagNames[n]).join(`, `);
              vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
            }
          } else {
            vnodePatchFlag = String(patchFlag);
          }
          if (dynamicPropNames && dynamicPropNames.length) {
            vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
          }
        }
        node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, isComponent2, node.loc);
      };
    };
    process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
    process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
    cacheStringFunction2 = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    camelizeRE2 = /-(\w)/g;
    camelize2 = cacheStringFunction2((str) => {
      return str.replace(camelizeRE2, (_, c) => c ? c.toUpperCase() : "");
    });
    transformSlotOutlet = (node, context) => {
      if (isSlotOutlet(node)) {
        const { children, loc } = node;
        const { slotName, slotProps } = processSlotOutlet(node, context);
        const slotArgs = [
          context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
          slotName,
          "{}",
          "undefined",
          "true"
        ];
        let expectedLen = 2;
        if (slotProps) {
          slotArgs[2] = slotProps;
          expectedLen = 3;
        }
        if (children.length) {
          slotArgs[3] = createFunctionExpression([], children, false, false, loc);
          expectedLen = 4;
        }
        if (context.scopeId && !context.slotted) {
          expectedLen = 5;
        }
        slotArgs.splice(expectedLen);
        node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
      }
    };
    fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
    transformOn = (dir, node, context, augmentor) => {
      const { loc, modifiers, arg } = dir;
      if (!dir.exp && !modifiers.length) {
        context.onError(createCompilerError(35, loc));
      }
      let eventName;
      if (arg.type === 4) {
        if (arg.isStatic) {
          let rawName = arg.content;
          if (rawName.startsWith("vue:")) {
            rawName = `vnode-${rawName.slice(4)}`;
          }
          const eventString = node.tagType === 1 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? toHandlerKey(camelize(rawName)) : `on:${rawName}`;
          eventName = createSimpleExpression(eventString, true, arg.loc);
        } else {
          eventName = createCompoundExpression([
            `${context.helperString(TO_HANDLER_KEY)}(`,
            arg,
            `)`
          ]);
        }
      } else {
        eventName = arg;
        eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
        eventName.children.push(`)`);
      }
      let exp = dir.exp;
      if (exp && !exp.content.trim()) {
        exp = void 0;
      }
      let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
      if (exp) {
        const isMemberExp = isMemberExpression(exp.content);
        const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
        const hasMultipleStatements = exp.content.includes(`;`);
        if (process.env.NODE_ENV !== "production" && true) {
          validateBrowserExpression(exp, context, false, hasMultipleStatements);
        }
        if (isInlineStatement || shouldCache && isMemberExp) {
          exp = createCompoundExpression([
            `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
            exp,
            hasMultipleStatements ? `}` : `)`
          ]);
        }
      }
      let ret = {
        props: [
          createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
        ]
      };
      if (augmentor) {
        ret = augmentor(ret);
      }
      if (shouldCache) {
        ret.props[0].value = context.cache(ret.props[0].value);
      }
      ret.props.forEach((p2) => p2.key.isHandlerKey = true);
      return ret;
    };
    transformBind = (dir, _node, context) => {
      const { exp, modifiers, loc } = dir;
      const arg = dir.arg;
      if (arg.type !== 4) {
        arg.children.unshift(`(`);
        arg.children.push(`) || ""`);
      } else if (!arg.isStatic) {
        arg.content = `${arg.content} || ""`;
      }
      if (modifiers.includes("camel")) {
        if (arg.type === 4) {
          if (arg.isStatic) {
            arg.content = camelize(arg.content);
          } else {
            arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
          }
        } else {
          arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
          arg.children.push(`)`);
        }
      }
      if (!context.inSSR) {
        if (modifiers.includes("prop")) {
          injectPrefix(arg, ".");
        }
        if (modifiers.includes("attr")) {
          injectPrefix(arg, "^");
        }
      }
      if (!exp || exp.type === 4 && !exp.content.trim()) {
        context.onError(createCompilerError(34, loc));
        return {
          props: [createObjectProperty(arg, createSimpleExpression("", true, loc))]
        };
      }
      return {
        props: [createObjectProperty(arg, exp)]
      };
    };
    injectPrefix = (arg, prefix) => {
      if (arg.type === 4) {
        if (arg.isStatic) {
          arg.content = prefix + arg.content;
        } else {
          arg.content = `\`${prefix}\${${arg.content}}\``;
        }
      } else {
        arg.children.unshift(`'${prefix}' + (`);
        arg.children.push(`)`);
      }
    };
    transformText = (node, context) => {
      if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
        return () => {
          const children = node.children;
          let currentContainer = void 0;
          let hasText = false;
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (isText(child)) {
              hasText = true;
              for (let j = i + 1; j < children.length; j++) {
                const next = children[j];
                if (isText(next)) {
                  if (!currentContainer) {
                    currentContainer = children[i] = createCompoundExpression([child], child.loc);
                  }
                  currentContainer.children.push(` + `, next);
                  children.splice(j, 1);
                  j--;
                } else {
                  currentContainer = void 0;
                  break;
                }
              }
            }
          }
          if (!hasText || children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && !node.props.find((p2) => p2.type === 7 && !context.directiveTransforms[p2.name]) && !(node.tag === "template"))) {
            return;
          }
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (isText(child) || child.type === 8) {
              const callArgs = [];
              if (child.type !== 2 || child.content !== " ") {
                callArgs.push(child);
              }
              if (!context.ssr && getConstantType(child, context) === 0) {
                callArgs.push(1 + (process.env.NODE_ENV !== "production" ? ` /* ${PatchFlagNames[1]} */` : ``));
              }
              children[i] = {
                type: 12,
                content: child,
                loc: child.loc,
                codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
              };
            }
          }
        };
      }
    };
    seen = /* @__PURE__ */ new WeakSet();
    transformOnce = (node, context) => {
      if (node.type === 1 && findDir(node, "once", true)) {
        if (seen.has(node) || context.inVOnce) {
          return;
        }
        seen.add(node);
        context.inVOnce = true;
        context.helper(SET_BLOCK_TRACKING);
        return () => {
          context.inVOnce = false;
          const cur = context.currentNode;
          if (cur.codegenNode) {
            cur.codegenNode = context.cache(cur.codegenNode, true);
          }
        };
      }
    };
    transformModel = (dir, node, context) => {
      const { exp, arg } = dir;
      if (!exp) {
        context.onError(createCompilerError(41, dir.loc));
        return createTransformProps();
      }
      const rawExp = exp.loc.source;
      const expString = exp.type === 4 ? exp.content : rawExp;
      context.bindingMetadata[rawExp];
      const maybeRef = false;
      if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
        context.onError(createCompilerError(42, exp.loc));
        return createTransformProps();
      }
      const propName = arg ? arg : createSimpleExpression("modelValue", true);
      const eventName = arg ? isStaticExp(arg) ? `onUpdate:${arg.content}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
      let assignmentExp;
      const eventArg = context.isTS ? `($event: any)` : `$event`;
      {
        assignmentExp = createCompoundExpression([
          `${eventArg} => ((`,
          exp,
          `) = $event)`
        ]);
      }
      const props = [
        createObjectProperty(propName, dir.exp),
        createObjectProperty(eventName, assignmentExp)
      ];
      if (dir.modifiers.length && node.tagType === 1) {
        const modifiers = dir.modifiers.map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
        const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
        props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
      }
      return createTransformProps(props);
    };
    validDivisionCharRE = /[\w).+\-_$\]]/;
    transformFilter = (node, context) => {
      if (!isCompatEnabled("COMPILER_FILTER", context)) {
        return;
      }
      if (node.type === 5) {
        rewriteFilter(node.content, context);
      }
      if (node.type === 1) {
        node.props.forEach((prop) => {
          if (prop.type === 7 && prop.name !== "for" && prop.exp) {
            rewriteFilter(prop.exp, context);
          }
        });
      }
    };
    seen$1 = /* @__PURE__ */ new WeakSet();
    transformMemo = (node, context) => {
      if (node.type === 1) {
        const dir = findDir(node, "memo");
        if (!dir || seen$1.has(node)) {
          return;
        }
        seen$1.add(node);
        return () => {
          const codegenNode = node.codegenNode || context.currentNode.codegenNode;
          if (codegenNode && codegenNode.type === 13) {
            if (node.tagType !== 1) {
              makeBlock(codegenNode, context);
            }
            node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
              dir.exp,
              createFunctionExpression(void 0, codegenNode),
              `_cache`,
              String(context.cached++)
            ]);
          }
        };
      }
    };
    noopDirectiveTransform = () => ({ props: [] });
  }
});

// node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js
var compiler_dom_esm_bundler_exports = {};
__export(compiler_dom_esm_bundler_exports, {
  BASE_TRANSITION: () => BASE_TRANSITION,
  CAMELIZE: () => CAMELIZE,
  CAPITALIZE: () => CAPITALIZE,
  CREATE_BLOCK: () => CREATE_BLOCK,
  CREATE_COMMENT: () => CREATE_COMMENT,
  CREATE_ELEMENT_BLOCK: () => CREATE_ELEMENT_BLOCK,
  CREATE_ELEMENT_VNODE: () => CREATE_ELEMENT_VNODE,
  CREATE_SLOTS: () => CREATE_SLOTS,
  CREATE_STATIC: () => CREATE_STATIC,
  CREATE_TEXT: () => CREATE_TEXT,
  CREATE_VNODE: () => CREATE_VNODE,
  DOMDirectiveTransforms: () => DOMDirectiveTransforms,
  DOMNodeTransforms: () => DOMNodeTransforms,
  FRAGMENT: () => FRAGMENT,
  GUARD_REACTIVE_PROPS: () => GUARD_REACTIVE_PROPS,
  IS_MEMO_SAME: () => IS_MEMO_SAME,
  IS_REF: () => IS_REF,
  KEEP_ALIVE: () => KEEP_ALIVE,
  MERGE_PROPS: () => MERGE_PROPS,
  NORMALIZE_CLASS: () => NORMALIZE_CLASS,
  NORMALIZE_PROPS: () => NORMALIZE_PROPS,
  NORMALIZE_STYLE: () => NORMALIZE_STYLE,
  OPEN_BLOCK: () => OPEN_BLOCK,
  POP_SCOPE_ID: () => POP_SCOPE_ID,
  PUSH_SCOPE_ID: () => PUSH_SCOPE_ID,
  RENDER_LIST: () => RENDER_LIST,
  RENDER_SLOT: () => RENDER_SLOT,
  RESOLVE_COMPONENT: () => RESOLVE_COMPONENT,
  RESOLVE_DIRECTIVE: () => RESOLVE_DIRECTIVE,
  RESOLVE_DYNAMIC_COMPONENT: () => RESOLVE_DYNAMIC_COMPONENT,
  RESOLVE_FILTER: () => RESOLVE_FILTER,
  SET_BLOCK_TRACKING: () => SET_BLOCK_TRACKING,
  SUSPENSE: () => SUSPENSE,
  TELEPORT: () => TELEPORT,
  TO_DISPLAY_STRING: () => TO_DISPLAY_STRING,
  TO_HANDLERS: () => TO_HANDLERS,
  TO_HANDLER_KEY: () => TO_HANDLER_KEY,
  TRANSITION: () => TRANSITION,
  TRANSITION_GROUP: () => TRANSITION_GROUP,
  UNREF: () => UNREF,
  V_MODEL_CHECKBOX: () => V_MODEL_CHECKBOX,
  V_MODEL_DYNAMIC: () => V_MODEL_DYNAMIC,
  V_MODEL_RADIO: () => V_MODEL_RADIO,
  V_MODEL_SELECT: () => V_MODEL_SELECT,
  V_MODEL_TEXT: () => V_MODEL_TEXT,
  V_ON_WITH_KEYS: () => V_ON_WITH_KEYS,
  V_ON_WITH_MODIFIERS: () => V_ON_WITH_MODIFIERS,
  V_SHOW: () => V_SHOW,
  WITH_CTX: () => WITH_CTX,
  WITH_DIRECTIVES: () => WITH_DIRECTIVES,
  WITH_MEMO: () => WITH_MEMO,
  advancePositionWithClone: () => advancePositionWithClone,
  advancePositionWithMutation: () => advancePositionWithMutation,
  assert: () => assert,
  baseCompile: () => baseCompile,
  baseParse: () => baseParse,
  buildDirectiveArgs: () => buildDirectiveArgs,
  buildProps: () => buildProps,
  buildSlots: () => buildSlots,
  checkCompatEnabled: () => checkCompatEnabled,
  compile: () => compile,
  createArrayExpression: () => createArrayExpression,
  createAssignmentExpression: () => createAssignmentExpression,
  createBlockStatement: () => createBlockStatement,
  createCacheExpression: () => createCacheExpression,
  createCallExpression: () => createCallExpression,
  createCompilerError: () => createCompilerError,
  createCompoundExpression: () => createCompoundExpression,
  createConditionalExpression: () => createConditionalExpression,
  createDOMCompilerError: () => createDOMCompilerError,
  createForLoopParams: () => createForLoopParams,
  createFunctionExpression: () => createFunctionExpression,
  createIfStatement: () => createIfStatement,
  createInterpolation: () => createInterpolation,
  createObjectExpression: () => createObjectExpression,
  createObjectProperty: () => createObjectProperty,
  createReturnStatement: () => createReturnStatement,
  createRoot: () => createRoot,
  createSequenceExpression: () => createSequenceExpression,
  createSimpleExpression: () => createSimpleExpression,
  createStructuralDirectiveTransform: () => createStructuralDirectiveTransform,
  createTemplateLiteral: () => createTemplateLiteral,
  createTransformContext: () => createTransformContext,
  createVNodeCall: () => createVNodeCall,
  extractIdentifiers: () => extractIdentifiers,
  findDir: () => findDir,
  findProp: () => findProp,
  generate: () => generate,
  generateCodeFrame: () => generateCodeFrame,
  getBaseTransformPreset: () => getBaseTransformPreset,
  getConstantType: () => getConstantType,
  getInnerRange: () => getInnerRange,
  getMemoedVNodeCall: () => getMemoedVNodeCall,
  getVNodeBlockHelper: () => getVNodeBlockHelper,
  getVNodeHelper: () => getVNodeHelper,
  hasDynamicKeyVBind: () => hasDynamicKeyVBind,
  hasScopeRef: () => hasScopeRef,
  helperNameMap: () => helperNameMap,
  injectProp: () => injectProp,
  isBuiltInType: () => isBuiltInType,
  isCoreComponent: () => isCoreComponent,
  isFunctionType: () => isFunctionType,
  isInDestructureAssignment: () => isInDestructureAssignment,
  isMemberExpression: () => isMemberExpression,
  isMemberExpressionBrowser: () => isMemberExpressionBrowser,
  isMemberExpressionNode: () => isMemberExpressionNode,
  isReferencedIdentifier: () => isReferencedIdentifier,
  isSimpleIdentifier: () => isSimpleIdentifier,
  isSlotOutlet: () => isSlotOutlet,
  isStaticArgOf: () => isStaticArgOf,
  isStaticExp: () => isStaticExp,
  isStaticProperty: () => isStaticProperty,
  isStaticPropertyKey: () => isStaticPropertyKey,
  isTemplateNode: () => isTemplateNode,
  isText: () => isText,
  isVSlot: () => isVSlot,
  locStub: () => locStub,
  makeBlock: () => makeBlock,
  noopDirectiveTransform: () => noopDirectiveTransform,
  parse: () => parse,
  parserOptions: () => parserOptions,
  processExpression: () => processExpression,
  processFor: () => processFor,
  processIf: () => processIf,
  processSlotOutlet: () => processSlotOutlet,
  registerRuntimeHelpers: () => registerRuntimeHelpers,
  resolveComponentType: () => resolveComponentType,
  toValidAssetId: () => toValidAssetId,
  trackSlotScopes: () => trackSlotScopes,
  trackVForSlotScopes: () => trackVForSlotScopes,
  transform: () => transform,
  transformBind: () => transformBind,
  transformElement: () => transformElement,
  transformExpression: () => transformExpression,
  transformModel: () => transformModel,
  transformOn: () => transformOn,
  transformStyle: () => transformStyle,
  traverseNode: () => traverseNode,
  walkBlockDeclarations: () => walkBlockDeclarations,
  walkFunctionParams: () => walkFunctionParams,
  walkIdentifiers: () => walkIdentifiers,
  warnDeprecation: () => warnDeprecation
});
function decodeHtmlBrowser(raw, asAttr = false) {
  if (!decoder) {
    decoder = document.createElement("div");
  }
  if (asAttr) {
    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
    return decoder.children[0].getAttribute("foo");
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}
function createDOMCompilerError(code, loc) {
  return createCompilerError(code, loc, process.env.NODE_ENV !== "production" || false ? DOMErrorMessages : void 0);
}
function hasMultipleChildren(node) {
  const children = node.children = node.children.filter((c) => c.type !== 3 && !(c.type === 2 && !c.content.trim()));
  const child = children[0];
  return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
}
function compile(template, options = {}) {
  return baseCompile(template, extend({}, parserOptions, options, {
    nodeTransforms: [
      ignoreSideEffectTags,
      ...DOMNodeTransforms,
      ...options.nodeTransforms || []
    ],
    directiveTransforms: extend({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
    transformHoist: null
  }));
}
function parse(template, options = {}) {
  return baseParse(template, extend({}, parserOptions, options));
}
var V_MODEL_RADIO, V_MODEL_CHECKBOX, V_MODEL_TEXT, V_MODEL_SELECT, V_MODEL_DYNAMIC, V_ON_WITH_MODIFIERS, V_ON_WITH_KEYS, V_SHOW, TRANSITION, TRANSITION_GROUP, decoder, isRawTextContainer, parserOptions, transformStyle, parseInlineCSS, DOMErrorMessages, transformVHtml, transformVText, transformModel2, isEventOptionModifier, isNonKeyModifier, maybeKeyModifier, isKeyboardEvent, resolveModifiers, transformClick, transformOn2, transformShow, transformTransition, ignoreSideEffectTags, DOMNodeTransforms, DOMDirectiveTransforms;
var init_compiler_dom_esm_bundler = __esm({
  "node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js"() {
    init_compiler_core_esm_bundler();
    init_compiler_core_esm_bundler();
    init_shared_esm_bundler();
    V_MODEL_RADIO = Symbol(process.env.NODE_ENV !== "production" ? `vModelRadio` : ``);
    V_MODEL_CHECKBOX = Symbol(process.env.NODE_ENV !== "production" ? `vModelCheckbox` : ``);
    V_MODEL_TEXT = Symbol(process.env.NODE_ENV !== "production" ? `vModelText` : ``);
    V_MODEL_SELECT = Symbol(process.env.NODE_ENV !== "production" ? `vModelSelect` : ``);
    V_MODEL_DYNAMIC = Symbol(process.env.NODE_ENV !== "production" ? `vModelDynamic` : ``);
    V_ON_WITH_MODIFIERS = Symbol(process.env.NODE_ENV !== "production" ? `vOnModifiersGuard` : ``);
    V_ON_WITH_KEYS = Symbol(process.env.NODE_ENV !== "production" ? `vOnKeysGuard` : ``);
    V_SHOW = Symbol(process.env.NODE_ENV !== "production" ? `vShow` : ``);
    TRANSITION = Symbol(process.env.NODE_ENV !== "production" ? `Transition` : ``);
    TRANSITION_GROUP = Symbol(process.env.NODE_ENV !== "production" ? `TransitionGroup` : ``);
    registerRuntimeHelpers({
      [V_MODEL_RADIO]: `vModelRadio`,
      [V_MODEL_CHECKBOX]: `vModelCheckbox`,
      [V_MODEL_TEXT]: `vModelText`,
      [V_MODEL_SELECT]: `vModelSelect`,
      [V_MODEL_DYNAMIC]: `vModelDynamic`,
      [V_ON_WITH_MODIFIERS]: `withModifiers`,
      [V_ON_WITH_KEYS]: `withKeys`,
      [V_SHOW]: `vShow`,
      [TRANSITION]: `Transition`,
      [TRANSITION_GROUP]: `TransitionGroup`
    });
    isRawTextContainer = /* @__PURE__ */ makeMap("style,iframe,script,noscript", true);
    parserOptions = {
      isVoidTag,
      isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag),
      isPreTag: (tag) => tag === "pre",
      decodeEntities: decodeHtmlBrowser,
      isBuiltInComponent: (tag) => {
        if (isBuiltInType(tag, `Transition`)) {
          return TRANSITION;
        } else if (isBuiltInType(tag, `TransitionGroup`)) {
          return TRANSITION_GROUP;
        }
      },
      getNamespace(tag, parent) {
        let ns = parent ? parent.ns : 0;
        if (parent && ns === 2) {
          if (parent.tag === "annotation-xml") {
            if (tag === "svg") {
              return 1;
            }
            if (parent.props.some((a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml"))) {
              ns = 0;
            }
          } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
            ns = 0;
          }
        } else if (parent && ns === 1) {
          if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
            ns = 0;
          }
        }
        if (ns === 0) {
          if (tag === "svg") {
            return 1;
          }
          if (tag === "math") {
            return 2;
          }
        }
        return ns;
      },
      getTextMode({ tag, ns }) {
        if (ns === 0) {
          if (tag === "textarea" || tag === "title") {
            return 1;
          }
          if (isRawTextContainer(tag)) {
            return 2;
          }
        }
        return 0;
      }
    };
    transformStyle = (node) => {
      if (node.type === 1) {
        node.props.forEach((p2, i) => {
          if (p2.type === 6 && p2.name === "style" && p2.value) {
            node.props[i] = {
              type: 7,
              name: `bind`,
              arg: createSimpleExpression(`style`, true, p2.loc),
              exp: parseInlineCSS(p2.value.content, p2.loc),
              modifiers: [],
              loc: p2.loc
            };
          }
        });
      }
    };
    parseInlineCSS = (cssText, loc) => {
      const normalized = parseStringStyle(cssText);
      return createSimpleExpression(JSON.stringify(normalized), false, loc, 3);
    };
    DOMErrorMessages = {
      [50]: `v-html is missing expression.`,
      [51]: `v-html will override element children.`,
      [52]: `v-text is missing expression.`,
      [53]: `v-text will override element children.`,
      [54]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
      [55]: `v-model argument is not supported on plain elements.`,
      [56]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
      [57]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
      [58]: `v-show is missing expression.`,
      [59]: `<Transition> expects exactly one child element or component.`,
      [60]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
    };
    transformVHtml = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
        context.onError(createDOMCompilerError(50, loc));
      }
      if (node.children.length) {
        context.onError(createDOMCompilerError(51, loc));
        node.children.length = 0;
      }
      return {
        props: [
          createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression("", true))
        ]
      };
    };
    transformVText = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
        context.onError(createDOMCompilerError(52, loc));
      }
      if (node.children.length) {
        context.onError(createDOMCompilerError(53, loc));
        node.children.length = 0;
      }
      return {
        props: [
          createObjectProperty(createSimpleExpression(`textContent`, true), exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(context.helperString(TO_DISPLAY_STRING), [exp], loc) : createSimpleExpression("", true))
        ]
      };
    };
    transformModel2 = (dir, node, context) => {
      const baseResult = transformModel(dir, node, context);
      if (!baseResult.props.length || node.tagType === 1) {
        return baseResult;
      }
      if (dir.arg) {
        context.onError(createDOMCompilerError(55, dir.arg.loc));
      }
      function checkDuplicatedValue() {
        const value = findProp(node, "value");
        if (value) {
          context.onError(createDOMCompilerError(57, value.loc));
        }
      }
      const { tag } = node;
      const isCustomElement = context.isCustomElement(tag);
      if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
        let directiveToUse = V_MODEL_TEXT;
        let isInvalidType = false;
        if (tag === "input" || isCustomElement) {
          const type = findProp(node, `type`);
          if (type) {
            if (type.type === 7) {
              directiveToUse = V_MODEL_DYNAMIC;
            } else if (type.value) {
              switch (type.value.content) {
                case "radio":
                  directiveToUse = V_MODEL_RADIO;
                  break;
                case "checkbox":
                  directiveToUse = V_MODEL_CHECKBOX;
                  break;
                case "file":
                  isInvalidType = true;
                  context.onError(createDOMCompilerError(56, dir.loc));
                  break;
                default:
                  process.env.NODE_ENV !== "production" && checkDuplicatedValue();
                  break;
              }
            }
          } else if (hasDynamicKeyVBind(node)) {
            directiveToUse = V_MODEL_DYNAMIC;
          } else {
            process.env.NODE_ENV !== "production" && checkDuplicatedValue();
          }
        } else if (tag === "select") {
          directiveToUse = V_MODEL_SELECT;
        } else {
          process.env.NODE_ENV !== "production" && checkDuplicatedValue();
        }
        if (!isInvalidType) {
          baseResult.needRuntime = context.helper(directiveToUse);
        }
      } else {
        context.onError(createDOMCompilerError(54, dir.loc));
      }
      baseResult.props = baseResult.props.filter((p2) => !(p2.key.type === 4 && p2.key.content === "modelValue"));
      return baseResult;
    };
    isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
    isNonKeyModifier = /* @__PURE__ */ makeMap(
      `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
    );
    maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
    isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`, true);
    resolveModifiers = (key, modifiers, context, loc) => {
      const keyModifiers = [];
      const nonKeyModifiers = [];
      const eventOptionModifiers = [];
      for (let i = 0; i < modifiers.length; i++) {
        const modifier = modifiers[i];
        if (modifier === "native" && checkCompatEnabled("COMPILER_V_ON_NATIVE", context, loc)) {
          eventOptionModifiers.push(modifier);
        } else if (isEventOptionModifier(modifier)) {
          eventOptionModifiers.push(modifier);
        } else {
          if (maybeKeyModifier(modifier)) {
            if (isStaticExp(key)) {
              if (isKeyboardEvent(key.content)) {
                keyModifiers.push(modifier);
              } else {
                nonKeyModifiers.push(modifier);
              }
            } else {
              keyModifiers.push(modifier);
              nonKeyModifiers.push(modifier);
            }
          } else {
            if (isNonKeyModifier(modifier)) {
              nonKeyModifiers.push(modifier);
            } else {
              keyModifiers.push(modifier);
            }
          }
        }
      }
      return {
        keyModifiers,
        nonKeyModifiers,
        eventOptionModifiers
      };
    };
    transformClick = (key, event) => {
      const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
      return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
        `(`,
        key,
        `) === "onClick" ? "${event}" : (`,
        key,
        `)`
      ]) : key;
    };
    transformOn2 = (dir, node, context) => {
      return transformOn(dir, node, context, (baseResult) => {
        const { modifiers } = dir;
        if (!modifiers.length)
          return baseResult;
        let { key, value: handlerExp } = baseResult.props[0];
        const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
        if (nonKeyModifiers.includes("right")) {
          key = transformClick(key, `onContextmenu`);
        }
        if (nonKeyModifiers.includes("middle")) {
          key = transformClick(key, `onMouseup`);
        }
        if (nonKeyModifiers.length) {
          handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
            handlerExp,
            JSON.stringify(nonKeyModifiers)
          ]);
        }
        if (keyModifiers.length && (!isStaticExp(key) || isKeyboardEvent(key.content))) {
          handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
            handlerExp,
            JSON.stringify(keyModifiers)
          ]);
        }
        if (eventOptionModifiers.length) {
          const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
          key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
        }
        return {
          props: [createObjectProperty(key, handlerExp)]
        };
      });
    };
    transformShow = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
        context.onError(createDOMCompilerError(58, loc));
      }
      return {
        props: [],
        needRuntime: context.helper(V_SHOW)
      };
    };
    transformTransition = (node, context) => {
      if (node.type === 1 && node.tagType === 1) {
        const component = context.isBuiltInComponent(node.tag);
        if (component === TRANSITION) {
          return () => {
            if (!node.children.length) {
              return;
            }
            if (hasMultipleChildren(node)) {
              context.onError(createDOMCompilerError(59, {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
              }));
            }
            const child = node.children[0];
            if (child.type === 1) {
              for (const p2 of child.props) {
                if (p2.type === 7 && p2.name === "show") {
                  node.props.push({
                    type: 6,
                    name: "persisted",
                    value: void 0,
                    loc: node.loc
                  });
                }
              }
            }
          };
        }
      }
    };
    ignoreSideEffectTags = (node, context) => {
      if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
        context.onError(createDOMCompilerError(60, node.loc));
        context.removeNode();
      }
    };
    DOMNodeTransforms = [
      transformStyle,
      ...process.env.NODE_ENV !== "production" ? [transformTransition] : []
    ];
    DOMDirectiveTransforms = {
      cloak: noopDirectiveTransform,
      html: transformVHtml,
      text: transformVText,
      model: transformModel2,
      on: transformOn2,
      show: transformShow
    };
  }
});

// node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler_exports = {};
__export(runtime_dom_esm_bundler_exports, {
  Transition: () => Transition,
  TransitionGroup: () => TransitionGroup,
  VueElement: () => VueElement,
  createApp: () => createApp,
  createSSRApp: () => createSSRApp,
  defineCustomElement: () => defineCustomElement,
  defineSSRCustomElement: () => defineSSRCustomElement,
  hydrate: () => hydrate,
  initDirectivesForSSR: () => initDirectivesForSSR,
  render: () => render,
  useCssModule: () => useCssModule,
  useCssVars: () => useCssVars,
  vModelCheckbox: () => vModelCheckbox,
  vModelDynamic: () => vModelDynamic,
  vModelRadio: () => vModelRadio,
  vModelSelect: () => vModelSelect,
  vModelText: () => vModelText,
  vShow: () => vShow,
  withKeys: () => withKeys,
  withModifiers: () => withModifiers
});
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = (0, import_runtime_core.camelize)(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (process.env.NODE_ENV !== "production" && !needRemove) {
      (0, import_runtime_core.warn)(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
    }
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    (0, import_runtime_core.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
function defineCustomElement(options, hydrate2) {
  const Comp = (0, import_runtime_core.defineComponent)(options);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, hydrate2);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
function useCssModule(name = "$style") {
  {
    const instance = (0, import_runtime_core.getCurrentInstance)();
    if (!instance) {
      process.env.NODE_ENV !== "production" && (0, import_runtime_core.warn)(`useCssModule must be called inside setup()`);
      return EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
      process.env.NODE_ENV !== "production" && (0, import_runtime_core.warn)(`Current instance does not have CSS modules injected.`);
      return EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
      process.env.NODE_ENV !== "production" && (0, import_runtime_core.warn)(`Current instance does not have CSS module named "${name}".`);
      return EMPTY_OBJ;
    }
    return mod;
  }
}
function useCssVars(getter) {
  const instance = (0, import_runtime_core.getCurrentInstance)();
  if (!instance) {
    process.env.NODE_ENV !== "production" && (0, import_runtime_core.warn)(`useCssVars is called without current active component instance.`);
    return;
  }
  const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
  (0, import_runtime_core.watchPostEffect)(setVars);
  (0, import_runtime_core.onMounted)(() => {
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    (0, import_runtime_core.onUnmounted)(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === import_runtime_core.Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === import_runtime_core.Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor)
        break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
    }
  }
}
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(onLeave, [el, resolve]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  if (process.env.NODE_ENV !== "production")
    validateDuration(res);
  return res;
}
function validateDuration(val) {
  if (typeof val !== "number") {
    (0, import_runtime_core.warn)(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    (0, import_runtime_core.warn)(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
  }
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION2 + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION2 + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION2) {
    if (transitionTimeout > 0) {
      type = TRANSITION2;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION2 : ANIMATION : null;
    propCount = type ? type === TRANSITION2 ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION2 && /\b(transform|all)(,|$)/.test(styles[TRANSITION2 + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
function callPendingCbs(c) {
  const el = c.el;
  if (el._moveCb) {
    el._moveCb();
  }
  if (el._enterCb) {
    el._enterCb();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  if (el._vtc) {
    el._vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  if (isArray(value)) {
    el.checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = looseEqual(value, getCheckboxValue(el, true));
  }
}
function setSelected(el, value) {
  const isMultiple = el.multiple;
  if (isMultiple && !isArray(value) && !isSet(value)) {
    process.env.NODE_ENV !== "production" && (0, import_runtime_core.warn)(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArray(value)) {
        option.selected = looseIndexOf(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i)
          el.selectedIndex = i;
        return;
      }
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({ value }) => ({ value });
  vModelRadio.getSSRProps = ({ value }, vnode) => {
    if (vnode.props && looseEqual(vnode.props.value, value)) {
      return { checked: true };
    }
  };
  vModelCheckbox.getSSRProps = ({ value }, vnode) => {
    if (isArray(value)) {
      if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
        return { checked: true };
      }
    } else if (isSet(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return { checked: true };
      }
    } else if (value) {
      return { checked: true };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
      vnode.type.toUpperCase(),
      vnode.props && vnode.props.type
    );
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
function initVShowForSSR() {
  vShow.getSSRProps = ({ value }) => {
    if (!value) {
      return { style: { display: "none" } };
    }
  };
}
function ensureRenderer() {
  return renderer || (renderer = (0, import_runtime_core.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0, import_runtime_core.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
}
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  if ((0, import_runtime_core.isRuntimeOnly)()) {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        (0, import_runtime_core.warn)(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        (0, import_runtime_core.warn)(msg);
        return compilerOptions;
      },
      set() {
        (0, import_runtime_core.warn)(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    if (process.env.NODE_ENV !== "production" && !res) {
      (0, import_runtime_core.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
    }
    return res;
  }
  if (process.env.NODE_ENV !== "production" && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    (0, import_runtime_core.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
  }
  return container;
}
var import_runtime_core, svgNS, doc, templateContainer, nodeOps, importantRE, prefixes, prefixCache, xlinkNS, optionsModifierRE, cachedNow, p, getNow, nativeOnRE, patchProp, defineSSRCustomElement, BaseClass, VueElement, TRANSITION2, ANIMATION, Transition, DOMTransitionPropsValidators, TransitionPropsValidators, callHook, hasExplicitCallback, endId, positionMap, newPositionMap, TransitionGroupImpl, TransitionGroup, getModelAssigner, vModelText, vModelCheckbox, vModelRadio, vModelSelect, vModelDynamic, systemModifiers, modifierGuards, withModifiers, keyNames, withKeys, vShow, rendererOptions, renderer, enabledHydration, render, hydrate, createApp, createSSRApp, ssrDirectiveInitialized, initDirectivesForSSR;
var init_runtime_dom_esm_bundler = __esm({
  "node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js"() {
    import_runtime_core = require("@vue/runtime-core");
    __reExport(runtime_dom_esm_bundler_exports, require("@vue/runtime-core"));
    init_shared_esm_bundler();
    svgNS = "http://www.w3.org/2000/svg";
    doc = typeof document !== "undefined" ? document : null;
    templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
    nodeOps = {
      insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
      },
      remove: (child) => {
        const parent = child.parentNode;
        if (parent) {
          parent.removeChild(child);
        }
      },
      createElement: (tag, isSVG, is, props) => {
        const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
        if (tag === "select" && props && props.multiple != null) {
          el.setAttribute("multiple", props.multiple);
        }
        return el;
      },
      createText: (text) => doc.createTextNode(text),
      createComment: (text) => doc.createComment(text),
      setText: (node, text) => {
        node.nodeValue = text;
      },
      setElementText: (el, text) => {
        el.textContent = text;
      },
      parentNode: (node) => node.parentNode,
      nextSibling: (node) => node.nextSibling,
      querySelector: (selector) => doc.querySelector(selector),
      setScopeId(el, id) {
        el.setAttribute(id, "");
      },
      insertStaticContent(content, parent, anchor, isSVG, start, end) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) {
          while (true) {
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling))
              break;
          }
        } else {
          templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
          const template = templateContainer.content;
          if (isSVG) {
            const wrapper = template.firstChild;
            while (wrapper.firstChild) {
              template.appendChild(wrapper.firstChild);
            }
            template.removeChild(wrapper);
          }
          parent.insertBefore(template, anchor);
        }
        return [
          before ? before.nextSibling : parent.firstChild,
          anchor ? anchor.previousSibling : parent.lastChild
        ];
      }
    };
    importantRE = /\s*!important$/;
    prefixes = ["Webkit", "Moz", "ms"];
    prefixCache = {};
    xlinkNS = "http://www.w3.org/1999/xlink";
    optionsModifierRE = /(?:Once|Passive|Capture)$/;
    cachedNow = 0;
    p = /* @__PURE__ */ Promise.resolve();
    getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
    nativeOnRE = /^on[a-z]/;
    patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
      if (key === "class") {
        patchClass(el, nextValue, isSVG);
      } else if (key === "style") {
        patchStyle(el, prevValue, nextValue);
      } else if (isOn(key)) {
        if (!isModelListener(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        if (key === "true-value") {
          el._trueValue = nextValue;
        } else if (key === "false-value") {
          el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
      }
    };
    defineSSRCustomElement = (options) => {
      return defineCustomElement(options, hydrate);
    };
    BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
    };
    VueElement = class extends BaseClass {
      constructor(_def, _props = {}, hydrate2) {
        super();
        this._def = _def;
        this._props = _props;
        this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate2) {
          hydrate2(this._createVNode(), this.shadowRoot);
        } else {
          if (process.env.NODE_ENV !== "production" && this.shadowRoot) {
            (0, import_runtime_core.warn)(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
          }
          this.attachShadow({ mode: "open" });
        }
      }
      connectedCallback() {
        this._connected = true;
        if (!this._instance) {
          this._resolveDef();
        }
      }
      disconnectedCallback() {
        this._connected = false;
        (0, import_runtime_core.nextTick)(() => {
          if (!this._connected) {
            render(null, this.shadowRoot);
            this._instance = null;
          }
        });
      }
      _resolveDef() {
        if (this._resolved) {
          return;
        }
        this._resolved = true;
        for (let i = 0; i < this.attributes.length; i++) {
          this._setAttr(this.attributes[i].name);
        }
        new MutationObserver((mutations) => {
          for (const m of mutations) {
            this._setAttr(m.attributeName);
          }
        }).observe(this, { attributes: true });
        const resolve = (def2) => {
          const { props, styles } = def2;
          const hasOptions = !isArray(props);
          const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
          let numberProps;
          if (hasOptions) {
            for (const key in this._props) {
              const opt = props[key];
              if (opt === Number || opt && opt.type === Number) {
                this._props[key] = toNumber(this._props[key]);
                (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[key] = true;
              }
            }
          }
          this._numberProps = numberProps;
          for (const key of Object.keys(this)) {
            if (key[0] !== "_") {
              this._setProp(key, this[key], true, false);
            }
          }
          for (const key of rawKeys.map(camelize)) {
            Object.defineProperty(this, key, {
              get() {
                return this._getProp(key);
              },
              set(val) {
                this._setProp(key, val);
              }
            });
          }
          this._applyStyles(styles);
          this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) {
          asyncDef().then(resolve);
        } else {
          resolve(this._def);
        }
      }
      _setAttr(key) {
        let value = this.getAttribute(key);
        if (this._numberProps && this._numberProps[key]) {
          value = toNumber(value);
        }
        this._setProp(camelize(key), value, false);
      }
      _getProp(key) {
        return this._props[key];
      }
      _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
          this._props[key] = val;
          if (shouldUpdate && this._instance) {
            this._update();
          }
          if (shouldReflect) {
            if (val === true) {
              this.setAttribute(hyphenate(key), "");
            } else if (typeof val === "string" || typeof val === "number") {
              this.setAttribute(hyphenate(key), val + "");
            } else if (!val) {
              this.removeAttribute(hyphenate(key));
            }
          }
        }
      }
      _update() {
        render(this._createVNode(), this.shadowRoot);
      }
      _createVNode() {
        const vnode = (0, import_runtime_core.createVNode)(this._def, extend({}, this._props));
        if (!this._instance) {
          vnode.ce = (instance) => {
            this._instance = instance;
            instance.isCE = true;
            if (process.env.NODE_ENV !== "production") {
              instance.ceReload = (newStyles) => {
                if (this._styles) {
                  this._styles.forEach((s) => this.shadowRoot.removeChild(s));
                  this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                if (!this._def.__asyncLoader) {
                  this._instance = null;
                  this._update();
                }
              };
            }
            instance.emit = (event, ...args) => {
              this.dispatchEvent(new CustomEvent(event, {
                detail: args
              }));
            };
            let parent = this;
            while (parent = parent && (parent.parentNode || parent.host)) {
              if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                break;
              }
            }
          };
        }
        return vnode;
      }
      _applyStyles(styles) {
        if (styles) {
          styles.forEach((css) => {
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            if (process.env.NODE_ENV !== "production") {
              (this._styles || (this._styles = [])).push(s);
            }
          });
        }
      }
    };
    TRANSITION2 = "transition";
    ANIMATION = "animation";
    Transition = (props, { slots }) => (0, import_runtime_core.h)(import_runtime_core.BaseTransition, resolveTransitionProps(props), slots);
    Transition.displayName = "Transition";
    DOMTransitionPropsValidators = {
      name: String,
      type: String,
      css: {
        type: Boolean,
        default: true
      },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String
    };
    TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, import_runtime_core.BaseTransition.props, DOMTransitionPropsValidators);
    callHook = (hook, args = []) => {
      if (isArray(hook)) {
        hook.forEach((h2) => h2(...args));
      } else if (hook) {
        hook(...args);
      }
    };
    hasExplicitCallback = (hook) => {
      return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
    };
    endId = 0;
    positionMap = /* @__PURE__ */ new WeakMap();
    newPositionMap = /* @__PURE__ */ new WeakMap();
    TransitionGroupImpl = {
      name: "TransitionGroup",
      props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
      }),
      setup(props, { slots }) {
        const instance = (0, import_runtime_core.getCurrentInstance)();
        const state = (0, import_runtime_core.useTransitionState)();
        let prevChildren;
        let children;
        (0, import_runtime_core.onUpdated)(() => {
          if (!prevChildren.length) {
            return;
          }
          const moveClass = props.moveClass || `${props.name || "v"}-move`;
          if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
            return;
          }
          prevChildren.forEach(callPendingCbs);
          prevChildren.forEach(recordPosition);
          const movedChildren = prevChildren.filter(applyTranslation);
          forceReflow();
          movedChildren.forEach((c) => {
            const el = c.el;
            const style = el.style;
            addTransitionClass(el, moveClass);
            style.transform = style.webkitTransform = style.transitionDuration = "";
            const cb = el._moveCb = (e) => {
              if (e && e.target !== el) {
                return;
              }
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener("transitionend", cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            };
            el.addEventListener("transitionend", cb);
          });
        });
        return () => {
          const rawProps = (0, import_runtime_core.toRaw)(props);
          const cssTransitionProps = resolveTransitionProps(rawProps);
          let tag = rawProps.tag || import_runtime_core.Fragment;
          prevChildren = children;
          children = slots.default ? (0, import_runtime_core.getTransitionRawChildren)(slots.default()) : [];
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.key != null) {
              (0, import_runtime_core.setTransitionHooks)(child, (0, import_runtime_core.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
            } else if (process.env.NODE_ENV !== "production") {
              (0, import_runtime_core.warn)(`<TransitionGroup> children must be keyed.`);
            }
          }
          if (prevChildren) {
            for (let i = 0; i < prevChildren.length; i++) {
              const child = prevChildren[i];
              (0, import_runtime_core.setTransitionHooks)(child, (0, import_runtime_core.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
              positionMap.set(child, child.el.getBoundingClientRect());
            }
          }
          return (0, import_runtime_core.createVNode)(tag, null, children);
        };
      }
    };
    TransitionGroup = TransitionGroupImpl;
    getModelAssigner = (vnode) => {
      const fn = vnode.props["onUpdate:modelValue"] || false;
      return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
    };
    vModelText = {
      created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        addEventListener(el, lazy ? "change" : "input", (e) => {
          if (e.target.composing)
            return;
          let domValue = el.value;
          if (trim) {
            domValue = domValue.trim();
          }
          if (castToNumber) {
            domValue = toNumber(domValue);
          }
          el._assign(domValue);
        });
        if (trim) {
          addEventListener(el, "change", () => {
            el.value = el.value.trim();
          });
        }
        if (!lazy) {
          addEventListener(el, "compositionstart", onCompositionStart);
          addEventListener(el, "compositionend", onCompositionEnd);
          addEventListener(el, "change", onCompositionEnd);
        }
      },
      mounted(el, { value }) {
        el.value = value == null ? "" : value;
      },
      beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (el.composing)
          return;
        if (document.activeElement === el && el.type !== "range") {
          if (lazy) {
            return;
          }
          if (trim && el.value.trim() === value) {
            return;
          }
          if ((number || el.type === "number") && toNumber(el.value) === value) {
            return;
          }
        }
        const newValue = value == null ? "" : value;
        if (el.value !== newValue) {
          el.value = newValue;
        }
      }
    };
    vModelCheckbox = {
      deep: true,
      created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", () => {
          const modelValue = el._modelValue;
          const elementValue = getValue(el);
          const checked = el.checked;
          const assign = el._assign;
          if (isArray(modelValue)) {
            const index = looseIndexOf(modelValue, elementValue);
            const found = index !== -1;
            if (checked && !found) {
              assign(modelValue.concat(elementValue));
            } else if (!checked && found) {
              const filtered = [...modelValue];
              filtered.splice(index, 1);
              assign(filtered);
            }
          } else if (isSet(modelValue)) {
            const cloned = new Set(modelValue);
            if (checked) {
              cloned.add(elementValue);
            } else {
              cloned.delete(elementValue);
            }
            assign(cloned);
          } else {
            assign(getCheckboxValue(el, checked));
          }
        });
      },
      mounted: setChecked,
      beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
      }
    };
    vModelRadio = {
      created(el, { value }, vnode) {
        el.checked = looseEqual(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", () => {
          el._assign(getValue(el));
        });
      },
      beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
          el.checked = looseEqual(value, vnode.props.value);
        }
      }
    };
    vModelSelect = {
      deep: true,
      created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = isSet(value);
        addEventListener(el, "change", () => {
          const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map((o) => number ? toNumber(getValue(o)) : getValue(o));
          el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
      },
      mounted(el, { value }) {
        setSelected(el, value);
      },
      beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
      },
      updated(el, { value }) {
        setSelected(el, value);
      }
    };
    vModelDynamic = {
      created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
      },
      mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
      },
      beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
      },
      updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
      }
    };
    systemModifiers = ["ctrl", "shift", "alt", "meta"];
    modifierGuards = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => "button" in e && e.button !== 0,
      middle: (e) => "button" in e && e.button !== 1,
      right: (e) => "button" in e && e.button !== 2,
      exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
    };
    withModifiers = (fn, modifiers) => {
      return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
          const guard = modifierGuards[modifiers[i]];
          if (guard && guard(event, modifiers))
            return;
        }
        return fn(event, ...args);
      };
    };
    keyNames = {
      esc: "escape",
      space: " ",
      up: "arrow-up",
      left: "arrow-left",
      right: "arrow-right",
      down: "arrow-down",
      delete: "backspace"
    };
    withKeys = (fn, modifiers) => {
      return (event) => {
        if (!("key" in event)) {
          return;
        }
        const eventKey = hyphenate(event.key);
        if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
          return fn(event);
        }
      };
    };
    vShow = {
      beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) {
          transition.beforeEnter(el);
        } else {
          setDisplay(el, value);
        }
      },
      mounted(el, { value }, { transition }) {
        if (transition && value) {
          transition.enter(el);
        }
      },
      updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
          return;
        if (transition) {
          if (value) {
            transition.beforeEnter(el);
            setDisplay(el, true);
            transition.enter(el);
          } else {
            transition.leave(el, () => {
              setDisplay(el, false);
            });
          }
        } else {
          setDisplay(el, value);
        }
      },
      beforeUnmount(el, { value }) {
        setDisplay(el, value);
      }
    };
    rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
    enabledHydration = false;
    render = (...args) => {
      ensureRenderer().render(...args);
    };
    hydrate = (...args) => {
      ensureHydrationRenderer().hydrate(...args);
    };
    createApp = (...args) => {
      const app = ensureRenderer().createApp(...args);
      if (process.env.NODE_ENV !== "production") {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
      }
      const { mount } = app;
      app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
          return;
        const component = app._component;
        if (!isFunction(component) && !component.render && !component.template) {
          component.template = container.innerHTML;
        }
        container.innerHTML = "";
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
          container.removeAttribute("v-cloak");
          container.setAttribute("data-v-app", "");
        }
        return proxy;
      };
      return app;
    };
    createSSRApp = (...args) => {
      const app = ensureHydrationRenderer().createApp(...args);
      if (process.env.NODE_ENV !== "production") {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
      }
      const { mount } = app;
      app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
          return mount(container, true, container instanceof SVGElement);
        }
      };
      return app;
    };
    ssrDirectiveInitialized = false;
    initDirectivesForSSR = () => {
      if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
      }
    };
  }
});

// node_modules/vue/dist/vue.cjs.prod.js
var require_vue_cjs_prod = __commonJS({
  "node_modules/vue/dist/vue.cjs.prod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compilerDom = (init_compiler_dom_esm_bundler(), __toCommonJS(compiler_dom_esm_bundler_exports));
    var runtimeDom = (init_runtime_dom_esm_bundler(), __toCommonJS(runtime_dom_esm_bundler_exports));
    var shared = (init_shared_esm_bundler(), __toCommonJS(shared_esm_bundler_exports));
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          n[k] = e[k];
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespace(runtimeDom);
    var compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          return shared.NOOP;
        }
      }
      const key = template;
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend({
        hoistStatic: true,
        onError: void 0,
        onWarn: shared.NOOP
      }, options);
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      const render3 = new Function("Vue", code)(runtimeDom__namespace);
      render3._rc = true;
      return compileCache[key] = render3;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default")
        exports[k] = runtimeDom[k];
    });
    exports.compile = compileToFunction;
  }
});

// node_modules/vue/dist/vue.cjs.js
var require_vue_cjs = __commonJS({
  "node_modules/vue/dist/vue.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compilerDom = (init_compiler_dom_esm_bundler(), __toCommonJS(compiler_dom_esm_bundler_exports));
    var runtimeDom = (init_runtime_dom_esm_bundler(), __toCommonJS(runtime_dom_esm_bundler_exports));
    var shared = (init_shared_esm_bundler(), __toCommonJS(shared_esm_bundler_exports));
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          n[k] = e[k];
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespace(runtimeDom);
    var compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          runtimeDom.warn(`invalid template option: `, template);
          return shared.NOOP;
        }
      }
      const key = template;
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        if (!el) {
          runtimeDom.warn(`Template element not found or is empty: ${template}`);
        }
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend({
        hoistStatic: true,
        onError,
        onWarn: (e) => onError(e, true)
      }, options);
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      function onError(err, asWarning = false) {
        const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
        const codeFrame = err.loc && shared.generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
        runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
      }
      const render3 = new Function("Vue", code)(runtimeDom__namespace);
      render3._rc = true;
      return compileCache[key] = render3;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default")
        exports[k] = runtimeDom[k];
    });
    exports.compile = compileToFunction;
  }
});

// node_modules/vue/index.js
var require_vue = __commonJS({
  "node_modules/vue/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_vue_cjs_prod();
    } else {
      module2.exports = require_vue_cjs();
    }
  }
});

// src/main.ts
var import_core3 = require("@temir/core");

// node_modules/vue/index.mjs
var vue_exports = {};
__reExport(vue_exports, __toESM(require_vue(), 1));

// vue:./App.vue
var import_core2 = require("@temir/core");

// vue:./components/FloraCommandMenu/index.vue
var import_core = require("@temir/core");

// src/composables/commands/flora.ts
var floraCommands = [
  {
    key: "g",
    cmd: "cat package.json",
    desc: "\u751F\u6210\u4EE3\u7801"
  },
  {
    key: "s",
    cmd: "flora",
    desc: "\u542F\u52A8\u540E\u7AEF\u670D\u52A1"
  },
  {
    key: "w",
    cmd: "flora watch",
    desc: "\u5F00\u542Fwatch\u8FDB\u7A0B"
  },
  {
    key: "u",
    cmd: "flora updatedb",
    desc: "\u66F4\u65B0\u6570\u636E\u5E93"
  },
  {
    key: "uc",
    cmd: "flora updatedb --create_db",
    desc: "\u521B\u5EFA\u5E76\u66F4\u65B0\u6570\u636E\u5E93"
  },
  {
    key: "up",
    cmd: "flora upgrade",
    desc: "go.mod\u4F9D\u8D56\u5173\u7CFB\u7684\u7248\u672C\u5347\u7EA7"
  },
  {
    key: "r",
    cmd: "flora code release",
    desc: "\u7248\u672C\u53D1\u5E03"
  }
];
var flora_default = floraCommands;

// src/composables/commands/func.ts
var import_child_process = require("child_process");
var funcCommands = [
  {
    key: "doc",
    desc: "\u6253\u5F00flora\u6587\u6863website",
    type: "func",
    func: () => {
      const url = "https://flora-doc.applysquare.net";
      if (process.platform && process.platform === "win32") {
        (0, import_child_process.exec)(`start ${url}`);
      } else {
        (0, import_child_process.exec)(`open ${url}`);
      }
    }
  }
];
var func_default = funcCommands;

// src/composables/commands/index.ts
var commands = [
  ...flora_default,
  ...func_default
];
var commands_default = commands;

// vue:./components/FloraCommandMenu/index.vue
var __sfc_main = /* @__PURE__ */ (0, vue_exports.defineComponent)({
  setup(__props) {
    return (_ctx, _cache) => {
      return (0, vue_exports.openBlock)(), (0, vue_exports.createElementBlock)(vue_exports.Fragment, null, [
        (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), {
          width: 100,
          height: 2
        }, {
          default: (0, vue_exports.withCtx)(() => [
            (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), { color: "#42b883" }, {
              default: (0, vue_exports.withCtx)(() => [
                (0, vue_exports.createTextVNode)(" \u{1F308} Hi, Flora command helper! ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), {
          "flex-direction": "column",
          width: 70,
          "border-style": "double"
        }, {
          default: (0, vue_exports.withCtx)(() => [
            (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), null, {
              default: (0, vue_exports.withCtx)(() => [
                (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), { width: "8%" }, {
                  default: (0, vue_exports.withCtx)(() => [
                    (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), null, {
                      default: (0, vue_exports.withCtx)(() => [
                        (0, vue_exports.createTextVNode)("key")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), { width: "42%" }, {
                  default: (0, vue_exports.withCtx)(() => [
                    (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), null, {
                      default: (0, vue_exports.withCtx)(() => [
                        (0, vue_exports.createTextVNode)("\u547D\u4EE4")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), { width: "50%" }, {
                  default: (0, vue_exports.withCtx)(() => [
                    (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), null, {
                      default: (0, vue_exports.withCtx)(() => [
                        (0, vue_exports.createTextVNode)("\u4ECB\u7ECD")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ((0, vue_exports.openBlock)(true), (0, vue_exports.createElementBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(commands_default), (cmd) => {
              return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(import_core.TBox), {
                key: cmd.key
              }, {
                default: (0, vue_exports.withCtx)(() => [
                  (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), { width: "8%" }, {
                    default: (0, vue_exports.withCtx)(() => [
                      (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), null, {
                        default: (0, vue_exports.withCtx)(() => [
                          (0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(cmd.key), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), { width: "42%" }, {
                    default: (0, vue_exports.withCtx)(() => [
                      (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), null, {
                        default: (0, vue_exports.withCtx)(() => [
                          (0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(cmd.cmd || "-"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), { width: "50%" }, {
                    default: (0, vue_exports.withCtx)(() => [
                      (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), null, {
                        default: (0, vue_exports.withCtx)(() => [
                          (0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(cmd.desc), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }),
        (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TBox), { width: 60 }, {
          default: (0, vue_exports.withCtx)(() => [
            (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core.TText), null, {
              default: (0, vue_exports.withCtx)(() => [
                (0, vue_exports.createTextVNode)("\u8BF7\u8F93\u5165f key. \u4F8B\u5982f g,\u4F1A\u81EA\u52A8\u6267\u884Cflora generate")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
var FloraCommandMenu_default = __sfc_main;

// src/composables/exec.ts
var import_child_process2 = require("child_process");

// src/composables/log/useError.ts
var errorText = (0, vue_exports.ref)(" ");
function useError() {
  function addError2(text) {
    errorText.value = text;
  }
  function resetError() {
    errorText.value = "";
  }
  return {
    errorText,
    addError: addError2,
    resetError
  };
}

// src/composables/exec.ts
var { addError } = useError();
var execKey = (cmdKey) => {
  const command = commands_default.find((element) => element.key === cmdKey);
  if (!!command) {
    if (command.type === "func") {
      command.func ? command.func() : addError("the execute function for this command is undefined");
      exit();
      return;
    }
    const cmds = command.cmd.split(" ");
    try {
      const task = (0, import_child_process2.spawn)(cmds[0], cmds.filter((_, index) => index > 0), {
        detached: true,
        stdio: "inherit"
      });
      task.unref();
    } catch (err) {
      addError(`command exec error!${err}`);
    }
  } else {
    addError(`not fond key\uFF1A${cmdKey}`);
  }
  exit();
};
var exit = (ms = 500) => setTimeout(() => process.exit(0), ms);

// src/composables/argv.ts
var execArg = () => {
  if (process.argv.length > 2) {
    execKey(process.argv[2]);
    return true;
  }
  exit();
  return false;
};

// vue:./App.vue
var __sfc_main2 = /* @__PURE__ */ (0, vue_exports.defineComponent)({
  setup(__props) {
    const { errorText: errorText2 } = useError();
    const hasArg = (0, vue_exports.ref)(true);
    (0, vue_exports.onMounted)(() => hasArg.value = execArg());
    return (_ctx, _cache) => {
      return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(import_core2.TBox), {
        width: 100,
        "flex-direction": "column"
      }, {
        default: (0, vue_exports.withCtx)(() => [
          !hasArg.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(FloraCommandMenu_default, { key: 0 })) : (0, vue_exports.createCommentVNode)("v-if", true),
          (0, vue_exports.createVNode)((0, vue_exports.unref)(import_core2.TText), null, {
            default: (0, vue_exports.withCtx)(() => [
              (0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(errorText2)), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var App_default = __sfc_main2;

// src/main.ts
(0, import_core3.render)(App_default);
