(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/lucide/dist/esm/createElement.js
  var createElement = (tag, attrs, children = []) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, String(attrs[name]));
    });
    if (children.length) {
      children.forEach((child) => {
        const childElement = createElement(...child);
        element.appendChild(childElement);
      });
    }
    return element;
  };
  var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);

  // node_modules/lucide/dist/esm/replaceElement.js
  var getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
  var getClassNames = (attrs) => {
    if (typeof attrs === "string")
      return attrs;
    if (!attrs || !attrs.class)
      return "";
    if (attrs.class && typeof attrs.class === "string") {
      return attrs.class.split(" ");
    }
    if (attrs.class && Array.isArray(attrs.class)) {
      return attrs.class;
    }
    return "";
  };
  var combineClassNames = (arrayOfClassnames) => {
    const classNameArray = arrayOfClassnames.flatMap(getClassNames);
    return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self) => self.indexOf(value) === index).join(" ");
  };
  var toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
  var replaceElement = (element, { nameAttr, icons, attrs }) => {
    const iconName = element.getAttribute(nameAttr);
    if (iconName == null)
      return;
    const ComponentName = toPascalCase(iconName);
    const iconNode = icons[ComponentName];
    if (!iconNode) {
      return console.warn(
        `${element.outerHTML} icon name was not found in the provided icons object.`
      );
    }
    const elementAttrs = getAttrs(element);
    const [tag, iconAttributes, children] = iconNode;
    const iconAttrs = {
      ...iconAttributes,
      "data-lucide": iconName,
      ...attrs,
      ...elementAttrs
    };
    const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
    if (classNames) {
      Object.assign(iconAttrs, {
        class: classNames
      });
    }
    const svgElement = createElement$1([tag, iconAttrs, children]);
    return element.parentNode?.replaceChild(svgElement, element);
  };

  // node_modules/lucide/dist/esm/iconsAndAliases.js
  var iconsAndAliases_exports = {};
  __export(iconsAndAliases_exports, {
    AArrowDown: () => AArrowDown,
    AArrowUp: () => AArrowUp,
    ALargeSmall: () => ALargeSmall,
    Accessibility: () => Accessibility,
    Activity: () => Activity,
    ActivitySquare: () => SquareActivity,
    AirVent: () => AirVent,
    Airplay: () => Airplay,
    AlarmCheck: () => AlarmClockCheck,
    AlarmClock: () => AlarmClock,
    AlarmClockCheck: () => AlarmClockCheck,
    AlarmClockMinus: () => AlarmClockMinus,
    AlarmClockOff: () => AlarmClockOff,
    AlarmClockPlus: () => AlarmClockPlus,
    AlarmMinus: () => AlarmClockMinus,
    AlarmPlus: () => AlarmClockPlus,
    AlarmSmoke: () => AlarmSmoke,
    Album: () => Album,
    AlertCircle: () => CircleAlert,
    AlertOctagon: () => OctagonAlert,
    AlertTriangle: () => TriangleAlert,
    AlignCenter: () => AlignCenter,
    AlignCenterHorizontal: () => AlignCenterHorizontal,
    AlignCenterVertical: () => AlignCenterVertical,
    AlignEndHorizontal: () => AlignEndHorizontal,
    AlignEndVertical: () => AlignEndVertical,
    AlignHorizontalDistributeCenter: () => AlignHorizontalDistributeCenter,
    AlignHorizontalDistributeEnd: () => AlignHorizontalDistributeEnd,
    AlignHorizontalDistributeStart: () => AlignHorizontalDistributeStart,
    AlignHorizontalJustifyCenter: () => AlignHorizontalJustifyCenter,
    AlignHorizontalJustifyEnd: () => AlignHorizontalJustifyEnd,
    AlignHorizontalJustifyStart: () => AlignHorizontalJustifyStart,
    AlignHorizontalSpaceAround: () => AlignHorizontalSpaceAround,
    AlignHorizontalSpaceBetween: () => AlignHorizontalSpaceBetween,
    AlignJustify: () => AlignJustify,
    AlignLeft: () => AlignLeft,
    AlignRight: () => AlignRight,
    AlignStartHorizontal: () => AlignStartHorizontal,
    AlignStartVertical: () => AlignStartVertical,
    AlignVerticalDistributeCenter: () => AlignVerticalDistributeCenter,
    AlignVerticalDistributeEnd: () => AlignVerticalDistributeEnd,
    AlignVerticalDistributeStart: () => AlignVerticalDistributeStart,
    AlignVerticalJustifyCenter: () => AlignVerticalJustifyCenter,
    AlignVerticalJustifyEnd: () => AlignVerticalJustifyEnd,
    AlignVerticalJustifyStart: () => AlignVerticalJustifyStart,
    AlignVerticalSpaceAround: () => AlignVerticalSpaceAround,
    AlignVerticalSpaceBetween: () => AlignVerticalSpaceBetween,
    Ambulance: () => Ambulance,
    Ampersand: () => Ampersand,
    Ampersands: () => Ampersands,
    Anchor: () => Anchor,
    Angry: () => Angry,
    Annoyed: () => Annoyed,
    Antenna: () => Antenna,
    Anvil: () => Anvil,
    Aperture: () => Aperture,
    AppWindow: () => AppWindow,
    AppWindowMac: () => AppWindowMac,
    Apple: () => Apple,
    Archive: () => Archive,
    ArchiveRestore: () => ArchiveRestore,
    ArchiveX: () => ArchiveX,
    AreaChart: () => ChartArea,
    Armchair: () => Armchair,
    ArrowBigDown: () => ArrowBigDown,
    ArrowBigDownDash: () => ArrowBigDownDash,
    ArrowBigLeft: () => ArrowBigLeft,
    ArrowBigLeftDash: () => ArrowBigLeftDash,
    ArrowBigRight: () => ArrowBigRight,
    ArrowBigRightDash: () => ArrowBigRightDash,
    ArrowBigUp: () => ArrowBigUp,
    ArrowBigUpDash: () => ArrowBigUpDash,
    ArrowDown: () => ArrowDown,
    ArrowDown01: () => ArrowDown01,
    ArrowDown10: () => ArrowDown10,
    ArrowDownAZ: () => ArrowDownAZ,
    ArrowDownAz: () => ArrowDownAZ,
    ArrowDownCircle: () => CircleArrowDown,
    ArrowDownFromLine: () => ArrowDownFromLine,
    ArrowDownLeft: () => ArrowDownLeft,
    ArrowDownLeftFromCircle: () => CircleArrowOutDownLeft,
    ArrowDownLeftFromSquare: () => SquareArrowOutDownLeft,
    ArrowDownLeftSquare: () => SquareArrowDownLeft,
    ArrowDownNarrowWide: () => ArrowDownNarrowWide,
    ArrowDownRight: () => ArrowDownRight,
    ArrowDownRightFromCircle: () => CircleArrowOutDownRight,
    ArrowDownRightFromSquare: () => SquareArrowOutDownRight,
    ArrowDownRightSquare: () => SquareArrowDownRight,
    ArrowDownSquare: () => SquareArrowDown,
    ArrowDownToDot: () => ArrowDownToDot,
    ArrowDownToLine: () => ArrowDownToLine,
    ArrowDownUp: () => ArrowDownUp,
    ArrowDownWideNarrow: () => ArrowDownWideNarrow,
    ArrowDownZA: () => ArrowDownZA,
    ArrowDownZa: () => ArrowDownZA,
    ArrowLeft: () => ArrowLeft,
    ArrowLeftCircle: () => CircleArrowLeft,
    ArrowLeftFromLine: () => ArrowLeftFromLine,
    ArrowLeftRight: () => ArrowLeftRight,
    ArrowLeftSquare: () => SquareArrowLeft,
    ArrowLeftToLine: () => ArrowLeftToLine,
    ArrowRight: () => ArrowRight,
    ArrowRightCircle: () => CircleArrowRight,
    ArrowRightFromLine: () => ArrowRightFromLine,
    ArrowRightLeft: () => ArrowRightLeft,
    ArrowRightSquare: () => SquareArrowRight,
    ArrowRightToLine: () => ArrowRightToLine,
    ArrowUp: () => ArrowUp,
    ArrowUp01: () => ArrowUp01,
    ArrowUp10: () => ArrowUp10,
    ArrowUpAZ: () => ArrowUpAZ,
    ArrowUpAz: () => ArrowUpAZ,
    ArrowUpCircle: () => CircleArrowUp,
    ArrowUpDown: () => ArrowUpDown,
    ArrowUpFromDot: () => ArrowUpFromDot,
    ArrowUpFromLine: () => ArrowUpFromLine,
    ArrowUpLeft: () => ArrowUpLeft,
    ArrowUpLeftFromCircle: () => CircleArrowOutUpLeft,
    ArrowUpLeftFromSquare: () => SquareArrowOutUpLeft,
    ArrowUpLeftSquare: () => SquareArrowUpLeft,
    ArrowUpNarrowWide: () => ArrowUpNarrowWide,
    ArrowUpRight: () => ArrowUpRight,
    ArrowUpRightFromCircle: () => CircleArrowOutUpRight,
    ArrowUpRightFromSquare: () => SquareArrowOutUpRight,
    ArrowUpRightSquare: () => SquareArrowUpRight,
    ArrowUpSquare: () => SquareArrowUp,
    ArrowUpToLine: () => ArrowUpToLine,
    ArrowUpWideNarrow: () => ArrowUpWideNarrow,
    ArrowUpZA: () => ArrowUpZA,
    ArrowUpZa: () => ArrowUpZA,
    ArrowsUpFromLine: () => ArrowsUpFromLine,
    Asterisk: () => Asterisk,
    AsteriskSquare: () => SquareAsterisk,
    AtSign: () => AtSign,
    Atom: () => Atom,
    AudioLines: () => AudioLines,
    AudioWaveform: () => AudioWaveform,
    Award: () => Award,
    Axe: () => Axe,
    Axis3D: () => Axis3d,
    Axis3d: () => Axis3d,
    Baby: () => Baby,
    Backpack: () => Backpack,
    Badge: () => Badge,
    BadgeAlert: () => BadgeAlert,
    BadgeCent: () => BadgeCent,
    BadgeCheck: () => BadgeCheck,
    BadgeDollarSign: () => BadgeDollarSign,
    BadgeEuro: () => BadgeEuro,
    BadgeHelp: () => BadgeHelp,
    BadgeIndianRupee: () => BadgeIndianRupee,
    BadgeInfo: () => BadgeInfo,
    BadgeJapaneseYen: () => BadgeJapaneseYen,
    BadgeMinus: () => BadgeMinus,
    BadgePercent: () => BadgePercent,
    BadgePlus: () => BadgePlus,
    BadgePoundSterling: () => BadgePoundSterling,
    BadgeRussianRuble: () => BadgeRussianRuble,
    BadgeSwissFranc: () => BadgeSwissFranc,
    BadgeX: () => BadgeX,
    BaggageClaim: () => BaggageClaim,
    Ban: () => Ban,
    Banana: () => Banana,
    Banknote: () => Banknote,
    BarChart: () => ChartNoAxesColumnIncreasing,
    BarChart2: () => ChartNoAxesColumn,
    BarChart3: () => ChartColumn,
    BarChart4: () => ChartColumnIncreasing,
    BarChartBig: () => ChartColumnBig,
    BarChartHorizontal: () => ChartBar,
    BarChartHorizontalBig: () => ChartBarBig,
    Barcode: () => Barcode,
    Baseline: () => Baseline,
    Bath: () => Bath,
    Battery: () => Battery,
    BatteryCharging: () => BatteryCharging,
    BatteryFull: () => BatteryFull,
    BatteryLow: () => BatteryLow,
    BatteryMedium: () => BatteryMedium,
    BatteryWarning: () => BatteryWarning,
    Beaker: () => Beaker,
    Bean: () => Bean,
    BeanOff: () => BeanOff,
    Bed: () => Bed,
    BedDouble: () => BedDouble,
    BedSingle: () => BedSingle,
    Beef: () => Beef,
    Beer: () => Beer,
    BeerOff: () => BeerOff,
    Bell: () => Bell,
    BellDot: () => BellDot,
    BellElectric: () => BellElectric,
    BellMinus: () => BellMinus,
    BellOff: () => BellOff,
    BellPlus: () => BellPlus,
    BellRing: () => BellRing,
    BetweenHorizonalEnd: () => BetweenHorizontalEnd,
    BetweenHorizonalStart: () => BetweenHorizontalStart,
    BetweenHorizontalEnd: () => BetweenHorizontalEnd,
    BetweenHorizontalStart: () => BetweenHorizontalStart,
    BetweenVerticalEnd: () => BetweenVerticalEnd,
    BetweenVerticalStart: () => BetweenVerticalStart,
    BicepsFlexed: () => BicepsFlexed,
    Bike: () => Bike,
    Binary: () => Binary,
    Biohazard: () => Biohazard,
    Bird: () => Bird,
    Bitcoin: () => Bitcoin,
    Blend: () => Blend,
    Blinds: () => Blinds,
    Blocks: () => Blocks,
    Bluetooth: () => Bluetooth,
    BluetoothConnected: () => BluetoothConnected,
    BluetoothOff: () => BluetoothOff,
    BluetoothSearching: () => BluetoothSearching,
    Bold: () => Bold,
    Bolt: () => Bolt,
    Bomb: () => Bomb,
    Bone: () => Bone,
    Book: () => Book,
    BookA: () => BookA,
    BookAudio: () => BookAudio,
    BookCheck: () => BookCheck,
    BookCopy: () => BookCopy,
    BookDashed: () => BookDashed,
    BookDown: () => BookDown,
    BookHeadphones: () => BookHeadphones,
    BookHeart: () => BookHeart,
    BookImage: () => BookImage,
    BookKey: () => BookKey,
    BookLock: () => BookLock,
    BookMarked: () => BookMarked,
    BookMinus: () => BookMinus,
    BookOpen: () => BookOpen,
    BookOpenCheck: () => BookOpenCheck,
    BookOpenText: () => BookOpenText,
    BookPlus: () => BookPlus,
    BookTemplate: () => BookDashed,
    BookText: () => BookText,
    BookType: () => BookType,
    BookUp: () => BookUp,
    BookUp2: () => BookUp2,
    BookUser: () => BookUser,
    BookX: () => BookX,
    Bookmark: () => Bookmark,
    BookmarkCheck: () => BookmarkCheck,
    BookmarkMinus: () => BookmarkMinus,
    BookmarkPlus: () => BookmarkPlus,
    BookmarkX: () => BookmarkX,
    BoomBox: () => BoomBox,
    Bot: () => Bot,
    BotMessageSquare: () => BotMessageSquare,
    BotOff: () => BotOff,
    Box: () => Box,
    BoxSelect: () => BoxSelect,
    Boxes: () => Boxes,
    Braces: () => Braces,
    Brackets: () => Brackets,
    Brain: () => Brain,
    BrainCircuit: () => BrainCircuit,
    BrainCog: () => BrainCog,
    BrickWall: () => BrickWall,
    Briefcase: () => Briefcase,
    BriefcaseBusiness: () => BriefcaseBusiness,
    BriefcaseMedical: () => BriefcaseMedical,
    BringToFront: () => BringToFront,
    Brush: () => Brush,
    Bug: () => Bug,
    BugOff: () => BugOff,
    BugPlay: () => BugPlay,
    Building: () => Building,
    Building2: () => Building2,
    Bus: () => Bus,
    BusFront: () => BusFront,
    Cable: () => Cable,
    CableCar: () => CableCar,
    Cake: () => Cake,
    CakeSlice: () => CakeSlice,
    Calculator: () => Calculator,
    Calendar: () => Calendar,
    CalendarArrowDown: () => CalendarArrowDown,
    CalendarArrowUp: () => CalendarArrowUp,
    CalendarCheck: () => CalendarCheck,
    CalendarCheck2: () => CalendarCheck2,
    CalendarClock: () => CalendarClock,
    CalendarCog: () => CalendarCog,
    CalendarDays: () => CalendarDays,
    CalendarFold: () => CalendarFold,
    CalendarHeart: () => CalendarHeart,
    CalendarMinus: () => CalendarMinus,
    CalendarMinus2: () => CalendarMinus2,
    CalendarOff: () => CalendarOff,
    CalendarPlus: () => CalendarPlus,
    CalendarPlus2: () => CalendarPlus2,
    CalendarRange: () => CalendarRange,
    CalendarSearch: () => CalendarSearch,
    CalendarX: () => CalendarX,
    CalendarX2: () => CalendarX2,
    Camera: () => Camera,
    CameraOff: () => CameraOff,
    CandlestickChart: () => ChartCandlestick,
    Candy: () => Candy,
    CandyCane: () => CandyCane,
    CandyOff: () => CandyOff,
    Cannabis: () => Cannabis,
    Captions: () => Captions,
    CaptionsOff: () => CaptionsOff,
    Car: () => Car,
    CarFront: () => CarFront,
    CarTaxiFront: () => CarTaxiFront,
    Caravan: () => Caravan,
    Carrot: () => Carrot,
    CaseLower: () => CaseLower,
    CaseSensitive: () => CaseSensitive,
    CaseUpper: () => CaseUpper,
    CassetteTape: () => CassetteTape,
    Cast: () => Cast,
    Castle: () => Castle,
    Cat: () => Cat,
    Cctv: () => Cctv,
    ChartArea: () => ChartArea,
    ChartBar: () => ChartBar,
    ChartBarBig: () => ChartBarBig,
    ChartBarDecreasing: () => ChartBarDecreasing,
    ChartBarIncreasing: () => ChartBarIncreasing,
    ChartBarStacked: () => ChartBarStacked,
    ChartCandlestick: () => ChartCandlestick,
    ChartColumn: () => ChartColumn,
    ChartColumnBig: () => ChartColumnBig,
    ChartColumnDecreasing: () => ChartColumnDecreasing,
    ChartColumnIncreasing: () => ChartColumnIncreasing,
    ChartColumnStacked: () => ChartColumnStacked,
    ChartLine: () => ChartLine,
    ChartNetwork: () => ChartNetwork,
    ChartNoAxesColumn: () => ChartNoAxesColumn,
    ChartNoAxesColumnDecreasing: () => ChartNoAxesColumnDecreasing,
    ChartNoAxesColumnIncreasing: () => ChartNoAxesColumnIncreasing,
    ChartNoAxesCombined: () => ChartNoAxesCombined,
    ChartNoAxesGantt: () => ChartNoAxesGantt,
    ChartPie: () => ChartPie,
    ChartScatter: () => ChartScatter,
    ChartSpline: () => ChartSpline,
    Check: () => Check,
    CheckCheck: () => CheckCheck,
    CheckCircle: () => CircleCheckBig,
    CheckCircle2: () => CircleCheck,
    CheckSquare: () => SquareCheckBig,
    CheckSquare2: () => SquareCheck,
    ChefHat: () => ChefHat,
    Cherry: () => Cherry,
    ChevronDown: () => ChevronDown,
    ChevronDownCircle: () => CircleChevronDown,
    ChevronDownSquare: () => SquareChevronDown,
    ChevronFirst: () => ChevronFirst,
    ChevronLast: () => ChevronLast,
    ChevronLeft: () => ChevronLeft,
    ChevronLeftCircle: () => CircleChevronLeft,
    ChevronLeftSquare: () => SquareChevronLeft,
    ChevronRight: () => ChevronRight,
    ChevronRightCircle: () => CircleChevronRight,
    ChevronRightSquare: () => SquareChevronRight,
    ChevronUp: () => ChevronUp,
    ChevronUpCircle: () => CircleChevronUp,
    ChevronUpSquare: () => SquareChevronUp,
    ChevronsDown: () => ChevronsDown,
    ChevronsDownUp: () => ChevronsDownUp,
    ChevronsLeft: () => ChevronsLeft,
    ChevronsLeftRight: () => ChevronsLeftRight,
    ChevronsRight: () => ChevronsRight,
    ChevronsRightLeft: () => ChevronsRightLeft,
    ChevronsUp: () => ChevronsUp,
    ChevronsUpDown: () => ChevronsUpDown,
    Chrome: () => Chrome,
    Church: () => Church,
    Cigarette: () => Cigarette,
    CigaretteOff: () => CigaretteOff,
    Circle: () => Circle,
    CircleAlert: () => CircleAlert,
    CircleArrowDown: () => CircleArrowDown,
    CircleArrowLeft: () => CircleArrowLeft,
    CircleArrowOutDownLeft: () => CircleArrowOutDownLeft,
    CircleArrowOutDownRight: () => CircleArrowOutDownRight,
    CircleArrowOutUpLeft: () => CircleArrowOutUpLeft,
    CircleArrowOutUpRight: () => CircleArrowOutUpRight,
    CircleArrowRight: () => CircleArrowRight,
    CircleArrowUp: () => CircleArrowUp,
    CircleCheck: () => CircleCheck,
    CircleCheckBig: () => CircleCheckBig,
    CircleChevronDown: () => CircleChevronDown,
    CircleChevronLeft: () => CircleChevronLeft,
    CircleChevronRight: () => CircleChevronRight,
    CircleChevronUp: () => CircleChevronUp,
    CircleDashed: () => CircleDashed,
    CircleDivide: () => CircleDivide,
    CircleDollarSign: () => CircleDollarSign,
    CircleDot: () => CircleDot,
    CircleDotDashed: () => CircleDotDashed,
    CircleEllipsis: () => CircleEllipsis,
    CircleEqual: () => CircleEqual,
    CircleFadingPlus: () => CircleFadingPlus,
    CircleGauge: () => CircleGauge,
    CircleHelp: () => CircleHelp,
    CircleMinus: () => CircleMinus,
    CircleOff: () => CircleOff,
    CircleParking: () => CircleParking,
    CircleParkingOff: () => CircleParkingOff,
    CirclePause: () => CirclePause,
    CirclePercent: () => CirclePercent,
    CirclePlay: () => CirclePlay,
    CirclePlus: () => CirclePlus,
    CirclePower: () => CirclePower,
    CircleSlash: () => CircleSlash,
    CircleSlash2: () => CircleSlash2,
    CircleSlashed: () => CircleSlash2,
    CircleStop: () => CircleStop,
    CircleUser: () => CircleUser,
    CircleUserRound: () => CircleUserRound,
    CircleX: () => CircleX,
    CircuitBoard: () => CircuitBoard,
    Citrus: () => Citrus,
    Clapperboard: () => Clapperboard,
    Clipboard: () => Clipboard,
    ClipboardCheck: () => ClipboardCheck,
    ClipboardCopy: () => ClipboardCopy,
    ClipboardEdit: () => ClipboardPen,
    ClipboardList: () => ClipboardList,
    ClipboardMinus: () => ClipboardMinus,
    ClipboardPaste: () => ClipboardPaste,
    ClipboardPen: () => ClipboardPen,
    ClipboardPenLine: () => ClipboardPenLine,
    ClipboardPlus: () => ClipboardPlus,
    ClipboardSignature: () => ClipboardPenLine,
    ClipboardType: () => ClipboardType,
    ClipboardX: () => ClipboardX,
    Clock: () => Clock,
    Clock1: () => Clock1,
    Clock10: () => Clock10,
    Clock11: () => Clock11,
    Clock12: () => Clock12,
    Clock2: () => Clock2,
    Clock3: () => Clock3,
    Clock4: () => Clock4,
    Clock5: () => Clock5,
    Clock6: () => Clock6,
    Clock7: () => Clock7,
    Clock8: () => Clock8,
    Clock9: () => Clock9,
    ClockArrowDown: () => ClockArrowDown,
    ClockArrowUp: () => ClockArrowUp,
    Cloud: () => Cloud,
    CloudCog: () => CloudCog,
    CloudDownload: () => CloudDownload,
    CloudDrizzle: () => CloudDrizzle,
    CloudFog: () => CloudFog,
    CloudHail: () => CloudHail,
    CloudLightning: () => CloudLightning,
    CloudMoon: () => CloudMoon,
    CloudMoonRain: () => CloudMoonRain,
    CloudOff: () => CloudOff,
    CloudRain: () => CloudRain,
    CloudRainWind: () => CloudRainWind,
    CloudSnow: () => CloudSnow,
    CloudSun: () => CloudSun,
    CloudSunRain: () => CloudSunRain,
    CloudUpload: () => CloudUpload,
    Cloudy: () => Cloudy,
    Clover: () => Clover,
    Club: () => Club,
    Code: () => Code,
    Code2: () => CodeXml,
    CodeSquare: () => SquareCode,
    CodeXml: () => CodeXml,
    Codepen: () => Codepen,
    Codesandbox: () => Codesandbox,
    Coffee: () => Coffee,
    Cog: () => Cog,
    Coins: () => Coins,
    Columns: () => Columns2,
    Columns2: () => Columns2,
    Columns3: () => Columns3,
    Columns4: () => Columns4,
    Combine: () => Combine,
    Command: () => Command,
    Compass: () => Compass,
    Component: () => Component,
    Computer: () => Computer,
    ConciergeBell: () => ConciergeBell,
    Cone: () => Cone,
    Construction: () => Construction,
    Contact: () => Contact,
    Contact2: () => ContactRound,
    ContactRound: () => ContactRound,
    Container: () => Container,
    Contrast: () => Contrast,
    Cookie: () => Cookie,
    CookingPot: () => CookingPot,
    Copy: () => Copy,
    CopyCheck: () => CopyCheck,
    CopyMinus: () => CopyMinus,
    CopyPlus: () => CopyPlus,
    CopySlash: () => CopySlash,
    CopyX: () => CopyX,
    Copyleft: () => Copyleft,
    Copyright: () => Copyright,
    CornerDownLeft: () => CornerDownLeft,
    CornerDownRight: () => CornerDownRight,
    CornerLeftDown: () => CornerLeftDown,
    CornerLeftUp: () => CornerLeftUp,
    CornerRightDown: () => CornerRightDown,
    CornerRightUp: () => CornerRightUp,
    CornerUpLeft: () => CornerUpLeft,
    CornerUpRight: () => CornerUpRight,
    Cpu: () => Cpu,
    CreativeCommons: () => CreativeCommons,
    CreditCard: () => CreditCard,
    Croissant: () => Croissant,
    Crop: () => Crop,
    Cross: () => Cross,
    Crosshair: () => Crosshair,
    Crown: () => Crown,
    Cuboid: () => Cuboid,
    CupSoda: () => CupSoda,
    CurlyBraces: () => Braces,
    Currency: () => Currency,
    Cylinder: () => Cylinder,
    Dam: () => Dam,
    Database: () => Database,
    DatabaseBackup: () => DatabaseBackup,
    DatabaseZap: () => DatabaseZap,
    Delete: () => Delete,
    Dessert: () => Dessert,
    Diameter: () => Diameter,
    Diamond: () => Diamond,
    DiamondMinus: () => DiamondMinus,
    DiamondPercent: () => DiamondPercent,
    DiamondPlus: () => DiamondPlus,
    Dice1: () => Dice1,
    Dice2: () => Dice2,
    Dice3: () => Dice3,
    Dice4: () => Dice4,
    Dice5: () => Dice5,
    Dice6: () => Dice6,
    Dices: () => Dices,
    Diff: () => Diff,
    Disc: () => Disc,
    Disc2: () => Disc2,
    Disc3: () => Disc3,
    DiscAlbum: () => DiscAlbum,
    Divide: () => Divide,
    DivideCircle: () => CircleDivide,
    DivideSquare: () => SquareDivide,
    Dna: () => Dna,
    DnaOff: () => DnaOff,
    Dock: () => Dock,
    Dog: () => Dog,
    DollarSign: () => DollarSign,
    Donut: () => Donut,
    DoorClosed: () => DoorClosed,
    DoorOpen: () => DoorOpen,
    Dot: () => Dot,
    DotSquare: () => SquareDot,
    Download: () => Download,
    DownloadCloud: () => CloudDownload,
    DraftingCompass: () => DraftingCompass,
    Drama: () => Drama,
    Dribbble: () => Dribbble,
    Drill: () => Drill,
    Droplet: () => Droplet,
    Droplets: () => Droplets,
    Drum: () => Drum,
    Drumstick: () => Drumstick,
    Dumbbell: () => Dumbbell,
    Ear: () => Ear,
    EarOff: () => EarOff,
    Earth: () => Earth,
    EarthLock: () => EarthLock,
    Eclipse: () => Eclipse,
    Edit: () => SquarePen,
    Edit2: () => Pen,
    Edit3: () => PenLine,
    Egg: () => Egg,
    EggFried: () => EggFried,
    EggOff: () => EggOff,
    Ellipsis: () => Ellipsis,
    EllipsisVertical: () => EllipsisVertical,
    Equal: () => Equal,
    EqualNot: () => EqualNot,
    EqualSquare: () => SquareEqual,
    Eraser: () => Eraser,
    Euro: () => Euro,
    Expand: () => Expand,
    ExternalLink: () => ExternalLink,
    Eye: () => Eye,
    EyeOff: () => EyeOff,
    Facebook: () => Facebook,
    Factory: () => Factory,
    Fan: () => Fan,
    FastForward: () => FastForward,
    Feather: () => Feather,
    Fence: () => Fence,
    FerrisWheel: () => FerrisWheel,
    Figma: () => Figma,
    File: () => File,
    FileArchive: () => FileArchive,
    FileAudio: () => FileAudio,
    FileAudio2: () => FileAudio2,
    FileAxis3D: () => FileAxis3d,
    FileAxis3d: () => FileAxis3d,
    FileBadge: () => FileBadge,
    FileBadge2: () => FileBadge2,
    FileBarChart: () => FileChartColumnIncreasing,
    FileBarChart2: () => FileChartColumn,
    FileBox: () => FileBox,
    FileChartColumn: () => FileChartColumn,
    FileChartColumnIncreasing: () => FileChartColumnIncreasing,
    FileChartLine: () => FileChartLine,
    FileChartPie: () => FileChartPie,
    FileCheck: () => FileCheck,
    FileCheck2: () => FileCheck2,
    FileClock: () => FileClock,
    FileCode: () => FileCode,
    FileCode2: () => FileCode2,
    FileCog: () => FileCog,
    FileCog2: () => FileCog,
    FileDiff: () => FileDiff,
    FileDigit: () => FileDigit,
    FileDown: () => FileDown,
    FileEdit: () => FilePen,
    FileHeart: () => FileHeart,
    FileImage: () => FileImage,
    FileInput: () => FileInput,
    FileJson: () => FileJson,
    FileJson2: () => FileJson2,
    FileKey: () => FileKey,
    FileKey2: () => FileKey2,
    FileLineChart: () => FileChartLine,
    FileLock: () => FileLock,
    FileLock2: () => FileLock2,
    FileMinus: () => FileMinus,
    FileMinus2: () => FileMinus2,
    FileMusic: () => FileMusic,
    FileOutput: () => FileOutput,
    FilePen: () => FilePen,
    FilePenLine: () => FilePenLine,
    FilePieChart: () => FileChartPie,
    FilePlus: () => FilePlus,
    FilePlus2: () => FilePlus2,
    FileQuestion: () => FileQuestion,
    FileScan: () => FileScan,
    FileSearch: () => FileSearch,
    FileSearch2: () => FileSearch2,
    FileSignature: () => FilePenLine,
    FileSliders: () => FileSliders,
    FileSpreadsheet: () => FileSpreadsheet,
    FileStack: () => FileStack,
    FileSymlink: () => FileSymlink,
    FileTerminal: () => FileTerminal,
    FileText: () => FileText,
    FileType: () => FileType,
    FileType2: () => FileType2,
    FileUp: () => FileUp,
    FileVideo: () => FileVideo,
    FileVideo2: () => FileVideo2,
    FileVolume: () => FileVolume,
    FileVolume2: () => FileVolume2,
    FileWarning: () => FileWarning,
    FileX: () => FileX,
    FileX2: () => FileX2,
    Files: () => Files,
    Film: () => Film,
    Filter: () => Filter,
    FilterX: () => FilterX,
    Fingerprint: () => Fingerprint,
    FireExtinguisher: () => FireExtinguisher,
    Fish: () => Fish,
    FishOff: () => FishOff,
    FishSymbol: () => FishSymbol,
    Flag: () => Flag,
    FlagOff: () => FlagOff,
    FlagTriangleLeft: () => FlagTriangleLeft,
    FlagTriangleRight: () => FlagTriangleRight,
    Flame: () => Flame,
    FlameKindling: () => FlameKindling,
    Flashlight: () => Flashlight,
    FlashlightOff: () => FlashlightOff,
    FlaskConical: () => FlaskConical,
    FlaskConicalOff: () => FlaskConicalOff,
    FlaskRound: () => FlaskRound,
    FlipHorizontal: () => FlipHorizontal,
    FlipHorizontal2: () => FlipHorizontal2,
    FlipVertical: () => FlipVertical,
    FlipVertical2: () => FlipVertical2,
    Flower: () => Flower,
    Flower2: () => Flower2,
    Focus: () => Focus,
    FoldHorizontal: () => FoldHorizontal,
    FoldVertical: () => FoldVertical,
    Folder: () => Folder,
    FolderArchive: () => FolderArchive,
    FolderCheck: () => FolderCheck,
    FolderClock: () => FolderClock,
    FolderClosed: () => FolderClosed,
    FolderCode: () => FolderCode,
    FolderCog: () => FolderCog,
    FolderCog2: () => FolderCog,
    FolderDot: () => FolderDot,
    FolderDown: () => FolderDown,
    FolderEdit: () => FolderPen,
    FolderGit: () => FolderGit,
    FolderGit2: () => FolderGit2,
    FolderHeart: () => FolderHeart,
    FolderInput: () => FolderInput,
    FolderKanban: () => FolderKanban,
    FolderKey: () => FolderKey,
    FolderLock: () => FolderLock,
    FolderMinus: () => FolderMinus,
    FolderOpen: () => FolderOpen,
    FolderOpenDot: () => FolderOpenDot,
    FolderOutput: () => FolderOutput,
    FolderPen: () => FolderPen,
    FolderPlus: () => FolderPlus,
    FolderRoot: () => FolderRoot,
    FolderSearch: () => FolderSearch,
    FolderSearch2: () => FolderSearch2,
    FolderSymlink: () => FolderSymlink,
    FolderSync: () => FolderSync,
    FolderTree: () => FolderTree,
    FolderUp: () => FolderUp,
    FolderX: () => FolderX,
    Folders: () => Folders,
    Footprints: () => Footprints,
    ForkKnife: () => Utensils,
    ForkKnifeCrossed: () => UtensilsCrossed,
    Forklift: () => Forklift,
    FormInput: () => RectangleEllipsis,
    Forward: () => Forward,
    Frame: () => Frame,
    Framer: () => Framer,
    Frown: () => Frown,
    Fuel: () => Fuel,
    Fullscreen: () => Fullscreen,
    FunctionSquare: () => SquareFunction,
    GalleryHorizontal: () => GalleryHorizontal,
    GalleryHorizontalEnd: () => GalleryHorizontalEnd,
    GalleryThumbnails: () => GalleryThumbnails,
    GalleryVertical: () => GalleryVertical,
    GalleryVerticalEnd: () => GalleryVerticalEnd,
    Gamepad: () => Gamepad,
    Gamepad2: () => Gamepad2,
    GanttChart: () => ChartNoAxesGantt,
    GanttChartSquare: () => SquareChartGantt,
    Gauge: () => Gauge,
    GaugeCircle: () => CircleGauge,
    Gavel: () => Gavel,
    Gem: () => Gem,
    Ghost: () => Ghost,
    Gift: () => Gift,
    GitBranch: () => GitBranch,
    GitBranchPlus: () => GitBranchPlus,
    GitCommit: () => GitCommitHorizontal,
    GitCommitHorizontal: () => GitCommitHorizontal,
    GitCommitVertical: () => GitCommitVertical,
    GitCompare: () => GitCompare,
    GitCompareArrows: () => GitCompareArrows,
    GitFork: () => GitFork,
    GitGraph: () => GitGraph,
    GitMerge: () => GitMerge,
    GitPullRequest: () => GitPullRequest,
    GitPullRequestArrow: () => GitPullRequestArrow,
    GitPullRequestClosed: () => GitPullRequestClosed,
    GitPullRequestCreate: () => GitPullRequestCreate,
    GitPullRequestCreateArrow: () => GitPullRequestCreateArrow,
    GitPullRequestDraft: () => GitPullRequestDraft,
    Github: () => Github,
    Gitlab: () => Gitlab,
    GlassWater: () => GlassWater,
    Glasses: () => Glasses,
    Globe: () => Globe,
    Globe2: () => Earth,
    GlobeLock: () => GlobeLock,
    Goal: () => Goal,
    Grab: () => Grab,
    GraduationCap: () => GraduationCap,
    Grape: () => Grape,
    Grid: () => Grid3x3,
    Grid2X2: () => Grid2x2,
    Grid2x2: () => Grid2x2,
    Grid2x2Check: () => Grid2x2Check,
    Grid2x2X: () => Grid2x2X,
    Grid3X3: () => Grid3x3,
    Grid3x3: () => Grid3x3,
    Grip: () => Grip,
    GripHorizontal: () => GripHorizontal,
    GripVertical: () => GripVertical,
    Group: () => Group,
    Guitar: () => Guitar,
    Ham: () => Ham,
    Hammer: () => Hammer,
    Hand: () => Hand,
    HandCoins: () => HandCoins,
    HandHeart: () => HandHeart,
    HandHelping: () => HandHelping,
    HandMetal: () => HandMetal,
    HandPlatter: () => HandPlatter,
    Handshake: () => Handshake,
    HardDrive: () => HardDrive,
    HardDriveDownload: () => HardDriveDownload,
    HardDriveUpload: () => HardDriveUpload,
    HardHat: () => HardHat,
    Hash: () => Hash,
    Haze: () => Haze,
    HdmiPort: () => HdmiPort,
    Heading: () => Heading,
    Heading1: () => Heading1,
    Heading2: () => Heading2,
    Heading3: () => Heading3,
    Heading4: () => Heading4,
    Heading5: () => Heading5,
    Heading6: () => Heading6,
    Headphones: () => Headphones,
    Headset: () => Headset,
    Heart: () => Heart,
    HeartCrack: () => HeartCrack,
    HeartHandshake: () => HeartHandshake,
    HeartOff: () => HeartOff,
    HeartPulse: () => HeartPulse,
    Heater: () => Heater,
    HelpCircle: () => CircleHelp,
    HelpingHand: () => HandHelping,
    Hexagon: () => Hexagon,
    Highlighter: () => Highlighter,
    History: () => History,
    Home: () => House,
    Hop: () => Hop,
    HopOff: () => HopOff,
    Hospital: () => Hospital,
    Hotel: () => Hotel,
    Hourglass: () => Hourglass,
    House: () => House,
    HousePlug: () => HousePlug,
    HousePlus: () => HousePlus,
    IceCream: () => IceCreamCone,
    IceCream2: () => IceCreamBowl,
    IceCreamBowl: () => IceCreamBowl,
    IceCreamCone: () => IceCreamCone,
    Image: () => Image,
    ImageDown: () => ImageDown,
    ImageMinus: () => ImageMinus,
    ImageOff: () => ImageOff,
    ImagePlay: () => ImagePlay,
    ImagePlus: () => ImagePlus,
    ImageUp: () => ImageUp,
    Images: () => Images,
    Import: () => Import,
    Inbox: () => Inbox,
    Indent: () => IndentIncrease,
    IndentDecrease: () => IndentDecrease,
    IndentIncrease: () => IndentIncrease,
    IndianRupee: () => IndianRupee,
    Infinity: () => Infinity,
    Info: () => Info,
    Inspect: () => SquareMousePointer,
    InspectionPanel: () => InspectionPanel,
    Instagram: () => Instagram,
    Italic: () => Italic,
    IterationCcw: () => IterationCcw,
    IterationCw: () => IterationCw,
    JapaneseYen: () => JapaneseYen,
    Joystick: () => Joystick,
    Kanban: () => Kanban,
    KanbanSquare: () => SquareKanban,
    KanbanSquareDashed: () => SquareDashedKanban,
    Key: () => Key,
    KeyRound: () => KeyRound,
    KeySquare: () => KeySquare,
    Keyboard: () => Keyboard,
    KeyboardMusic: () => KeyboardMusic,
    KeyboardOff: () => KeyboardOff,
    Lamp: () => Lamp,
    LampCeiling: () => LampCeiling,
    LampDesk: () => LampDesk,
    LampFloor: () => LampFloor,
    LampWallDown: () => LampWallDown,
    LampWallUp: () => LampWallUp,
    LandPlot: () => LandPlot,
    Landmark: () => Landmark,
    Languages: () => Languages,
    Laptop: () => Laptop,
    Laptop2: () => LaptopMinimal,
    LaptopMinimal: () => LaptopMinimal,
    Lasso: () => Lasso,
    LassoSelect: () => LassoSelect,
    Laugh: () => Laugh,
    Layers: () => Layers,
    Layers2: () => Layers2,
    Layers3: () => Layers3,
    Layout: () => PanelsTopLeft,
    LayoutDashboard: () => LayoutDashboard,
    LayoutGrid: () => LayoutGrid,
    LayoutList: () => LayoutList,
    LayoutPanelLeft: () => LayoutPanelLeft,
    LayoutPanelTop: () => LayoutPanelTop,
    LayoutTemplate: () => LayoutTemplate,
    Leaf: () => Leaf,
    LeafyGreen: () => LeafyGreen,
    Lectern: () => Lectern,
    LetterText: () => LetterText,
    Library: () => Library,
    LibraryBig: () => LibraryBig,
    LibrarySquare: () => SquareLibrary,
    LifeBuoy: () => LifeBuoy,
    Ligature: () => Ligature,
    Lightbulb: () => Lightbulb,
    LightbulbOff: () => LightbulbOff,
    LineChart: () => ChartLine,
    Link: () => Link,
    Link2: () => Link2,
    Link2Off: () => Link2Off,
    Linkedin: () => Linkedin,
    List: () => List,
    ListCheck: () => ListCheck,
    ListChecks: () => ListChecks,
    ListCollapse: () => ListCollapse,
    ListEnd: () => ListEnd,
    ListFilter: () => ListFilter,
    ListMinus: () => ListMinus,
    ListMusic: () => ListMusic,
    ListOrdered: () => ListOrdered,
    ListPlus: () => ListPlus,
    ListRestart: () => ListRestart,
    ListStart: () => ListStart,
    ListTodo: () => ListTodo,
    ListTree: () => ListTree,
    ListVideo: () => ListVideo,
    ListX: () => ListX,
    Loader: () => Loader,
    Loader2: () => LoaderCircle,
    LoaderCircle: () => LoaderCircle,
    LoaderPinwheel: () => LoaderPinwheel,
    Locate: () => Locate,
    LocateFixed: () => LocateFixed,
    LocateOff: () => LocateOff,
    Lock: () => Lock,
    LockKeyhole: () => LockKeyhole,
    LockKeyholeOpen: () => LockKeyholeOpen,
    LockOpen: () => LockOpen,
    LogIn: () => LogIn,
    LogOut: () => LogOut,
    Logs: () => Logs,
    Lollipop: () => Lollipop,
    Luggage: () => Luggage,
    MSquare: () => SquareM,
    Magnet: () => Magnet,
    Mail: () => Mail,
    MailCheck: () => MailCheck,
    MailMinus: () => MailMinus,
    MailOpen: () => MailOpen,
    MailPlus: () => MailPlus,
    MailQuestion: () => MailQuestion,
    MailSearch: () => MailSearch,
    MailWarning: () => MailWarning,
    MailX: () => MailX,
    Mailbox: () => Mailbox,
    Mails: () => Mails,
    Map: () => Map,
    MapPin: () => MapPin,
    MapPinCheck: () => MapPinCheck,
    MapPinCheckInside: () => MapPinCheckInside,
    MapPinMinus: () => MapPinMinus,
    MapPinMinusInside: () => MapPinMinusInside,
    MapPinOff: () => MapPinOff,
    MapPinPlus: () => MapPinPlus,
    MapPinPlusInside: () => MapPinPlusInside,
    MapPinX: () => MapPinX,
    MapPinXInside: () => MapPinXInside,
    MapPinned: () => MapPinned,
    Martini: () => Martini,
    Maximize: () => Maximize,
    Maximize2: () => Maximize2,
    Medal: () => Medal,
    Megaphone: () => Megaphone,
    MegaphoneOff: () => MegaphoneOff,
    Meh: () => Meh,
    MemoryStick: () => MemoryStick,
    Menu: () => Menu,
    MenuSquare: () => SquareMenu,
    Merge: () => Merge,
    MessageCircle: () => MessageCircle,
    MessageCircleCode: () => MessageCircleCode,
    MessageCircleDashed: () => MessageCircleDashed,
    MessageCircleHeart: () => MessageCircleHeart,
    MessageCircleMore: () => MessageCircleMore,
    MessageCircleOff: () => MessageCircleOff,
    MessageCirclePlus: () => MessageCirclePlus,
    MessageCircleQuestion: () => MessageCircleQuestion,
    MessageCircleReply: () => MessageCircleReply,
    MessageCircleWarning: () => MessageCircleWarning,
    MessageCircleX: () => MessageCircleX,
    MessageSquare: () => MessageSquare,
    MessageSquareCode: () => MessageSquareCode,
    MessageSquareDashed: () => MessageSquareDashed,
    MessageSquareDiff: () => MessageSquareDiff,
    MessageSquareDot: () => MessageSquareDot,
    MessageSquareHeart: () => MessageSquareHeart,
    MessageSquareMore: () => MessageSquareMore,
    MessageSquareOff: () => MessageSquareOff,
    MessageSquarePlus: () => MessageSquarePlus,
    MessageSquareQuote: () => MessageSquareQuote,
    MessageSquareReply: () => MessageSquareReply,
    MessageSquareShare: () => MessageSquareShare,
    MessageSquareText: () => MessageSquareText,
    MessageSquareWarning: () => MessageSquareWarning,
    MessageSquareX: () => MessageSquareX,
    MessagesSquare: () => MessagesSquare,
    Mic: () => Mic,
    Mic2: () => MicVocal,
    MicOff: () => MicOff,
    MicVocal: () => MicVocal,
    Microscope: () => Microscope,
    Microwave: () => Microwave,
    Milestone: () => Milestone,
    Milk: () => Milk,
    MilkOff: () => MilkOff,
    Minimize: () => Minimize,
    Minimize2: () => Minimize2,
    Minus: () => Minus,
    MinusCircle: () => CircleMinus,
    MinusSquare: () => SquareMinus,
    Monitor: () => Monitor,
    MonitorCheck: () => MonitorCheck,
    MonitorCog: () => MonitorCog,
    MonitorDot: () => MonitorDot,
    MonitorDown: () => MonitorDown,
    MonitorOff: () => MonitorOff,
    MonitorPause: () => MonitorPause,
    MonitorPlay: () => MonitorPlay,
    MonitorSmartphone: () => MonitorSmartphone,
    MonitorSpeaker: () => MonitorSpeaker,
    MonitorStop: () => MonitorStop,
    MonitorUp: () => MonitorUp,
    MonitorX: () => MonitorX,
    Moon: () => Moon,
    MoonStar: () => MoonStar,
    MoreHorizontal: () => Ellipsis,
    MoreVertical: () => EllipsisVertical,
    Mountain: () => Mountain,
    MountainSnow: () => MountainSnow,
    Mouse: () => Mouse,
    MouseOff: () => MouseOff,
    MousePointer: () => MousePointer,
    MousePointer2: () => MousePointer2,
    MousePointerBan: () => MousePointerBan,
    MousePointerClick: () => MousePointerClick,
    MousePointerSquareDashed: () => SquareDashedMousePointer,
    Move: () => Move,
    Move3D: () => Move3d,
    Move3d: () => Move3d,
    MoveDiagonal: () => MoveDiagonal,
    MoveDiagonal2: () => MoveDiagonal2,
    MoveDown: () => MoveDown,
    MoveDownLeft: () => MoveDownLeft,
    MoveDownRight: () => MoveDownRight,
    MoveHorizontal: () => MoveHorizontal,
    MoveLeft: () => MoveLeft,
    MoveRight: () => MoveRight,
    MoveUp: () => MoveUp,
    MoveUpLeft: () => MoveUpLeft,
    MoveUpRight: () => MoveUpRight,
    MoveVertical: () => MoveVertical,
    Music: () => Music,
    Music2: () => Music2,
    Music3: () => Music3,
    Music4: () => Music4,
    Navigation: () => Navigation,
    Navigation2: () => Navigation2,
    Navigation2Off: () => Navigation2Off,
    NavigationOff: () => NavigationOff,
    Network: () => Network,
    Newspaper: () => Newspaper,
    Nfc: () => Nfc,
    Notebook: () => Notebook,
    NotebookPen: () => NotebookPen,
    NotebookTabs: () => NotebookTabs,
    NotebookText: () => NotebookText,
    NotepadText: () => NotepadText,
    NotepadTextDashed: () => NotepadTextDashed,
    Nut: () => Nut,
    NutOff: () => NutOff,
    Octagon: () => Octagon,
    OctagonAlert: () => OctagonAlert,
    OctagonPause: () => OctagonPause,
    OctagonX: () => OctagonX,
    Option: () => Option,
    Orbit: () => Orbit,
    Origami: () => Origami,
    Outdent: () => IndentDecrease,
    Package: () => Package,
    Package2: () => Package2,
    PackageCheck: () => PackageCheck,
    PackageMinus: () => PackageMinus,
    PackageOpen: () => PackageOpen,
    PackagePlus: () => PackagePlus,
    PackageSearch: () => PackageSearch,
    PackageX: () => PackageX,
    PaintBucket: () => PaintBucket,
    PaintRoller: () => PaintRoller,
    Paintbrush: () => Paintbrush,
    Paintbrush2: () => PaintbrushVertical,
    PaintbrushVertical: () => PaintbrushVertical,
    Palette: () => Palette,
    Palmtree: () => TreePalm,
    PanelBottom: () => PanelBottom,
    PanelBottomClose: () => PanelBottomClose,
    PanelBottomDashed: () => PanelBottomDashed,
    PanelBottomInactive: () => PanelBottomDashed,
    PanelBottomOpen: () => PanelBottomOpen,
    PanelLeft: () => PanelLeft,
    PanelLeftClose: () => PanelLeftClose,
    PanelLeftDashed: () => PanelLeftDashed,
    PanelLeftInactive: () => PanelLeftDashed,
    PanelLeftOpen: () => PanelLeftOpen,
    PanelRight: () => PanelRight,
    PanelRightClose: () => PanelRightClose,
    PanelRightDashed: () => PanelRightDashed,
    PanelRightInactive: () => PanelRightDashed,
    PanelRightOpen: () => PanelRightOpen,
    PanelTop: () => PanelTop,
    PanelTopClose: () => PanelTopClose,
    PanelTopDashed: () => PanelTopDashed,
    PanelTopInactive: () => PanelTopDashed,
    PanelTopOpen: () => PanelTopOpen,
    PanelsLeftBottom: () => PanelsLeftBottom,
    PanelsLeftRight: () => Columns3,
    PanelsRightBottom: () => PanelsRightBottom,
    PanelsTopBottom: () => Rows3,
    PanelsTopLeft: () => PanelsTopLeft,
    Paperclip: () => Paperclip,
    Parentheses: () => Parentheses,
    ParkingCircle: () => CircleParking,
    ParkingCircleOff: () => CircleParkingOff,
    ParkingMeter: () => ParkingMeter,
    ParkingSquare: () => SquareParking,
    ParkingSquareOff: () => SquareParkingOff,
    PartyPopper: () => PartyPopper,
    Pause: () => Pause,
    PauseCircle: () => CirclePause,
    PauseOctagon: () => OctagonPause,
    PawPrint: () => PawPrint,
    PcCase: () => PcCase,
    Pen: () => Pen,
    PenBox: () => SquarePen,
    PenLine: () => PenLine,
    PenOff: () => PenOff,
    PenSquare: () => SquarePen,
    PenTool: () => PenTool,
    Pencil: () => Pencil,
    PencilLine: () => PencilLine,
    PencilOff: () => PencilOff,
    PencilRuler: () => PencilRuler,
    Pentagon: () => Pentagon,
    Percent: () => Percent,
    PercentCircle: () => CirclePercent,
    PercentDiamond: () => DiamondPercent,
    PercentSquare: () => SquarePercent,
    PersonStanding: () => PersonStanding,
    PhilippinePeso: () => PhilippinePeso,
    Phone: () => Phone,
    PhoneCall: () => PhoneCall,
    PhoneForwarded: () => PhoneForwarded,
    PhoneIncoming: () => PhoneIncoming,
    PhoneMissed: () => PhoneMissed,
    PhoneOff: () => PhoneOff,
    PhoneOutgoing: () => PhoneOutgoing,
    Pi: () => Pi,
    PiSquare: () => SquarePi,
    Piano: () => Piano,
    Pickaxe: () => Pickaxe,
    PictureInPicture: () => PictureInPicture,
    PictureInPicture2: () => PictureInPicture2,
    PieChart: () => ChartPie,
    PiggyBank: () => PiggyBank,
    Pilcrow: () => Pilcrow,
    PilcrowLeft: () => PilcrowLeft,
    PilcrowRight: () => PilcrowRight,
    PilcrowSquare: () => SquarePilcrow,
    Pill: () => Pill,
    PillBottle: () => PillBottle,
    Pin: () => Pin,
    PinOff: () => PinOff,
    Pipette: () => Pipette,
    Pizza: () => Pizza,
    Plane: () => Plane,
    PlaneLanding: () => PlaneLanding,
    PlaneTakeoff: () => PlaneTakeoff,
    Play: () => Play,
    PlayCircle: () => CirclePlay,
    PlaySquare: () => SquarePlay,
    Plug: () => Plug,
    Plug2: () => Plug2,
    PlugZap: () => PlugZap,
    PlugZap2: () => PlugZap,
    Plus: () => Plus,
    PlusCircle: () => CirclePlus,
    PlusSquare: () => SquarePlus,
    Pocket: () => Pocket,
    PocketKnife: () => PocketKnife,
    Podcast: () => Podcast,
    Pointer: () => Pointer,
    PointerOff: () => PointerOff,
    Popcorn: () => Popcorn,
    Popsicle: () => Popsicle,
    PoundSterling: () => PoundSterling,
    Power: () => Power,
    PowerCircle: () => CirclePower,
    PowerOff: () => PowerOff,
    PowerSquare: () => SquarePower,
    Presentation: () => Presentation,
    Printer: () => Printer,
    PrinterCheck: () => PrinterCheck,
    Projector: () => Projector,
    Proportions: () => Proportions,
    Puzzle: () => Puzzle,
    Pyramid: () => Pyramid,
    QrCode: () => QrCode,
    Quote: () => Quote,
    Rabbit: () => Rabbit,
    Radar: () => Radar,
    Radiation: () => Radiation,
    Radical: () => Radical,
    Radio: () => Radio,
    RadioReceiver: () => RadioReceiver,
    RadioTower: () => RadioTower,
    Radius: () => Radius,
    RailSymbol: () => RailSymbol,
    Rainbow: () => Rainbow,
    Rat: () => Rat,
    Ratio: () => Ratio,
    Receipt: () => Receipt,
    ReceiptCent: () => ReceiptCent,
    ReceiptEuro: () => ReceiptEuro,
    ReceiptIndianRupee: () => ReceiptIndianRupee,
    ReceiptJapaneseYen: () => ReceiptJapaneseYen,
    ReceiptPoundSterling: () => ReceiptPoundSterling,
    ReceiptRussianRuble: () => ReceiptRussianRuble,
    ReceiptSwissFranc: () => ReceiptSwissFranc,
    ReceiptText: () => ReceiptText,
    RectangleEllipsis: () => RectangleEllipsis,
    RectangleHorizontal: () => RectangleHorizontal,
    RectangleVertical: () => RectangleVertical,
    Recycle: () => Recycle,
    Redo: () => Redo,
    Redo2: () => Redo2,
    RedoDot: () => RedoDot,
    RefreshCcw: () => RefreshCcw,
    RefreshCcwDot: () => RefreshCcwDot,
    RefreshCw: () => RefreshCw,
    RefreshCwOff: () => RefreshCwOff,
    Refrigerator: () => Refrigerator,
    Regex: () => Regex,
    RemoveFormatting: () => RemoveFormatting,
    Repeat: () => Repeat,
    Repeat1: () => Repeat1,
    Repeat2: () => Repeat2,
    Replace: () => Replace,
    ReplaceAll: () => ReplaceAll,
    Reply: () => Reply,
    ReplyAll: () => ReplyAll,
    Rewind: () => Rewind,
    Ribbon: () => Ribbon,
    Rocket: () => Rocket,
    RockingChair: () => RockingChair,
    RollerCoaster: () => RollerCoaster,
    Rotate3D: () => Rotate3d,
    Rotate3d: () => Rotate3d,
    RotateCcw: () => RotateCcw,
    RotateCcwSquare: () => RotateCcwSquare,
    RotateCw: () => RotateCw,
    RotateCwSquare: () => RotateCwSquare,
    Route: () => Route,
    RouteOff: () => RouteOff,
    Router: () => Router,
    Rows: () => Rows2,
    Rows2: () => Rows2,
    Rows3: () => Rows3,
    Rows4: () => Rows4,
    Rss: () => Rss,
    Ruler: () => Ruler,
    RussianRuble: () => RussianRuble,
    Sailboat: () => Sailboat,
    Salad: () => Salad,
    Sandwich: () => Sandwich,
    Satellite: () => Satellite,
    SatelliteDish: () => SatelliteDish,
    Save: () => Save,
    SaveAll: () => SaveAll,
    SaveOff: () => SaveOff,
    Scale: () => Scale,
    Scale3D: () => Scale3d,
    Scale3d: () => Scale3d,
    Scaling: () => Scaling,
    Scan: () => Scan,
    ScanBarcode: () => ScanBarcode,
    ScanEye: () => ScanEye,
    ScanFace: () => ScanFace,
    ScanLine: () => ScanLine,
    ScanQrCode: () => ScanQrCode,
    ScanSearch: () => ScanSearch,
    ScanText: () => ScanText,
    ScatterChart: () => ChartScatter,
    School: () => School,
    School2: () => University,
    Scissors: () => Scissors,
    ScissorsLineDashed: () => ScissorsLineDashed,
    ScissorsSquare: () => SquareScissors,
    ScissorsSquareDashedBottom: () => SquareBottomDashedScissors,
    ScreenShare: () => ScreenShare,
    ScreenShareOff: () => ScreenShareOff,
    Scroll: () => Scroll,
    ScrollText: () => ScrollText,
    Search: () => Search,
    SearchCheck: () => SearchCheck,
    SearchCode: () => SearchCode,
    SearchSlash: () => SearchSlash,
    SearchX: () => SearchX,
    Section: () => Section,
    Send: () => Send,
    SendHorizonal: () => SendHorizontal,
    SendHorizontal: () => SendHorizontal,
    SendToBack: () => SendToBack,
    SeparatorHorizontal: () => SeparatorHorizontal,
    SeparatorVertical: () => SeparatorVertical,
    Server: () => Server,
    ServerCog: () => ServerCog,
    ServerCrash: () => ServerCrash,
    ServerOff: () => ServerOff,
    Settings: () => Settings,
    Settings2: () => Settings2,
    Shapes: () => Shapes,
    Share: () => Share,
    Share2: () => Share2,
    Sheet: () => Sheet,
    Shell: () => Shell,
    Shield: () => Shield,
    ShieldAlert: () => ShieldAlert,
    ShieldBan: () => ShieldBan,
    ShieldCheck: () => ShieldCheck,
    ShieldClose: () => ShieldX,
    ShieldEllipsis: () => ShieldEllipsis,
    ShieldHalf: () => ShieldHalf,
    ShieldMinus: () => ShieldMinus,
    ShieldOff: () => ShieldOff,
    ShieldPlus: () => ShieldPlus,
    ShieldQuestion: () => ShieldQuestion,
    ShieldX: () => ShieldX,
    Ship: () => Ship,
    ShipWheel: () => ShipWheel,
    Shirt: () => Shirt,
    ShoppingBag: () => ShoppingBag,
    ShoppingBasket: () => ShoppingBasket,
    ShoppingCart: () => ShoppingCart,
    Shovel: () => Shovel,
    ShowerHead: () => ShowerHead,
    Shrink: () => Shrink,
    Shrub: () => Shrub,
    Shuffle: () => Shuffle,
    Sidebar: () => PanelLeft,
    SidebarClose: () => PanelLeftClose,
    SidebarOpen: () => PanelLeftOpen,
    Sigma: () => Sigma,
    SigmaSquare: () => SquareSigma,
    Signal: () => Signal,
    SignalHigh: () => SignalHigh,
    SignalLow: () => SignalLow,
    SignalMedium: () => SignalMedium,
    SignalZero: () => SignalZero,
    Signature: () => Signature,
    Signpost: () => Signpost,
    SignpostBig: () => SignpostBig,
    Siren: () => Siren,
    SkipBack: () => SkipBack,
    SkipForward: () => SkipForward,
    Skull: () => Skull,
    Slack: () => Slack,
    Slash: () => Slash,
    SlashSquare: () => SquareSlash,
    Slice: () => Slice,
    Sliders: () => SlidersVertical,
    SlidersHorizontal: () => SlidersHorizontal,
    SlidersVertical: () => SlidersVertical,
    Smartphone: () => Smartphone,
    SmartphoneCharging: () => SmartphoneCharging,
    SmartphoneNfc: () => SmartphoneNfc,
    Smile: () => Smile,
    SmilePlus: () => SmilePlus,
    Snail: () => Snail,
    Snowflake: () => Snowflake,
    Sofa: () => Sofa,
    SortAsc: () => ArrowUpNarrowWide,
    SortDesc: () => ArrowDownWideNarrow,
    Soup: () => Soup,
    Space: () => Space,
    Spade: () => Spade,
    Sparkle: () => Sparkle,
    Sparkles: () => Sparkles,
    Speaker: () => Speaker,
    Speech: () => Speech,
    SpellCheck: () => SpellCheck,
    SpellCheck2: () => SpellCheck2,
    Spline: () => Spline,
    Split: () => Split,
    SplitSquareHorizontal: () => SquareSplitHorizontal,
    SplitSquareVertical: () => SquareSplitVertical,
    SprayCan: () => SprayCan,
    Sprout: () => Sprout,
    Square: () => Square,
    SquareActivity: () => SquareActivity,
    SquareArrowDown: () => SquareArrowDown,
    SquareArrowDownLeft: () => SquareArrowDownLeft,
    SquareArrowDownRight: () => SquareArrowDownRight,
    SquareArrowLeft: () => SquareArrowLeft,
    SquareArrowOutDownLeft: () => SquareArrowOutDownLeft,
    SquareArrowOutDownRight: () => SquareArrowOutDownRight,
    SquareArrowOutUpLeft: () => SquareArrowOutUpLeft,
    SquareArrowOutUpRight: () => SquareArrowOutUpRight,
    SquareArrowRight: () => SquareArrowRight,
    SquareArrowUp: () => SquareArrowUp,
    SquareArrowUpLeft: () => SquareArrowUpLeft,
    SquareArrowUpRight: () => SquareArrowUpRight,
    SquareAsterisk: () => SquareAsterisk,
    SquareBottomDashedScissors: () => SquareBottomDashedScissors,
    SquareChartGantt: () => SquareChartGantt,
    SquareCheck: () => SquareCheck,
    SquareCheckBig: () => SquareCheckBig,
    SquareChevronDown: () => SquareChevronDown,
    SquareChevronLeft: () => SquareChevronLeft,
    SquareChevronRight: () => SquareChevronRight,
    SquareChevronUp: () => SquareChevronUp,
    SquareCode: () => SquareCode,
    SquareDashedBottom: () => SquareDashedBottom,
    SquareDashedBottomCode: () => SquareDashedBottomCode,
    SquareDashedKanban: () => SquareDashedKanban,
    SquareDashedMousePointer: () => SquareDashedMousePointer,
    SquareDivide: () => SquareDivide,
    SquareDot: () => SquareDot,
    SquareEqual: () => SquareEqual,
    SquareFunction: () => SquareFunction,
    SquareGanttChart: () => SquareChartGantt,
    SquareKanban: () => SquareKanban,
    SquareLibrary: () => SquareLibrary,
    SquareM: () => SquareM,
    SquareMenu: () => SquareMenu,
    SquareMinus: () => SquareMinus,
    SquareMousePointer: () => SquareMousePointer,
    SquareParking: () => SquareParking,
    SquareParkingOff: () => SquareParkingOff,
    SquarePen: () => SquarePen,
    SquarePercent: () => SquarePercent,
    SquarePi: () => SquarePi,
    SquarePilcrow: () => SquarePilcrow,
    SquarePlay: () => SquarePlay,
    SquarePlus: () => SquarePlus,
    SquarePower: () => SquarePower,
    SquareRadical: () => SquareRadical,
    SquareScissors: () => SquareScissors,
    SquareSigma: () => SquareSigma,
    SquareSlash: () => SquareSlash,
    SquareSplitHorizontal: () => SquareSplitHorizontal,
    SquareSplitVertical: () => SquareSplitVertical,
    SquareSquare: () => SquareSquare,
    SquareStack: () => SquareStack,
    SquareTerminal: () => SquareTerminal,
    SquareUser: () => SquareUser,
    SquareUserRound: () => SquareUserRound,
    SquareX: () => SquareX,
    Squircle: () => Squircle,
    Squirrel: () => Squirrel,
    Stamp: () => Stamp,
    Star: () => Star,
    StarHalf: () => StarHalf,
    StarOff: () => StarOff,
    Stars: () => Sparkles,
    StepBack: () => StepBack,
    StepForward: () => StepForward,
    Stethoscope: () => Stethoscope,
    Sticker: () => Sticker,
    StickyNote: () => StickyNote,
    StopCircle: () => CircleStop,
    Store: () => Store,
    StretchHorizontal: () => StretchHorizontal,
    StretchVertical: () => StretchVertical,
    Strikethrough: () => Strikethrough,
    Subscript: () => Subscript,
    Subtitles: () => Captions,
    Sun: () => Sun,
    SunDim: () => SunDim,
    SunMedium: () => SunMedium,
    SunMoon: () => SunMoon,
    SunSnow: () => SunSnow,
    Sunrise: () => Sunrise,
    Sunset: () => Sunset,
    Superscript: () => Superscript,
    SwatchBook: () => SwatchBook,
    SwissFranc: () => SwissFranc,
    SwitchCamera: () => SwitchCamera,
    Sword: () => Sword,
    Swords: () => Swords,
    Syringe: () => Syringe,
    Table: () => Table,
    Table2: () => Table2,
    TableCellsMerge: () => TableCellsMerge,
    TableCellsSplit: () => TableCellsSplit,
    TableColumnsSplit: () => TableColumnsSplit,
    TableProperties: () => TableProperties,
    TableRowsSplit: () => TableRowsSplit,
    Tablet: () => Tablet,
    TabletSmartphone: () => TabletSmartphone,
    Tablets: () => Tablets,
    Tag: () => Tag,
    Tags: () => Tags,
    Tally1: () => Tally1,
    Tally2: () => Tally2,
    Tally3: () => Tally3,
    Tally4: () => Tally4,
    Tally5: () => Tally5,
    Tangent: () => Tangent,
    Target: () => Target,
    Telescope: () => Telescope,
    Tent: () => Tent,
    TentTree: () => TentTree,
    Terminal: () => Terminal,
    TerminalSquare: () => SquareTerminal,
    TestTube: () => TestTube,
    TestTube2: () => TestTubeDiagonal,
    TestTubeDiagonal: () => TestTubeDiagonal,
    TestTubes: () => TestTubes,
    Text: () => Text,
    TextCursor: () => TextCursor,
    TextCursorInput: () => TextCursorInput,
    TextQuote: () => TextQuote,
    TextSearch: () => TextSearch,
    TextSelect: () => TextSelect,
    TextSelection: () => TextSelect,
    Theater: () => Theater,
    Thermometer: () => Thermometer,
    ThermometerSnowflake: () => ThermometerSnowflake,
    ThermometerSun: () => ThermometerSun,
    ThumbsDown: () => ThumbsDown,
    ThumbsUp: () => ThumbsUp,
    Ticket: () => Ticket,
    TicketCheck: () => TicketCheck,
    TicketMinus: () => TicketMinus,
    TicketPercent: () => TicketPercent,
    TicketPlus: () => TicketPlus,
    TicketSlash: () => TicketSlash,
    TicketX: () => TicketX,
    Timer: () => Timer,
    TimerOff: () => TimerOff,
    TimerReset: () => TimerReset,
    ToggleLeft: () => ToggleLeft,
    ToggleRight: () => ToggleRight,
    Tornado: () => Tornado,
    Torus: () => Torus,
    Touchpad: () => Touchpad,
    TouchpadOff: () => TouchpadOff,
    TowerControl: () => TowerControl,
    ToyBrick: () => ToyBrick,
    Tractor: () => Tractor,
    TrafficCone: () => TrafficCone,
    Train: () => TramFront,
    TrainFront: () => TrainFront,
    TrainFrontTunnel: () => TrainFrontTunnel,
    TrainTrack: () => TrainTrack,
    TramFront: () => TramFront,
    Trash: () => Trash,
    Trash2: () => Trash2,
    TreeDeciduous: () => TreeDeciduous,
    TreePalm: () => TreePalm,
    TreePine: () => TreePine,
    Trees: () => Trees,
    Trello: () => Trello,
    TrendingDown: () => TrendingDown,
    TrendingUp: () => TrendingUp,
    Triangle: () => Triangle,
    TriangleAlert: () => TriangleAlert,
    TriangleRight: () => TriangleRight,
    Trophy: () => Trophy,
    Truck: () => Truck,
    Turtle: () => Turtle,
    Tv: () => Tv,
    Tv2: () => TvMinimal,
    TvMinimal: () => TvMinimal,
    TvMinimalPlay: () => TvMinimalPlay,
    Twitch: () => Twitch,
    Twitter: () => Twitter,
    Type: () => Type,
    TypeOutline: () => TypeOutline,
    Umbrella: () => Umbrella,
    UmbrellaOff: () => UmbrellaOff,
    Underline: () => Underline,
    Undo: () => Undo,
    Undo2: () => Undo2,
    UndoDot: () => UndoDot,
    UnfoldHorizontal: () => UnfoldHorizontal,
    UnfoldVertical: () => UnfoldVertical,
    Ungroup: () => Ungroup,
    University: () => University,
    Unlink: () => Unlink,
    Unlink2: () => Unlink2,
    Unlock: () => LockOpen,
    UnlockKeyhole: () => LockKeyholeOpen,
    Unplug: () => Unplug,
    Upload: () => Upload,
    UploadCloud: () => CloudUpload,
    Usb: () => Usb,
    User: () => User,
    User2: () => UserRound,
    UserCheck: () => UserCheck,
    UserCheck2: () => UserRoundCheck,
    UserCircle: () => CircleUser,
    UserCircle2: () => CircleUserRound,
    UserCog: () => UserCog,
    UserCog2: () => UserRoundCog,
    UserMinus: () => UserMinus,
    UserMinus2: () => UserRoundMinus,
    UserPen: () => UserPen,
    UserPlus: () => UserPlus,
    UserPlus2: () => UserRoundPlus,
    UserRound: () => UserRound,
    UserRoundCheck: () => UserRoundCheck,
    UserRoundCog: () => UserRoundCog,
    UserRoundMinus: () => UserRoundMinus,
    UserRoundPen: () => UserRoundPen,
    UserRoundPlus: () => UserRoundPlus,
    UserRoundSearch: () => UserRoundSearch,
    UserRoundX: () => UserRoundX,
    UserSearch: () => UserSearch,
    UserSquare: () => SquareUser,
    UserSquare2: () => SquareUserRound,
    UserX: () => UserX,
    UserX2: () => UserRoundX,
    Users: () => Users,
    Users2: () => UsersRound,
    UsersRound: () => UsersRound,
    Utensils: () => Utensils,
    UtensilsCrossed: () => UtensilsCrossed,
    UtilityPole: () => UtilityPole,
    Variable: () => Variable,
    Vault: () => Vault,
    Vegan: () => Vegan,
    VenetianMask: () => VenetianMask,
    Verified: () => BadgeCheck,
    Vibrate: () => Vibrate,
    VibrateOff: () => VibrateOff,
    Video: () => Video,
    VideoOff: () => VideoOff,
    Videotape: () => Videotape,
    View: () => View,
    Voicemail: () => Voicemail,
    Volume: () => Volume,
    Volume1: () => Volume1,
    Volume2: () => Volume2,
    VolumeX: () => VolumeX,
    Vote: () => Vote,
    Wallet: () => Wallet,
    Wallet2: () => WalletMinimal,
    WalletCards: () => WalletCards,
    WalletMinimal: () => WalletMinimal,
    Wallpaper: () => Wallpaper,
    Wand: () => Wand,
    Wand2: () => WandSparkles,
    WandSparkles: () => WandSparkles,
    Warehouse: () => Warehouse,
    WashingMachine: () => WashingMachine,
    Watch: () => Watch,
    Waves: () => Waves,
    Waypoints: () => Waypoints,
    Webcam: () => Webcam,
    Webhook: () => Webhook,
    WebhookOff: () => WebhookOff,
    Weight: () => Weight,
    Wheat: () => Wheat,
    WheatOff: () => WheatOff,
    WholeWord: () => WholeWord,
    Wifi: () => Wifi,
    WifiHigh: () => WifiHigh,
    WifiLow: () => WifiLow,
    WifiOff: () => WifiOff,
    WifiZero: () => WifiZero,
    Wind: () => Wind,
    Wine: () => Wine,
    WineOff: () => WineOff,
    Workflow: () => Workflow,
    Worm: () => Worm,
    WrapText: () => WrapText,
    Wrench: () => Wrench,
    X: () => X,
    XCircle: () => CircleX,
    XOctagon: () => OctagonX,
    XSquare: () => SquareX,
    Youtube: () => Youtube,
    Zap: () => Zap,
    ZapOff: () => ZapOff,
    ZoomIn: () => ZoomIn,
    ZoomOut: () => ZoomOut
  });

  // node_modules/lucide/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // node_modules/lucide/dist/esm/icons/a-arrow-down.js
  var AArrowDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3.5 13h6" }],
      ["path", { d: "m2 16 4.5-9 4.5 9" }],
      ["path", { d: "M18 7v9" }],
      ["path", { d: "m14 12 4 4 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/a-arrow-up.js
  var AArrowUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3.5 13h6" }],
      ["path", { d: "m2 16 4.5-9 4.5 9" }],
      ["path", { d: "M18 16V7" }],
      ["path", { d: "m14 11 4-4 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/a-large-small.js
  var ALargeSmall = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 14h-5" }],
      ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" }],
      ["path", { d: "M4.5 13h6" }],
      ["path", { d: "m3 16 4.5-9 4.5 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/accessibility.js
  var Accessibility = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "16", cy: "4", r: "1" }],
      ["path", { d: "m18 19 1-7-6 1" }],
      ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }],
      ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }],
      ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/activity.js
  var Activity = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/air-vent.js
  var AirVent = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 8h12" }],
      ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" }],
      ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/airplay.js
  var Airplay = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }],
      ["path", { d: "m12 15 5 6H7Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/alarm-clock-check.js
  var AlarmClockCheck = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }],
      ["path", { d: "m9 13 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/alarm-clock-minus.js
  var AlarmClockMinus = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }],
      ["path", { d: "M9 13h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/alarm-clock-off.js
  var AlarmClockOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }],
      ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.26 18.67 4 21" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M4 4 2 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/alarm-clock-plus.js
  var AlarmClockPlus = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }],
      ["path", { d: "M12 10v6" }],
      ["path", { d: "M9 13h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/alarm-clock.js
  var AlarmClock = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M12 9v4l2 2" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/alarm-smoke.js
  var AlarmSmoke = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 21c0-2.5 2-2.5 2-5" }],
      ["path", { d: "M16 21c0-2.5 2-2.5 2-5" }],
      ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }],
      ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }],
      ["path", { d: "M6 21c0-2.5 2-2.5 2-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/album.js
  var Album = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["polyline", { points: "11 3 11 11 14 8 17 11 17 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-center-horizontal.js
  var AlignCenterHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 12h20" }],
      ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }],
      ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }],
      ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-center-vertical.js
  var AlignCenterVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v20" }],
      ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }],
      ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }],
      ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }],
      ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-center.js
  var AlignCenter = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
      ["line", { x1: "17", x2: "7", y1: "12", y2: "12" }],
      ["line", { x1: "19", x2: "5", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-end-horizontal.js
  var AlignEndHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }],
      ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }],
      ["path", { d: "M22 22H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-end-vertical.js
  var AlignEndVertical = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }],
      ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }],
      ["path", { d: "M22 22V2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-distribute-center.js
  var AlignHorizontalDistributeCenter = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
      ["path", { d: "M17 22v-5" }],
      ["path", { d: "M17 7V2" }],
      ["path", { d: "M7 22v-3" }],
      ["path", { d: "M7 5V2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-distribute-end.js
  var AlignHorizontalDistributeEnd = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
      ["path", { d: "M10 2v20" }],
      ["path", { d: "M20 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-distribute-start.js
  var AlignHorizontalDistributeStart = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
      ["path", { d: "M4 2v20" }],
      ["path", { d: "M14 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-justify-center.js
  var AlignHorizontalJustifyCenter = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
      ["path", { d: "M12 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-justify-end.js
  var AlignHorizontalJustifyEnd = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2" }],
      ["path", { d: "M22 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-justify-start.js
  var AlignHorizontalJustifyStart = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
      ["path", { d: "M2 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-space-around.js
  var AlignHorizontalSpaceAround = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }],
      ["path", { d: "M4 22V2" }],
      ["path", { d: "M20 22V2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-horizontal-space-between.js
  var AlignHorizontalSpaceBetween = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }],
      ["path", { d: "M3 2v20" }],
      ["path", { d: "M21 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-justify.js
  var AlignJustify = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "3", x2: "21", y1: "6", y2: "6" }],
      ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }],
      ["line", { x1: "3", x2: "21", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-left.js
  var AlignLeft = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
      ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }],
      ["line", { x1: "17", x2: "3", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-right.js
  var AlignRight = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
      ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }],
      ["line", { x1: "21", x2: "7", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-start-horizontal.js
  var AlignStartHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }],
      ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }],
      ["path", { d: "M22 2H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-start-vertical.js
  var AlignStartVertical = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }],
      ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }],
      ["path", { d: "M2 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-distribute-center.js
  var AlignVerticalDistributeCenter = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 17h-3" }],
      ["path", { d: "M22 7h-5" }],
      ["path", { d: "M5 17H2" }],
      ["path", { d: "M7 7H2" }],
      ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2" }],
      ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-distribute-end.js
  var AlignVerticalDistributeEnd = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
      ["path", { d: "M2 20h20" }],
      ["path", { d: "M2 10h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-distribute-start.js
  var AlignVerticalDistributeStart = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
      ["path", { d: "M2 14h20" }],
      ["path", { d: "M2 4h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-justify-center.js
  var AlignVerticalJustifyCenter = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
      ["path", { d: "M2 12h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-justify-end.js
  var AlignVerticalJustifyEnd = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
      ["path", { d: "M2 22h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-justify-start.js
  var AlignVerticalJustifyStart = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2" }],
      ["path", { d: "M2 2h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-space-around.js
  var AlignVerticalSpaceAround = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2" }],
      ["path", { d: "M22 20H2" }],
      ["path", { d: "M22 4H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/align-vertical-space-between.js
  var AlignVerticalSpaceBetween = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }],
      ["path", { d: "M2 21h20" }],
      ["path", { d: "M2 3h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ambulance.js
  var Ambulance = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 10H6" }],
      ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
      [
        "path",
        {
          d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
        }
      ],
      ["path", { d: "M8 8v4" }],
      ["path", { d: "M9 18h6" }],
      ["circle", { cx: "17", cy: "18", r: "2" }],
      ["circle", { cx: "7", cy: "18", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ampersand.js
  var Ampersand = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
        }
      ],
      ["path", { d: "M16 12h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ampersands.js
  var Ampersands = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
      ],
      [
        "path",
        { d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/anchor.js
  var Anchor = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22V8" }],
      ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }],
      ["circle", { cx: "12", cy: "5", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/angry.js
  var Angry = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
      ["path", { d: "M7.5 8 10 9" }],
      ["path", { d: "m14 9 2.5-1" }],
      ["path", { d: "M9 10h.01" }],
      ["path", { d: "M15 10h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/annoyed.js
  var Annoyed = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 15h8" }],
      ["path", { d: "M8 9h2" }],
      ["path", { d: "M14 9h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/antenna.js
  var Antenna = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 12 7 2" }],
      ["path", { d: "m7 12 5-10" }],
      ["path", { d: "m12 12 5-10" }],
      ["path", { d: "m17 12 5-10" }],
      ["path", { d: "M4.5 7h15" }],
      ["path", { d: "M12 16v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/anvil.js
  var Anvil = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }],
      ["path", { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }],
      ["path", { d: "M9 12v5" }],
      ["path", { d: "M15 12v5" }],
      ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/aperture.js
  var Aperture = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m14.31 8 5.74 9.94" }],
      ["path", { d: "M9.69 8h11.48" }],
      ["path", { d: "m7.38 12 5.74-9.94" }],
      ["path", { d: "M9.69 16 3.95 6.06" }],
      ["path", { d: "M14.31 16H2.83" }],
      ["path", { d: "m16.62 12-5.74 9.94" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/app-window-mac.js
  var AppWindowMac = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M6 8h.01" }],
      ["path", { d: "M10 8h.01" }],
      ["path", { d: "M14 8h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/app-window.js
  var AppWindow = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
      ["path", { d: "M10 4v4" }],
      ["path", { d: "M2 8h20" }],
      ["path", { d: "M6 4v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/apple.js
  var Apple = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
        }
      ],
      ["path", { d: "M10 2c1 .5 2 2 2 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/archive-restore.js
  var ArchiveRestore = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }],
      ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "m9 15 3-3 3 3" }],
      ["path", { d: "M12 12v9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/archive-x.js
  var ArchiveX = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
      ["path", { d: "m9.5 17 5-5" }],
      ["path", { d: "m9.5 12 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/archive.js
  var Archive = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
      ["path", { d: "M10 12h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/armchair.js
  var Armchair = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }],
      [
        "path",
        {
          d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
        }
      ],
      ["path", { d: "M5 18v2" }],
      ["path", { d: "M19 18v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-down-dash.js
  var ArrowBigDownDash = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 5H9" }],
      ["path", { d: "M15 9v3h4l-7 7-7-7h4V9z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-down.js
  var ArrowBigDown = [
    "svg",
    defaultAttributes,
    [["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-left-dash.js
  var ArrowBigLeftDash = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19 15V9" }],
      ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-left.js
  var ArrowBigLeft = [
    "svg",
    defaultAttributes,
    [["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-right-dash.js
  var ArrowBigRightDash = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 9v6" }],
      ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-right.js
  var ArrowBigRight = [
    "svg",
    defaultAttributes,
    [["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-up-dash.js
  var ArrowBigUpDash = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 19h6" }],
      ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-big-up.js
  var ArrowBigUp = [
    "svg",
    defaultAttributes,
    [["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-0-1.js
  var ArrowDown01 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
      ["path", { d: "M17 20v-6h-2" }],
      ["path", { d: "M15 20h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-1-0.js
  var ArrowDown10 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M17 10V4h-2" }],
      ["path", { d: "M15 10h4" }],
      ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-a-z.js
  var ArrowDownAZ = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M20 8h-5" }],
      ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
      ["path", { d: "M15 14h5l-5 6h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-from-line.js
  var ArrowDownFromLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19 3H5" }],
      ["path", { d: "M12 21V7" }],
      ["path", { d: "m6 15 6 6 6-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-left.js
  var ArrowDownLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 7 7 17" }],
      ["path", { d: "M17 17H7V7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-narrow-wide.js
  var ArrowDownNarrowWide = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M11 4h4" }],
      ["path", { d: "M11 8h7" }],
      ["path", { d: "M11 12h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-right.js
  var ArrowDownRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 7 10 10" }],
      ["path", { d: "M17 7v10H7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-to-dot.js
  var ArrowDownToDot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v14" }],
      ["path", { d: "m19 9-7 7-7-7" }],
      ["circle", { cx: "12", cy: "21", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-to-line.js
  var ArrowDownToLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 17V3" }],
      ["path", { d: "m6 11 6 6 6-6" }],
      ["path", { d: "M19 21H5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-up.js
  var ArrowDownUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "m21 8-4-4-4 4" }],
      ["path", { d: "M17 4v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-wide-narrow.js
  var ArrowDownWideNarrow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M11 4h10" }],
      ["path", { d: "M11 8h7" }],
      ["path", { d: "M11 12h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down-z-a.js
  var ArrowDownZA = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M15 4h5l-5 6h5" }],
      ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
      ["path", { d: "M20 18h-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-down.js
  var ArrowDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 5v14" }],
      ["path", { d: "m19 12-7 7-7-7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-left-from-line.js
  var ArrowLeftFromLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 6-6 6 6 6" }],
      ["path", { d: "M3 12h14" }],
      ["path", { d: "M21 19V5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-left-right.js
  var ArrowLeftRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 3 4 7l4 4" }],
      ["path", { d: "M4 7h16" }],
      ["path", { d: "m16 21 4-4-4-4" }],
      ["path", { d: "M20 17H4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-left-to-line.js
  var ArrowLeftToLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 19V5" }],
      ["path", { d: "m13 6-6 6 6 6" }],
      ["path", { d: "M7 12h14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-left.js
  var ArrowLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m12 19-7-7 7-7" }],
      ["path", { d: "M19 12H5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-right-from-line.js
  var ArrowRightFromLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 5v14" }],
      ["path", { d: "M21 12H7" }],
      ["path", { d: "m15 18 6-6-6-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-right-left.js
  var ArrowRightLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m16 3 4 4-4 4" }],
      ["path", { d: "M20 7H4" }],
      ["path", { d: "m8 21-4-4 4-4" }],
      ["path", { d: "M4 17h16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-right-to-line.js
  var ArrowRightToLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 12H3" }],
      ["path", { d: "m11 18 6-6-6-6" }],
      ["path", { d: "M21 5v14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-right.js
  var ArrowRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 12h14" }],
      ["path", { d: "m12 5 7 7-7 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-0-1.js
  var ArrowUp01 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
      ["path", { d: "M17 20v-6h-2" }],
      ["path", { d: "M15 20h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-1-0.js
  var ArrowUp10 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M17 10V4h-2" }],
      ["path", { d: "M15 10h4" }],
      ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-a-z.js
  var ArrowUpAZ = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M20 8h-5" }],
      ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
      ["path", { d: "M15 14h5l-5 6h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-down.js
  var ArrowUpDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m21 16-4 4-4-4" }],
      ["path", { d: "M17 20V4" }],
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-from-dot.js
  var ArrowUpFromDot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m5 9 7-7 7 7" }],
      ["path", { d: "M12 16V2" }],
      ["circle", { cx: "12", cy: "21", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-from-line.js
  var ArrowUpFromLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m18 9-6-6-6 6" }],
      ["path", { d: "M12 3v14" }],
      ["path", { d: "M5 21h14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-left.js
  var ArrowUpLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 17V7h10" }],
      ["path", { d: "M17 17 7 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-narrow-wide.js
  var ArrowUpNarrowWide = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M11 12h4" }],
      ["path", { d: "M11 16h7" }],
      ["path", { d: "M11 20h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-right.js
  var ArrowUpRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 7h10v10" }],
      ["path", { d: "M7 17 17 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-to-line.js
  var ArrowUpToLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 3h14" }],
      ["path", { d: "m18 13-6-6-6 6" }],
      ["path", { d: "M12 7v14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-wide-narrow.js
  var ArrowUpWideNarrow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M11 12h10" }],
      ["path", { d: "M11 16h7" }],
      ["path", { d: "M11 20h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up-z-a.js
  var ArrowUpZA = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M15 4h5l-5 6h5" }],
      ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
      ["path", { d: "M20 18h-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrow-up.js
  var ArrowUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m5 12 7-7 7 7" }],
      ["path", { d: "M12 19V5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/arrows-up-from-line.js
  var ArrowsUpFromLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m4 6 3-3 3 3" }],
      ["path", { d: "M7 17V3" }],
      ["path", { d: "m14 6 3-3 3 3" }],
      ["path", { d: "M17 17V3" }],
      ["path", { d: "M4 21h16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/asterisk.js
  var Asterisk = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 6v12" }],
      ["path", { d: "M17.196 9 6.804 15" }],
      ["path", { d: "m6.804 9 10.392 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/at-sign.js
  var AtSign = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/atom.js
  var Atom = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "1" }],
      [
        "path",
        {
          d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
        }
      ],
      [
        "path",
        {
          d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/audio-lines.js
  var AudioLines = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 10v3" }],
      ["path", { d: "M6 6v11" }],
      ["path", { d: "M10 3v18" }],
      ["path", { d: "M14 8v7" }],
      ["path", { d: "M18 5v13" }],
      ["path", { d: "M22 10v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/audio-waveform.js
  var AudioWaveform = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/award.js
  var Award = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/axe.js
  var Axe = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }],
      ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/axis-3d.js
  var Axis3d = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 4v16h16" }],
      ["path", { d: "m4 20 7-7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/baby.js
  var Baby = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 12h.01" }],
      ["path", { d: "M15 12h.01" }],
      ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }],
      [
        "path",
        {
          d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/backpack.js
  var Backpack = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" }],
      ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" }],
      ["path", { d: "M8 10h8" }],
      ["path", { d: "M8 18h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-alert.js
  var BadgeAlert = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-cent.js
  var BadgeCent = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M12 7v10" }],
      ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-check.js
  var BadgeCheck = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-dollar-sign.js
  var BadgeDollarSign = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
      ["path", { d: "M12 18V6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-euro.js
  var BadgeEuro = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M7 12h5" }],
      ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-help.js
  var BadgeHelp = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
      ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-indian-rupee.js
  var BadgeIndianRupee = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M8 8h8" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-info.js
  var BadgeInfo = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "12" }],
      ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-japanese-yen.js
  var BadgeJapaneseYen = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "m9 8 3 3v7" }],
      ["path", { d: "m12 11 3-3" }],
      ["path", { d: "M9 12h6" }],
      ["path", { d: "M9 16h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-minus.js
  var BadgeMinus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-percent.js
  var BadgePercent = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 15h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-plus.js
  var BadgePlus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "16" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-pound-sterling.js
  var BadgePoundSterling = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M8 12h4" }],
      ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }],
      ["path", { d: "M8 16h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-russian-ruble.js
  var BadgeRussianRuble = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M9 16h5" }],
      ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-swiss-franc.js
  var BadgeSwissFranc = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M11 17V8h4" }],
      ["path", { d: "M11 12h3" }],
      ["path", { d: "M9 16h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge-x.js
  var BadgeX = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
      ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/badge.js
  var Badge = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/baggage-claim.js
  var BaggageClaim = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }],
      ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }],
      ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }],
      ["circle", { cx: "18", cy: "20", r: "2" }],
      ["circle", { cx: "9", cy: "20", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ban.js
  var Ban = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m4.9 4.9 14.2 14.2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/banana.js
  var Banana = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }],
      [
        "path",
        {
          d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/banknote.js
  var Banknote = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M6 12h.01M18 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/barcode.js
  var Barcode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 5v14" }],
      ["path", { d: "M8 5v14" }],
      ["path", { d: "M12 5v14" }],
      ["path", { d: "M17 5v14" }],
      ["path", { d: "M21 5v14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/baseline.js
  var Baseline = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 20h16" }],
      ["path", { d: "m6 16 6-12 6 12" }],
      ["path", { d: "M8 12h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bath.js
  var Bath = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
        }
      ],
      ["line", { x1: "10", x2: "8", y1: "5", y2: "7" }],
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "7", x2: "7", y1: "19", y2: "21" }],
      ["line", { x1: "17", x2: "17", y1: "19", y2: "21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/battery-charging.js
  var BatteryCharging = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" }],
      ["path", { d: "m11 7-3 5h4l-3 5" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/battery-full.js
  var BatteryFull = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
      ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }],
      ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }],
      ["line", { x1: "14", x2: "14", y1: "11", y2: "13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/battery-low.js
  var BatteryLow = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
      ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/battery-medium.js
  var BatteryMedium = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
      ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }],
      ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/battery-warning.js
  var BatteryWarning = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2" }],
      ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
      ["line", { x1: "10", x2: "10", y1: "7", y2: "13" }],
      ["line", { x1: "10", x2: "10", y1: "17", y2: "17.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/battery.js
  var Battery = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/beaker.js
  var Beaker = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4.5 3h15" }],
      ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }],
      ["path", { d: "M6 14h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bean-off.js
  var BeanOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }],
      ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }],
      ["path", { d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bean.js
  var Bean = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
        }
      ],
      ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bed-double.js
  var BedDouble = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }],
      ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M12 4v6" }],
      ["path", { d: "M2 18h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bed-single.js
  var BedSingle = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }],
      ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M3 18h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bed.js
  var Bed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 4v16" }],
      ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }],
      ["path", { d: "M2 17h20" }],
      ["path", { d: "M6 8v9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/beef.js
  var Beef = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12.5", cy: "8.5", r: "2.5" }],
      [
        "path",
        {
          d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
        }
      ],
      [
        "path",
        {
          d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/beer-off.js
  var BeerOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 13v5" }],
      ["path", { d: "M17 11.47V8" }],
      ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }],
      ["path", { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }],
      [
        "path",
        {
          d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
        }
      ],
      ["path", { d: "M9 14.6V18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/beer.js
  var Beer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1" }],
      ["path", { d: "M9 12v6" }],
      ["path", { d: "M13 12v6" }],
      [
        "path",
        {
          d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
        }
      ],
      ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bell-dot.js
  var BellDot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
      ["circle", { cx: "18", cy: "8", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bell-electric.js
  var BellElectric = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9" }],
      ["path", { d: "M9 9h.01" }],
      ["circle", { cx: "9", cy: "9", r: "7" }],
      ["rect", { width: "10", height: "6", x: "4", y: "16", rx: "2" }],
      ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6" }],
      ["circle", { cx: "20", cy: "16", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bell-minus.js
  var BellMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
      ["path", { d: "M15 8h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bell-off.js
  var BellOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" }],
      ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bell-plus.js
  var BellPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
      ["path", { d: "M15 8h6" }],
      ["path", { d: "M18 5v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bell-ring.js
  var BellRing = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
      ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8" }],
      ["path", { d: "M22 8c0-2.3-.8-4.3-2-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bell.js
  var Bell = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/between-horizontal-end.js
  var BetweenHorizontalEnd = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1" }],
      ["path", { d: "m22 15-3-3 3-3" }],
      ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/between-horizontal-start.js
  var BetweenHorizontalStart = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }],
      ["path", { d: "m2 9 3 3-3 3" }],
      ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/between-vertical-end.js
  var BetweenVerticalEnd = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1" }],
      ["path", { d: "m9 22 3-3 3 3" }],
      ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/between-vertical-start.js
  var BetweenVerticalStart = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }],
      ["path", { d: "m15 2-3 3-3-3" }],
      ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/biceps-flexed.js
  var BicepsFlexed = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
        }
      ],
      ["path", { d: "M15 14a5 5 0 0 0-7.584 2" }],
      ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bike.js
  var Bike = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }],
      ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }],
      ["circle", { cx: "15", cy: "5", r: "1" }],
      ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/binary.js
  var Binary = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }],
      ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }],
      ["path", { d: "M6 20h4" }],
      ["path", { d: "M14 10h4" }],
      ["path", { d: "M6 14h2v6" }],
      ["path", { d: "M14 4h2v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/biohazard.js
  var Biohazard = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "11.9", r: "2" }],
      ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }],
      ["path", { d: "m8.9 10.1 1.4.8" }],
      ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }],
      ["path", { d: "m15.1 10.1-1.4.8" }],
      ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }],
      ["path", { d: "M12 13.9v1.6" }],
      ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }],
      ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }],
      ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bird.js
  var Bird = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 7h.01" }],
      ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }],
      ["path", { d: "m20 7 2 .5-2 .5" }],
      ["path", { d: "M10 18v3" }],
      ["path", { d: "M14 17.75V21" }],
      ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bitcoin.js
  var Bitcoin = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/blend.js
  var Blend = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "9", cy: "9", r: "7" }],
      ["circle", { cx: "15", cy: "15", r: "7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/blinds.js
  var Blinds = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3h18" }],
      ["path", { d: "M20 7H8" }],
      ["path", { d: "M20 11H8" }],
      ["path", { d: "M10 19h10" }],
      ["path", { d: "M8 15h12" }],
      ["path", { d: "M4 3v14" }],
      ["circle", { cx: "4", cy: "19", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/blocks.js
  var Blocks = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
      [
        "path",
        {
          d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bluetooth-connected.js
  var BluetoothConnected = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
      ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }],
      ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bluetooth-off.js
  var BluetoothOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m17 17-5 5V12l-5 5" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bluetooth-searching.js
  var BluetoothSearching = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
      ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }],
      ["path", { d: "M18 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bluetooth.js
  var Bluetooth = [
    "svg",
    defaultAttributes,
    [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }]]
  ];

  // node_modules/lucide/dist/esm/icons/bold.js
  var Bold = [
    "svg",
    defaultAttributes,
    [["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]]
  ];

  // node_modules/lucide/dist/esm/icons/bolt.js
  var Bolt = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bomb.js
  var Bomb = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11", cy: "13", r: "9" }],
      [
        "path",
        { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }
      ],
      ["path", { d: "m22 2-1.5 1.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bone.js
  var Bone = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-a.js
  var BookA = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "m8 13 4-7 4 7" }],
      ["path", { d: "M9.1 11h5.7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-audio.js
  var BookAudio = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 6v7" }],
      ["path", { d: "M16 8v3" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "M8 8v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-check.js
  var BookCheck = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "m9 9.5 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-copy.js
  var BookCopy = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11" }],
      [
        "path",
        {
          d: "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"
        }
      ],
      ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-dashed.js
  var BookDashed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 17h2" }],
      ["path", { d: "M12 22h2" }],
      ["path", { d: "M12 2h2" }],
      ["path", { d: "M18 22h1a1 1 0 0 0 1-1" }],
      ["path", { d: "M18 2h1a1 1 0 0 1 1 1v1" }],
      ["path", { d: "M20 15v2h-2" }],
      ["path", { d: "M20 8v3" }],
      ["path", { d: "M4 11V9" }],
      ["path", { d: "M4 19.5V15" }],
      ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" }],
      ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-down.js
  var BookDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 13V7" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "m9 10 3 3 3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-headphones.js
  var BookHeadphones = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }],
      ["circle", { cx: "15", cy: "12", r: "1" }],
      ["circle", { cx: "9", cy: "12", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-heart.js
  var BookHeart = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
        }
      ],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-image.js
  var BookImage = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["circle", { cx: "10", cy: "8", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-key.js
  var BookKey = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 3 1 1" }],
      ["path", { d: "m20 2-4.5 4.5" }],
      ["path", { d: "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }],
      ["circle", { cx: "14", cy: "8", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-lock.js
  var BookLock = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }],
      ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }],
      ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-marked.js
  var BookMarked = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2v8l3-3 3 3V2" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-minus.js
  var BookMinus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "M9 10h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-open-check.js
  var BookOpenCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" }],
      ["path", { d: "m16 12 2 2 4-4" }],
      ["path", { d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-open-text.js
  var BookOpenText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }],
      ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }],
      ["path", { d: "M6 8h2" }],
      ["path", { d: "M6 12h2" }],
      ["path", { d: "M16 8h2" }],
      ["path", { d: "M16 12h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-open.js
  var BookOpen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }],
      ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-plus.js
  var BookPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 7v6" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "M9 10h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-text.js
  var BookText = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "M8 11h8" }],
      ["path", { d: "M8 7h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-type.js
  var BookType = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 13h4" }],
      ["path", { d: "M12 6v7" }],
      ["path", { d: "M16 8V6H8v2" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-up-2.js
  var BookUp2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 13V7" }],
      ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }],
      ["path", { d: "m9 10 3-3 3 3" }],
      ["path", { d: "m9 5 3-3 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-up.js
  var BookUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 13V7" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "m9 10 3-3 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-user.js
  var BookUser = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 13a3 3 0 1 0-6 0" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book-x.js
  var BookX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14.5 7-5 5" }],
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ],
      ["path", { d: "m9.5 7 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/book.js
  var Book = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bookmark-check.js
  var BookmarkCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
      ["path", { d: "m9 10 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bookmark-minus.js
  var BookmarkMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
      ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bookmark-plus.js
  var BookmarkPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
      ["line", { x1: "12", x2: "12", y1: "7", y2: "13" }],
      ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bookmark-x.js
  var BookmarkX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
      ["path", { d: "m14.5 7.5-5 5" }],
      ["path", { d: "m9.5 7.5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bookmark.js
  var Bookmark = [
    "svg",
    defaultAttributes,
    [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/boom-box.js
  var BoomBox = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M8 8v1" }],
      ["path", { d: "M12 8v1" }],
      ["path", { d: "M16 8v1" }],
      ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }],
      ["circle", { cx: "8", cy: "15", r: "2" }],
      ["circle", { cx: "16", cy: "15", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bot-message-square.js
  var BotMessageSquare = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 6V2H8" }],
      ["path", { d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M9 11v2" }],
      ["path", { d: "M15 11v2" }],
      ["path", { d: "M20 12h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bot-off.js
  var BotOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33" }],
      ["path", { d: "M2 14h2" }],
      ["path", { d: "M20 14h2" }],
      ["path", { d: "M22 22 2 2" }],
      ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }],
      ["path", { d: "M9 13v2" }],
      ["path", { d: "M9.67 4H12v2.33" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bot.js
  var Bot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 8V4H8" }],
      ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }],
      ["path", { d: "M2 14h2" }],
      ["path", { d: "M20 14h2" }],
      ["path", { d: "M15 13v2" }],
      ["path", { d: "M9 13v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/box-select.js
  var BoxSelect = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M9 3h1" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M3 9v1" }],
      ["path", { d: "M21 9v1" }],
      ["path", { d: "M3 14v1" }],
      ["path", { d: "M21 14v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/box.js
  var Box = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        }
      ],
      ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
      ["path", { d: "M12 22V12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/boxes.js
  var Boxes = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
        }
      ],
      ["path", { d: "m7 16.5-4.74-2.85" }],
      ["path", { d: "m7 16.5 5-3" }],
      ["path", { d: "M7 16.5v5.17" }],
      [
        "path",
        {
          d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
        }
      ],
      ["path", { d: "m17 16.5-5-3" }],
      ["path", { d: "m17 16.5 4.74-2.85" }],
      ["path", { d: "M17 16.5v5.17" }],
      [
        "path",
        {
          d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
        }
      ],
      ["path", { d: "M12 8 7.26 5.15" }],
      ["path", { d: "m12 8 4.74-2.85" }],
      ["path", { d: "M12 13.5V8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/braces.js
  var Braces = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }],
      ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/brackets.js
  var Brackets = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 3h3v18h-3" }],
      ["path", { d: "M8 21H5V3h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/brain-circuit.js
  var BrainCircuit = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }
      ],
      ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4" }],
      ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
      ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
      ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
      ["path", { d: "M12 13h4" }],
      ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1" }],
      ["path", { d: "M12 8h8" }],
      ["path", { d: "M16 8V5a2 2 0 0 1 2-2" }],
      ["circle", { cx: "16", cy: "13", r: ".5" }],
      ["circle", { cx: "18", cy: "3", r: ".5" }],
      ["circle", { cx: "20", cy: "21", r: ".5" }],
      ["circle", { cx: "20", cy: "8", r: ".5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/brain-cog.js
  var BrainCog = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"
        }
      ],
      ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }],
      ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
      ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
      ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }],
      ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
      ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "m15.7 10.4-.9.4" }],
      ["path", { d: "m9.2 13.2-.9.4" }],
      ["path", { d: "m13.6 15.7-.4-.9" }],
      ["path", { d: "m10.8 9.2-.4-.9" }],
      ["path", { d: "m15.7 13.5-.9-.4" }],
      ["path", { d: "m9.2 10.9-.9-.4" }],
      ["path", { d: "m10.5 15.7.4-.9" }],
      ["path", { d: "m13.1 9.2.4-.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/brain.js
  var Brain = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }
      ],
      [
        "path",
        { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }
      ],
      ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" }],
      ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }],
      ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
      ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
      ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }],
      ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
      ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/brick-wall.js
  var BrickWall = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 9v6" }],
      ["path", { d: "M16 15v6" }],
      ["path", { d: "M16 3v6" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M8 15v6" }],
      ["path", { d: "M8 3v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/briefcase-business.js
  var BriefcaseBusiness = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0" }],
      ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/briefcase-medical.js
  var BriefcaseMedical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 11v4" }],
      ["path", { d: "M14 13h-4" }],
      ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M18 6v14" }],
      ["path", { d: "M6 6v14" }],
      ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/briefcase.js
  var Briefcase = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }],
      ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bring-to-front.js
  var BringToFront = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }],
      ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }],
      ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/brush.js
  var Brush = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }],
      [
        "path",
        {
          d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bug-off.js
  var BugOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" }],
      ["path", { d: "M14.12 3.88 16 2" }],
      ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" }],
      ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" }],
      ["path", { d: "M12 20v-8" }],
      ["path", { d: "M6 13H2" }],
      ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bug-play.js
  var BugPlay = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
        }
      ],
      ["path", { d: "M14.12 3.88 16 2" }],
      ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" }],
      ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
      ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }],
      ["path", { d: "M6 13H2" }],
      ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }],
      ["path", { d: "m8 2 1.88 1.88" }],
      ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bug.js
  var Bug = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m8 2 1.88 1.88" }],
      ["path", { d: "M14.12 3.88 16 2" }],
      ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }],
      ["path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" }],
      ["path", { d: "M12 20v-9" }],
      ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }],
      ["path", { d: "M6 13H2" }],
      ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }],
      ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
      ["path", { d: "M22 13h-4" }],
      ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/building-2.js
  var Building2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }],
      ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }],
      ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M10 6h4" }],
      ["path", { d: "M10 10h4" }],
      ["path", { d: "M10 14h4" }],
      ["path", { d: "M10 18h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/building.js
  var Building = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
      ["path", { d: "M9 22v-4h6v4" }],
      ["path", { d: "M8 6h.01" }],
      ["path", { d: "M16 6h.01" }],
      ["path", { d: "M12 6h.01" }],
      ["path", { d: "M12 10h.01" }],
      ["path", { d: "M12 14h.01" }],
      ["path", { d: "M16 10h.01" }],
      ["path", { d: "M16 14h.01" }],
      ["path", { d: "M8 10h.01" }],
      ["path", { d: "M8 14h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bus-front.js
  var BusFront = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 6 2 7" }],
      ["path", { d: "M10 6h4" }],
      ["path", { d: "m22 7-2-1" }],
      ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
      ["path", { d: "M4 11h16" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M16 15h.01" }],
      ["path", { d: "M6 19v2" }],
      ["path", { d: "M18 21v-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/bus.js
  var Bus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 6v6" }],
      ["path", { d: "M15 6v6" }],
      ["path", { d: "M2 12h19.6" }],
      [
        "path",
        {
          d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
        }
      ],
      ["circle", { cx: "7", cy: "18", r: "2" }],
      ["path", { d: "M9 18h5" }],
      ["circle", { cx: "16", cy: "18", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cable-car.js
  var CableCar = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 3h.01" }],
      ["path", { d: "M14 2h.01" }],
      ["path", { d: "m2 9 20-5" }],
      ["path", { d: "M12 12V6.5" }],
      ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }],
      ["path", { d: "M9 12v5" }],
      ["path", { d: "M15 12v5" }],
      ["path", { d: "M4 17h16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cable.js
  var Cable = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" }],
      ["path", { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" }],
      ["path", { d: "M21 21v-2h-4" }],
      ["path", { d: "M3 5h4V3" }],
      ["path", { d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cake-slice.js
  var CakeSlice = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "9", cy: "7", r: "2" }],
      ["path", { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" }],
      ["path", { d: "M16 13H3" }],
      ["path", { d: "M16 17H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cake.js
  var Cake = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }],
      ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }],
      ["path", { d: "M2 21h20" }],
      ["path", { d: "M7 8v3" }],
      ["path", { d: "M12 8v3" }],
      ["path", { d: "M17 8v3" }],
      ["path", { d: "M7 4h.01" }],
      ["path", { d: "M12 4h.01" }],
      ["path", { d: "M17 4h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calculator.js
  var Calculator = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }],
      ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }],
      ["path", { d: "M16 10h.01" }],
      ["path", { d: "M12 10h.01" }],
      ["path", { d: "M8 10h.01" }],
      ["path", { d: "M12 14h.01" }],
      ["path", { d: "M8 14h.01" }],
      ["path", { d: "M12 18h.01" }],
      ["path", { d: "M8 18h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-arrow-down.js
  var CalendarArrowDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14 18 4 4 4-4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M18 14v8" }],
      ["path", { d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-arrow-up.js
  var CalendarArrowUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14 18 4-4 4 4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M18 22v-8" }],
      ["path", { d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-check-2.js
  var CalendarCheck2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m16 20 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-check.js
  var CalendarCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m9 16 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-clock.js
  var CalendarClock = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M3 10h5" }],
      ["path", { d: "M17.5 17.5 16 16.3V14" }],
      ["circle", { cx: "16", cy: "16", r: "6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-cog.js
  var CalendarCog = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15.2 16.9-.9-.4" }],
      ["path", { d: "m15.2 19.1-.9.4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "m16.9 15.2-.4-.9" }],
      ["path", { d: "m16.9 20.8-.4.9" }],
      ["path", { d: "m19.5 14.3-.4.9" }],
      ["path", { d: "m19.5 21.7-.4-.9" }],
      ["path", { d: "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
      ["path", { d: "m21.7 16.5-.9.4" }],
      ["path", { d: "m21.7 19.5-.9-.4" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-days.js
  var CalendarDays = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 14h.01" }],
      ["path", { d: "M12 14h.01" }],
      ["path", { d: "M16 14h.01" }],
      ["path", { d: "M8 18h.01" }],
      ["path", { d: "M12 18h.01" }],
      ["path", { d: "M16 18h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-fold.js
  var CalendarFold = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M15 22v-4a2 2 0 0 1 2-2h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-heart.js
  var CalendarHeart = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" }],
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      [
        "path",
        {
          d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-minus-2.js
  var CalendarMinus2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M10 16h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-minus.js
  var CalendarMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 19h6" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-off.js
  var CalendarOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }],
      ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M3 10h7" }],
      ["path", { d: "M21 10h-5.5" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-plus-2.js
  var CalendarPlus2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M10 16h4" }],
      ["path", { d: "M12 14v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-plus.js
  var CalendarPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M16 19h6" }],
      ["path", { d: "M19 16v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-range.js
  var CalendarRange = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M17 14h-6" }],
      ["path", { d: "M13 18H7" }],
      ["path", { d: "M7 14h.01" }],
      ["path", { d: "M17 18h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-search.js
  var CalendarSearch = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M3 10h18" }],
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["path", { d: "m22 22-1.5-1.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-x-2.js
  var CalendarX2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m17 22 5-5" }],
      ["path", { d: "m17 17 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar-x.js
  var CalendarX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m14 14-4 4" }],
      ["path", { d: "m10 14 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/calendar.js
  var Calendar = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/camera-off.js
  var CameraOff = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
      ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" }],
      ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/camera.js
  var Camera = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/candy-cane.js
  var CandyCane = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" }
      ],
      ["path", { d: "M17.75 7 15 2.1" }],
      ["path", { d: "M10.9 4.8 13 9" }],
      ["path", { d: "m7.9 9.7 2 4.4" }],
      ["path", { d: "M4.9 14.7 7 18.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/candy-off.js
  var CandyOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1" }],
      ["path", { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657" }],
      ["path", { d: "M14 16.5V14" }],
      ["path", { d: "M14 6.5v1.843" }],
      ["path", { d: "M10 10v7.5" }],
      [
        "path",
        { d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1" }
      ],
      [
        "path",
        { d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1" }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/candy.js
  var Candy = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" }],
      ["path", { d: "M14 6.5v10" }],
      ["path", { d: "M10 7.5v10" }],
      ["path", { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" }],
      ["path", { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cannabis.js
  var Cannabis = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22v-4" }],
      [
        "path",
        {
          d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/captions-off.js
  var CaptionsOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5" }],
      ["path", { d: "M17 11h-.5" }],
      ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M7 11h4" }],
      ["path", { d: "M7 15h2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/captions.js
  var Captions = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }],
      ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/car-front.js
  var CarFront = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
      ["path", { d: "M7 14h.01" }],
      ["path", { d: "M17 14h.01" }],
      ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
      ["path", { d: "M5 18v2" }],
      ["path", { d: "M19 18v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/car-taxi-front.js
  var CarTaxiFront = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2h4" }],
      ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
      ["path", { d: "M7 14h.01" }],
      ["path", { d: "M17 14h.01" }],
      ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
      ["path", { d: "M5 18v2" }],
      ["path", { d: "M19 18v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/car.js
  var Car = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
        }
      ],
      ["circle", { cx: "7", cy: "17", r: "2" }],
      ["path", { d: "M9 17h6" }],
      ["circle", { cx: "17", cy: "17", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/caravan.js
  var Caravan = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "4", height: "4", x: "2", y: "9" }],
      ["rect", { width: "4", height: "10", x: "10", y: "9" }],
      ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }],
      ["circle", { cx: "8", cy: "19", r: "2" }],
      ["path", { d: "M10 19h12v-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/carrot.js
  var Carrot = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
        }
      ],
      ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }],
      ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/case-lower.js
  var CaseLower = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "7", cy: "12", r: "3" }],
      ["path", { d: "M10 9v6" }],
      ["circle", { cx: "17", cy: "12", r: "3" }],
      ["path", { d: "M14 7v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/case-sensitive.js
  var CaseSensitive = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 15 4-8 4 8" }],
      ["path", { d: "M4 13h6" }],
      ["circle", { cx: "18", cy: "12", r: "3" }],
      ["path", { d: "M21 9v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/case-upper.js
  var CaseUpper = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 15 4-8 4 8" }],
      ["path", { d: "M4 13h6" }],
      ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cassette-tape.js
  var CassetteTape = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["circle", { cx: "8", cy: "10", r: "2" }],
      ["path", { d: "M8 12h8" }],
      ["circle", { cx: "16", cy: "10", r: "2" }],
      ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cast.js
  var Cast = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }],
      ["path", { d: "M2 12a9 9 0 0 1 8 8" }],
      ["path", { d: "M2 16a5 5 0 0 1 4 4" }],
      ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/castle.js
  var Castle = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }],
      ["path", { d: "M18 11V4H6v7" }],
      ["path", { d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" }],
      ["path", { d: "M22 11V9" }],
      ["path", { d: "M2 11V9" }],
      ["path", { d: "M6 4V2" }],
      ["path", { d: "M18 4V2" }],
      ["path", { d: "M10 4V2" }],
      ["path", { d: "M14 4V2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cat.js
  var Cat = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
        }
      ],
      ["path", { d: "M8 14v.5" }],
      ["path", { d: "M16 14v.5" }],
      ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cctv.js
  var Cctv = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }
      ],
      [
        "path",
        {
          d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
        }
      ],
      ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }],
      ["path", { d: "M2 21v-4" }],
      ["path", { d: "M7 9h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-area.js
  var ChartArea = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      [
        "path",
        {
          d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-bar-big.js
  var ChartBarBig = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
      ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-bar-decreasing.js
  var ChartBarDecreasing = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 11h8" }],
      ["path", { d: "M7 16h3" }],
      ["path", { d: "M7 6h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-bar-increasing.js
  var ChartBarIncreasing = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 11h8" }],
      ["path", { d: "M7 16h12" }],
      ["path", { d: "M7 6h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-bar-stacked.js
  var ChartBarStacked = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 13v4" }],
      ["path", { d: "M15 5v4" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
      ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-bar.js
  var ChartBar = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 16h8" }],
      ["path", { d: "M7 11h12" }],
      ["path", { d: "M7 6h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-candlestick.js
  var ChartCandlestick = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 5v4" }],
      ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }],
      ["path", { d: "M9 15v2" }],
      ["path", { d: "M17 3v2" }],
      ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }],
      ["path", { d: "M17 13v3" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-column-big.js
  var ChartColumnBig = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
      ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-column-decreasing.js
  var ChartColumnDecreasing = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 17V9" }],
      ["path", { d: "M18 17v-3" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M8 17V5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-column-increasing.js
  var ChartColumnIncreasing = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 17V9" }],
      ["path", { d: "M18 17V5" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M8 17v-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-column-stacked.js
  var ChartColumnStacked = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 13H7" }],
      ["path", { d: "M19 9h-4" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
      ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-column.js
  var ChartColumn = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M18 17V9" }],
      ["path", { d: "M13 17V5" }],
      ["path", { d: "M8 17v-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-line.js
  var ChartLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "m19 9-5 5-4-4-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-network.js
  var ChartNetwork = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m13.11 7.664 1.78 2.672" }],
      ["path", { d: "m14.162 12.788-3.324 1.424" }],
      ["path", { d: "m20 4-6.06 1.515" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["circle", { cx: "12", cy: "6", r: "2" }],
      ["circle", { cx: "16", cy: "12", r: "2" }],
      ["circle", { cx: "9", cy: "15", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-no-axes-column-decreasing.js
  var ChartNoAxesColumnDecreasing = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20V10" }],
      ["path", { d: "M18 20v-4" }],
      ["path", { d: "M6 20V4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-no-axes-column-increasing.js
  var ChartNoAxesColumnIncreasing = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "12", x2: "12", y1: "20", y2: "10" }],
      ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }],
      ["line", { x1: "6", x2: "6", y1: "20", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-no-axes-column.js
  var ChartNoAxesColumn = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "18", x2: "18", y1: "20", y2: "10" }],
      ["line", { x1: "12", x2: "12", y1: "20", y2: "4" }],
      ["line", { x1: "6", x2: "6", y1: "20", y2: "14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-no-axes-combined.js
  var ChartNoAxesCombined = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 16v5" }],
      ["path", { d: "M16 14v7" }],
      ["path", { d: "M20 10v11" }],
      ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }],
      ["path", { d: "M4 18v3" }],
      ["path", { d: "M8 14v7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-no-axes-gantt.js
  var ChartNoAxesGantt = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 6h10" }],
      ["path", { d: "M6 12h9" }],
      ["path", { d: "M11 18h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-pie.js
  var ChartPie = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
        }
      ],
      ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-scatter.js
  var ChartScatter = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chart-spline.js
  var ChartSpline = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/check-check.js
  var CheckCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 6 7 17l-5-5" }],
      ["path", { d: "m22 10-7.5 7.5L13 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/check.js
  var Check = ["svg", defaultAttributes, [["path", { d: "M20 6 9 17l-5-5" }]]];

  // node_modules/lucide/dist/esm/icons/chef-hat.js
  var ChefHat = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
        }
      ],
      ["path", { d: "M6 17h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cherry.js
  var Cherry = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
      ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
      ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }],
      ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevron-down.js
  var ChevronDown = ["svg", defaultAttributes, [["path", { d: "m6 9 6 6 6-6" }]]];

  // node_modules/lucide/dist/esm/icons/chevron-first.js
  var ChevronFirst = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m17 18-6-6 6-6" }],
      ["path", { d: "M7 6v12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevron-last.js
  var ChevronLast = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 18 6-6-6-6" }],
      ["path", { d: "M17 6v12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevron-left.js
  var ChevronLeft = ["svg", defaultAttributes, [["path", { d: "m15 18-6-6 6-6" }]]];

  // node_modules/lucide/dist/esm/icons/chevron-right.js
  var ChevronRight = ["svg", defaultAttributes, [["path", { d: "m9 18 6-6-6-6" }]]];

  // node_modules/lucide/dist/esm/icons/chevron-up.js
  var ChevronUp = ["svg", defaultAttributes, [["path", { d: "m18 15-6-6-6 6" }]]];

  // node_modules/lucide/dist/esm/icons/chevrons-down-up.js
  var ChevronsDownUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 20 5-5 5 5" }],
      ["path", { d: "m7 4 5 5 5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevrons-down.js
  var ChevronsDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 6 5 5 5-5" }],
      ["path", { d: "m7 13 5 5 5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevrons-left-right.js
  var ChevronsLeftRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 7-5 5 5 5" }],
      ["path", { d: "m15 7 5 5-5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevrons-left.js
  var ChevronsLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m11 17-5-5 5-5" }],
      ["path", { d: "m18 17-5-5 5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevrons-right-left.js
  var ChevronsRightLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m20 17-5-5 5-5" }],
      ["path", { d: "m4 17 5-5-5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevrons-right.js
  var ChevronsRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m6 17 5-5-5-5" }],
      ["path", { d: "m13 17 5-5-5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevrons-up-down.js
  var ChevronsUpDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 15 5 5 5-5" }],
      ["path", { d: "m7 9 5-5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chevrons-up.js
  var ChevronsUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m17 11-5-5-5 5" }],
      ["path", { d: "m17 18-5-5-5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/chrome.js
  var Chrome = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8" }],
      ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14" }],
      ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/church.js
  var Church = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 9h4" }],
      ["path", { d: "M12 7v5" }],
      ["path", { d: "M14 22v-4a2 2 0 0 0-4 0v4" }],
      [
        "path",
        {
          d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"
        }
      ],
      [
        "path",
        {
          d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cigarette-off.js
  var CigaretteOff = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
      ["path", { d: "M12 12H2v4h14" }],
      ["path", { d: "M22 12v4" }],
      ["path", { d: "M18 12h-.5" }],
      ["path", { d: "M7 12v4" }],
      ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
      ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cigarette.js
  var Cigarette = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 12H2v4h16" }],
      ["path", { d: "M22 12v4" }],
      ["path", { d: "M7 12v4" }],
      ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
      ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-alert.js
  var CircleAlert = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-down.js
  var CircleArrowDown = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "m8 12 4 4 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-left.js
  var CircleArrowLeft = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M16 12H8" }],
      ["path", { d: "m12 8-4 4 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-out-down-left.js
  var CircleArrowOutDownLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 12a10 10 0 1 1 10 10" }],
      ["path", { d: "m2 22 10-10" }],
      ["path", { d: "M8 22H2v-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-out-down-right.js
  var CircleArrowOutDownRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22a10 10 0 1 1 10-10" }],
      ["path", { d: "M22 22 12 12" }],
      ["path", { d: "M22 16v6h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-out-up-left.js
  var CircleArrowOutUpLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 8V2h6" }],
      ["path", { d: "m2 2 10 10" }],
      ["path", { d: "M12 2A10 10 0 1 1 2 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-out-up-right.js
  var CircleArrowOutUpRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 12A10 10 0 1 1 12 2" }],
      ["path", { d: "M22 2 12 12" }],
      ["path", { d: "M16 2h6v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-right.js
  var CircleArrowRight = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "m12 16 4-4-4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-arrow-up.js
  var CircleArrowUp = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m16 12-4-4-4 4" }],
      ["path", { d: "M12 16V8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-check-big.js
  var CircleCheckBig = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }],
      ["path", { d: "m9 11 3 3L22 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-check.js
  var CircleCheck = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m9 12 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-chevron-down.js
  var CircleChevronDown = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m16 10-4 4-4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-chevron-left.js
  var CircleChevronLeft = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m14 16-4-4 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-chevron-right.js
  var CircleChevronRight = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m10 8 4 4-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-chevron-up.js
  var CircleChevronUp = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m8 14 4-4 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-dashed.js
  var CircleDashed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }],
      ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }],
      ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7" }],
      ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }],
      ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69" }],
      ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }],
      ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }],
      ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-divide.js
  var CircleDivide = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-dollar-sign.js
  var CircleDollarSign = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
      ["path", { d: "M12 18V6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-dot-dashed.js
  var CircleDotDashed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }],
      ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }],
      ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }],
      ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }],
      ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }],
      ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }],
      ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }],
      ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-dot.js
  var CircleDot = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-ellipsis.js
  var CircleEllipsis = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M17 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M7 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-equal.js
  var CircleEqual = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 10h10" }],
      ["path", { d: "M7 14h10" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-fading-plus.js
  var CircleFadingPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "M16 12H8" }],
      ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
      ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
      ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
      ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-gauge.js
  var CircleGauge = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M13.4 10.6 19 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-help.js
  var CircleHelp = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
      ["path", { d: "M12 17h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-minus.js
  var CircleMinus = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 12h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-off.js
  var CircleOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }],
      ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-parking-off.js
  var CircleParkingOff = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m5 5 14 14" }],
      ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
      ["path", { d: "M9 17v-2.34" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-parking.js
  var CircleParking = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-pause.js
  var CirclePause = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }],
      ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-percent.js
  var CirclePercent = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 15h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-play.js
  var CirclePlay = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polygon", { points: "10 8 16 12 10 16 10 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-plus.js
  var CirclePlus = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M12 8v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-power.js
  var CirclePower = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-slash-2.js
  var CircleSlash2 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M22 2 2 22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-slash.js
  var CircleSlash = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-stop.js
  var CircleStop = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["rect", { width: "6", height: "6", x: "9", y: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-user-round.js
  var CircleUserRound = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 20a6 6 0 0 0-12 0" }],
      ["circle", { cx: "12", cy: "10", r: "4" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-user.js
  var CircleUser = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle-x.js
  var CircleX = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "m9 9 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/circle.js
  var Circle = ["svg", defaultAttributes, [["circle", { cx: "12", cy: "12", r: "10" }]]];

  // node_modules/lucide/dist/esm/icons/circuit-board.js
  var CircuitBoard = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }],
      ["circle", { cx: "9", cy: "9", r: "2" }],
      ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }],
      ["circle", { cx: "15", cy: "15", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/citrus.js
  var Citrus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }
      ],
      ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34" }],
      ["path", { d: "m14 10-5.5 5.5" }],
      ["path", { d: "M14 17.85V10H6.15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clapperboard.js
  var Clapperboard = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" }],
      ["path", { d: "m6.2 5.3 3.1 3.9" }],
      ["path", { d: "m12.4 3.4 3.1 4" }],
      ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-check.js
  var ClipboardCheck = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "m9 14 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-copy.js
  var ClipboardCopy = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M21 14H11" }],
      ["path", { d: "m15 10-4 4 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-list.js
  var ClipboardList = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M12 11h4" }],
      ["path", { d: "M12 16h4" }],
      ["path", { d: "M8 11h.01" }],
      ["path", { d: "M8 16h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-minus.js
  var ClipboardMinus = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M9 14h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-paste.js
  var ClipboardPaste = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" }],
      [
        "path",
        {
          d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
        }
      ],
      ["path", { d: "m17 10 4 4-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-pen-line.js
  var ClipboardPenLine = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }],
      ["path", { d: "M8 18h1" }],
      [
        "path",
        {
          d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-pen.js
  var ClipboardPen = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" }],
      ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2" }],
      [
        "path",
        {
          d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-plus.js
  var ClipboardPlus = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M9 14h6" }],
      ["path", { d: "M12 17v-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-type.js
  var ClipboardType = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M9 12v-1h6v1" }],
      ["path", { d: "M11 17h2" }],
      ["path", { d: "M12 11v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard-x.js
  var ClipboardX = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "m15 11-6 6" }],
      ["path", { d: "m9 11 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clipboard.js
  var Clipboard = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-1.js
  var Clock1 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 14.5 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-10.js
  var Clock10 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 8 10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-11.js
  var Clock11 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 9.5 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-12.js
  var Clock12 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-2.js
  var Clock2 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 16 10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-3.js
  var Clock3 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 16.5 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-4.js
  var Clock4 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 16 14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-5.js
  var Clock5 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 14.5 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-6.js
  var Clock6 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 12 16.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-7.js
  var Clock7 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 9.5 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-8.js
  var Clock8 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 8 14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-9.js
  var Clock9 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 7.5 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-arrow-down.js
  var ClockArrowDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12.338 21.994A10 10 0 1 1 21.925 13.227" }],
      ["path", { d: "M12 6v6l2 1" }],
      ["path", { d: "m14 18 4 4 4-4" }],
      ["path", { d: "M18 14v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock-arrow-up.js
  var ClockArrowUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13.228 21.925A10 10 0 1 1 21.994 12.338" }],
      ["path", { d: "M12 6v6l1.562.781" }],
      ["path", { d: "m14 18 4-4 4 4" }],
      ["path", { d: "M18 22v-8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clock.js
  var Clock = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["polyline", { points: "12 6 12 12 16 14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-cog.js
  var CloudCog = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "17", r: "3" }],
      ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }],
      ["path", { d: "m15.7 18.4-.9-.3" }],
      ["path", { d: "m9.2 15.9-.9-.3" }],
      ["path", { d: "m10.6 20.7.3-.9" }],
      ["path", { d: "m13.1 14.2.3-.9" }],
      ["path", { d: "m13.6 20.7-.4-1" }],
      ["path", { d: "m10.8 14.3-.4-1" }],
      ["path", { d: "m8.3 18.6 1-.4" }],
      ["path", { d: "m14.7 15.8 1-.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-download.js
  var CloudDownload = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M12 12v9" }],
      ["path", { d: "m8 17 4 4 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-drizzle.js
  var CloudDrizzle = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M8 19v1" }],
      ["path", { d: "M8 14v1" }],
      ["path", { d: "M16 19v1" }],
      ["path", { d: "M16 14v1" }],
      ["path", { d: "M12 21v1" }],
      ["path", { d: "M12 16v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-fog.js
  var CloudFog = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M16 17H7" }],
      ["path", { d: "M17 21H9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-hail.js
  var CloudHail = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M16 14v2" }],
      ["path", { d: "M8 14v2" }],
      ["path", { d: "M16 20h.01" }],
      ["path", { d: "M8 20h.01" }],
      ["path", { d: "M12 16v2" }],
      ["path", { d: "M12 22h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-lightning.js
  var CloudLightning = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }],
      ["path", { d: "m13 12-3 5h4l-3 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-moon-rain.js
  var CloudMoonRain = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }],
      ["path", { d: "M11 20v2" }],
      ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
      ["path", { d: "M7 19v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-moon.js
  var CloudMoon = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }],
      ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-off.js
  var CloudOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" }],
      ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-rain-wind.js
  var CloudRainWind = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "m9.2 22 3-7" }],
      ["path", { d: "m9 13-3 7" }],
      ["path", { d: "m17 13-3 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-rain.js
  var CloudRain = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M16 14v6" }],
      ["path", { d: "M8 14v6" }],
      ["path", { d: "M12 16v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-snow.js
  var CloudSnow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M8 19h.01" }],
      ["path", { d: "M12 17h.01" }],
      ["path", { d: "M12 21h.01" }],
      ["path", { d: "M16 15h.01" }],
      ["path", { d: "M16 19h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-sun-rain.js
  var CloudSunRain = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v2" }],
      ["path", { d: "m4.93 4.93 1.41 1.41" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "m19.07 4.93-1.41 1.41" }],
      ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
      ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
      ["path", { d: "M11 20v2" }],
      ["path", { d: "M7 19v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-sun.js
  var CloudSun = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v2" }],
      ["path", { d: "m4.93 4.93 1.41 1.41" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "m19.07 4.93-1.41 1.41" }],
      ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
      ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud-upload.js
  var CloudUpload = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M12 12v9" }],
      ["path", { d: "m16 16-4-4-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cloud.js
  var Cloud = [
    "svg",
    defaultAttributes,
    [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/cloudy.js
  var Cloudy = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }],
      ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/clover.js
  var Clover = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16.17 7.83 2 22" }],
      [
        "path",
        {
          d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
        }
      ],
      ["path", { d: "m7.83 7.83 8.34 8.34" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/club.js
  var Club = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }
      ],
      ["path", { d: "M12 17.66L12 22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/code-xml.js
  var CodeXml = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m18 16 4-4-4-4" }],
      ["path", { d: "m6 8-4 4 4 4" }],
      ["path", { d: "m14.5 4-5 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/code.js
  var Code = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "16 18 22 12 16 6" }],
      ["polyline", { points: "8 6 2 12 8 18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/codepen.js
  var Codepen = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5" }],
      ["polyline", { points: "22 8.5 12 15.5 2 8.5" }],
      ["polyline", { points: "2 15.5 12 8.5 22 15.5" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/codesandbox.js
  var Codesandbox = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }
      ],
      ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }],
      ["polyline", { points: "7.5 19.79 7.5 14.6 3 12" }],
      ["polyline", { points: "21 12 16.5 14.6 16.5 19.79" }],
      ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }],
      ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/coffee.js
  var Coffee = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2v2" }],
      ["path", { d: "M14 2v2" }],
      [
        "path",
        {
          d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
        }
      ],
      ["path", { d: "M6 2v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cog.js
  var Cog = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }],
      ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 22v-2" }],
      ["path", { d: "m17 20.66-1-1.73" }],
      ["path", { d: "M11 10.27 7 3.34" }],
      ["path", { d: "m20.66 17-1.73-1" }],
      ["path", { d: "m3.34 7 1.73 1" }],
      ["path", { d: "M14 12h8" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "m20.66 7-1.73 1" }],
      ["path", { d: "m3.34 17 1.73-1" }],
      ["path", { d: "m17 3.34-1 1.73" }],
      ["path", { d: "m11 13.73-4 6.93" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/coins.js
  var Coins = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "8", cy: "8", r: "6" }],
      ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }],
      ["path", { d: "M7 6h1v4" }],
      ["path", { d: "m16.71 13.88.7.71-2.82 2.82" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/columns-2.js
  var Columns2 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/columns-3.js
  var Columns3 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "M15 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/columns-4.js
  var Columns4 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7.5 3v18" }],
      ["path", { d: "M12 3v18" }],
      ["path", { d: "M16.5 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/combine.js
  var Combine = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "8", x: "2", y: "2", rx: "2" }],
      ["path", { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }],
      ["path", { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }],
      ["path", { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1" }],
      ["polyline", { points: "7 21 10 18 7 15" }],
      ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/command.js
  var Command = [
    "svg",
    defaultAttributes,
    [["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }]]
  ];

  // node_modules/lucide/dist/esm/icons/compass.js
  var Compass = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/component.js
  var Component = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" }],
      ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }],
      ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" }],
      ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/computer.js
  var Computer = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6 18h2" }],
      ["path", { d: "M12 18h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/concierge-bell.js
  var ConciergeBell = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }],
      ["path", { d: "M20 16a8 8 0 1 0-16 0" }],
      ["path", { d: "M12 4v4" }],
      ["path", { d: "M10 4h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cone.js
  var Cone = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }],
      ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/construction.js
  var Construction = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }],
      ["path", { d: "M17 14v7" }],
      ["path", { d: "M7 14v7" }],
      ["path", { d: "M17 3v3" }],
      ["path", { d: "M7 3v3" }],
      ["path", { d: "M10 14 2.3 6.3" }],
      ["path", { d: "m14 6 7.7 7.7" }],
      ["path", { d: "m8 6 8 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/contact-round.js
  var ContactRound = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 18a4 4 0 0 0-8 0" }],
      ["circle", { cx: "12", cy: "11", r: "3" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "4" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/contact.js
  var Contact = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["circle", { cx: "12", cy: "10", r: "2" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "4" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/container.js
  var Container = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
        }
      ],
      ["path", { d: "M10 21.9V14L2.1 9.1" }],
      ["path", { d: "m10 14 11.9-6.9" }],
      ["path", { d: "M14 19.8v-8.1" }],
      ["path", { d: "M18 17.5V9.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/contrast.js
  var Contrast = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cookie.js
  var Cookie = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }],
      ["path", { d: "M8.5 8.5v.01" }],
      ["path", { d: "M16 15.5v.01" }],
      ["path", { d: "M12 12v.01" }],
      ["path", { d: "M11 17v.01" }],
      ["path", { d: "M7 14v.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cooking-pot.js
  var CookingPot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 12h20" }],
      ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }],
      ["path", { d: "m4 8 16-4" }],
      ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copy-check.js
  var CopyCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m12 15 2 2 4-4" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copy-minus.js
  var CopyMinus = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copy-plus.js
  var CopyPlus = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "15", x2: "15", y1: "12", y2: "18" }],
      ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copy-slash.js
  var CopySlash = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copy-x.js
  var CopyX = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "12", x2: "18", y1: "12", y2: "18" }],
      ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copy.js
  var Copy = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copyleft.js
  var Copyleft = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/copyright.js
  var Copyright = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-down-left.js
  var CornerDownLeft = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "9 10 4 15 9 20" }],
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-down-right.js
  var CornerDownRight = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "15 10 20 15 15 20" }],
      ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-left-down.js
  var CornerLeftDown = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "14 15 9 20 4 15" }],
      ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-left-up.js
  var CornerLeftUp = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "14 9 9 4 4 9" }],
      ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-right-down.js
  var CornerRightDown = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "10 15 15 20 20 15" }],
      ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-right-up.js
  var CornerRightUp = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "10 9 15 4 20 9" }],
      ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-up-left.js
  var CornerUpLeft = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "9 14 4 9 9 4" }],
      ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/corner-up-right.js
  var CornerUpRight = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "15 14 20 9 15 4" }],
      ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cpu.js
  var Cpu = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2" }],
      ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1" }],
      ["path", { d: "M15 2v2" }],
      ["path", { d: "M15 20v2" }],
      ["path", { d: "M2 15h2" }],
      ["path", { d: "M2 9h2" }],
      ["path", { d: "M20 15h2" }],
      ["path", { d: "M20 9h2" }],
      ["path", { d: "M9 2v2" }],
      ["path", { d: "M9 20v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/creative-commons.js
  var CreativeCommons = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }],
      ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/credit-card.js
  var CreditCard = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/croissant.js
  var Croissant = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
        }
      ],
      [
        "path",
        { d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" }
      ],
      ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" }],
      [
        "path",
        {
          d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
        }
      ],
      ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/crop.js
  var Crop = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }],
      ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cross.js
  var Cross = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/crosshair.js
  var Crosshair = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }],
      ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/crown.js
  var Crown = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
        }
      ],
      ["path", { d: "M5 21h14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cuboid.js
  var Cuboid = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
        }
      ],
      ["path", { d: "M10 22v-8L2.25 9.15" }],
      ["path", { d: "m10 14 11.77-6.87" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cup-soda.js
  var CupSoda = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }],
      ["path", { d: "M5 8h14" }],
      ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }],
      ["path", { d: "m12 8 1-6h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/currency.js
  var Currency = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "8" }],
      ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }],
      ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }],
      ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }],
      ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/cylinder.js
  var Cylinder = [
    "svg",
    defaultAttributes,
    [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dam.js
  var Dam = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
      ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/database-backup.js
  var DatabaseBackup = [
    "svg",
    defaultAttributes,
    [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 12a9 3 0 0 0 5 2.69" }],
      ["path", { d: "M21 9.3V5" }],
      ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }],
      ["path", { d: "M12 12v4h4" }],
      ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/database-zap.js
  var DatabaseZap = [
    "svg",
    defaultAttributes,
    [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }],
      ["path", { d: "M21 5V8" }],
      ["path", { d: "M21 12L18 17H22L19 22" }],
      ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/database.js
  var Database = [
    "svg",
    defaultAttributes,
    [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }],
      ["path", { d: "M3 12A9 3 0 0 0 21 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/delete.js
  var Delete = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
        }
      ],
      ["path", { d: "m12 9 6 6" }],
      ["path", { d: "m18 9-6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dessert.js
  var Dessert = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "4", r: "2" }],
      [
        "path",
        {
          d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
        }
      ],
      ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/diameter.js
  var Diameter = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "19", cy: "19", r: "2" }],
      ["circle", { cx: "5", cy: "5", r: "2" }],
      ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }],
      ["path", { d: "m6.41 6.41 11.18 11.18" }],
      ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/diamond-minus.js
  var DiamondMinus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
        }
      ],
      ["path", { d: "M8 12h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/diamond-percent.js
  var DiamondPercent = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
        }
      ],
      ["path", { d: "M9.2 9.2h.01" }],
      ["path", { d: "m14.5 9.5-5 5" }],
      ["path", { d: "M14.7 14.8h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/diamond-plus.js
  var DiamondPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 8v8" }],
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
        }
      ],
      ["path", { d: "M8 12h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/diamond.js
  var Diamond = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dice-1.js
  var Dice1 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M12 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dice-2.js
  var Dice2 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M15 9h.01" }],
      ["path", { d: "M9 15h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dice-3.js
  var Dice3 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M8 16h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dice-4.js
  var Dice4 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M8 8h.01" }],
      ["path", { d: "M8 16h.01" }],
      ["path", { d: "M16 16h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dice-5.js
  var Dice5 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M8 8h.01" }],
      ["path", { d: "M8 16h.01" }],
      ["path", { d: "M16 16h.01" }],
      ["path", { d: "M12 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dice-6.js
  var Dice6 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M16 12h.01" }],
      ["path", { d: "M16 16h.01" }],
      ["path", { d: "M8 8h.01" }],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M8 16h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dices.js
  var Dices = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }],
      ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M10 14h.01" }],
      ["path", { d: "M15 6h.01" }],
      ["path", { d: "M18 9h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/diff.js
  var Diff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3v14" }],
      ["path", { d: "M5 10h14" }],
      ["path", { d: "M5 21h14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/disc-2.js
  var Disc2 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/disc-3.js
  var Disc3 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/disc-album.js
  var DiscAlbum = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "12", cy: "12", r: "5" }],
      ["path", { d: "M12 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/disc.js
  var Disc = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/divide.js
  var Divide = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "6", r: "1" }],
      ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }],
      ["circle", { cx: "12", cy: "18", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dna-off.js
  var DnaOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }],
      ["path", { d: "m17 6-2.891-2.891" }],
      ["path", { d: "M2 15c3.333-3 6.667-3 10-3" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "m20 9 .891.891" }],
      ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }],
      ["path", { d: "M3.109 14.109 4 15" }],
      ["path", { d: "m6.5 12.5 1 1" }],
      ["path", { d: "m7 18 2.891 2.891" }],
      ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dna.js
  var Dna = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m10 16 1.5 1.5" }],
      ["path", { d: "m14 8-1.5-1.5" }],
      ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }],
      ["path", { d: "m16.5 10.5 1 1" }],
      ["path", { d: "m17 6-2.891-2.891" }],
      ["path", { d: "M2 15c6.667-6 13.333 0 20-6" }],
      ["path", { d: "m20 9 .891.891" }],
      ["path", { d: "M3.109 14.109 4 15" }],
      ["path", { d: "m6.5 12.5 1 1" }],
      ["path", { d: "m7 18 2.891 2.891" }],
      ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dock.js
  var Dock = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 8h20" }],
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M6 16h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dog.js
  var Dog = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11.25 16.25h1.5L12 17z" }],
      ["path", { d: "M16 14v.5" }],
      [
        "path",
        {
          d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
        }
      ],
      ["path", { d: "M8 14v.5" }],
      [
        "path",
        {
          d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dollar-sign.js
  var DollarSign = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
      ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/donut.js
  var Donut = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/door-closed.js
  var DoorClosed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }],
      ["path", { d: "M2 20h20" }],
      ["path", { d: "M14 12v.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/door-open.js
  var DoorOpen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }],
      ["path", { d: "M2 20h3" }],
      ["path", { d: "M13 20h9" }],
      ["path", { d: "M10 12v.01" }],
      [
        "path",
        {
          d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dot.js
  var Dot = ["svg", defaultAttributes, [["circle", { cx: "12.1", cy: "12.1", r: "1" }]]];

  // node_modules/lucide/dist/esm/icons/download.js
  var Download = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
      ["polyline", { points: "7 10 12 15 17 10" }],
      ["line", { x1: "12", x2: "12", y1: "15", y2: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/drafting-compass.js
  var DraftingCompass = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m12.99 6.74 1.93 3.44" }],
      ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0" }],
      ["path", { d: "m21 21-2.16-3.84" }],
      ["path", { d: "m3 21 8.02-14.26" }],
      ["circle", { cx: "12", cy: "5", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/drama.js
  var Drama = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 11h.01" }],
      ["path", { d: "M14 6h.01" }],
      ["path", { d: "M18 6h.01" }],
      ["path", { d: "M6.5 13.1h.01" }],
      ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }],
      ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0" }],
      [
        "path",
        {
          d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
        }
      ],
      ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dribbble.js
  var Dribbble = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }],
      ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }],
      ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/drill.js
  var Drill = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" }],
      ["path", { d: "M18 6h4" }],
      ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }],
      ["path", { d: "m5 10-2 8" }],
      ["path", { d: "M12 10v3c0 .6-.4 1-1 1H8" }],
      ["path", { d: "m7 18 2-8" }],
      ["path", { d: "M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/droplet.js
  var Droplet = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/droplets.js
  var Droplets = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
        }
      ],
      [
        "path",
        {
          d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/drum.js
  var Drum = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 2 8 8" }],
      ["path", { d: "m22 2-8 8" }],
      ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5" }],
      ["path", { d: "M7 13.4v7.9" }],
      ["path", { d: "M12 14v8" }],
      ["path", { d: "M17 13.4v7.9" }],
      ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/drumstick.js
  var Drumstick = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }],
      ["path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/dumbbell.js
  var Dumbbell = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14.4 14.4 9.6 9.6" }],
      [
        "path",
        {
          d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
        }
      ],
      ["path", { d: "m21.5 21.5-1.4-1.4" }],
      ["path", { d: "M3.9 3.9 2.5 2.5" }],
      [
        "path",
        {
          d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ear-off.js
  var EarOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }],
      ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14" }],
      ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }],
      ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ear.js
  var Ear = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }],
      ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/earth-lock.js
  var EarthLock = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3" }],
      ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
      ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
      ["path", { d: "M12 2a10 10 0 1 0 9.54 13" }],
      ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
      ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/earth.js
  var Earth = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
      [
        "path",
        { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }
      ],
      ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/eclipse.js
  var Eclipse = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 2a7 7 0 1 0 10 10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/egg-fried.js
  var EggFried = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11.5", cy: "12.5", r: "3.5" }],
      [
        "path",
        {
          d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/egg-off.js
  var EggOff = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
        }
      ],
      [
        "path",
        {
          d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/egg.js
  var Egg = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ellipsis-vertical.js
  var EllipsisVertical = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "1" }],
      ["circle", { cx: "12", cy: "5", r: "1" }],
      ["circle", { cx: "12", cy: "19", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ellipsis.js
  var Ellipsis = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "1" }],
      ["circle", { cx: "19", cy: "12", r: "1" }],
      ["circle", { cx: "5", cy: "12", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/equal-not.js
  var EqualNot = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
      ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }],
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/equal.js
  var Equal = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
      ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/eraser.js
  var Eraser = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }
      ],
      ["path", { d: "M22 21H7" }],
      ["path", { d: "m5 11 9 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/euro.js
  var Euro = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 10h12" }],
      ["path", { d: "M4 14h9" }],
      [
        "path",
        { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/expand.js
  var Expand = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8" }],
      ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6" }],
      ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6" }],
      ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/external-link.js
  var ExternalLink = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 3h6v6" }],
      ["path", { d: "M10 14 21 3" }],
      ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/eye-off.js
  var EyeOff = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
        }
      ],
      ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }],
      [
        "path",
        {
          d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
        }
      ],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/eye.js
  var Eye = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/facebook.js
  var Facebook = [
    "svg",
    defaultAttributes,
    [["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/factory.js
  var Factory = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }
      ],
      ["path", { d: "M17 18h1" }],
      ["path", { d: "M12 18h1" }],
      ["path", { d: "M7 18h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fan.js
  var Fan = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
        }
      ],
      ["path", { d: "M12 12v.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fast-forward.js
  var FastForward = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "13 19 22 12 13 5 13 19" }],
      ["polygon", { points: "2 19 11 12 2 5 2 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/feather.js
  var Feather = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
        }
      ],
      ["path", { d: "M16 8 2 22" }],
      ["path", { d: "M17.5 15H9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fence.js
  var Fence = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
      ["path", { d: "M6 8h4" }],
      ["path", { d: "M6 18h4" }],
      ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
      ["path", { d: "M14 8h4" }],
      ["path", { d: "M14 18h4" }],
      ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ferris-wheel.js
  var FerrisWheel = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "m6.8 15-3.5 2" }],
      ["path", { d: "m20.7 7-3.5 2" }],
      ["path", { d: "M6.8 9 3.3 7" }],
      ["path", { d: "m20.7 17-3.5-2" }],
      ["path", { d: "m9 22 3-8 3 8" }],
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M18 18.7a9 9 0 1 0-12 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/figma.js
  var Figma = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }],
      ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }],
      ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }],
      ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }],
      ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-archive.js
  var FileArchive = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 12v-1" }],
      ["path", { d: "M10 18v-2" }],
      ["path", { d: "M10 7V6" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }],
      ["circle", { cx: "10", cy: "20", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-audio-2.js
  var FileAudio2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "3", cy: "17", r: "1" }],
      ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3" }],
      ["circle", { cx: "9", cy: "17", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-audio.js
  var FileAudio = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-axis-3d.js
  var FileAxis3d = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m8 18 4-4" }],
      ["path", { d: "M8 10v8h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-badge-2.js
  var FileBadge2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-badge.js
  var FileBadge = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
      ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-box.js
  var FileBox = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"
        }
      ],
      ["path", { d: "M7 17v5" }],
      ["path", { d: "M11.7 14.2 7 17l-4.7-2.8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-chart-column-increasing.js
  var FileChartColumnIncreasing = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 18v-2" }],
      ["path", { d: "M12 18v-4" }],
      ["path", { d: "M16 18v-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-chart-column.js
  var FileChartColumn = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 18v-1" }],
      ["path", { d: "M12 18v-6" }],
      ["path", { d: "M16 18v-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-chart-line.js
  var FileChartLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m16 13-3.5 3.5-2-2L8 17" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-chart-pie.js
  var FileChartPie = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5" }],
      ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475" }],
      [
        "path",
        {
          d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-check-2.js
  var FileCheck2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m3 15 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-check.js
  var FileCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m9 15 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-clock.js
  var FileClock = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "8", cy: "16", r: "6" }],
      ["path", { d: "M9.5 17.5 8 16.25V14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-code-2.js
  var FileCode2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m5 12-3 3 3 3" }],
      ["path", { d: "m9 18 3-3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-code.js
  var FileCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 12.5 8 15l2 2.5" }],
      ["path", { d: "m14 12.5 2 2.5-2 2.5" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-cog.js
  var FileCog = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m3.2 12.9-.9-.4" }],
      ["path", { d: "m3.2 15.1-.9.4" }],
      ["path", { d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" }],
      ["path", { d: "m4.9 11.2-.4-.9" }],
      ["path", { d: "m4.9 16.8-.4.9" }],
      ["path", { d: "m7.5 10.3-.4.9" }],
      ["path", { d: "m7.5 17.7-.4-.9" }],
      ["path", { d: "m9.7 12.5-.9.4" }],
      ["path", { d: "m9.7 15.5-.9-.4" }],
      ["circle", { cx: "6", cy: "14", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-diff.js
  var FileDiff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M9 10h6" }],
      ["path", { d: "M12 13V7" }],
      ["path", { d: "M9 17h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-digit.js
  var FileDigit = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2" }],
      ["path", { d: "M10 12h2v6" }],
      ["path", { d: "M10 18h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-down.js
  var FileDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M12 18v-6" }],
      ["path", { d: "m9 15 3 3 3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-heart.js
  var FileHeart = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-image.js
  var FileImage = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "10", cy: "12", r: "2" }],
      ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-input.js
  var FileInput = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M2 15h10" }],
      ["path", { d: "m9 18 3-3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-json-2.js
  var FileJson2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }],
      ["path", { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-json.js
  var FileJson = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }],
      ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-key-2.js
  var FileKey2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "4", cy: "16", r: "2" }],
      ["path", { d: "m10 10-4.5 4.5" }],
      ["path", { d: "m9 11 1 1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-key.js
  var FileKey = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["circle", { cx: "10", cy: "16", r: "2" }],
      ["path", { d: "m16 10-4.5 4.5" }],
      ["path", { d: "m15 11 1 1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-lock-2.js
  var FileLock2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1" }],
      ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-lock.js
  var FileLock = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1" }],
      ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-minus-2.js
  var FileMinus2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M3 15h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-minus.js
  var FileMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M9 15h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-music.js
  var FileMusic = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "14", cy: "16", r: "2" }],
      ["circle", { cx: "6", cy: "18", r: "2" }],
      ["path", { d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5" }],
      ["path", { d: "M8 18v-7.7L16 9v7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-output.js
  var FileOutput = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" }],
      ["path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" }],
      ["path", { d: "m5 11-3 3" }],
      ["path", { d: "m5 17-3-3h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-pen-line.js
  var FilePenLine = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
        }
      ],
      [
        "path",
        {
          d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["path", { d: "M8 18h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-pen.js
  var FilePen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-plus-2.js
  var FilePlus2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M3 15h6" }],
      ["path", { d: "M6 12v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-plus.js
  var FilePlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M9 15h6" }],
      ["path", { d: "M12 18v-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-question.js
  var FileQuestion = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 17h.01" }],
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }],
      ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-scan.js
  var FileScan = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M16 14a2 2 0 0 0-2 2" }],
      ["path", { d: "M20 14a2 2 0 0 1 2 2" }],
      ["path", { d: "M20 22a2 2 0 0 0 2-2" }],
      ["path", { d: "M16 22a2 2 0 0 1-2-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-search-2.js
  var FileSearch2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "11.5", cy: "14.5", r: "2.5" }],
      ["path", { d: "M13.3 16.3 15 18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-search.js
  var FileSearch = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "m9 18-1.5-1.5" }],
      ["circle", { cx: "5", cy: "14", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-sliders.js
  var FileSliders = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M10 11v2" }],
      ["path", { d: "M8 17h8" }],
      ["path", { d: "M14 16v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-spreadsheet.js
  var FileSpreadsheet = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 13h2" }],
      ["path", { d: "M14 13h2" }],
      ["path", { d: "M8 17h2" }],
      ["path", { d: "M14 17h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-stack.js
  var FileStack = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2" }],
      [
        "path",
        { d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" }
      ],
      ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" }],
      ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-symlink.js
  var FileSymlink = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m10 18 3-3-3-3" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        { d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-terminal.js
  var FileTerminal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m8 16 2-2-2-2" }],
      ["path", { d: "M12 18h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-text.js
  var FileText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M10 9H8" }],
      ["path", { d: "M16 13H8" }],
      ["path", { d: "M16 17H8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-type-2.js
  var FileType2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M2 13v-1h6v1" }],
      ["path", { d: "M5 12v6" }],
      ["path", { d: "M4 18h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-type.js
  var FileType = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M9 13v-1h6v1" }],
      ["path", { d: "M12 12v6" }],
      ["path", { d: "M11 18h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-up.js
  var FileUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M12 12v6" }],
      ["path", { d: "m15 15-3-3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-video-2.js
  var FileVideo2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1" }],
      ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-video.js
  var FileVideo = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m10 11 5 3-5 3v-6Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-volume-2.js
  var FileVolume2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3" }],
      ["path", { d: "M15 12a5 5 0 0 1 0 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-volume.js
  var FileVolume = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 11a5 5 0 0 1 0 6" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4.268 21A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "m7 10-3 2H2v4h2l3 2z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-warning.js
  var FileWarning = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M12 9v4" }],
      ["path", { d: "M12 17h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-x-2.js
  var FileX2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m8 12.5-5 5" }],
      ["path", { d: "m3 12.5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-x.js
  var FileX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m14.5 12.5-5 5" }],
      ["path", { d: "m9.5 12.5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file.js
  var File = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/files.js
  var Files = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }],
      ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }],
      ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/film.js
  var Film = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 3v18" }],
      ["path", { d: "M3 7.5h4" }],
      ["path", { d: "M3 12h18" }],
      ["path", { d: "M3 16.5h4" }],
      ["path", { d: "M17 3v18" }],
      ["path", { d: "M17 7.5h4" }],
      ["path", { d: "M17 16.5h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/filter-x.js
  var FilterX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" }],
      ["path", { d: "m22 3-5 5" }],
      ["path", { d: "m17 3 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/filter.js
  var Filter = [
    "svg",
    defaultAttributes,
    [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }]]
  ];

  // node_modules/lucide/dist/esm/icons/fingerprint.js
  var Fingerprint = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }],
      ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }],
      ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }],
      ["path", { d: "M2 12a10 10 0 0 1 18-6" }],
      ["path", { d: "M2 16h.01" }],
      ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }],
      ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }],
      ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }],
      ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fire-extinguisher.js
  var FireExtinguisher = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }],
      ["path", { d: "M9 18h8" }],
      ["path", { d: "M18 3h-3" }],
      ["path", { d: "M11 3a6 6 0 0 0-6 6v11" }],
      ["path", { d: "M5 13h4" }],
      ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fish-off.js
  var FishOff = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
        }
      ],
      [
        "path",
        {
          d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
        }
      ],
      [
        "path",
        {
          d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fish-symbol.js
  var FishSymbol = [
    "svg",
    defaultAttributes,
    [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]]
  ];

  // node_modules/lucide/dist/esm/icons/fish.js
  var Fish = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
        }
      ],
      ["path", { d: "M18 12v.5" }],
      ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }],
      [
        "path",
        {
          d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
        }
      ],
      ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }],
      ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flag-off.js
  var FlagOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11" }],
      ["path", { d: "M4 22V4" }],
      ["path", { d: "M4 15s1-1 4-1 5 2 8 2" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flag-triangle-left.js
  var FlagTriangleLeft = [
    "svg",
    defaultAttributes,
    [["path", { d: "M17 22V2L7 7l10 5" }]]
  ];

  // node_modules/lucide/dist/esm/icons/flag-triangle-right.js
  var FlagTriangleRight = [
    "svg",
    defaultAttributes,
    [["path", { d: "M7 22V2l10 5-10 5" }]]
  ];

  // node_modules/lucide/dist/esm/icons/flag.js
  var Flag = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }],
      ["line", { x1: "4", x2: "4", y1: "22", y2: "15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flame-kindling.js
  var FlameKindling = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
        }
      ],
      ["path", { d: "m5 22 14-4" }],
      ["path", { d: "m5 18 14 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flame.js
  var Flame = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flashlight-off.js
  var FlashlightOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }],
      ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1" }],
      ["line", { x1: "11", x2: "18", y1: "6", y2: "6" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flashlight.js
  var Flashlight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" }],
      ["line", { x1: "6", x2: "18", y1: "6", y2: "6" }],
      ["line", { x1: "12", x2: "12", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flask-conical-off.js
  var FlaskConicalOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542" }],
      ["path", { d: "M10 2v2.343" }],
      ["path", { d: "M14 2v6.343" }],
      ["path", { d: "M8.5 2h7" }],
      ["path", { d: "M7 16h9" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flask-conical.js
  var FlaskConical = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
        }
      ],
      ["path", { d: "M8.5 2h7" }],
      ["path", { d: "M7 16h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flask-round.js
  var FlaskRound = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2v7.31" }],
      ["path", { d: "M14 9.3V1.99" }],
      ["path", { d: "M8.5 2h7" }],
      ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0" }],
      ["path", { d: "M5.52 16h12.96" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flip-horizontal-2.js
  var FlipHorizontal2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 7 5 5-5 5V7" }],
      ["path", { d: "m21 7-5 5 5 5V7" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 2v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flip-horizontal.js
  var FlipHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }],
      ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 2v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flip-vertical-2.js
  var FlipVertical2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m17 3-5 5-5-5h10" }],
      ["path", { d: "m17 21-5-5-5 5h10" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flip-vertical.js
  var FlipVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flower-2.js
  var Flower2 = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "2" }],
      ["path", { d: "M12 10v12" }],
      ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }],
      ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/flower.js
  var Flower = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      [
        "path",
        {
          d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
        }
      ],
      ["path", { d: "M12 7.5V9" }],
      ["path", { d: "M7.5 12H9" }],
      ["path", { d: "M16.5 12H15" }],
      ["path", { d: "M12 16.5V15" }],
      ["path", { d: "m8 8 1.88 1.88" }],
      ["path", { d: "M14.12 9.88 16 8" }],
      ["path", { d: "m8 16 1.88-1.88" }],
      ["path", { d: "M14.12 14.12 16 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/focus.js
  var Focus = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fold-horizontal.js
  var FoldHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 12h6" }],
      ["path", { d: "M22 12h-6" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "m19 9-3 3 3 3" }],
      ["path", { d: "m5 15 3-3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fold-vertical.js
  var FoldVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22v-6" }],
      ["path", { d: "M12 8V2" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }],
      ["path", { d: "m15 19-3-3-3 3" }],
      ["path", { d: "m15 5-3 3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-archive.js
  var FolderArchive = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "15", cy: "19", r: "2" }],
      [
        "path",
        {
          d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
        }
      ],
      ["path", { d: "M15 11v-1" }],
      ["path", { d: "M15 17v-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-check.js
  var FolderCheck = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "m9 13 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-clock.js
  var FolderClock = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "16", cy: "16", r: "6" }],
      [
        "path",
        {
          d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
        }
      ],
      ["path", { d: "M16 14v2l1 1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-closed.js
  var FolderClosed = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M2 10h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-code.js
  var FolderCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 10.5 8 13l2 2.5" }],
      ["path", { d: "m14 10.5 2 2.5-2 2.5" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-cog.js
  var FolderCog = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      [
        "path",
        {
          d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
        }
      ],
      ["path", { d: "m21.7 19.4-.9-.3" }],
      ["path", { d: "m15.2 16.9-.9-.3" }],
      ["path", { d: "m16.6 21.7.3-.9" }],
      ["path", { d: "m19.1 15.2.3-.9" }],
      ["path", { d: "m19.6 21.7-.4-1" }],
      ["path", { d: "m16.8 15.3-.4-1" }],
      ["path", { d: "m14.3 19.6 1-.4" }],
      ["path", { d: "m20.7 16.8 1-.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-dot.js
  var FolderDot = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-down.js
  var FolderDown = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M12 10v6" }],
      ["path", { d: "m15 13-3 3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-git-2.js
  var FolderGit2 = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
        }
      ],
      ["circle", { cx: "13", cy: "12", r: "2" }],
      ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8" }],
      ["circle", { cx: "20", cy: "19", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-git.js
  var FolderGit = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "13", r: "2" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M14 13h3" }],
      ["path", { d: "M7 13h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-heart.js
  var FolderHeart = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"
        }
      ],
      [
        "path",
        {
          d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-input.js
  var FolderInput = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
        }
      ],
      ["path", { d: "M2 13h10" }],
      ["path", { d: "m9 16 3-3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-kanban.js
  var FolderKanban = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }
      ],
      ["path", { d: "M8 10v4" }],
      ["path", { d: "M12 10v2" }],
      ["path", { d: "M16 10v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-key.js
  var FolderKey = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "16", cy: "20", r: "2" }],
      [
        "path",
        {
          d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
        }
      ],
      ["path", { d: "m22 14-4.5 4.5" }],
      ["path", { d: "m21 15 1 1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-lock.js
  var FolderLock = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }],
      [
        "path",
        {
          d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
        }
      ],
      ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-minus.js
  var FolderMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 13h6" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-open-dot.js
  var FolderOpenDot = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
        }
      ],
      ["circle", { cx: "14", cy: "15", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-open.js
  var FolderOpen = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-output.js
  var FolderOutput = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
        }
      ],
      ["path", { d: "M2 13h10" }],
      ["path", { d: "m5 10-3 3 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-pen.js
  var FolderPen = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
        }
      ],
      [
        "path",
        {
          d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-plus.js
  var FolderPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 10v6" }],
      ["path", { d: "M9 13h6" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-root.js
  var FolderRoot = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "2" }],
      ["path", { d: "M12 15v5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-search-2.js
  var FolderSearch2 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11.5", cy: "12.5", r: "2.5" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M13.3 14.3 15 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-search.js
  var FolderSearch = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "17", cy: "17", r: "3" }],
      [
        "path",
        {
          d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
        }
      ],
      ["path", { d: "m21 21-1.5-1.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-symlink.js
  var FolderSymlink = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
        }
      ],
      ["path", { d: "m8 16 3-3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-sync.js
  var FolderSync = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
        }
      ],
      ["path", { d: "M12 10v4h4" }],
      ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }],
      ["path", { d: "M22 22v-4h-4" }],
      ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-tree.js
  var FolderTree = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
        }
      ],
      [
        "path",
        {
          d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
        }
      ],
      ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-up.js
  var FolderUp = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M12 10v6" }],
      ["path", { d: "m9 13 3-3 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder-x.js
  var FolderX = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "m9.5 10.5 5 5" }],
      ["path", { d: "m14.5 10.5-5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folder.js
  var Folder = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/folders.js
  var Folders = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/footprints.js
  var Footprints = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
        }
      ],
      [
        "path",
        {
          d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
        }
      ],
      ["path", { d: "M16 17h4" }],
      ["path", { d: "M4 13h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/forklift.js
  var Forklift = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }],
      ["circle", { cx: "13", cy: "19", r: "2" }],
      ["circle", { cx: "5", cy: "19", r: "2" }],
      ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/forward.js
  var Forward = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "15 17 20 12 15 7" }],
      ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/frame.js
  var Frame = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "22", x2: "2", y1: "6", y2: "6" }],
      ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }],
      ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }],
      ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/framer.js
  var Framer = [
    "svg",
    defaultAttributes,
    [["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" }]]
  ];

  // node_modules/lucide/dist/esm/icons/frown.js
  var Frown = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fuel.js
  var Fuel = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "3", x2: "15", y1: "22", y2: "22" }],
      ["line", { x1: "4", x2: "14", y1: "9", y2: "9" }],
      ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }],
      [
        "path",
        { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/fullscreen.js
  var Fullscreen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gallery-horizontal-end.js
  var GalleryHorizontalEnd = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 7v10" }],
      ["path", { d: "M6 5v14" }],
      ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gallery-horizontal.js
  var GalleryHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 3v18" }],
      ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }],
      ["path", { d: "M22 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gallery-thumbnails.js
  var GalleryThumbnails = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M4 21h1" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M19 21h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gallery-vertical-end.js
  var GalleryVerticalEnd = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 2h10" }],
      ["path", { d: "M5 6h14" }],
      ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gallery-vertical.js
  var GalleryVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 2h18" }],
      ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }],
      ["path", { d: "M3 22h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gamepad-2.js
  var Gamepad2 = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "6", x2: "10", y1: "11", y2: "11" }],
      ["line", { x1: "8", x2: "8", y1: "9", y2: "13" }],
      ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12" }],
      ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10" }],
      [
        "path",
        {
          d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gamepad.js
  var Gamepad = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "6", x2: "10", y1: "12", y2: "12" }],
      ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
      ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }],
      ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }],
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gauge.js
  var Gauge = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m12 14 4-4" }],
      ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gavel.js
  var Gavel = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" }],
      ["path", { d: "m16 16 6-6" }],
      ["path", { d: "m8 8 6-6" }],
      ["path", { d: "m9 7 8 8" }],
      ["path", { d: "m21 11-8-8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gem.js
  var Gem = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 3h12l4 6-10 13L2 9Z" }],
      ["path", { d: "M11 3 8 9l4 13 4-13-3-6" }],
      ["path", { d: "M2 9h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ghost.js
  var Ghost = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 10h.01" }],
      ["path", { d: "M15 10h.01" }],
      ["path", { d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gift.js
  var Gift = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }],
      ["path", { d: "M12 8v13" }],
      ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }],
      [
        "path",
        { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-branch-plus.js
  var GitBranchPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 3v12" }],
      ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
      ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
      ["path", { d: "M15 6a9 9 0 0 0-9 9" }],
      ["path", { d: "M18 15v6" }],
      ["path", { d: "M21 18h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-branch.js
  var GitBranch = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "6", x2: "6", y1: "3", y2: "15" }],
      ["circle", { cx: "18", cy: "6", r: "3" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["path", { d: "M18 9a9 9 0 0 1-9 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-commit-horizontal.js
  var GitCommitHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }],
      ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-commit-vertical.js
  var GitCommitVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3v6" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "M12 15v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-compare-arrows.js
  var GitCompareArrows = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }],
      ["path", { d: "m15 9-3-3 3-3" }],
      ["circle", { cx: "19", cy: "18", r: "3" }],
      ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }],
      ["path", { d: "m9 15 3 3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-compare.js
  var GitCompare = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
      ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-fork.js
  var GitFork = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["circle", { cx: "18", cy: "6", r: "3" }],
      ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }],
      ["path", { d: "M12 12v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-graph.js
  var GitGraph = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M5 9v6" }],
      ["circle", { cx: "5", cy: "18", r: "3" }],
      ["path", { d: "M12 3v18" }],
      ["circle", { cx: "19", cy: "6", r: "3" }],
      ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-merge.js
  var GitMerge = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-pull-request-arrow.js
  var GitPullRequestArrow = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M5 9v12" }],
      ["circle", { cx: "19", cy: "18", r: "3" }],
      ["path", { d: "m15 9-3-3 3-3" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-pull-request-closed.js
  var GitPullRequestClosed = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M6 9v12" }],
      ["path", { d: "m21 3-6 6" }],
      ["path", { d: "m21 9-6-6" }],
      ["path", { d: "M18 11.5V15" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-pull-request-create-arrow.js
  var GitPullRequestCreateArrow = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M5 9v12" }],
      ["path", { d: "m15 9-3-3 3-3" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M19 15v6" }],
      ["path", { d: "M22 18h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-pull-request-create.js
  var GitPullRequestCreate = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M6 9v12" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M18 15v6" }],
      ["path", { d: "M21 18h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-pull-request-draft.js
  var GitPullRequestDraft = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M18 6V5" }],
      ["path", { d: "M18 11v-1" }],
      ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/git-pull-request.js
  var GitPullRequest = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
      ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/github.js
  var Github = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        }
      ],
      ["path", { d: "M9 18c-4.51 2-5-2-7-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/gitlab.js
  var Gitlab = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/glass-water.js
  var GlassWater = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" }],
      ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/glasses.js
  var Glasses = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "6", cy: "15", r: "4" }],
      ["circle", { cx: "18", cy: "15", r: "4" }],
      ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }],
      ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }],
      ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/globe-lock.js
  var GlobeLock = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }],
      ["path", { d: "M2 12h8.5" }],
      ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
      ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/globe.js
  var Globe = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
      ["path", { d: "M2 12h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/goal.js
  var Goal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 13V2l8 4-8 4" }],
      ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29" }],
      ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grab.js
  var Grab = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
      ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }],
      ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
      ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/graduation-cap.js
  var GraduationCap = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
        }
      ],
      ["path", { d: "M22 10v6" }],
      ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grape.js
  var Grape = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 5V2l-5.89 5.89" }],
      ["circle", { cx: "16.6", cy: "15.89", r: "3" }],
      ["circle", { cx: "8.11", cy: "7.4", r: "3" }],
      ["circle", { cx: "12.35", cy: "11.65", r: "3" }],
      ["circle", { cx: "13.91", cy: "5.85", r: "3" }],
      ["circle", { cx: "18.15", cy: "10.09", r: "3" }],
      ["circle", { cx: "6.56", cy: "13.2", r: "3" }],
      ["circle", { cx: "10.8", cy: "17.44", r: "3" }],
      ["circle", { cx: "5", cy: "19", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grid-2x2-check.js
  var Grid2x2Check = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
        }
      ],
      ["path", { d: "m16 19 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grid-2x2-x.js
  var Grid2x2X = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
        }
      ],
      ["path", { d: "m16 16 5 5" }],
      ["path", { d: "m16 21 5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grid-2x2.js
  var Grid2x2 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 12h18" }],
      ["path", { d: "M12 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grid-3x3.js
  var Grid3x3 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "M15 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grip-horizontal.js
  var GripHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "9", r: "1" }],
      ["circle", { cx: "19", cy: "9", r: "1" }],
      ["circle", { cx: "5", cy: "9", r: "1" }],
      ["circle", { cx: "12", cy: "15", r: "1" }],
      ["circle", { cx: "19", cy: "15", r: "1" }],
      ["circle", { cx: "5", cy: "15", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grip-vertical.js
  var GripVertical = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "9", cy: "12", r: "1" }],
      ["circle", { cx: "9", cy: "5", r: "1" }],
      ["circle", { cx: "9", cy: "19", r: "1" }],
      ["circle", { cx: "15", cy: "12", r: "1" }],
      ["circle", { cx: "15", cy: "5", r: "1" }],
      ["circle", { cx: "15", cy: "19", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/grip.js
  var Grip = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "5", r: "1" }],
      ["circle", { cx: "19", cy: "5", r: "1" }],
      ["circle", { cx: "5", cy: "5", r: "1" }],
      ["circle", { cx: "12", cy: "12", r: "1" }],
      ["circle", { cx: "19", cy: "12", r: "1" }],
      ["circle", { cx: "5", cy: "12", r: "1" }],
      ["circle", { cx: "12", cy: "19", r: "1" }],
      ["circle", { cx: "19", cy: "19", r: "1" }],
      ["circle", { cx: "5", cy: "19", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/group.js
  var Group = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }],
      ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }],
      ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }],
      ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }],
      ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }],
      ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/guitar.js
  var Guitar = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m11.9 12.1 4.514-4.514" }],
      [
        "path",
        {
          d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
        }
      ],
      ["path", { d: "m6 16 2 2" }],
      [
        "path",
        {
          d: "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"
        }
      ],
      ["circle", { cx: "11.5", cy: "12.5", r: ".5", fill: "currentColor" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ham.js
  var Ham = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }],
      [
        "path",
        { d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }
      ],
      [
        "path",
        {
          d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
        }
      ],
      ["path", { d: "m8.5 16.5-1-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hammer.js
  var Hammer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" }],
      ["path", { d: "m18 15 4-4" }],
      [
        "path",
        {
          d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hand-coins.js
  var HandCoins = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }],
      [
        "path",
        {
          d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
        }
      ],
      ["path", { d: "m2 16 6 6" }],
      ["circle", { cx: "16", cy: "9", r: "2.9" }],
      ["circle", { cx: "6", cy: "5", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hand-heart.js
  var HandHeart = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }],
      [
        "path",
        {
          d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
        }
      ],
      ["path", { d: "m2 15 6 6" }],
      [
        "path",
        {
          d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hand-helping.js
  var HandHelping = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }],
      [
        "path",
        {
          d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
        }
      ],
      ["path", { d: "m2 13 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hand-metal.js
  var HandMetal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
      ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }],
      ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }],
      [
        "path",
        {
          d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hand-platter.js
  var HandPlatter = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3V2" }],
      ["path", { d: "M5 10a7.1 7.1 0 0 1 14 0" }],
      ["path", { d: "M4 10h16" }],
      ["path", { d: "M2 14h12a2 2 0 1 1 0 4h-2" }],
      [
        "path",
        {
          d: "m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"
        }
      ],
      ["path", { d: "M5 14v7H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hand.js
  var Hand = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
      ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }],
      [
        "path",
        {
          d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/handshake.js
  var Handshake = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }],
      [
        "path",
        {
          d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
        }
      ],
      ["path", { d: "m21 3 1 11h-2" }],
      ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }],
      ["path", { d: "M3 4h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hard-drive-download.js
  var HardDriveDownload = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v8" }],
      ["path", { d: "m16 6-4 4-4-4" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M10 18h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hard-drive-upload.js
  var HardDriveUpload = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m16 6-4-4-4 4" }],
      ["path", { d: "M12 2v8" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M10 18h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hard-drive.js
  var HardDrive = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "22", x2: "2", y1: "12", y2: "12" }],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        }
      ],
      ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16" }],
      ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hard-hat.js
  var HardHat = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" }],
      ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }],
      ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }],
      ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hash.js
  var Hash = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "4", x2: "20", y1: "9", y2: "9" }],
      ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }],
      ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }],
      ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/haze.js
  var Haze = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m5.2 6.2 1.4 1.4" }],
      ["path", { d: "M2 13h2" }],
      ["path", { d: "M20 13h2" }],
      ["path", { d: "m17.4 7.6 1.4-1.4" }],
      ["path", { d: "M22 17H2" }],
      ["path", { d: "M22 21H2" }],
      ["path", { d: "M16 13a4 4 0 0 0-8 0" }],
      ["path", { d: "M12 5V2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hdmi-port.js
  var HdmiPort = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" }
      ],
      ["path", { d: "M7.5 12h9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heading-1.js
  var Heading1 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "m17 12 3-2v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heading-2.js
  var Heading2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heading-3.js
  var Heading3 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }],
      ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heading-4.js
  var Heading4 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M17 10v4h4" }],
      ["path", { d: "M21 10v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heading-5.js
  var Heading5 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M17 13v-3h4" }],
      ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heading-6.js
  var Heading6 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["circle", { cx: "19", cy: "16", r: "2" }],
      ["path", { d: "M20 10c-2 2-3 3.5-3 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heading.js
  var Heading = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 12h12" }],
      ["path", { d: "M6 20V4" }],
      ["path", { d: "M18 20V4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/headphones.js
  var Headphones = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/headset.js
  var Headset = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
        }
      ],
      ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heart-crack.js
  var HeartCrack = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }
      ],
      ["path", { d: "m12 13-1-1 2-2-3-3 2-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heart-handshake.js
  var HeartHandshake = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }
      ],
      [
        "path",
        {
          d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
        }
      ],
      ["path", { d: "m18 15-2-2" }],
      ["path", { d: "m15 18-2-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heart-off.js
  var HeartOff = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", y1: "2", x2: "22", y2: "22" }],
      ["path", { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35" }],
      [
        "path",
        {
          d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heart-pulse.js
  var HeartPulse = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }
      ],
      ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heart.js
  var Heart = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/heater.js
  var Heater = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 8c2-3-2-3 0-6" }],
      ["path", { d: "M15.5 8c2-3-2-3 0-6" }],
      ["path", { d: "M6 10h.01" }],
      ["path", { d: "M6 14h.01" }],
      ["path", { d: "M10 16v-4" }],
      ["path", { d: "M14 16v-4" }],
      ["path", { d: "M18 16v-4" }],
      ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }],
      ["path", { d: "M5 20v2" }],
      ["path", { d: "M19 20v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hexagon.js
  var Hexagon = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/highlighter.js
  var Highlighter = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 11-6 6v3h9l3-3" }],
      ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/history.js
  var History = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }],
      ["path", { d: "M12 7v5l4 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hop-off.js
  var HopOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }],
      [
        "path",
        { d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }
      ],
      ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }],
      [
        "path",
        { d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }
      ],
      ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }],
      [
        "path",
        {
          d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"
        }
      ],
      [
        "path",
        { d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }
      ],
      ["path", { d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hop.js
  var Hop = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }
      ],
      [
        "path",
        {
          d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"
        }
      ],
      [
        "path",
        { d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }
      ],
      [
        "path",
        { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }
      ],
      [
        "path",
        { d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }
      ],
      [
        "path",
        { d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }
      ],
      ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }],
      [
        "path",
        {
          d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hospital.js
  var Hospital = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 6v4" }],
      ["path", { d: "M14 14h-4" }],
      ["path", { d: "M14 18h-4" }],
      ["path", { d: "M14 8h-4" }],
      ["path", { d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hotel.js
  var Hotel = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 22v-6.57" }],
      ["path", { d: "M12 11h.01" }],
      ["path", { d: "M12 7h.01" }],
      ["path", { d: "M14 15.43V22" }],
      ["path", { d: "M15 16a5 5 0 0 0-6 0" }],
      ["path", { d: "M16 11h.01" }],
      ["path", { d: "M16 7h.01" }],
      ["path", { d: "M8 11h.01" }],
      ["path", { d: "M8 7h.01" }],
      ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/hourglass.js
  var Hourglass = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 22h14" }],
      ["path", { d: "M5 2h14" }],
      ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }],
      ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/house-plug.js
  var HousePlug = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 12V8.964" }],
      ["path", { d: "M14 12V8.964" }],
      ["path", { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }],
      [
        "path",
        {
          d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/house-plus.js
  var HousePlus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"
        }
      ],
      ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }],
      ["path", { d: "M15 6h6" }],
      ["path", { d: "M18 3v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/house.js
  var House = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ice-cream-bowl.js
  var IceCreamBowl = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }
      ],
      ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }],
      ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ice-cream-cone.js
  var IceCreamCone = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }],
      ["path", { d: "M17 7A5 5 0 0 0 7 7" }],
      ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/image-down.js
  var ImageDown = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
        }
      ],
      ["path", { d: "m14 19 3 3v-5.5" }],
      ["path", { d: "m17 22 3-3" }],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/image-minus.js
  var ImageMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
      ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }],
      ["circle", { cx: "9", cy: "9", r: "2" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/image-off.js
  var ImageOff = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
      ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }],
      ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }],
      ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }],
      ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }],
      ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/image-play.js
  var ImagePlay = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m11 16-5 5" }],
      ["path", { d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" }],
      [
        "path",
        {
          d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
        }
      ],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/image-plus.js
  var ImagePlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 5h6" }],
      ["path", { d: "M19 2v6" }],
      ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/image-up.js
  var ImageUp = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
        }
      ],
      ["path", { d: "m14 19.5 3-3 3 3" }],
      ["path", { d: "M17 22v-5.5" }],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/image.js
  var Image = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["circle", { cx: "9", cy: "9", r: "2" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/images.js
  var Images = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }],
      ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" }],
      ["circle", { cx: "12", cy: "8", r: "2" }],
      ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/import.js
  var Import = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3v12" }],
      ["path", { d: "m8 11 4 4 4-4" }],
      ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/inbox.js
  var Inbox = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/indent-decrease.js
  var IndentDecrease = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "7 8 3 12 7 16" }],
      ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }],
      ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }],
      ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/indent-increase.js
  var IndentIncrease = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "3 8 7 12 3 16" }],
      ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }],
      ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }],
      ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/indian-rupee.js
  var IndianRupee = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 3h12" }],
      ["path", { d: "M6 8h12" }],
      ["path", { d: "m6 13 8.5 8" }],
      ["path", { d: "M6 13h3" }],
      ["path", { d: "M9 13c6.667 0 6.667-10 0-10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/infinity.js
  var Infinity = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/info.js
  var Info = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 16v-4" }],
      ["path", { d: "M12 8h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/inspection-panel.js
  var InspectionPanel = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 7h.01" }],
      ["path", { d: "M17 7h.01" }],
      ["path", { d: "M7 17h.01" }],
      ["path", { d: "M17 17h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/instagram.js
  var Instagram = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
      ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }],
      ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/italic.js
  var Italic = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "19", x2: "10", y1: "4", y2: "4" }],
      ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }],
      ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/iteration-ccw.js
  var IterationCcw = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" }],
      ["polyline", { points: "16 14 20 18 16 22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/iteration-cw.js
  var IterationCw = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" }],
      ["polyline", { points: "8 22 4 18 8 14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/japanese-yen.js
  var JapaneseYen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }],
      ["path", { d: "M6 15h12" }],
      ["path", { d: "M6 11h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/joystick.js
  var Joystick = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }],
      ["path", { d: "M6 15v-2" }],
      ["path", { d: "M12 15V9" }],
      ["circle", { cx: "12", cy: "6", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/kanban.js
  var Kanban = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 5v11" }],
      ["path", { d: "M12 5v6" }],
      ["path", { d: "M18 5v14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/key-round.js
  var KeyRound = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
        }
      ],
      ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/key-square.js
  var KeySquare = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"
        }
      ],
      ["path", { d: "m14 7 3 3" }],
      [
        "path",
        {
          d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/key.js
  var Key = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }],
      ["path", { d: "m21 2-9.6 9.6" }],
      ["circle", { cx: "7.5", cy: "15.5", r: "5.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/keyboard-music.js
  var KeyboardMusic = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M6 8h4" }],
      ["path", { d: "M14 8h.01" }],
      ["path", { d: "M18 8h.01" }],
      ["path", { d: "M2 12h20" }],
      ["path", { d: "M6 12v4" }],
      ["path", { d: "M10 12v4" }],
      ["path", { d: "M14 12v4" }],
      ["path", { d: "M18 12v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/keyboard-off.js
  var KeyboardOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M 20 4 A2 2 0 0 1 22 6" }],
      ["path", { d: "M 22 6 L 22 16.41" }],
      ["path", { d: "M 7 16 L 16 16" }],
      ["path", { d: "M 9.69 4 L 20 4" }],
      ["path", { d: "M14 8h.01" }],
      ["path", { d: "M18 8h.01" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }],
      ["path", { d: "M6 8h.01" }],
      ["path", { d: "M8 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/keyboard.js
  var Keyboard = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 8h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M14 8h.01" }],
      ["path", { d: "M16 12h.01" }],
      ["path", { d: "M18 8h.01" }],
      ["path", { d: "M6 8h.01" }],
      ["path", { d: "M7 16h10" }],
      ["path", { d: "M8 12h.01" }],
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lamp-ceiling.js
  var LampCeiling = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v5" }],
      ["path", { d: "M6 7h12l4 9H2l4-9Z" }],
      ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lamp-desk.js
  var LampDesk = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z" }],
      ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z" }],
      ["path", { d: "M9.5 6.5 4 12l3 6" }],
      ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lamp-floor.js
  var LampFloor = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 2h6l3 7H6l3-7Z" }],
      ["path", { d: "M12 9v13" }],
      ["path", { d: "M9 22h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lamp-wall-down.js
  var LampWallDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 13h6l3 7H8l3-7Z" }],
      ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8" }],
      ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lamp-wall-up.js
  var LampWallUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 4h6l3 7H8l3-7Z" }],
      ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8" }],
      ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lamp.js
  var Lamp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2h8l4 10H4L8 2Z" }],
      ["path", { d: "M12 12v6" }],
      ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/land-plot.js
  var LandPlot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m12 8 6-3-6-3v10" }],
      [
        "path",
        {
          d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
        }
      ],
      ["path", { d: "m6.49 12.85 11.02 6.3" }],
      ["path", { d: "M17.51 12.85 6.5 19.15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/landmark.js
  var Landmark = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "3", x2: "21", y1: "22", y2: "22" }],
      ["line", { x1: "6", x2: "6", y1: "18", y2: "11" }],
      ["line", { x1: "10", x2: "10", y1: "18", y2: "11" }],
      ["line", { x1: "14", x2: "14", y1: "18", y2: "11" }],
      ["line", { x1: "18", x2: "18", y1: "18", y2: "11" }],
      ["polygon", { points: "12 2 20 7 4 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/languages.js
  var Languages = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m5 8 6 6" }],
      ["path", { d: "m4 14 6-6 2-3" }],
      ["path", { d: "M2 5h12" }],
      ["path", { d: "M7 2h1" }],
      ["path", { d: "m22 22-5-10-5 10" }],
      ["path", { d: "M14 18h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/laptop-minimal.js
  var LaptopMinimal = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2" }],
      ["line", { x1: "2", x2: "22", y1: "20", y2: "20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/laptop.js
  var Laptop = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lasso-select.js
  var LassoSelect = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
      ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91" }],
      [
        "path",
        { d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }
      ],
      ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }],
      [
        "path",
        {
          d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lasso.js
  var Lasso = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
      [
        "path",
        { d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1" }
      ],
      ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/laugh.js
  var Laugh = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layers-2.js
  var Layers2 = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"
        }
      ],
      [
        "path",
        {
          d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layers-3.js
  var Layers3 = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
        }
      ],
      [
        "path",
        {
          d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
        }
      ],
      [
        "path",
        {
          d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layers.js
  var Layers = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
        }
      ],
      ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }],
      ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layout-dashboard.js
  var LayoutDashboard = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }],
      ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layout-grid.js
  var LayoutGrid = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layout-list.js
  var LayoutList = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
      ["path", { d: "M14 4h7" }],
      ["path", { d: "M14 9h7" }],
      ["path", { d: "M14 15h7" }],
      ["path", { d: "M14 20h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layout-panel-left.js
  var LayoutPanelLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layout-panel-top.js
  var LayoutPanelTop = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/layout-template.js
  var LayoutTemplate = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }],
      ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/leaf.js
  var Leaf = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }
      ],
      ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/leafy-green.js
  var LeafyGreen = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
        }
      ],
      ["path", { d: "M2 22 17 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lectern.js
  var Lectern = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
        }
      ],
      ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3" }],
      ["rect", { width: "8", height: "12", x: "8", y: "10", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/letter-text.js
  var LetterText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 12h6" }],
      ["path", { d: "M15 6h6" }],
      ["path", { d: "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" }],
      ["path", { d: "M3 18h18" }],
      ["path", { d: "M4 11h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/library-big.js
  var LibraryBig = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }],
      ["path", { d: "M7 3v18" }],
      [
        "path",
        {
          d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/library.js
  var Library = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m16 6 4 14" }],
      ["path", { d: "M12 6v14" }],
      ["path", { d: "M8 8v12" }],
      ["path", { d: "M4 4v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/life-buoy.js
  var LifeBuoy = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m4.93 4.93 4.24 4.24" }],
      ["path", { d: "m14.83 9.17 4.24-4.24" }],
      ["path", { d: "m14.83 14.83 4.24 4.24" }],
      ["path", { d: "m9.17 14.83-4.24 4.24" }],
      ["circle", { cx: "12", cy: "12", r: "4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ligature.js
  var Ligature = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" }],
      ["path", { d: "M6 12h4" }],
      ["path", { d: "M14 12h2v8" }],
      ["path", { d: "M6 20h4" }],
      ["path", { d: "M14 20h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lightbulb-off.js
  var LightbulbOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }],
      ["path", { d: "M9 18h6" }],
      ["path", { d: "M10 22h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lightbulb.js
  var Lightbulb = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        }
      ],
      ["path", { d: "M9 18h6" }],
      ["path", { d: "M10 22h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/link-2-off.js
  var Link2Off = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7" }],
      ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }],
      ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/link-2.js
  var Link2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }],
      ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/link.js
  var Link = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }],
      ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/linkedin.js
  var Linkedin = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }
      ],
      ["rect", { width: "4", height: "12", x: "2", y: "9" }],
      ["circle", { cx: "4", cy: "4", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-check.js
  var ListCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 18H3" }],
      ["path", { d: "m15 18 2 2 4-4" }],
      ["path", { d: "M16 12H3" }],
      ["path", { d: "M16 6H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-checks.js
  var ListChecks = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 17 2 2 4-4" }],
      ["path", { d: "m3 7 2 2 4-4" }],
      ["path", { d: "M13 6h8" }],
      ["path", { d: "M13 12h8" }],
      ["path", { d: "M13 18h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-collapse.js
  var ListCollapse = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 10 2.5-2.5L3 5" }],
      ["path", { d: "m3 19 2.5-2.5L3 14" }],
      ["path", { d: "M10 6h11" }],
      ["path", { d: "M10 12h11" }],
      ["path", { d: "M10 18h11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-end.js
  var ListEnd = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 12H3" }],
      ["path", { d: "M16 6H3" }],
      ["path", { d: "M10 18H3" }],
      ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5" }],
      ["path", { d: "m16 16-2 2 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-filter.js
  var ListFilter = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 6h18" }],
      ["path", { d: "M7 12h10" }],
      ["path", { d: "M10 18h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-minus.js
  var ListMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 12H3" }],
      ["path", { d: "M16 6H3" }],
      ["path", { d: "M16 18H3" }],
      ["path", { d: "M21 12h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-music.js
  var ListMusic = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15V6" }],
      ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }],
      ["path", { d: "M12 12H3" }],
      ["path", { d: "M16 6H3" }],
      ["path", { d: "M12 18H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-ordered.js
  var ListOrdered = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "10", x2: "21", y1: "6", y2: "6" }],
      ["line", { x1: "10", x2: "21", y1: "12", y2: "12" }],
      ["line", { x1: "10", x2: "21", y1: "18", y2: "18" }],
      ["path", { d: "M4 6h1v4" }],
      ["path", { d: "M4 10h2" }],
      ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-plus.js
  var ListPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 12H3" }],
      ["path", { d: "M16 6H3" }],
      ["path", { d: "M16 18H3" }],
      ["path", { d: "M18 9v6" }],
      ["path", { d: "M21 12h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-restart.js
  var ListRestart = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 6H3" }],
      ["path", { d: "M7 12H3" }],
      ["path", { d: "M7 18H3" }],
      ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }],
      ["path", { d: "M11 10v4h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-start.js
  var ListStart = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 12H3" }],
      ["path", { d: "M16 18H3" }],
      ["path", { d: "M10 6H3" }],
      ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5" }],
      ["path", { d: "m16 8-2-2 2-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-todo.js
  var ListTodo = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }],
      ["path", { d: "m3 17 2 2 4-4" }],
      ["path", { d: "M13 6h8" }],
      ["path", { d: "M13 12h8" }],
      ["path", { d: "M13 18h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-tree.js
  var ListTree = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 12h-8" }],
      ["path", { d: "M21 6H8" }],
      ["path", { d: "M21 18h-8" }],
      ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3" }],
      ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-video.js
  var ListVideo = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 12H3" }],
      ["path", { d: "M16 6H3" }],
      ["path", { d: "M12 18H3" }],
      ["path", { d: "m16 12 5 3-5 3v-6Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list-x.js
  var ListX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 12H3" }],
      ["path", { d: "M16 6H3" }],
      ["path", { d: "M16 18H3" }],
      ["path", { d: "m19 10-4 4" }],
      ["path", { d: "m15 10 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/list.js
  var List = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "8", x2: "21", y1: "6", y2: "6" }],
      ["line", { x1: "8", x2: "21", y1: "12", y2: "12" }],
      ["line", { x1: "8", x2: "21", y1: "18", y2: "18" }],
      ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }],
      ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }],
      ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/loader-circle.js
  var LoaderCircle = [
    "svg",
    defaultAttributes,
    [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]]
  ];

  // node_modules/lucide/dist/esm/icons/loader-pinwheel.js
  var LoaderPinwheel = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5" }],
      ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }],
      ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/loader.js
  var Loader = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v4" }],
      ["path", { d: "m16.2 7.8 2.9-2.9" }],
      ["path", { d: "M18 12h4" }],
      ["path", { d: "m16.2 16.2 2.9 2.9" }],
      ["path", { d: "M12 18v4" }],
      ["path", { d: "m4.9 19.1 2.9-2.9" }],
      ["path", { d: "M2 12h4" }],
      ["path", { d: "m4.9 4.9 2.9 2.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/locate-fixed.js
  var LocateFixed = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
      ["circle", { cx: "12", cy: "12", r: "7" }],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/locate-off.js
  var LocateOff = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
      ["path", { d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11" }],
      ["path", { d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/locate.js
  var Locate = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
      ["circle", { cx: "12", cy: "12", r: "7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lock-keyhole-open.js
  var LockKeyholeOpen = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "16", r: "1" }],
      ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }],
      ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lock-keyhole.js
  var LockKeyhole = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "16", r: "1" }],
      ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }],
      ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lock-open.js
  var LockOpen = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lock.js
  var Lock = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/log-in.js
  var LogIn = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }],
      ["polyline", { points: "10 17 15 12 10 7" }],
      ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/log-out.js
  var LogOut = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }],
      ["polyline", { points: "16 17 21 12 16 7" }],
      ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/logs.js
  var Logs = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 12h8" }],
      ["path", { d: "M13 18h8" }],
      ["path", { d: "M13 6h8" }],
      ["path", { d: "M3 12h1" }],
      ["path", { d: "M3 18h1" }],
      ["path", { d: "M3 6h1" }],
      ["path", { d: "M8 12h1" }],
      ["path", { d: "M8 18h1" }],
      ["path", { d: "M8 6h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lollipop.js
  var Lollipop = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }],
      ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/luggage.js
  var Luggage = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }],
      ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }],
      ["path", { d: "M10 20h4" }],
      ["circle", { cx: "16", cy: "20", r: "2" }],
      ["circle", { cx: "8", cy: "20", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/magnet.js
  var Magnet = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
        }
      ],
      ["path", { d: "m5 8 4 4" }],
      ["path", { d: "m12 15 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-check.js
  var MailCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "m16 19 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-minus.js
  var MailMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M16 19h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-open.js
  var MailOpen = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
        }
      ],
      ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-plus.js
  var MailPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M16 19h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-question.js
  var MailQuestion = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }],
      ["path", { d: "M20 22v.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-search.js
  var MailSearch = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["path", { d: "m22 22-1.5-1.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-warning.js
  var MailWarning = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M20 14v4" }],
      ["path", { d: "M20 22v.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail-x.js
  var MailX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "m17 17 4 4" }],
      ["path", { d: "m21 17-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mail.js
  var Mail = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mailbox.js
  var Mailbox = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }],
      ["polyline", { points: "15,9 18,9 18,11" }],
      ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }],
      ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mails.js
  var Mails = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2" }],
      ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }],
      ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-check-inside.js
  var MapPinCheckInside = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "m9 10 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-check.js
  var MapPinCheck = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "m16 18 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-minus-inside.js
  var MapPinMinusInside = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "M9 10h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-minus.js
  var MapPinMinus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M16 18h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-off.js
  var MapPinOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16" }],
      [
        "path",
        {
          d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
        }
      ],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }],
      ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-plus-inside.js
  var MapPinPlusInside = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "M12 7v6" }],
      ["path", { d: "M9 10h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-plus.js
  var MapPinPlus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M16 18h6" }],
      ["path", { d: "M19 15v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-x-inside.js
  var MapPinXInside = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "m14.5 7.5-5 5" }],
      ["path", { d: "m9.5 7.5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin-x.js
  var MapPinX = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "m21.5 15.5-5 5" }],
      ["path", { d: "m21.5 20.5-5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pin.js
  var MapPin = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map-pinned.js
  var MapPinned = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "2" }],
      [
        "path",
        {
          d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/map.js
  var Map = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
        }
      ],
      ["path", { d: "M15 5.764v15" }],
      ["path", { d: "M9 3.236v15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/martini.js
  var Martini = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M12 11v11" }],
      ["path", { d: "m19 3-7 8-7-8Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/maximize-2.js
  var Maximize2 = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "15 3 21 3 21 9" }],
      ["polyline", { points: "9 21 3 21 3 15" }],
      ["line", { x1: "21", x2: "14", y1: "3", y2: "10" }],
      ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/maximize.js
  var Maximize = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/medal.js
  var Medal = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
        }
      ],
      ["path", { d: "M11 12 5.12 2.2" }],
      ["path", { d: "m13 12 5.88-9.8" }],
      ["path", { d: "M8 7h8" }],
      ["circle", { cx: "12", cy: "17", r: "5" }],
      ["path", { d: "M12 18v-2h-.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/megaphone-off.js
  var MegaphoneOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14" }],
      ["path", { d: "M21 15.34V6l-7.31 2.03" }],
      ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/megaphone.js
  var Megaphone = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 11 18-5v12L3 14v-3z" }],
      ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/meh.js
  var Meh = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "8", x2: "16", y1: "15", y2: "15" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/memory-stick.js
  var MemoryStick = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 19v-3" }],
      ["path", { d: "M10 19v-3" }],
      ["path", { d: "M14 19v-3" }],
      ["path", { d: "M18 19v-3" }],
      ["path", { d: "M8 11V9" }],
      ["path", { d: "M16 11V9" }],
      ["path", { d: "M12 11V9" }],
      ["path", { d: "M2 15h20" }],
      [
        "path",
        {
          d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/menu.js
  var Menu = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/merge.js
  var Merge = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m8 6 4-4 4 4" }],
      ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }],
      ["path", { d: "m20 22-5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-code.js
  var MessageCircleCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 9.5 8 12l2 2.5" }],
      ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-dashed.js
  var MessageCircleDashed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" }],
      ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" }],
      ["path", { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" }],
      ["path", { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" }],
      ["path", { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" }],
      ["path", { d: "M3.5 17.5 2 22l4.5-1.5" }],
      ["path", { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" }],
      ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-heart.js
  var MessageCircleHeart = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
      [
        "path",
        {
          d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-more.js
  var MessageCircleMore = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-off.js
  var MessageCircleOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-plus.js
  var MessageCirclePlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M12 8v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-question.js
  var MessageCircleQuestion = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
      ["path", { d: "M12 17h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-reply.js
  var MessageCircleReply = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
      ["path", { d: "m10 15-3-3 3-3" }],
      ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-warning.js
  var MessageCircleWarning = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
      ["path", { d: "M12 8v4" }],
      ["path", { d: "M12 16h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle-x.js
  var MessageCircleX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "m9 9 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-circle.js
  var MessageCircle = [
    "svg",
    defaultAttributes,
    [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-code.js
  var MessageSquareCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 7.5 8 10l2 2.5" }],
      ["path", { d: "m14 7.5 2 2.5-2 2.5" }],
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-dashed.js
  var MessageSquareDashed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 6V5c0-1.1.9-2 2-2h2" }],
      ["path", { d: "M11 3h3" }],
      ["path", { d: "M18 3h1c1.1 0 2 .9 2 2" }],
      ["path", { d: "M21 9v2" }],
      ["path", { d: "M21 15c0 1.1-.9 2-2 2h-1" }],
      ["path", { d: "M14 17h-3" }],
      ["path", { d: "m7 17-4 4v-5" }],
      ["path", { d: "M3 12v-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-diff.js
  var MessageSquareDiff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }],
      ["path", { d: "M9 10h6" }],
      ["path", { d: "M12 7v6" }],
      ["path", { d: "M9 17h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-dot.js
  var MessageSquareDot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" }],
      ["circle", { cx: "18", cy: "6", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-heart.js
  var MessageSquareHeart = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      [
        "path",
        {
          d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-more.js
  var MessageSquareMore = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      ["path", { d: "M8 10h.01" }],
      ["path", { d: "M12 10h.01" }],
      ["path", { d: "M16 10h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-off.js
  var MessageSquareOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-plus.js
  var MessageSquarePlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      ["path", { d: "M12 7v6" }],
      ["path", { d: "M9 10h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-quote.js
  var MessageSquareQuote = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8" }],
      ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-reply.js
  var MessageSquareReply = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      ["path", { d: "m10 7-3 3 3 3" }],
      ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-share.js
  var MessageSquareShare = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" }],
      ["path", { d: "M16 3h5v5" }],
      ["path", { d: "m16 8 5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-text.js
  var MessageSquareText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      ["path", { d: "M13 8H7" }],
      ["path", { d: "M17 12H7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-warning.js
  var MessageSquareWarning = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      ["path", { d: "M12 7v2" }],
      ["path", { d: "M12 13h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square-x.js
  var MessageSquareX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
      ["path", { d: "m14.5 7.5-5 5" }],
      ["path", { d: "m9.5 7.5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/message-square.js
  var MessageSquare = [
    "svg",
    defaultAttributes,
    [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/messages-square.js
  var MessagesSquare = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" }],
      ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mic-off.js
  var MicOff = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
      ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" }],
      ["path", { d: "M5 10v2a7 7 0 0 0 12 5" }],
      ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }],
      ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mic-vocal.js
  var MicVocal = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }
      ],
      [
        "path",
        {
          d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
        }
      ],
      ["circle", { cx: "16", cy: "7", r: "5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mic.js
  var Mic = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }],
      ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/microscope.js
  var Microscope = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 18h8" }],
      ["path", { d: "M3 22h18" }],
      ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }],
      ["path", { d: "M9 14h2" }],
      ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }],
      ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/microwave.js
  var Microwave = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }],
      ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }],
      ["path", { d: "M18 8v7" }],
      ["path", { d: "M6 19v2" }],
      ["path", { d: "M18 19v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/milestone.js
  var Milestone = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" }],
      ["path", { d: "M12 13v8" }],
      ["path", { d: "M12 3v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/milk-off.js
  var MilkOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2h8" }],
      [
        "path",
        {
          d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
        }
      ],
      ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/milk.js
  var Milk = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2h8" }],
      [
        "path",
        {
          d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
        }
      ],
      ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/minimize-2.js
  var Minimize2 = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "4 14 10 14 10 20" }],
      ["polyline", { points: "20 10 14 10 14 4" }],
      ["line", { x1: "14", x2: "21", y1: "10", y2: "3" }],
      ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/minimize.js
  var Minimize = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/minus.js
  var Minus = ["svg", defaultAttributes, [["path", { d: "M5 12h14" }]]];

  // node_modules/lucide/dist/esm/icons/monitor-check.js
  var MonitorCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 10 2 2 4-4" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-cog.js
  var MonitorCog = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m15.2 4.9-.9-.4" }],
      ["path", { d: "m15.2 7.1-.9.4" }],
      ["path", { d: "m16.9 3.2-.4-.9" }],
      ["path", { d: "m16.9 8.8-.4.9" }],
      ["path", { d: "m19.5 2.3-.4.9" }],
      ["path", { d: "m19.5 9.7-.4-.9" }],
      ["path", { d: "m21.7 4.5-.9.4" }],
      ["path", { d: "m21.7 7.5-.9-.4" }],
      ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
      ["path", { d: "M8 21h8" }],
      ["circle", { cx: "18", cy: "6", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-dot.js
  var MonitorDot = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "19", cy: "6", r: "3" }],
      ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-down.js
  var MonitorDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 13V7" }],
      ["path", { d: "m15 10-3 3-3-3" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-off.js
  var MonitorOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" }],
      ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9" }],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-pause.js
  var MonitorPause = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 13V7" }],
      ["path", { d: "M14 13V7" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-play.js
  var MonitorPlay = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
        }
      ],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }],
      ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-smartphone.js
  var MonitorSmartphone = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }],
      ["path", { d: "M10 19v-3.96 3.15" }],
      ["path", { d: "M7 19h5" }],
      ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-speaker.js
  var MonitorSpeaker = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5.5 20H8" }],
      ["path", { d: "M17 9h.01" }],
      ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }],
      ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "17", cy: "15", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-stop.js
  var MonitorStop = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }],
      ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }],
      ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-up.js
  var MonitorUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 10 3-3 3 3" }],
      ["path", { d: "M12 13V7" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor-x.js
  var MonitorX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14.5 12.5-5-5" }],
      ["path", { d: "m9.5 12.5 5-5" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/monitor.js
  var Monitor = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/moon-star.js
  var MoonStar = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" }],
      ["path", { d: "M20 3v4" }],
      ["path", { d: "M22 5h-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/moon.js
  var Moon = [
    "svg",
    defaultAttributes,
    [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/mountain-snow.js
  var MountainSnow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }],
      ["path", { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mountain.js
  var Mountain = [
    "svg",
    defaultAttributes,
    [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/mouse-off.js
  var MouseOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 6v.343" }],
      ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }],
      ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902" }],
      ["path", { d: "M22 22 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mouse-pointer-2.js
  var MousePointer2 = [
    "svg",
    defaultAttributes,
    [["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/mouse-pointer-ban.js
  var MousePointerBan = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 2 4 11 2-5 5-2Z" }],
      ["circle", { cx: "16", cy: "16", r: "6" }],
      ["path", { d: "m11.8 11.8 8.4 8.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mouse-pointer-click.js
  var MousePointerClick = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 9 5 12 1.8-5.2L21 14Z" }],
      ["path", { d: "M7.2 2.2 8 5.1" }],
      ["path", { d: "m5.1 8-2.9-.8" }],
      ["path", { d: "M14 4.1 12 6" }],
      ["path", { d: "m6 12-1.9 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mouse-pointer.js
  var MousePointer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }],
      ["path", { d: "m13 13 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/mouse.js
  var Mouse = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }],
      ["path", { d: "M12 6v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-3d.js
  var Move3d = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 3v16h16" }],
      ["path", { d: "m5 19 6-6" }],
      ["path", { d: "m2 6 3-3 3 3" }],
      ["path", { d: "m18 16 3 3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-diagonal-2.js
  var MoveDiagonal2 = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "5 11 5 5 11 5" }],
      ["polyline", { points: "19 13 19 19 13 19" }],
      ["line", { x1: "5", x2: "19", y1: "5", y2: "19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-diagonal.js
  var MoveDiagonal = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "13 5 19 5 19 11" }],
      ["polyline", { points: "11 19 5 19 5 13" }],
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-down-left.js
  var MoveDownLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 19H5V13" }],
      ["path", { d: "M19 5L5 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-down-right.js
  var MoveDownRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19 13V19H13" }],
      ["path", { d: "M5 5L19 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-down.js
  var MoveDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 18L12 22L16 18" }],
      ["path", { d: "M12 2V22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-horizontal.js
  var MoveHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "18 8 22 12 18 16" }],
      ["polyline", { points: "6 8 2 12 6 16" }],
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-left.js
  var MoveLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 8L2 12L6 16" }],
      ["path", { d: "M2 12H22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-right.js
  var MoveRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 8L22 12L18 16" }],
      ["path", { d: "M2 12H22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-up-left.js
  var MoveUpLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 11V5H11" }],
      ["path", { d: "M5 5L19 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-up-right.js
  var MoveUpRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 5H19V11" }],
      ["path", { d: "M19 5L5 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-up.js
  var MoveUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 6L12 2L16 6" }],
      ["path", { d: "M12 2V22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move-vertical.js
  var MoveVertical = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "8 18 12 22 16 18" }],
      ["polyline", { points: "8 6 12 2 16 6" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/move.js
  var Move = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "5 9 2 12 5 15" }],
      ["polyline", { points: "9 5 12 2 15 5" }],
      ["polyline", { points: "15 19 12 22 9 19" }],
      ["polyline", { points: "19 9 22 12 19 15" }],
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/music-2.js
  var Music2 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "8", cy: "18", r: "4" }],
      ["path", { d: "M12 18V2l7 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/music-3.js
  var Music3 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "18", r: "4" }],
      ["path", { d: "M16 18V2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/music-4.js
  var Music4 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 18V5l12-2v13" }],
      ["path", { d: "m9 9 12-2" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["circle", { cx: "18", cy: "16", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/music.js
  var Music = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 18V5l12-2v13" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["circle", { cx: "18", cy: "16", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/navigation-2-off.js
  var Navigation2Off = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }],
      ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/navigation-2.js
  var Navigation2 = [
    "svg",
    defaultAttributes,
    [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]]
  ];

  // node_modules/lucide/dist/esm/icons/navigation-off.js
  var NavigationOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }],
      ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/navigation.js
  var Navigation = [
    "svg",
    defaultAttributes,
    [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]]
  ];

  // node_modules/lucide/dist/esm/icons/network.js
  var Network = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }],
      ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }],
      ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }],
      ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }],
      ["path", { d: "M12 12V8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/newspaper.js
  var Newspaper = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
        }
      ],
      ["path", { d: "M18 14h-8" }],
      ["path", { d: "M15 18h-5" }],
      ["path", { d: "M10 6h8v4h-8V6Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/nfc.js
  var Nfc = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36" }],
      ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
      ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }],
      ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/notebook-pen.js
  var NotebookPen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }],
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      [
        "path",
        {
          d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/notebook-tabs.js
  var NotebookTabs = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M15 2v20" }],
      ["path", { d: "M15 7h5" }],
      ["path", { d: "M15 12h5" }],
      ["path", { d: "M15 17h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/notebook-text.js
  var NotebookText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M9.5 8h5" }],
      ["path", { d: "M9.5 12H16" }],
      ["path", { d: "M9.5 16H14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/notebook.js
  var Notebook = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M16 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/notepad-text-dashed.js
  var NotepadTextDashed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M20 12v2" }],
      ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1" }],
      ["path", { d: "M13 22h-2" }],
      ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M4 14v-2" }],
      ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M8 10h6" }],
      ["path", { d: "M8 14h8" }],
      ["path", { d: "M8 18h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/notepad-text.js
  var NotepadText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2" }],
      ["path", { d: "M8 10h6" }],
      ["path", { d: "M8 14h8" }],
      ["path", { d: "M8 18h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/nut-off.js
  var NutOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 4V2" }],
      [
        "path",
        {
          d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
        }
      ],
      ["path", { d: "M19 10v3.343" }],
      [
        "path",
        {
          d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/nut.js
  var Nut = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 4V2" }],
      [
        "path",
        {
          d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
        }
      ],
      [
        "path",
        {
          d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/octagon-alert.js
  var OctagonAlert = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 16h.01" }],
      ["path", { d: "M12 8v4" }],
      [
        "path",
        {
          d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/octagon-pause.js
  var OctagonPause = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 15V9" }],
      ["path", { d: "M14 15V9" }],
      [
        "path",
        {
          d: "M2.586 16.872A2 2 0 0 1 2 15.458V8.542a2 2 0 0 1 .586-1.414l4.542-4.542A2 2 0 0 1 8.542 2h6.916a2 2 0 0 1 1.414.586l4.542 4.542A2 2 0 0 1 22 8.542v6.916a2 2 0 0 1-.586 1.414l-4.542 4.542a2 2 0 0 1-1.414.586H8.542a2 2 0 0 1-1.414-.586z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/octagon-x.js
  var OctagonX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15 9-6 6" }],
      [
        "path",
        {
          d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
        }
      ],
      ["path", { d: "m9 9 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/octagon.js
  var Octagon = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/option.js
  var Option = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3h6l6 18h6" }],
      ["path", { d: "M14 3h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/orbit.js
  var Orbit = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["circle", { cx: "19", cy: "5", r: "2" }],
      ["circle", { cx: "5", cy: "19", r: "2" }],
      ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416" }],
      ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/origami.js
  var Origami = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }],
      [
        "path",
        { d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }
      ],
      [
        "path",
        {
          d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package-2.js
  var Package2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" }],
      ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" }],
      ["path", { d: "M12 3v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package-check.js
  var PackageCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m16 16 2 2 4-4" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package-minus.js
  var PackageMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 16h6" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package-open.js
  var PackageOpen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22v-9" }],
      [
        "path",
        {
          d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
        }
      ],
      [
        "path",
        {
          d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
        }
      ],
      [
        "path",
        {
          d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package-plus.js
  var PackagePlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 16h6" }],
      ["path", { d: "M19 13v6" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package-search.js
  var PackageSearch = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
      ["circle", { cx: "18.5", cy: "15.5", r: "2.5" }],
      ["path", { d: "M20.27 17.27 22 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package-x.js
  var PackageX = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
      ["path", { d: "m17 13 5 5m-5 0 5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/package.js
  var Package = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7.5 4.27 9 5.15" }],
      [
        "path",
        {
          d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        }
      ],
      ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
      ["path", { d: "M12 22V12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/paint-bucket.js
  var PaintBucket = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }],
      ["path", { d: "m5 2 5 5" }],
      ["path", { d: "M2 13h15" }],
      ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/paint-roller.js
  var PaintRoller = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2" }],
      ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }],
      ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/paintbrush-vertical.js
  var PaintbrushVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2v2" }],
      ["path", { d: "M14 2v4" }],
      ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }],
      [
        "path",
        {
          d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/paintbrush.js
  var Paintbrush = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m14.622 17.897-10.68-2.913" }],
      [
        "path",
        {
          d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
        }
      ],
      [
        "path",
        {
          d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/palette.js
  var Palette = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }],
      [
        "path",
        {
          d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-bottom-close.js
  var PanelBottomClose = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "m15 8-3 3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-bottom-dashed.js
  var PanelBottomDashed = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M14 15h1" }],
      ["path", { d: "M19 15h2" }],
      ["path", { d: "M3 15h2" }],
      ["path", { d: "M9 15h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-bottom-open.js
  var PanelBottomOpen = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "m9 10 3-3 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-bottom.js
  var PanelBottom = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-left-close.js
  var PanelLeftClose = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "m16 15-3-3 3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-left-dashed.js
  var PanelLeftDashed = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 14v1" }],
      ["path", { d: "M9 19v2" }],
      ["path", { d: "M9 3v2" }],
      ["path", { d: "M9 9v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-left-open.js
  var PanelLeftOpen = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "m14 9 3 3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-left.js
  var PanelLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-right-close.js
  var PanelRightClose = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 3v18" }],
      ["path", { d: "m8 9 3 3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-right-dashed.js
  var PanelRightDashed = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 14v1" }],
      ["path", { d: "M15 19v2" }],
      ["path", { d: "M15 3v2" }],
      ["path", { d: "M15 9v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-right-open.js
  var PanelRightOpen = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 3v18" }],
      ["path", { d: "m10 15-3-3 3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-right.js
  var PanelRight = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-top-close.js
  var PanelTopClose = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "m9 16 3-3 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-top-dashed.js
  var PanelTopDashed = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M14 9h1" }],
      ["path", { d: "M19 9h2" }],
      ["path", { d: "M3 9h2" }],
      ["path", { d: "M9 9h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-top-open.js
  var PanelTopOpen = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "m15 14-3 3-3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panel-top.js
  var PanelTop = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panels-left-bottom.js
  var PanelsLeftBottom = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "M9 15h12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panels-right-bottom.js
  var PanelsRightBottom = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h12" }],
      ["path", { d: "M15 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/panels-top-left.js
  var PanelsTopLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M9 21V9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/paperclip.js
  var Paperclip = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/parentheses.js
  var Parentheses = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
      ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/parking-meter.js
  var ParkingMeter = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 9a3 3 0 1 1 6 0" }],
      ["path", { d: "M12 12v3" }],
      ["path", { d: "M11 15h2" }],
      [
        "path",
        { d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" }
      ],
      ["path", { d: "M12 19v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/party-popper.js
  var PartyPopper = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5.8 11.3 2 22l10.7-3.79" }],
      ["path", { d: "M4 3h.01" }],
      ["path", { d: "M22 8h.01" }],
      ["path", { d: "M15 2h.01" }],
      ["path", { d: "M22 20h.01" }],
      [
        "path",
        {
          d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
        }
      ],
      ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }],
      ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }],
      [
        "path",
        {
          d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pause.js
  var Pause = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }],
      ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/paw-print.js
  var PawPrint = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11", cy: "4", r: "2" }],
      ["circle", { cx: "18", cy: "8", r: "2" }],
      ["circle", { cx: "20", cy: "16", r: "2" }],
      [
        "path",
        {
          d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pc-case.js
  var PcCase = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }],
      ["path", { d: "M15 14h.01" }],
      ["path", { d: "M9 6h6" }],
      ["path", { d: "M9 10h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pen-line.js
  var PenLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20h9" }],
      [
        "path",
        {
          d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pen-off.js
  var PenOff = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
        }
      ],
      ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pen-tool.js
  var PenTool = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
        }
      ],
      [
        "path",
        {
          d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
        }
      ],
      ["path", { d: "m2.3 2.3 7.286 7.286" }],
      ["circle", { cx: "11", cy: "11", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pen.js
  var Pen = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pencil-line.js
  var PencilLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20h9" }],
      [
        "path",
        {
          d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
        }
      ],
      ["path", { d: "m15 5 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pencil-off.js
  var PencilOff = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
        }
      ],
      ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
      ["path", { d: "m15 5 4 4" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pencil-ruler.js
  var PencilRuler = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }],
      ["path", { d: "m8 6 2-2" }],
      ["path", { d: "m18 16 2-2" }],
      ["path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ],
      ["path", { d: "m15 5 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pencil.js
  var Pencil = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ],
      ["path", { d: "m15 5 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pentagon.js
  var Pentagon = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/percent.js
  var Percent = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }],
      ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }],
      ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/person-standing.js
  var PersonStanding = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "5", r: "1" }],
      ["path", { d: "m9 20 3-6 3 6" }],
      ["path", { d: "m6 8 6 2 6-2" }],
      ["path", { d: "M12 10v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/philippine-peso.js
  var PhilippinePeso = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 11H4" }],
      ["path", { d: "M20 7H4" }],
      ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/phone-call.js
  var PhoneCall = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }
      ],
      ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94" }],
      ["path", { d: "M14.05 6A5 5 0 0 1 18 10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/phone-forwarded.js
  var PhoneForwarded = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "18 2 22 6 18 10" }],
      ["line", { x1: "14", x2: "22", y1: "6", y2: "6" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/phone-incoming.js
  var PhoneIncoming = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "16 2 16 8 22 8" }],
      ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/phone-missed.js
  var PhoneMissed = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }],
      ["line", { x1: "16", x2: "22", y1: "2", y2: "8" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/phone-off.js
  var PhoneOff = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
        }
      ],
      ["line", { x1: "22", x2: "2", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/phone-outgoing.js
  var PhoneOutgoing = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "22 8 22 2 16 2" }],
      ["line", { x1: "16", x2: "22", y1: "8", y2: "2" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/phone.js
  var Phone = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pi.js
  var Pi = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "9", x2: "9", y1: "4", y2: "20" }],
      ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }],
      ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/piano.js
  var Piano = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
        }
      ],
      ["path", { d: "M2 14h20" }],
      ["path", { d: "M6 14v4" }],
      ["path", { d: "M10 14v4" }],
      ["path", { d: "M14 14v4" }],
      ["path", { d: "M18 14v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pickaxe.js
  var Pickaxe = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" }],
      [
        "path",
        {
          d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"
        }
      ],
      [
        "path",
        {
          d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"
        }
      ],
      [
        "path",
        {
          d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/picture-in-picture-2.js
  var PictureInPicture2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }],
      ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/picture-in-picture.js
  var PictureInPicture = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3" }],
      ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/piggy-bank.js
  var PiggyBank = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"
        }
      ],
      ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1" }],
      ["path", { d: "M16 11h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pilcrow-left.js
  var PilcrowLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 3v11" }],
      ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9" }],
      ["path", { d: "M18 3v11" }],
      ["path", { d: "M22 18H2l4-4" }],
      ["path", { d: "m6 22-4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pilcrow-right.js
  var PilcrowRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 3v11" }],
      ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8" }],
      ["path", { d: "M14 3v11" }],
      ["path", { d: "m18 14 4 4H2" }],
      ["path", { d: "m22 18-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pilcrow.js
  var Pilcrow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 4v16" }],
      ["path", { d: "M17 4v16" }],
      ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pill-bottle.js
  var PillBottle = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }],
      ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }],
      ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pill.js
  var Pill = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }],
      ["path", { d: "m8.5 8.5 7 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pin-off.js
  var PinOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 17v5" }],
      ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pin.js
  var Pin = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 17v5" }],
      [
        "path",
        {
          d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pipette.js
  var Pipette = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 22 1-1h3l9-9" }],
      ["path", { d: "M3 21v-3l9-9" }],
      [
        "path",
        {
          d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pizza.js
  var Pizza = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 11h.01" }],
      ["path", { d: "M11 15h.01" }],
      ["path", { d: "M16 16h.01" }],
      ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16" }],
      ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/plane-landing.js
  var PlaneLanding = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 22h20" }],
      [
        "path",
        {
          d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/plane-takeoff.js
  var PlaneTakeoff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 22h20" }],
      [
        "path",
        {
          d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/plane.js
  var Plane = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/play.js
  var Play = ["svg", defaultAttributes, [["polygon", { points: "6 3 20 12 6 21 6 3" }]]];

  // node_modules/lucide/dist/esm/icons/plug-2.js
  var Plug2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 2v6" }],
      ["path", { d: "M15 2v6" }],
      ["path", { d: "M12 17v5" }],
      ["path", { d: "M5 8h14" }],
      ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/plug-zap.js
  var PlugZap = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
      ["path", { d: "m2 22 3-3" }],
      ["path", { d: "M7.5 13.5 10 11" }],
      ["path", { d: "M10.5 16.5 13 14" }],
      ["path", { d: "m18 3-4 4h6l-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/plug.js
  var Plug = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22v-5" }],
      ["path", { d: "M9 8V2" }],
      ["path", { d: "M15 8V2" }],
      ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/plus.js
  var Plus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 12h14" }],
      ["path", { d: "M12 5v14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pocket-knife.js
  var PocketKnife = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }],
      ["path", { d: "M18 6h.01" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }],
      ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pocket.js
  var Pocket = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }],
      ["polyline", { points: "8 10 12 14 16 10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/podcast.js
  var Podcast = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0" }],
      ["path", { d: "M8 14a5 5 0 1 1 8 0" }],
      ["circle", { cx: "12", cy: "11", r: "1" }],
      ["path", { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pointer-off.js
  var PointerOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957" }],
      ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295" }],
      ["path", { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }],
      [
        "path",
        {
          d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"
        }
      ],
      ["path", { d: "M6 6v8" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pointer.js
  var Pointer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 14a8 8 0 0 1-8 8" }],
      ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
      ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }],
      ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }],
      [
        "path",
        {
          d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/popcorn.js
  var Popcorn = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }],
      ["path", { d: "M10 22 9 8" }],
      ["path", { d: "m14 22 1-14" }],
      [
        "path",
        {
          d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/popsicle.js
  var Popsicle = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
        }
      ],
      ["path", { d: "m22 22-5.5-5.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pound-sterling.js
  var PoundSterling = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 7c0-5.333-8-5.333-8 0" }],
      ["path", { d: "M10 7v14" }],
      ["path", { d: "M6 21h12" }],
      ["path", { d: "M6 13h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/power-off.js
  var PowerOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }],
      ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/power.js
  var Power = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v10" }],
      ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/presentation.js
  var Presentation = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 3h20" }],
      ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }],
      ["path", { d: "m7 21 5-5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/printer-check.js
  var PrinterCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }],
      ["path", { d: "m16 19 2 2 4-4" }],
      ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/printer.js
  var Printer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }],
      ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/projector.js
  var Projector = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 7 3 5" }],
      ["path", { d: "M9 6V3" }],
      ["path", { d: "m13 7 2-2" }],
      ["circle", { cx: "9", cy: "13", r: "3" }],
      [
        "path",
        { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }
      ],
      ["path", { d: "M16 16h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/proportions.js
  var Proportions = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M12 9v11" }],
      ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/puzzle.js
  var Puzzle = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/pyramid.js
  var Pyramid = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
        }
      ],
      ["path", { d: "M12 2v20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/qr-code.js
  var QrCode = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }],
      ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }],
      ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 21v.01" }],
      ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }],
      ["path", { d: "M3 12h.01" }],
      ["path", { d: "M12 3h.01" }],
      ["path", { d: "M12 16v.01" }],
      ["path", { d: "M16 12h1" }],
      ["path", { d: "M21 12v.01" }],
      ["path", { d: "M12 21v-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/quote.js
  var Quote = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        }
      ],
      [
        "path",
        {
          d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rabbit.js
  var Rabbit = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 16a3 3 0 0 1 2.24 5" }],
      ["path", { d: "M18 12h.01" }],
      [
        "path",
        {
          d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
        }
      ],
      ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3" }],
      ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/radar.js
  var Radar = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }],
      ["path", { d: "M4 6h.01" }],
      ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }],
      ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }],
      ["path", { d: "M12 18h.01" }],
      ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "m13.41 10.59 5.66-5.66" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/radiation.js
  var Radiation = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 12h.01" }],
      [
        "path",
        {
          d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
        }
      ],
      [
        "path",
        {
          d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
        }
      ],
      [
        "path",
        {
          d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/radical.js
  var Radical = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/radio-receiver.js
  var RadioReceiver = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 16v2" }],
      ["path", { d: "M19 16v2" }],
      ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }],
      ["path", { d: "M18 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/radio-tower.js
  var RadioTower = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }],
      ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }],
      ["circle", { cx: "12", cy: "9", r: "2" }],
      ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }],
      ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }],
      ["path", { d: "M9.5 18h5" }],
      ["path", { d: "m8 22 4-11 4 11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/radio.js
  var Radio = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }],
      ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }],
      ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/radius.js
  var Radius = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }],
      ["circle", { cx: "19", cy: "19", r: "2" }],
      ["path", { d: "m13.41 13.41 4.18 4.18" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rail-symbol.js
  var RailSymbol = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 15h14" }],
      ["path", { d: "M5 9h14" }],
      ["path", { d: "m14 20-5-5 6-6-5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rainbow.js
  var Rainbow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 17a10 10 0 0 0-20 0" }],
      ["path", { d: "M6 17a6 6 0 0 1 12 0" }],
      ["path", { d: "M10 17a2 2 0 0 1 4 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rat.js
  var Rat = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        { d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4" }
      ],
      [
        "path",
        {
          d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"
        }
      ],
      ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5" }],
      ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12" }],
      ["path", { d: "M16 9h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ratio.js
  var Ratio = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }],
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-cent.js
  var ReceiptCent = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M12 6.5v11" }],
      ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-euro.js
  var ReceiptEuro = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 12h5" }],
      ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-indian-rupee.js
  var ReceiptIndianRupee = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 7h8" }],
      ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8" }],
      ["path", { d: "M8 11h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-japanese-yen.js
  var ReceiptJapaneseYen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "m12 10 3-3" }],
      ["path", { d: "m9 7 3 3v7.5" }],
      ["path", { d: "M9 11h6" }],
      ["path", { d: "M9 15h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-pound-sterling.js
  var ReceiptPoundSterling = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 13h5" }],
      ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0" }],
      ["path", { d: "M8 17h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-russian-ruble.js
  var ReceiptRussianRuble = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 15h5" }],
      ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-swiss-franc.js
  var ReceiptSwissFranc = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M10 17V7h5" }],
      ["path", { d: "M10 11h4" }],
      ["path", { d: "M8 15h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt-text.js
  var ReceiptText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M14 8H8" }],
      ["path", { d: "M16 12H8" }],
      ["path", { d: "M13 16H8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/receipt.js
  var Receipt = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
      ["path", { d: "M12 17.5v-11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rectangle-ellipsis.js
  var RectangleEllipsis = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M17 12h.01" }],
      ["path", { d: "M7 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rectangle-horizontal.js
  var RectangleHorizontal = [
    "svg",
    defaultAttributes,
    [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]
  ];

  // node_modules/lucide/dist/esm/icons/rectangle-vertical.js
  var RectangleVertical = [
    "svg",
    defaultAttributes,
    [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }]]
  ];

  // node_modules/lucide/dist/esm/icons/recycle.js
  var Recycle = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }],
      ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }],
      ["path", { d: "m14 16-3 3 3 3" }],
      ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }],
      [
        "path",
        {
          d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
        }
      ],
      ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/redo-2.js
  var Redo2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15 14 5-5-5-5" }],
      ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/redo-dot.js
  var RedoDot = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "17", r: "1" }],
      ["path", { d: "M21 7v6h-6" }],
      ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/redo.js
  var Redo = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 7v6h-6" }],
      ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/refresh-ccw-dot.js
  var RefreshCcwDot = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 2v6h6" }],
      ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8" }],
      ["path", { d: "M21 22v-6h-6" }],
      ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/refresh-ccw.js
  var RefreshCcw = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }],
      ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }],
      ["path", { d: "M16 16h5v5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/refresh-cw-off.js
  var RefreshCwOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }],
      ["path", { d: "M8 16H3v5" }],
      ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64" }],
      ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }],
      ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87" }],
      ["path", { d: "M21 3v5h-5" }],
      ["path", { d: "M22 22 2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/refresh-cw.js
  var RefreshCw = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }],
      ["path", { d: "M21 3v5h-5" }],
      ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }],
      ["path", { d: "M8 16H3v5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/refrigerator.js
  var Refrigerator = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }],
      ["path", { d: "M5 10h14" }],
      ["path", { d: "M15 7v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/regex.js
  var Regex = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 3v10" }],
      ["path", { d: "m12.67 5.5 8.66 5" }],
      ["path", { d: "m12.67 10.5 8.66-5" }],
      ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/remove-formatting.js
  var RemoveFormatting = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 7V4h16v3" }],
      ["path", { d: "M5 20h6" }],
      ["path", { d: "M13 4 8 20" }],
      ["path", { d: "m15 15 5 5" }],
      ["path", { d: "m20 15-5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/repeat-1.js
  var Repeat1 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m17 2 4 4-4 4" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
      ["path", { d: "m7 22-4-4 4-4" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }],
      ["path", { d: "M11 10h1v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/repeat-2.js
  var Repeat2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 9 3-3 3 3" }],
      ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }],
      ["path", { d: "m22 15-3 3-3-3" }],
      ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/repeat.js
  var Repeat = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m17 2 4 4-4 4" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
      ["path", { d: "m7 22-4-4 4-4" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/replace-all.js
  var ReplaceAll = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 4c0-1.1.9-2 2-2" }],
      ["path", { d: "M20 2c1.1 0 2 .9 2 2" }],
      ["path", { d: "M22 8c0 1.1-.9 2-2 2" }],
      ["path", { d: "M16 10c-1.1 0-2-.9-2-2" }],
      ["path", { d: "m3 7 3 3 3-3" }],
      ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1" }],
      ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }],
      ["path", { d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/replace.js
  var Replace = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 4c0-1.1.9-2 2-2" }],
      ["path", { d: "M20 2c1.1 0 2 .9 2 2" }],
      ["path", { d: "M22 8c0 1.1-.9 2-2 2" }],
      ["path", { d: "M16 10c-1.1 0-2-.9-2-2" }],
      ["path", { d: "m3 7 3 3 3-3" }],
      ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1" }],
      ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/reply-all.js
  var ReplyAll = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "7 17 2 12 7 7" }],
      ["polyline", { points: "12 17 7 12 12 7" }],
      ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/reply.js
  var Reply = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "9 17 4 12 9 7" }],
      ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rewind.js
  var Rewind = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "11 19 2 12 11 5 11 19" }],
      ["polygon", { points: "22 19 13 12 22 5 22 19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ribbon.js
  var Ribbon = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }],
      ["path", { d: "m12 18 2.57-3.5" }],
      ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009" }],
      ["path", { d: "M9.35 14.53 12 11.22" }],
      [
        "path",
        {
          d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rocket.js
  var Rocket = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
        }
      ],
      [
        "path",
        {
          d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
        }
      ],
      ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rocking-chair.js
  var RockingChair = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "3.5 2 6.5 12.5 18 12.5" }],
      ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }],
      ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20" }],
      ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/roller-coaster.js
  var RollerCoaster = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 19V5" }],
      ["path", { d: "M10 19V6.8" }],
      ["path", { d: "M14 19v-7.8" }],
      ["path", { d: "M18 5v4" }],
      ["path", { d: "M18 19v-6" }],
      ["path", { d: "M22 19V9" }],
      ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rotate-3d.js
  var Rotate3d = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
        }
      ],
      ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814" }],
      [
        "path",
        {
          d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rotate-ccw-square.js
  var RotateCcwSquare = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6" }],
      ["path", { d: "m15 2-3 3 3 3" }],
      ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rotate-ccw.js
  var RotateCcw = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rotate-cw-square.js
  var RotateCwSquare = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "m9 8 3-3-3-3" }],
      ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rotate-cw.js
  var RotateCw = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }],
      ["path", { d: "M21 3v5h-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/route-off.js
  var RouteOff = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "6", cy: "19", r: "3" }],
      ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }],
      ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }],
      ["path", { d: "M15 5h-4.3" }],
      ["circle", { cx: "18", cy: "5", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/route.js
  var Route = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "6", cy: "19", r: "3" }],
      ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }],
      ["circle", { cx: "18", cy: "5", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/router.js
  var Router = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6.01 18H6" }],
      ["path", { d: "M10.01 18H10" }],
      ["path", { d: "M15 10v4" }],
      ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }],
      ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rows-2.js
  var Rows2 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 12h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rows-3.js
  var Rows3 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M21 9H3" }],
      ["path", { d: "M21 15H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rows-4.js
  var Rows4 = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M21 7.5H3" }],
      ["path", { d: "M21 12H3" }],
      ["path", { d: "M21 16.5H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/rss.js
  var Rss = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 11a9 9 0 0 1 9 9" }],
      ["path", { d: "M4 4a16 16 0 0 1 16 16" }],
      ["circle", { cx: "5", cy: "19", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ruler.js
  var Ruler = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
        }
      ],
      ["path", { d: "m14.5 12.5 2-2" }],
      ["path", { d: "m11.5 9.5 2-2" }],
      ["path", { d: "m8.5 6.5 2-2" }],
      ["path", { d: "m17.5 15.5 2-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/russian-ruble.js
  var RussianRuble = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18" }],
      ["path", { d: "M6 15h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sailboat.js
  var Sailboat = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" }],
      ["path", { d: "M21 14 10 2 3 14h18Z" }],
      ["path", { d: "M10 2v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/salad.js
  var Salad = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 21h10" }],
      ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
      [
        "path",
        {
          d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
        }
      ],
      ["path", { d: "m13 12 4-4" }],
      ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sandwich.js
  var Sandwich = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" }],
      [
        "path",
        { d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" }
      ],
      ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" }],
      ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/satellite-dish.js
  var SatelliteDish = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z" }],
      ["path", { d: "m9 15 3-3" }],
      ["path", { d: "M17 13a6 6 0 0 0-6-6" }],
      ["path", { d: "M21 13A10 10 0 0 0 11 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/satellite.js
  var Satellite = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 7 9 3 5 7l4 4" }],
      ["path", { d: "m17 11 4 4-4 4-4-4" }],
      ["path", { d: "m8 12 4 4 6-6-4-4Z" }],
      ["path", { d: "m16 8 3-3" }],
      ["path", { d: "M9 21a6 6 0 0 0-6-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/save-all.js
  var SaveAll = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2v3a1 1 0 0 0 1 1h5" }],
      ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }],
      ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }],
      [
        "path",
        {
          d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/save-off.js
  var SaveOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 13H8a1 1 0 0 0-1 1v7" }],
      ["path", { d: "M14 8h1" }],
      ["path", { d: "M17 21v-4" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }],
      ["path", { d: "M29.5 11.5s5 5 4 5" }],
      ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/save.js
  var Save = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
      ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scale-3d.js
  var Scale3d = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "19", cy: "19", r: "2" }],
      ["circle", { cx: "5", cy: "5", r: "2" }],
      ["path", { d: "M5 7v12h12" }],
      ["path", { d: "m5 19 6-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scale.js
  var Scale = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
      ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
      ["path", { d: "M7 21h10" }],
      ["path", { d: "M12 3v18" }],
      ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scaling.js
  var Scaling = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
      ["path", { d: "M14 15H9v-5" }],
      ["path", { d: "M16 3h5v5" }],
      ["path", { d: "M21 3 9 15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan-barcode.js
  var ScanBarcode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M8 7v10" }],
      ["path", { d: "M12 7v10" }],
      ["path", { d: "M17 7v10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan-eye.js
  var ScanEye = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["circle", { cx: "12", cy: "12", r: "1" }],
      [
        "path",
        {
          d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan-face.js
  var ScanFace = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 9h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan-line.js
  var ScanLine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M7 12h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan-qr-code.js
  var ScanQrCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M17 8V7" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M7 17h.01" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan-search.js
  var ScanSearch = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "m16 16-1.9-1.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan-text.js
  var ScanText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M7 8h8" }],
      ["path", { d: "M7 12h10" }],
      ["path", { d: "M7 16h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scan.js
  var Scan = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/school.js
  var School = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4" }],
      ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" }],
      ["path", { d: "M18 5v17" }],
      ["path", { d: "m4 6 8-4 8 4" }],
      ["path", { d: "M6 5v17" }],
      ["circle", { cx: "12", cy: "9", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scissors-line-dashed.js
  var ScissorsLineDashed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5.42 9.42 8 12" }],
      ["circle", { cx: "4", cy: "8", r: "2" }],
      ["path", { d: "m14 6-8.58 8.58" }],
      ["circle", { cx: "4", cy: "16", r: "2" }],
      ["path", { d: "M10.8 14.8 14 18" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scissors.js
  var Scissors = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M8.12 8.12 12 12" }],
      ["path", { d: "M20 4 8.12 15.88" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["path", { d: "M14.8 14.8 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/screen-share-off.js
  var ScreenShareOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m22 3-5 5" }],
      ["path", { d: "m17 3 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/screen-share.js
  var ScreenShare = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m17 8 5-5" }],
      ["path", { d: "M17 3h5v5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scroll-text.js
  var ScrollText = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 12h-5" }],
      ["path", { d: "M15 8h-5" }],
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
      [
        "path",
        {
          d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/scroll.js
  var Scroll = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
      [
        "path",
        {
          d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/search-check.js
  var SearchCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m8 11 2 2 4-4" }],
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/search-code.js
  var SearchCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m13 13.5 2-2.5-2-2.5" }],
      ["path", { d: "m21 21-4.3-4.3" }],
      ["path", { d: "M9 8.5 7 11l2 2.5" }],
      ["circle", { cx: "11", cy: "11", r: "8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/search-slash.js
  var SearchSlash = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m13.5 8.5-5 5" }],
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/search-x.js
  var SearchX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m13.5 8.5-5 5" }],
      ["path", { d: "m8.5 8.5 5 5" }],
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/search.js
  var Search = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/section.js
  var Section = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }],
      ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/send-horizontal.js
  var SendHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m3 3 3 9-3 9 19-9Z" }],
      ["path", { d: "M6 12h16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/send-to-back.js
  var SendToBack = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }],
      ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }],
      ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }],
      ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/send.js
  var Send = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m22 2-7 20-4-9-9-4Z" }],
      ["path", { d: "M22 2 11 13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/separator-horizontal.js
  var SeparatorHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }],
      ["polyline", { points: "8 8 12 4 16 8" }],
      ["polyline", { points: "16 16 12 20 8 16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/separator-vertical.js
  var SeparatorVertical = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "12", x2: "12", y1: "3", y2: "21" }],
      ["polyline", { points: "8 8 4 12 8 16" }],
      ["polyline", { points: "16 16 20 12 16 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/server-cog.js
  var ServerCog = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }],
      [
        "path",
        { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }
      ],
      ["path", { d: "M6 6h.01" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "m15.7 13.4-.9-.3" }],
      ["path", { d: "m9.2 10.9-.9-.3" }],
      ["path", { d: "m10.6 15.7.3-.9" }],
      ["path", { d: "m13.6 15.7-.4-1" }],
      ["path", { d: "m10.8 9.3-.4-1" }],
      ["path", { d: "m8.3 13.6 1-.4" }],
      ["path", { d: "m14.7 10.8 1-.4" }],
      ["path", { d: "m13.4 8.3-.3.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/server-crash.js
  var ServerCrash = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }],
      ["path", { d: "M6 6h.01" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "m13 6-4 6h6l-4 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/server-off.js
  var ServerOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }],
      ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }],
      ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }],
      ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/server.js
  var Server = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }],
      ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }],
      ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/settings-2.js
  var Settings2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 7h-9" }],
      ["path", { d: "M14 17H5" }],
      ["circle", { cx: "17", cy: "17", r: "3" }],
      ["circle", { cx: "7", cy: "7", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/settings.js
  var Settings = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shapes.js
  var Shapes = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
        }
      ],
      ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }],
      ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/share-2.js
  var Share2 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "5", r: "3" }],
      ["circle", { cx: "6", cy: "12", r: "3" }],
      ["circle", { cx: "18", cy: "19", r: "3" }],
      ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }],
      ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/share.js
  var Share = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }],
      ["polyline", { points: "16 6 12 2 8 6" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sheet.js
  var Sheet = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
      ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }],
      ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }],
      ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shell.js
  var Shell = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-alert.js
  var ShieldAlert = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M12 8v4" }],
      ["path", { d: "M12 16h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-ban.js
  var ShieldBan = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "m4.243 5.21 14.39 12.472" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-check.js
  var ShieldCheck = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-ellipsis.js
  var ShieldEllipsis = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 12h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-half.js
  var ShieldHalf = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M12 22V2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-minus.js
  var ShieldMinus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M9 12h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-off.js
  var ShieldOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 2 20 20" }],
      [
        "path",
        {
          d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
        }
      ],
      [
        "path",
        {
          d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-plus.js
  var ShieldPlus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M9 12h6" }],
      ["path", { d: "M12 9v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-question.js
  var ShieldQuestion = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }],
      ["path", { d: "M12 17h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield-x.js
  var ShieldX = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "m14.5 9.5-5 5" }],
      ["path", { d: "m9.5 9.5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shield.js
  var Shield = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ship-wheel.js
  var ShipWheel = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "8" }],
      ["path", { d: "M12 2v7.5" }],
      ["path", { d: "m19 5-5.23 5.23" }],
      ["path", { d: "M22 12h-7.5" }],
      ["path", { d: "m19 19-5.23-5.23" }],
      ["path", { d: "M12 14.5V22" }],
      ["path", { d: "M10.23 13.77 5 19" }],
      ["path", { d: "M9.5 12H2" }],
      ["path", { d: "M10.23 10.23 5 5" }],
      ["circle", { cx: "12", cy: "12", r: "2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ship.js
  var Ship = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ],
      ["path", { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" }],
      ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }],
      ["path", { d: "M12 10v4" }],
      ["path", { d: "M12 2v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shirt.js
  var Shirt = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shopping-bag.js
  var ShoppingBag = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }],
      ["path", { d: "M3 6h18" }],
      ["path", { d: "M16 10a4 4 0 0 1-8 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shopping-basket.js
  var ShoppingBasket = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15 11-1 9" }],
      ["path", { d: "m19 11-4-7" }],
      ["path", { d: "M2 11h20" }],
      ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }],
      ["path", { d: "M4.5 15.5h15" }],
      ["path", { d: "m5 11 4-7" }],
      ["path", { d: "m9 11 1 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shopping-cart.js
  var ShoppingCart = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "8", cy: "21", r: "1" }],
      ["circle", { cx: "19", cy: "21", r: "1" }],
      [
        "path",
        { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shovel.js
  var Shovel = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 22v-5l5-5 5 5-5 5z" }],
      ["path", { d: "M9.5 14.5 16 8" }],
      ["path", { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shower-head.js
  var ShowerHead = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m4 4 2.5 2.5" }],
      ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }],
      ["path", { d: "M15 5 5 15" }],
      ["path", { d: "M14 17v.01" }],
      ["path", { d: "M10 16v.01" }],
      ["path", { d: "M13 13v.01" }],
      ["path", { d: "M16 10v.01" }],
      ["path", { d: "M11 20v.01" }],
      ["path", { d: "M17 14v.01" }],
      ["path", { d: "M20 11v.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shrink.js
  var Shrink = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }],
      ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }],
      ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }],
      ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shrub.js
  var Shrub = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22v-7l-2-2" }],
      ["path", { d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z" }],
      ["path", { d: "m14 14-2 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shuffle.js
  var Shuffle = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" }],
      ["path", { d: "m18 2 4 4-4 4" }],
      ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2" }],
      ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" }],
      ["path", { d: "m18 14 4 4-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sigma.js
  var Sigma = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/signal-high.js
  var SignalHigh = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }],
      ["path", { d: "M12 20v-8" }],
      ["path", { d: "M17 20V8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/signal-low.js
  var SignalLow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/signal-medium.js
  var SignalMedium = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }],
      ["path", { d: "M12 20v-8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/signal-zero.js
  var SignalZero = ["svg", defaultAttributes, [["path", { d: "M2 20h.01" }]]];

  // node_modules/lucide/dist/esm/icons/signal.js
  var Signal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }],
      ["path", { d: "M12 20v-8" }],
      ["path", { d: "M17 20V8" }],
      ["path", { d: "M22 4v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/signature.js
  var Signature = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
        }
      ],
      ["path", { d: "M3 21h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/signpost-big.js
  var SignpostBig = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 9H4L2 7l2-2h6" }],
      ["path", { d: "M14 5h6l2 2-2 2h-6" }],
      ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }],
      ["path", { d: "M8 22h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/signpost.js
  var Signpost = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 13v8" }],
      ["path", { d: "M12 3v3" }],
      [
        "path",
        {
          d: "M18 6a2 2 0 0 1 1.414.586l2.293 2.207a1 1 0 0 1 0 1.414l-2.27 2.184a2 2 0 0 1-1.742.586L6 13a2 2 0 0 1-1.414-.586l-2.293-2.207a1 1 0 0 1 0-1.414l2.293-2.207A2 2 0 0 1 6 6z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/siren.js
  var Siren = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }],
      ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }],
      ["path", { d: "M21 12h1" }],
      ["path", { d: "M18.5 4.5 18 5" }],
      ["path", { d: "M2 12h1" }],
      ["path", { d: "M12 2v1" }],
      ["path", { d: "m4.929 4.929.707.707" }],
      ["path", { d: "M12 12v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/skip-back.js
  var SkipBack = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "19 20 9 12 19 4 19 20" }],
      ["line", { x1: "5", x2: "5", y1: "19", y2: "5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/skip-forward.js
  var SkipForward = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "5 4 15 12 5 20 5 4" }],
      ["line", { x1: "19", x2: "19", y1: "5", y2: "19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/skull.js
  var Skull = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "9", cy: "12", r: "1" }],
      ["circle", { cx: "15", cy: "12", r: "1" }],
      ["path", { d: "M8 20v2h8v-2" }],
      ["path", { d: "m12.5 17-.5-1-.5 1h1z" }],
      ["path", { d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/slack.js
  var Slack = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5" }],
      ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }],
      ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5" }],
      ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }],
      ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5" }],
      ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }],
      ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5" }],
      ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/slash.js
  var Slash = ["svg", defaultAttributes, [["path", { d: "M22 2 2 22" }]]];

  // node_modules/lucide/dist/esm/icons/slice.js
  var Slice = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m8 14-6 6h9v-3" }],
      ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sliders-horizontal.js
  var SlidersHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "21", x2: "14", y1: "4", y2: "4" }],
      ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }],
      ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }],
      ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }],
      ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }],
      ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }],
      ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }],
      ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
      ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sliders-vertical.js
  var SlidersVertical = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "4", x2: "4", y1: "21", y2: "14" }],
      ["line", { x1: "4", x2: "4", y1: "10", y2: "3" }],
      ["line", { x1: "12", x2: "12", y1: "21", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "3" }],
      ["line", { x1: "20", x2: "20", y1: "21", y2: "16" }],
      ["line", { x1: "20", x2: "20", y1: "12", y2: "3" }],
      ["line", { x1: "2", x2: "6", y1: "14", y2: "14" }],
      ["line", { x1: "10", x2: "14", y1: "8", y2: "8" }],
      ["line", { x1: "18", x2: "22", y1: "16", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/smartphone-charging.js
  var SmartphoneCharging = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
      ["path", { d: "M12.667 8 10 12h4l-2.667 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/smartphone-nfc.js
  var SmartphoneNfc = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }],
      ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }],
      ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
      ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/smartphone.js
  var Smartphone = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
      ["path", { d: "M12 18h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/smile-plus.js
  var SmilePlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 11v1a10 10 0 1 1-9-10" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }],
      ["path", { d: "M16 5h6" }],
      ["path", { d: "M19 2v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/smile.js
  var Smile = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/snail.js
  var Snail = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }],
      ["circle", { cx: "10", cy: "13", r: "8" }],
      ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }],
      ["path", { d: "M18 3 19.1 5.2" }],
      ["path", { d: "M22 3 20.9 5.2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/snowflake.js
  var Snowflake = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
      ["path", { d: "m20 16-4-4 4-4" }],
      ["path", { d: "m4 8 4 4-4 4" }],
      ["path", { d: "m16 4-4 4-4-4" }],
      ["path", { d: "m8 20 4-4 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sofa.js
  var Sofa = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }],
      [
        "path",
        {
          d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
        }
      ],
      ["path", { d: "M4 18v2" }],
      ["path", { d: "M20 18v2" }],
      ["path", { d: "M12 4v9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/soup.js
  var Soup = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
      ["path", { d: "M7 21h10" }],
      ["path", { d: "M19.5 12 22 6" }],
      ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }],
      ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }],
      ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/space.js
  var Space = [
    "svg",
    defaultAttributes,
    [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]
  ];

  // node_modules/lucide/dist/esm/icons/spade.js
  var Spade = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
        }
      ],
      ["path", { d: "M12 18v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sparkle.js
  var Sparkle = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sparkles.js
  var Sparkles = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ],
      ["path", { d: "M20 3v4" }],
      ["path", { d: "M22 5h-4" }],
      ["path", { d: "M4 17v2" }],
      ["path", { d: "M5 18H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/speaker.js
  var Speaker = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M12 6h.01" }],
      ["circle", { cx: "12", cy: "14", r: "4" }],
      ["path", { d: "M12 14h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/speech.js
  var Speech = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
        }
      ],
      ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }],
      ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/spell-check-2.js
  var SpellCheck2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m6 16 6-12 6 12" }],
      ["path", { d: "M8 12h8" }],
      [
        "path",
        {
          d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/spell-check.js
  var SpellCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m6 16 6-12 6 12" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "m16 20 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/spline.js
  var Spline = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "19", cy: "5", r: "2" }],
      ["circle", { cx: "5", cy: "19", r: "2" }],
      ["path", { d: "M5 17A12 12 0 0 1 17 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/split.js
  var Split = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 3h5v5" }],
      ["path", { d: "M8 3H3v5" }],
      ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }],
      ["path", { d: "m15 9 6-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/spray-can.js
  var SprayCan = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 3h.01" }],
      ["path", { d: "M7 5h.01" }],
      ["path", { d: "M11 7h.01" }],
      ["path", { d: "M3 7h.01" }],
      ["path", { d: "M7 9h.01" }],
      ["path", { d: "M3 11h.01" }],
      ["rect", { width: "4", height: "4", x: "15", y: "5" }],
      ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }],
      ["path", { d: "m13 14 8-2" }],
      ["path", { d: "m13 19 8-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sprout.js
  var Sprout = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 20h10" }],
      ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10" }],
      [
        "path",
        {
          d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
        }
      ],
      [
        "path",
        { d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-activity.js
  var SquareActivity = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-down-left.js
  var SquareArrowDownLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m16 8-8 8" }],
      ["path", { d: "M16 16H8V8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-down-right.js
  var SquareArrowDownRight = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m8 8 8 8" }],
      ["path", { d: "M16 8v8H8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-down.js
  var SquareArrowDown = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "m8 12 4 4 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-left.js
  var SquareArrowLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m12 8-4 4 4 4" }],
      ["path", { d: "M16 12H8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-out-down-left.js
  var SquareArrowOutDownLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }],
      ["path", { d: "m3 21 9-9" }],
      ["path", { d: "M9 21H3v-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-out-down-right.js
  var SquareArrowOutDownRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
      ["path", { d: "m21 21-9-9" }],
      ["path", { d: "M21 15v6h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-out-up-left.js
  var SquareArrowOutUpLeft = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }],
      ["path", { d: "m3 3 9 9" }],
      ["path", { d: "M3 9V3h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-out-up-right.js
  var SquareArrowOutUpRight = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }],
      ["path", { d: "m21 3-9 9" }],
      ["path", { d: "M15 3h6v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-right.js
  var SquareArrowRight = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "m12 16 4-4-4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-up-left.js
  var SquareArrowUpLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 16V8h8" }],
      ["path", { d: "M16 16 8 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-up-right.js
  var SquareArrowUpRight = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 8h8v8" }],
      ["path", { d: "m8 16 8-8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-arrow-up.js
  var SquareArrowUp = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m16 12-4-4-4 4" }],
      ["path", { d: "M12 16V8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-asterisk.js
  var SquareAsterisk = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "m8.5 14 7-4" }],
      ["path", { d: "m8.5 10 7 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-bottom-dashed-scissors.js
  var SquareBottomDashedScissors = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" }],
      ["path", { d: "M10 22H8" }],
      ["path", { d: "M16 22h-2" }],
      ["circle", { cx: "8", cy: "8", r: "2" }],
      ["path", { d: "M9.414 9.414 12 12" }],
      ["path", { d: "M14.8 14.8 18 18" }],
      ["circle", { cx: "8", cy: "16", r: "2" }],
      ["path", { d: "m18 6-8.586 8.586" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-chart-gantt.js
  var SquareChartGantt = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 8h7" }],
      ["path", { d: "M8 12h6" }],
      ["path", { d: "M11 16h5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-check-big.js
  var SquareCheckBig = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 11 3 3L22 4" }],
      ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-check.js
  var SquareCheck = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m9 12 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-chevron-down.js
  var SquareChevronDown = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m16 10-4 4-4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-chevron-left.js
  var SquareChevronLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m14 16-4-4 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-chevron-right.js
  var SquareChevronRight = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m10 8 4 4-4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-chevron-up.js
  var SquareChevronUp = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m8 14 4-4 4 4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-code.js
  var SquareCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 9.5 8 12l2 2.5" }],
      ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-dashed-bottom-code.js
  var SquareDashedBottomCode = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 9.5 8 12l2 2.5" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
      ["path", { d: "M9 21h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-dashed-bottom.js
  var SquareDashedBottom = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M14 21h1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-dashed-kanban.js
  var SquareDashedKanban = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 7v7" }],
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M16 7v9" }],
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M9 3h1" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M21 9v1" }],
      ["path", { d: "M21 14v1" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M3 14v1" }],
      ["path", { d: "M3 9v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-dashed-mouse-pointer.js
  var SquareDashedMousePointer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M9 3h1" }],
      ["path", { d: "M9 21h2" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M3 9v1" }],
      ["path", { d: "M21 9v2" }],
      ["path", { d: "M3 14v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-divide.js
  var SquareDivide = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-dot.js
  var SquareDot = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-equal.js
  var SquareEqual = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 10h10" }],
      ["path", { d: "M7 14h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-function.js
  var SquareFunction = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }],
      ["path", { d: "M9 11.2h5.7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-kanban.js
  var SquareKanban = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 7v7" }],
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M16 7v9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-library.js
  var SquareLibrary = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 7v10" }],
      ["path", { d: "M11 7v10" }],
      ["path", { d: "m15 7 2 10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-m.js
  var SquareM = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 16V8l4 4 4-4v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-menu.js
  var SquareMenu = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 8h10" }],
      ["path", { d: "M7 12h10" }],
      ["path", { d: "M7 16h10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-minus.js
  var SquareMinus = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 12h8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-mouse-pointer.js
  var SquareMousePointer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
      ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-parking-off.js
  var SquareParkingOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }],
      ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
      ["path", { d: "M9 17v-2.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-parking.js
  var SquareParking = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-pen.js
  var SquarePen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
      [
        "path",
        {
          d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-percent.js
  var SquarePercent = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 15h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-pi.js
  var SquarePi = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 7h10" }],
      ["path", { d: "M10 7v10" }],
      ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-pilcrow.js
  var SquarePilcrow = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }],
      ["path", { d: "M12 7v10" }],
      ["path", { d: "M16 7v10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-play.js
  var SquarePlay = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m9 8 6 4-6 4Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-plus.js
  var SquarePlus = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M12 8v8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-power.js
  var SquarePower = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-radical.js
  var SquareRadical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 12h2l2 5 2-10h4" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-scissors.js
  var SquareScissors = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2" }],
      ["circle", { cx: "8", cy: "8", r: "2" }],
      ["path", { d: "M9.414 9.414 12 12" }],
      ["path", { d: "M14.8 14.8 18 18" }],
      ["circle", { cx: "8", cy: "16", r: "2" }],
      ["path", { d: "m18 6-8.586 8.586" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-sigma.js
  var SquareSigma = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-slash.js
  var SquareSlash = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-split-horizontal.js
  var SquareSplitHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }],
      ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }],
      ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-split-vertical.js
  var SquareSplitVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }],
      ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-square.js
  var SquareSquare = [
    "svg",
    defaultAttributes,
    [
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
      ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-stack.js
  var SquareStack = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
      ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
      ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-terminal.js
  var SquareTerminal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m7 11 2-2-2-2" }],
      ["path", { d: "M11 13h4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-user-round.js
  var SquareUserRound = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 21a6 6 0 0 0-12 0" }],
      ["circle", { cx: "12", cy: "11", r: "4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-user.js
  var SquareUser = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square-x.js
  var SquareX = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "m9 9 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/square.js
  var Square = [
    "svg",
    defaultAttributes,
    [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]
  ];

  // node_modules/lucide/dist/esm/icons/squircle.js
  var Squircle = [
    "svg",
    defaultAttributes,
    [["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }]]
  ];

  // node_modules/lucide/dist/esm/icons/squirrel.js
  var Squirrel = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5" }],
      ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }],
      ["path", { d: "M18 13h.01" }],
      [
        "path",
        {
          d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/stamp.js
  var Stamp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 22h14" }],
      [
        "path",
        {
          d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
        }
      ],
      ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/star-half.js
  var StarHalf = [
    "svg",
    defaultAttributes,
    [["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" }]]
  ];

  // node_modules/lucide/dist/esm/icons/star-off.js
  var StarOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" }],
      ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/star.js
  var Star = [
    "svg",
    defaultAttributes,
    [
      [
        "polygon",
        {
          points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/step-back.js
  var StepBack = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }],
      ["polygon", { points: "14,20 4,12 14,4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/step-forward.js
  var StepForward = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "6", x2: "6", y1: "4", y2: "20" }],
      ["polygon", { points: "10,4 20,12 10,20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/stethoscope.js
  var Stethoscope = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"
        }
      ],
      ["path", { d: "M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4" }],
      ["circle", { cx: "20", cy: "10", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sticker.js
  var Sticker = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" }],
      ["path", { d: "M14 3v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 13h.01" }],
      ["path", { d: "M16 13h.01" }],
      ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sticky-note.js
  var StickyNote = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }],
      ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/store.js
  var Store = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }],
      ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }],
      ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M2 7h20" }],
      [
        "path",
        {
          d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/stretch-horizontal.js
  var StretchHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }],
      ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/stretch-vertical.js
  var StretchVertical = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }],
      ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/strikethrough.js
  var Strikethrough = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }],
      ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/subscript.js
  var Subscript = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m4 5 8 8" }],
      ["path", { d: "m12 5-8 8" }],
      [
        "path",
        {
          d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sun-dim.js
  var SunDim = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 4h.01" }],
      ["path", { d: "M20 12h.01" }],
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M4 12h.01" }],
      ["path", { d: "M17.657 6.343h.01" }],
      ["path", { d: "M17.657 17.657h.01" }],
      ["path", { d: "M6.343 17.657h.01" }],
      ["path", { d: "M6.343 6.343h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sun-medium.js
  var SunMedium = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 3v1" }],
      ["path", { d: "M12 20v1" }],
      ["path", { d: "M3 12h1" }],
      ["path", { d: "M20 12h1" }],
      ["path", { d: "m18.364 5.636-.707.707" }],
      ["path", { d: "m6.343 17.657-.707.707" }],
      ["path", { d: "m5.636 5.636.707.707" }],
      ["path", { d: "m17.657 17.657.707.707" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sun-moon.js
  var SunMoon = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "m4.9 4.9 1.4 1.4" }],
      ["path", { d: "m17.7 17.7 1.4 1.4" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "m6.3 17.7-1.4 1.4" }],
      ["path", { d: "m19.1 4.9-1.4 1.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sun-snow.js
  var SunSnow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 9a3 3 0 1 0 0 6" }],
      ["path", { d: "M2 12h1" }],
      ["path", { d: "M14 21V3" }],
      ["path", { d: "M10 4V3" }],
      ["path", { d: "M10 21v-1" }],
      ["path", { d: "m3.64 18.36.7-.7" }],
      ["path", { d: "m4.34 6.34-.7-.7" }],
      ["path", { d: "M14 12h8" }],
      ["path", { d: "m17 4-3 3" }],
      ["path", { d: "m14 17 3 3" }],
      ["path", { d: "m21 15-3-3 3-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sun.js
  var Sun = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "m4.93 4.93 1.41 1.41" }],
      ["path", { d: "m17.66 17.66 1.41 1.41" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "m6.34 17.66-1.41 1.41" }],
      ["path", { d: "m19.07 4.93-1.41 1.41" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sunrise.js
  var Sunrise = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v8" }],
      ["path", { d: "m4.93 10.93 1.41 1.41" }],
      ["path", { d: "M2 18h2" }],
      ["path", { d: "M20 18h2" }],
      ["path", { d: "m19.07 10.93-1.41 1.41" }],
      ["path", { d: "M22 22H2" }],
      ["path", { d: "m8 6 4-4 4 4" }],
      ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sunset.js
  var Sunset = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 10V2" }],
      ["path", { d: "m4.93 10.93 1.41 1.41" }],
      ["path", { d: "M2 18h2" }],
      ["path", { d: "M20 18h2" }],
      ["path", { d: "m19.07 10.93-1.41 1.41" }],
      ["path", { d: "M22 22H2" }],
      ["path", { d: "m16 6-4 4-4-4" }],
      ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/superscript.js
  var Superscript = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m4 19 8-8" }],
      ["path", { d: "m12 19-8-8" }],
      [
        "path",
        {
          d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/swatch-book.js
  var SwatchBook = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }],
      ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }],
      ["path", { d: "M 7 17h.01" }],
      [
        "path",
        { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/swiss-franc.js
  var SwissFranc = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 21V3h8" }],
      ["path", { d: "M6 16h9" }],
      ["path", { d: "M10 9.5h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/switch-camera.js
  var SwitchCamera = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }],
      ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "m18 22-3-3 3-3" }],
      ["path", { d: "m6 2 3 3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/sword.js
  var Sword = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
      ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
      ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
      ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/swords.js
  var Swords = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
      ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
      ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
      ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }],
      ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }],
      ["line", { x1: "5", x2: "9", y1: "14", y2: "18" }],
      ["line", { x1: "7", x2: "4", y1: "17", y2: "20" }],
      ["line", { x1: "3", x2: "5", y1: "19", y2: "21" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/syringe.js
  var Syringe = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m18 2 4 4" }],
      ["path", { d: "m17 7 3-3" }],
      ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }],
      ["path", { d: "m9 11 4 4" }],
      ["path", { d: "m5 19-3 3" }],
      ["path", { d: "m14 4 6 6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/table-2.js
  var Table2 = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/table-cells-merge.js
  var TableCellsMerge = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 21v-6" }],
      ["path", { d: "M12 9V3" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M3 9h18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/table-cells-split.js
  var TableCellsSplit = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 15V9" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M3 9h18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/table-columns-split.js
  var TableColumnsSplit = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 14v2" }],
      ["path", { d: "M14 20v2" }],
      ["path", { d: "M14 2v2" }],
      ["path", { d: "M14 8v2" }],
      ["path", { d: "M2 15h8" }],
      ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }],
      ["path", { d: "M2 9h8" }],
      ["path", { d: "M22 15h-4" }],
      ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }],
      ["path", { d: "M22 9h-4" }],
      ["path", { d: "M5 3v18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/table-properties.js
  var TableProperties = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 3v18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M21 9H3" }],
      ["path", { d: "M21 15H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/table-rows-split.js
  var TableRowsSplit = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 10h2" }],
      ["path", { d: "M15 22v-8" }],
      ["path", { d: "M15 2v4" }],
      ["path", { d: "M2 10h2" }],
      ["path", { d: "M20 10h2" }],
      ["path", { d: "M3 19h18" }],
      ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }],
      ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }],
      ["path", { d: "M8 10h2" }],
      ["path", { d: "M9 22v-8" }],
      ["path", { d: "M9 2v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/table.js
  var Table = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 3v18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M3 15h18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tablet-smartphone.js
  var TabletSmartphone = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }],
      ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }],
      ["path", { d: "M8 18h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tablet.js
  var Tablet = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
      ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tablets.js
  var Tablets = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "7", cy: "7", r: "5" }],
      ["circle", { cx: "17", cy: "17", r: "5" }],
      ["path", { d: "M12 17h10" }],
      ["path", { d: "m3.46 10.54 7.08-7.08" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tag.js
  var Tag = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
        }
      ],
      ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tags.js
  var Tags = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }],
      [
        "path",
        {
          d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
        }
      ],
      ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tally-1.js
  var Tally1 = ["svg", defaultAttributes, [["path", { d: "M4 4v16" }]]];

  // node_modules/lucide/dist/esm/icons/tally-2.js
  var Tally2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tally-3.js
  var Tally3 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }],
      ["path", { d: "M14 4v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tally-4.js
  var Tally4 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }],
      ["path", { d: "M14 4v16" }],
      ["path", { d: "M19 4v16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tally-5.js
  var Tally5 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }],
      ["path", { d: "M14 4v16" }],
      ["path", { d: "M19 4v16" }],
      ["path", { d: "M22 6 2 18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tangent.js
  var Tangent = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "17", cy: "4", r: "2" }],
      ["path", { d: "M15.59 5.41 5.41 15.59" }],
      ["circle", { cx: "4", cy: "17", r: "2" }],
      ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/target.js
  var Target = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "6" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/telescope.js
  var Telescope = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
        }
      ],
      ["path", { d: "m13.56 11.747 4.332-.924" }],
      ["path", { d: "m16 21-3.105-6.21" }],
      [
        "path",
        {
          d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
        }
      ],
      ["path", { d: "m6.158 8.633 1.114 4.456" }],
      ["path", { d: "m8 21 3.105-6.21" }],
      ["circle", { cx: "12", cy: "13", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tent-tree.js
  var TentTree = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "4", cy: "4", r: "2" }],
      ["path", { d: "m14 5 3-3 3 3" }],
      ["path", { d: "m14 10 3-3 3 3" }],
      ["path", { d: "M17 14V2" }],
      ["path", { d: "M17 14H7l-5 8h20Z" }],
      ["path", { d: "M8 14v8" }],
      ["path", { d: "m9 14 5 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tent.js
  var Tent = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3.5 21 14 3" }],
      ["path", { d: "M20.5 21 10 3" }],
      ["path", { d: "M15.5 21 12 15l-3.5 6" }],
      ["path", { d: "M2 21h20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/terminal.js
  var Terminal = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "4 17 10 11 4 5" }],
      ["line", { x1: "12", x2: "20", y1: "19", y2: "19" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/test-tube-diagonal.js
  var TestTubeDiagonal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }],
      ["path", { d: "m16 2 6 6" }],
      ["path", { d: "M12 16H4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/test-tube.js
  var TestTube = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }],
      ["path", { d: "M8.5 2h7" }],
      ["path", { d: "M14.5 16h-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/test-tubes.js
  var TestTubes = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }],
      ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }],
      ["path", { d: "M3 2h7" }],
      ["path", { d: "M14 2h7" }],
      ["path", { d: "M9 16H4" }],
      ["path", { d: "M20 16h-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/text-cursor-input.js
  var TextCursorInput = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" }],
      ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" }],
      ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }],
      ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }],
      ["path", { d: "M9 7v10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/text-cursor.js
  var TextCursor = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }],
      ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1" }],
      ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/text-quote.js
  var TextQuote = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 6H3" }],
      ["path", { d: "M21 12H8" }],
      ["path", { d: "M21 18H8" }],
      ["path", { d: "M3 12v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/text-search.js
  var TextSearch = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 6H3" }],
      ["path", { d: "M10 12H3" }],
      ["path", { d: "M10 18H3" }],
      ["circle", { cx: "17", cy: "15", r: "3" }],
      ["path", { d: "m21 19-1.9-1.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/text-select.js
  var TextSelect = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M9 3h1" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M3 9v1" }],
      ["path", { d: "M21 9v1" }],
      ["path", { d: "M3 14v1" }],
      ["path", { d: "M21 14v1" }],
      ["line", { x1: "7", x2: "15", y1: "8", y2: "8" }],
      ["line", { x1: "7", x2: "17", y1: "12", y2: "12" }],
      ["line", { x1: "7", x2: "13", y1: "16", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/text.js
  var Text = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 6.1H3" }],
      ["path", { d: "M21 12.1H3" }],
      ["path", { d: "M15.1 18H3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/theater.js
  var Theater = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 10s3-3 3-8" }],
      ["path", { d: "M22 10s-3-3-3-8" }],
      ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }],
      ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }],
      ["path", { d: "M2 10s2 2 2 5" }],
      ["path", { d: "M22 10s-2 2-2 5" }],
      ["path", { d: "M8 15h8" }],
      ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }],
      ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/thermometer-snowflake.js
  var ThermometerSnowflake = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 12h10" }],
      ["path", { d: "M9 4v16" }],
      ["path", { d: "m3 9 3 3-3 3" }],
      ["path", { d: "M12 6 9 9 6 6" }],
      ["path", { d: "m6 18 3-3 1.5 1.5" }],
      ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/thermometer-sun.js
  var ThermometerSun = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 9a4 4 0 0 0-2 7.5" }],
      ["path", { d: "M12 3v2" }],
      ["path", { d: "m6.6 18.4-1.4 1.4" }],
      ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }],
      ["path", { d: "M4 13H2" }],
      ["path", { d: "M6.34 7.34 4.93 5.93" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/thermometer.js
  var Thermometer = [
    "svg",
    defaultAttributes,
    [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/thumbs-down.js
  var ThumbsDown = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 14V2" }],
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/thumbs-up.js
  var ThumbsUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 10v12" }],
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ticket-check.js
  var TicketCheck = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ticket-minus.js
  var TicketMinus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M9 12h6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ticket-percent.js
  var TicketPercent = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M15 15h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ticket-plus.js
  var TicketPlus = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M9 12h6" }],
      ["path", { d: "M12 9v6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ticket-slash.js
  var TicketSlash = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "m9.5 14.5 5-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ticket-x.js
  var TicketX = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "m9.5 14.5 5-5" }],
      ["path", { d: "m9.5 9.5 5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ticket.js
  var Ticket = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M13 5v2" }],
      ["path", { d: "M13 17v2" }],
      ["path", { d: "M13 11v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/timer-off.js
  var TimerOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2h4" }],
      ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }],
      ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M12 12v-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/timer-reset.js
  var TimerReset = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 2h4" }],
      ["path", { d: "M12 14v-4" }],
      ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }],
      ["path", { d: "M9 17H4v5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/timer.js
  var Timer = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "10", x2: "14", y1: "2", y2: "2" }],
      ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }],
      ["circle", { cx: "12", cy: "14", r: "8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/toggle-left.js
  var ToggleLeft = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }],
      ["circle", { cx: "8", cy: "12", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/toggle-right.js
  var ToggleRight = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }],
      ["circle", { cx: "16", cy: "12", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tornado.js
  var Tornado = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 4H3" }],
      ["path", { d: "M18 8H6" }],
      ["path", { d: "M19 12H9" }],
      ["path", { d: "M16 16h-6" }],
      ["path", { d: "M11 20H9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/torus.js
  var Torus = [
    "svg",
    defaultAttributes,
    [
      ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }],
      ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/touchpad-off.js
  var TouchpadOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M2 14h12" }],
      ["path", { d: "M22 14h-2" }],
      ["path", { d: "M12 20v-6" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/touchpad.js
  var Touchpad = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M2 14h20" }],
      ["path", { d: "M12 20v-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tower-control.js
  var TowerControl = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }],
      ["path", { d: "M8 13v9" }],
      ["path", { d: "M16 22v-9" }],
      ["path", { d: "m9 6 1 7" }],
      ["path", { d: "m15 6-1 7" }],
      ["path", { d: "M12 6V2" }],
      ["path", { d: "M13 2h-2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/toy-brick.js
  var ToyBrick = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }],
      ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }],
      ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tractor.js
  var Tractor = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }],
      ["path", { d: "M16 18h-5" }],
      ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573" }],
      ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }],
      ["path", { d: "M4 11V4" }],
      ["path", { d: "M7 15h.01" }],
      ["path", { d: "M8 10.1V4" }],
      ["circle", { cx: "18", cy: "18", r: "2" }],
      ["circle", { cx: "7", cy: "15", r: "5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/traffic-cone.js
  var TrafficCone = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0" }],
      ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" }],
      [
        "path",
        {
          d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
        }
      ],
      [
        "path",
        {
          d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/train-front-tunnel.js
  var TrainFrontTunnel = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }],
      ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }],
      ["path", { d: "M10 15h.01" }],
      ["path", { d: "M14 15h.01" }],
      ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }],
      ["path", { d: "m9 19-2 3" }],
      ["path", { d: "m15 19 2 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/train-front.js
  var TrainFront = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }],
      ["path", { d: "m9 15-1-1" }],
      ["path", { d: "m15 15 1-1" }],
      ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }],
      ["path", { d: "m8 19-2 3" }],
      ["path", { d: "m16 19 2 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/train-track.js
  var TrainTrack = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 17 17 2" }],
      ["path", { d: "m2 14 8 8" }],
      ["path", { d: "m5 11 8 8" }],
      ["path", { d: "m8 8 8 8" }],
      ["path", { d: "m11 5 8 8" }],
      ["path", { d: "m14 2 8 8" }],
      ["path", { d: "M7 22 22 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tram-front.js
  var TramFront = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
      ["path", { d: "M4 11h16" }],
      ["path", { d: "M12 3v8" }],
      ["path", { d: "m8 19-2 3" }],
      ["path", { d: "m18 22-2-3" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M16 15h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/trash-2.js
  var Trash2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 6h18" }],
      ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
      ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
      ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }],
      ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/trash.js
  var Trash = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 6h18" }],
      ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
      ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tree-deciduous.js
  var TreeDeciduous = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
        }
      ],
      ["path", { d: "M12 19v3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tree-palm.js
  var TreePalm = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }],
      ["path", { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }],
      [
        "path",
        {
          d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
        }
      ],
      ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tree-pine.js
  var TreePine = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
        }
      ],
      ["path", { d: "M12 22v-3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/trees.js
  var Trees = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }],
      ["path", { d: "M7 16v6" }],
      ["path", { d: "M13 19v3" }],
      [
        "path",
        {
          d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/trello.js
  var Trello = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["rect", { width: "3", height: "9", x: "7", y: "7" }],
      ["rect", { width: "3", height: "5", x: "14", y: "7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/trending-down.js
  var TrendingDown = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7" }],
      ["polyline", { points: "16 17 22 17 22 11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/trending-up.js
  var TrendingUp = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }],
      ["polyline", { points: "16 7 22 7 22 13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/triangle-alert.js
  var TriangleAlert = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }],
      ["path", { d: "M12 9v4" }],
      ["path", { d: "M12 17h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/triangle-right.js
  var TriangleRight = [
    "svg",
    defaultAttributes,
    [["path", { d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/triangle.js
  var Triangle = [
    "svg",
    defaultAttributes,
    [["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }]]
  ];

  // node_modules/lucide/dist/esm/icons/trophy.js
  var Trophy = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }],
      ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }],
      ["path", { d: "M4 22h16" }],
      ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" }],
      ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" }],
      ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/truck.js
  var Truck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
      ["path", { d: "M15 18H9" }],
      [
        "path",
        { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }
      ],
      ["circle", { cx: "17", cy: "18", r: "2" }],
      ["circle", { cx: "7", cy: "18", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/turtle.js
  var Turtle = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
        }
      ],
      ["path", { d: "M4.82 7.9 8 10" }],
      ["path", { d: "M15.18 7.9 12 10" }],
      ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tv-minimal-play.js
  var TvMinimalPlay = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
        }
      ],
      ["path", { d: "M7 21h10" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tv-minimal.js
  var TvMinimal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M7 21h10" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/tv.js
  var Tv = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2" }],
      ["polyline", { points: "17 2 12 7 7 2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/twitch.js
  var Twitch = [
    "svg",
    defaultAttributes,
    [["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }]]
  ];

  // node_modules/lucide/dist/esm/icons/twitter.js
  var Twitter = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/type-outline.js
  var TypeOutline = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/type.js
  var Type = [
    "svg",
    defaultAttributes,
    [
      ["polyline", { points: "4 7 4 4 20 4 20 7" }],
      ["line", { x1: "9", x2: "15", y1: "20", y2: "20" }],
      ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/umbrella-off.js
  var UmbrellaOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v1" }],
      ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" }],
      ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/umbrella.js
  var Umbrella = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }],
      ["path", { d: "M12 12v8a2 2 0 0 0 4 0" }],
      ["path", { d: "M12 2v1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/underline.js
  var Underline = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }],
      ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/undo-2.js
  var Undo2 = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M9 14 4 9l5-5" }],
      ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/undo-dot.js
  var UndoDot = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "17", r: "1" }],
      ["path", { d: "M3 7v6h6" }],
      ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/undo.js
  var Undo = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 7v6h6" }],
      ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/unfold-horizontal.js
  var UnfoldHorizontal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 12h6" }],
      ["path", { d: "M8 12H2" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "m19 15 3-3-3-3" }],
      ["path", { d: "m5 9-3 3 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/unfold-vertical.js
  var UnfoldVertical = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 22v-6" }],
      ["path", { d: "M12 8V2" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }],
      ["path", { d: "m15 19-3 3-3-3" }],
      ["path", { d: "m15 5-3-3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/ungroup.js
  var Ungroup = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1" }],
      ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/university.js
  var University = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "10", r: "1" }],
      ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }],
      ["path", { d: "M6 17v.01" }],
      ["path", { d: "M6 13v.01" }],
      ["path", { d: "M18 17v.01" }],
      ["path", { d: "M18 13v.01" }],
      ["path", { d: "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/unlink-2.js
  var Unlink2 = [
    "svg",
    defaultAttributes,
    [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]]
  ];

  // node_modules/lucide/dist/esm/icons/unlink.js
  var Unlink = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
        }
      ],
      [
        "path",
        { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }
      ],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "5" }],
      ["line", { x1: "2", x2: "5", y1: "8", y2: "8" }],
      ["line", { x1: "16", x2: "16", y1: "19", y2: "22" }],
      ["line", { x1: "19", x2: "22", y1: "16", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/unplug.js
  var Unplug = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 5 3-3" }],
      ["path", { d: "m2 22 3-3" }],
      ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
      ["path", { d: "M7.5 13.5 10 11" }],
      ["path", { d: "M10.5 16.5 13 14" }],
      ["path", { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/upload.js
  var Upload = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
      ["polyline", { points: "17 8 12 3 7 8" }],
      ["line", { x1: "12", x2: "12", y1: "3", y2: "15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/usb.js
  var Usb = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "10", cy: "7", r: "1" }],
      ["circle", { cx: "4", cy: "20", r: "1" }],
      ["path", { d: "M4.7 19.3 19 5" }],
      ["path", { d: "m21 3-3 1 2 2Z" }],
      ["path", { d: "M9.26 7.68 5 12l2 5" }],
      ["path", { d: "m10 14 5 2 3.5-3.5" }],
      ["path", { d: "m18 12 1-1 1 1-1 1Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-check.js
  var UserCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["polyline", { points: "16 11 18 13 22 9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-cog.js
  var UserCog = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "15", r: "3" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }],
      ["path", { d: "m21.7 16.4-.9-.3" }],
      ["path", { d: "m15.2 13.9-.9-.3" }],
      ["path", { d: "m16.6 18.7.3-.9" }],
      ["path", { d: "m19.1 12.2.3-.9" }],
      ["path", { d: "m19.6 18.7-.4-1" }],
      ["path", { d: "m16.8 12.3-.4-1" }],
      ["path", { d: "m14.3 16.6 1-.4" }],
      ["path", { d: "m20.7 13.8 1-.4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-minus.js
  var UserMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-pen.js
  var UserPen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }],
      [
        "path",
        {
          d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["circle", { cx: "10", cy: "7", r: "4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-plus.js
  var UserPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-check.js
  var UserRoundCheck = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "m16 19 2 2 4-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-cog.js
  var UserRoundCog = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["path", { d: "m19.5 14.3-.4.9" }],
      ["path", { d: "m16.9 20.8-.4.9" }],
      ["path", { d: "m21.7 19.5-.9-.4" }],
      ["path", { d: "m15.2 16.9-.9-.4" }],
      ["path", { d: "m21.7 16.5-.9.4" }],
      ["path", { d: "m15.2 19.1-.9.4" }],
      ["path", { d: "m19.5 21.7-.4-.9" }],
      ["path", { d: "m16.9 15.2-.4-.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-minus.js
  var UserRoundMinus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M22 19h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-pen.js
  var UserRoundPen = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 21a8 8 0 0 1 10.821-7.487" }],
      [
        "path",
        {
          d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["circle", { cx: "10", cy: "8", r: "5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-plus.js
  var UserRoundPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M22 19h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-search.js
  var UserRoundSearch = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["path", { d: "m22 22-1.9-1.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-x.js
  var UserRoundX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 21a8 8 0 0 1 11.873-7" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "m17 17 5 5" }],
      ["path", { d: "m22 17-5 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round.js
  var UserRound = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "8", r: "5" }],
      ["path", { d: "M20 21a8 8 0 0 0-16 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-search.js
  var UserSearch = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "10", cy: "7", r: "4" }],
      ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "17", cy: "17", r: "3" }],
      ["path", { d: "m21 21-1.9-1.9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-x.js
  var UserX = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }],
      ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user.js
  var User = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "12", cy: "7", r: "4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/users-round.js
  var UsersRound = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 21a8 8 0 0 0-16 0" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/users.js
  var Users = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
      ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/utensils-crossed.js
  var UtensilsCrossed = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }],
      ["path", { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }],
      ["path", { d: "m2.1 21.8 6.4-6.3" }],
      ["path", { d: "m19 5-7 7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/utensils.js
  var Utensils = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }],
      ["path", { d: "M7 2v20" }],
      ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/utility-pole.js
  var UtilityPole = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 2v20" }],
      ["path", { d: "M2 5h20" }],
      ["path", { d: "M3 3v2" }],
      ["path", { d: "M7 3v2" }],
      ["path", { d: "M17 3v2" }],
      ["path", { d: "M21 3v2" }],
      ["path", { d: "m19 5-7 7-7-7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/variable.js
  var Variable = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
      ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }],
      ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
      ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/vault.js
  var Vault = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m7.9 7.9 2.7 2.7" }],
      ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m13.4 10.6 2.7-2.7" }],
      ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m7.9 16.1 2.7-2.7" }],
      ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m13.4 13.4 2.7 2.7" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/vegan.js
  var Vegan = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }],
      ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6" }],
      ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/venetian-mask.js
  var VenetianMask = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"
        }
      ],
      ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" }],
      ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/vibrate-off.js
  var VibrateOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
      ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
      ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }],
      ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/vibrate.js
  var Vibrate = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
      ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
      ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/video-off.js
  var VideoOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }],
      ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/video.js
  var Video = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }],
      ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/videotape.js
  var Videotape = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M2 8h20" }],
      ["circle", { cx: "8", cy: "14", r: "2" }],
      ["path", { d: "M8 12h8" }],
      ["circle", { cx: "16", cy: "14", r: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/view.js
  var View = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }],
      ["circle", { cx: "12", cy: "12", r: "1" }],
      [
        "path",
        {
          d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/voicemail.js
  var Voicemail = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "6", cy: "12", r: "4" }],
      ["circle", { cx: "18", cy: "12", r: "4" }],
      ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/volume-1.js
  var Volume1 = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }],
      ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/volume-2.js
  var Volume2 = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }],
      ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }],
      ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/volume-x.js
  var VolumeX = [
    "svg",
    defaultAttributes,
    [
      ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }],
      ["line", { x1: "22", x2: "16", y1: "9", y2: "15" }],
      ["line", { x1: "16", x2: "22", y1: "9", y2: "15" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/volume.js
  var Volume = [
    "svg",
    defaultAttributes,
    [["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }]]
  ];

  // node_modules/lucide/dist/esm/icons/vote.js
  var Vote = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m9 12 2 2 4-4" }],
      ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }],
      ["path", { d: "M22 19H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wallet-cards.js
  var WalletCards = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }],
      [
        "path",
        { d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wallet-minimal.js
  var WalletMinimal = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 14h.01" }],
      ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wallet.js
  var Wallet = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
        }
      ],
      ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wallpaper.js
  var Wallpaper = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "8", cy: "9", r: "2" }],
      [
        "path",
        {
          d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
        }
      ],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "M12 17v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wand-sparkles.js
  var WandSparkles = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
        }
      ],
      ["path", { d: "m14 7 3 3" }],
      ["path", { d: "M5 6v4" }],
      ["path", { d: "M19 14v4" }],
      ["path", { d: "M10 2v2" }],
      ["path", { d: "M7 8H3" }],
      ["path", { d: "M21 16h-4" }],
      ["path", { d: "M11 3H9" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wand.js
  var Wand = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 4V2" }],
      ["path", { d: "M15 16v-2" }],
      ["path", { d: "M8 9h2" }],
      ["path", { d: "M20 9h2" }],
      ["path", { d: "M17.8 11.8 19 13" }],
      ["path", { d: "M15 9h.01" }],
      ["path", { d: "M17.8 6.2 19 5" }],
      ["path", { d: "m3 21 9-9" }],
      ["path", { d: "M12.2 6.2 11 5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/warehouse.js
  var Warehouse = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
        }
      ],
      ["path", { d: "M6 18h12" }],
      ["path", { d: "M6 14h12" }],
      ["rect", { width: "12", height: "12", x: "6", y: "10" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/washing-machine.js
  var WashingMachine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M3 6h3" }],
      ["path", { d: "M17 6h.01" }],
      ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2" }],
      ["circle", { cx: "12", cy: "13", r: "5" }],
      ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/watch.js
  var Watch = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "12", r: "6" }],
      ["polyline", { points: "12 10 12 12 13 13" }],
      ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }],
      ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/waves.js
  var Waves = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ],
      [
        "path",
        {
          d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ],
      [
        "path",
        {
          d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/waypoints.js
  var Waypoints = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "4.5", r: "2.5" }],
      ["path", { d: "m10.2 6.3-3.9 3.9" }],
      ["circle", { cx: "4.5", cy: "12", r: "2.5" }],
      ["path", { d: "M7 12h10" }],
      ["circle", { cx: "19.5", cy: "12", r: "2.5" }],
      ["path", { d: "m13.8 17.7 3.9-3.9" }],
      ["circle", { cx: "12", cy: "19.5", r: "2.5" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/webcam.js
  var Webcam = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "10", r: "8" }],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M7 22h10" }],
      ["path", { d: "M12 22v-4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/webhook-off.js
  var WebhookOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }],
      ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66" }],
      ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }],
      ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7" }],
      ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414" }],
      ["path", { d: "m12 6 .6 1" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/webhook.js
  var Webhook = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }],
      ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }],
      ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/weight.js
  var Weight = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "12", cy: "5", r: "3" }],
      [
        "path",
        {
          d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wheat-off.js
  var WheatOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m2 22 10-10" }],
      ["path", { d: "m16 8-1.17 1.17" }],
      [
        "path",
        {
          d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
        }
      ],
      ["path", { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }],
      ["path", { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }],
      ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
      [
        "path",
        {
          d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ],
      ["path", { d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }],
      ["path", { d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wheat.js
  var Wheat = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 22 16 8" }],
      [
        "path",
        {
          d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
        }
      ],
      [
        "path",
        { d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
      ],
      [
        "path",
        {
          d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
        }
      ],
      ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
      [
        "path",
        {
          d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ],
      [
        "path",
        {
          d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ],
      [
        "path",
        {
          d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/whole-word.js
  var WholeWord = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "7", cy: "12", r: "3" }],
      ["path", { d: "M10 9v6" }],
      ["circle", { cx: "17", cy: "12", r: "3" }],
      ["path", { d: "M14 7v8" }],
      ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wifi-high.js
  var WifiHigh = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wifi-low.js
  var WifiLow = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wifi-off.js
  var WifiOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69" }],
      ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643" }],
      ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764" }],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wifi-zero.js
  var WifiZero = ["svg", defaultAttributes, [["path", { d: "M12 20h.01" }]]];

  // node_modules/lucide/dist/esm/icons/wifi.js
  var Wifi = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wind.js
  var Wind = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" }],
      ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2" }],
      ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wine-off.js
  var WineOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M7 10h3m7 0h-1.343" }],
      ["path", { d: "M12 15v7" }],
      [
        "path",
        {
          d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wine.js
  var Wine = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M7 10h10" }],
      ["path", { d: "M12 15v7" }],
      ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/workflow.js
  var Workflow = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/worm.js
  var Worm = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "m19 12-1.5 3" }],
      ["path", { d: "M19.63 18.81 22 20" }],
      [
        "path",
        {
          d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wrap-text.js
  var WrapText = [
    "svg",
    defaultAttributes,
    [
      ["line", { x1: "3", x2: "21", y1: "6", y2: "6" }],
      ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4" }],
      ["polyline", { points: "16 16 14 18 16 20" }],
      ["line", { x1: "3", x2: "10", y1: "18", y2: "18" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/wrench.js
  var Wrench = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/x.js
  var X = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/youtube.js
  var Youtube = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
        }
      ],
      ["path", { d: "m10 15 5-3-5-3z" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/zap-off.js
  var ZapOff = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }],
      ["path", { d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }],
      [
        "path",
        {
          d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
        }
      ],
      ["path", { d: "m2 2 20 20" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/zap.js
  var Zap = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
        }
      ]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/zoom-in.js
  var ZoomIn = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
      ["line", { x1: "11", x2: "11", y1: "8", y2: "14" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/zoom-out.js
  var ZoomOut = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
    ]
  ];

  // node_modules/lucide/dist/esm/lucide.js
  var createIcons = ({ icons = {}, nameAttr = "data-lucide", attrs = {} } = {}) => {
    if (!Object.values(icons).length) {
      throw new Error(
        "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
      );
    }
    if (typeof document === "undefined") {
      throw new Error("`createIcons()` only works in a browser environment.");
    }
    const elementsToReplace = document.querySelectorAll(`[${nameAttr}]`);
    Array.from(elementsToReplace).forEach(
      (element) => replaceElement(element, { nameAttr, icons, attrs })
    );
    if (nameAttr === "data-lucide") {
      const deprecatedElements = document.querySelectorAll("[icon-name]");
      if (deprecatedElements.length > 0) {
        console.warn(
          "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
        );
        Array.from(deprecatedElements).forEach(
          (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
        );
      }
    }
  };

  // <stdin>
  var openBtn = document.getElementById("menuOpenBtn");
  var closeBtn = document.getElementById("menuCloseBtn");
  var siteNav = document.getElementById("siteNav");
  var openMenu = () => siteNav.style.display = "flex";
  var closeMenu = () => siteNav.style.display = "none";
  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  createIcons({ icons: iconsAndAliases_exports });
})();
/*! Bundled license information:

lucide/dist/esm/createElement.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/replaceElement.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/defaultAttributes.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/a-arrow-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/a-arrow-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/a-large-small.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/accessibility.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/activity.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/air-vent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/airplay.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/alarm-clock-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/alarm-clock-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/alarm-clock-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/alarm-clock-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/alarm-clock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/alarm-smoke.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/album.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-center-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-center-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-center.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-end-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-end-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-distribute-center.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-distribute-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-distribute-start.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-justify-center.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-justify-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-justify-start.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-space-around.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-horizontal-space-between.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-justify.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-start-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-start-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-distribute-center.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-distribute-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-distribute-start.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-justify-center.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-justify-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-justify-start.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-space-around.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/align-vertical-space-between.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ambulance.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ampersand.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ampersands.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/anchor.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/angry.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/annoyed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/antenna.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/anvil.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/aperture.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/app-window-mac.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/app-window.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/apple.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/archive-restore.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/archive-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/archive.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/armchair.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-down-dash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-left-dash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-right-dash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-up-dash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-big-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-0-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-1-0.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-a-z.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-from-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-narrow-wide.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-to-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-to-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-wide-narrow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down-z-a.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-left-from-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-left-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-left-to-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-right-from-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-right-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-right-to-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-0-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-1-0.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-a-z.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-from-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-from-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-narrow-wide.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-to-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-wide-narrow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up-z-a.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrows-up-from-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/asterisk.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/at-sign.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/atom.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/audio-lines.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/audio-waveform.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/award.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/axe.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/axis-3d.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/baby.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/backpack.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-alert.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-cent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-dollar-sign.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-euro.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-help.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-indian-rupee.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-info.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-japanese-yen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-percent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-pound-sterling.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-russian-ruble.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-swiss-franc.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/badge.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/baggage-claim.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ban.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/banana.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/banknote.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/barcode.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/baseline.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bath.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/battery-charging.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/battery-full.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/battery-low.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/battery-medium.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/battery-warning.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/battery.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/beaker.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bean-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bean.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bed-double.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bed-single.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/beef.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/beer-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/beer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bell-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bell-electric.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bell-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bell-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bell-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bell-ring.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bell.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/between-horizontal-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/between-horizontal-start.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/between-vertical-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/between-vertical-start.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/biceps-flexed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bike.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/binary.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/biohazard.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bird.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bitcoin.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/blend.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/blinds.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/blocks.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bluetooth-connected.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bluetooth-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bluetooth-searching.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bluetooth.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bold.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bolt.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bomb.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-a.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-audio.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-copy.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-headphones.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-image.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-key.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-lock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-marked.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-open-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-open-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-type.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-up-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-user.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bookmark-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bookmark-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bookmark-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bookmark-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bookmark.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/boom-box.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bot-message-square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bot-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/box-select.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/box.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/boxes.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/braces.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/brackets.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/brain-circuit.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/brain-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/brain.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/brick-wall.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/briefcase-business.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/briefcase-medical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/briefcase.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bring-to-front.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/brush.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bug-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bug-play.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bug.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/building-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/building.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bus-front.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/bus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cable-car.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cable.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cake-slice.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cake.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calculator.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-arrow-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-arrow-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-check-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-clock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-days.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-fold.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-minus-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-plus-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-range.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-x-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/calendar.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/camera-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/camera.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/candy-cane.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/candy-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/candy.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cannabis.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/captions-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/captions.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/car-front.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/car-taxi-front.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/car.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/caravan.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/carrot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/case-lower.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/case-sensitive.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/case-upper.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cassette-tape.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cast.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/castle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cat.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cctv.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-area.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-bar-big.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-bar-decreasing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-bar-increasing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-bar-stacked.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-bar.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-candlestick.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-column-big.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-column-decreasing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-column-increasing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-column-stacked.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-column.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-network.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-no-axes-column-decreasing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-no-axes-column-increasing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-no-axes-column.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-no-axes-combined.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-no-axes-gantt.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-pie.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-scatter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chart-spline.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/check-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chef-hat.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cherry.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevron-first.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevron-last.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevron-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-down-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-left-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-right-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-up-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chevrons-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/chrome.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/church.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cigarette-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cigarette.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-alert.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-out-down-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-out-down-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-out-up-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-out-up-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-arrow-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-check-big.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-chevron-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-chevron-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-chevron-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-chevron-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-divide.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-dollar-sign.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-dot-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-ellipsis.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-equal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-fading-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-gauge.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-help.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-parking-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-parking.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-pause.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-percent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-play.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-power.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-slash-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-slash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-stop.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-user-round.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-user.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/circuit-board.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/citrus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clapperboard.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-copy.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-list.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-paste.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-pen-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-type.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clipboard.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-10.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-11.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-12.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-4.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-5.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-6.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-7.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-8.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-9.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-arrow-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock-arrow-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-download.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-drizzle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-fog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-hail.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-lightning.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-moon-rain.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-moon.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-rain-wind.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-rain.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-snow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-sun-rain.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-sun.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-upload.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloudy.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/clover.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/club.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/code-xml.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/codepen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/codesandbox.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/coffee.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/coins.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/columns-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/columns-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/columns-4.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/combine.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/command.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/compass.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/component.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/computer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/concierge-bell.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/construction.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/contact-round.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/contact.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/container.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/contrast.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cookie.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cooking-pot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copy-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copy-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copy-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copy-slash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copy-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copy.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copyleft.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/copyright.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-down-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-down-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-left-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-left-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-right-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-right-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-up-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/corner-up-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cpu.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/creative-commons.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/credit-card.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/croissant.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/crop.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cross.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/crosshair.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/crown.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cuboid.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cup-soda.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/currency.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cylinder.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dam.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/database-backup.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/database-zap.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/database.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/delete.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dessert.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/diameter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/diamond-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/diamond-percent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/diamond-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/diamond.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dice-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dice-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dice-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dice-4.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dice-5.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dice-6.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dices.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/diff.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/disc-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/disc-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/disc-album.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/disc.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/divide.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dna-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dna.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dollar-sign.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/donut.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/door-closed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/door-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/download.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/drafting-compass.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/drama.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dribbble.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/drill.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/droplet.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/droplets.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/drum.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/drumstick.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dumbbell.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ear-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ear.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/earth-lock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/earth.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/eclipse.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/egg-fried.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/egg-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/egg.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ellipsis-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ellipsis.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/equal-not.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/equal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/eraser.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/euro.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/expand.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/external-link.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/eye-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/eye.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/facebook.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/factory.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fan.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fast-forward.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/feather.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fence.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ferris-wheel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/figma.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-archive.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-audio-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-audio.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-axis-3d.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-badge-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-badge.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-box.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-chart-column-increasing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-chart-column.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-chart-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-chart-pie.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-check-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-clock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-code-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-diff.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-digit.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-image.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-input.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-json-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-json.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-key-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-key.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-lock-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-lock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-minus-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-music.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-output.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-pen-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-plus-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-question.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-scan.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-search-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-sliders.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-spreadsheet.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-stack.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-symlink.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-terminal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-type-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-type.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-video-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-video.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-volume-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-volume.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-warning.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-x-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/files.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/film.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/filter-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/filter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fingerprint.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fire-extinguisher.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fish-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fish-symbol.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fish.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flag-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flag-triangle-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flag-triangle-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flag.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flame-kindling.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flame.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flashlight-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flashlight.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flask-conical-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flask-conical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flask-round.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flip-horizontal-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flip-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flip-vertical-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flip-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flower-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flower.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/focus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fold-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fold-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-archive.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-clock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-closed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-git-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-git.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-input.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-kanban.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-key.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-lock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-open-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-output.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-root.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-search-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-symlink.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-sync.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-tree.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folder.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/folders.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/footprints.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/forklift.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/forward.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/frame.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/framer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/frown.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fuel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/fullscreen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gallery-horizontal-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gallery-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gallery-thumbnails.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gallery-vertical-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gallery-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gamepad-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gamepad.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gauge.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gavel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gem.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ghost.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gift.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-branch-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-branch.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-commit-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-commit-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-compare-arrows.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-compare.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-fork.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-graph.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-merge.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-pull-request-arrow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-pull-request-closed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-pull-request-create-arrow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-pull-request-create.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-pull-request-draft.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/git-pull-request.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/github.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/gitlab.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/glass-water.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/glasses.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/globe-lock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/globe.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/goal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grab.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/graduation-cap.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grape.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grid-2x2-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grid-2x2-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grid-2x2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grid-3x3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grip-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grip-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/grip.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/group.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/guitar.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ham.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hammer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hand-coins.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hand-heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hand-helping.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hand-metal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hand-platter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hand.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/handshake.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hard-drive-download.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hard-drive-upload.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hard-drive.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hard-hat.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/haze.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hdmi-port.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heading-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heading-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heading-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heading-4.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heading-5.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heading-6.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heading.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/headphones.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/headset.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heart-crack.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heart-handshake.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heart-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heart-pulse.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/heater.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hexagon.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/highlighter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/history.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hop-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hop.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hospital.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hotel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/hourglass.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/house-plug.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/house-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/house.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ice-cream-bowl.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ice-cream-cone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/image-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/image-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/image-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/image-play.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/image-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/image-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/image.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/images.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/import.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/inbox.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/indent-decrease.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/indent-increase.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/indian-rupee.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/infinity.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/info.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/inspection-panel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/instagram.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/italic.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/iteration-ccw.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/iteration-cw.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/japanese-yen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/joystick.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/kanban.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/key-round.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/key-square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/key.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/keyboard-music.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/keyboard-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/keyboard.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lamp-ceiling.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lamp-desk.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lamp-floor.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lamp-wall-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lamp-wall-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lamp.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/land-plot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/landmark.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/languages.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/laptop-minimal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/laptop.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lasso-select.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lasso.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/laugh.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layers-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layers-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layers.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layout-dashboard.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layout-list.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layout-panel-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layout-panel-top.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/layout-template.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/leaf.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/leafy-green.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lectern.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/letter-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/library-big.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/library.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/life-buoy.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ligature.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lightbulb-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lightbulb.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/link-2-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/link-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/link.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/linkedin.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-checks.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-collapse.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-end.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-filter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-music.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-ordered.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-restart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-start.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-todo.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-tree.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-video.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/list.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/loader-circle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/loader-pinwheel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/loader.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/locate-fixed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/locate-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/locate.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lock-keyhole-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lock-keyhole.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lock-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lock.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/log-in.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/log-out.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/logs.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lollipop.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/luggage.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/magnet.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-question.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-warning.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mail.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mailbox.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mails.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-check-inside.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-minus-inside.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-plus-inside.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-x-inside.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pin.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map-pinned.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/map.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/martini.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/maximize-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/maximize.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/medal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/megaphone-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/megaphone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/meh.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/memory-stick.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/menu.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/merge.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-more.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-question.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-reply.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-warning.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-circle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-diff.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-heart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-more.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-quote.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-reply.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-share.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-warning.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/message-square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/messages-square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mic-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mic-vocal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mic.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/microscope.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/microwave.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/milestone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/milk-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/milk.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/minimize-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/minimize.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-pause.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-play.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-smartphone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-speaker.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-stop.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/monitor.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/moon-star.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/moon.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mountain-snow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mountain.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mouse-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mouse-pointer-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mouse-pointer-ban.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mouse-pointer-click.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mouse-pointer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/mouse.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-3d.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-diagonal-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-diagonal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-down-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-down-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-up-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-up-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/move.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/music-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/music-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/music-4.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/music.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/navigation-2-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/navigation-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/navigation-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/navigation.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/network.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/newspaper.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/nfc.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/notebook-pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/notebook-tabs.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/notebook-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/notebook.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/notepad-text-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/notepad-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/nut-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/nut.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/octagon-alert.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/octagon-pause.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/octagon-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/octagon.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/option.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/orbit.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/origami.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/package.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/paint-bucket.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/paint-roller.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/paintbrush-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/paintbrush.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/palette.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-bottom-close.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-bottom-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-bottom-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-bottom.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-left-close.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-left-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-left-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-right-close.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-right-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-right-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-top-close.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-top-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-top-open.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panel-top.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panels-left-bottom.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panels-right-bottom.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/panels-top-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/paperclip.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/parentheses.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/parking-meter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/party-popper.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pause.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/paw-print.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pc-case.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pen-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pen-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pen-tool.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pencil-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pencil-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pencil-ruler.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pencil.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pentagon.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/percent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/person-standing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/philippine-peso.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/phone-call.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/phone-forwarded.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/phone-incoming.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/phone-missed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/phone-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/phone-outgoing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/phone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pi.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/piano.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pickaxe.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/picture-in-picture-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/picture-in-picture.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/piggy-bank.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pilcrow-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pilcrow-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pilcrow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pill-bottle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pill.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pin-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pin.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pipette.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pizza.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plane-landing.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plane-takeoff.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plane.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/play.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plug-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plug-zap.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plug.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pocket-knife.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pocket.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/podcast.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pointer-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pointer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/popcorn.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/popsicle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pound-sterling.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/power-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/power.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/presentation.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/printer-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/printer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/projector.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/proportions.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/puzzle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/pyramid.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/qr-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/quote.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rabbit.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/radar.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/radiation.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/radical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/radio-receiver.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/radio-tower.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/radio.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/radius.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rail-symbol.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rainbow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rat.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ratio.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-cent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-euro.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-indian-rupee.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-japanese-yen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-pound-sterling.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-russian-ruble.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-swiss-franc.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/receipt.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rectangle-ellipsis.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rectangle-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rectangle-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/recycle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/redo-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/redo-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/redo.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/refresh-ccw-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/refresh-ccw.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/refresh-cw-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/refresh-cw.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/refrigerator.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/regex.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/remove-formatting.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/repeat-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/repeat-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/repeat.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/replace-all.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/replace.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/reply-all.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/reply.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rewind.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ribbon.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rocket.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rocking-chair.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/roller-coaster.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rotate-3d.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rotate-ccw-square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rotate-ccw.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rotate-cw-square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rotate-cw.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/route-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/route.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/router.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rows-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rows-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rows-4.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/rss.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ruler.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/russian-ruble.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sailboat.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/salad.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sandwich.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/satellite-dish.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/satellite.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/save-all.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/save-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/save.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scale-3d.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scale.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scaling.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan-barcode.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan-eye.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan-face.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan-line.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan-qr-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scan.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/school.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scissors-line-dashed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scissors.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/screen-share-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/screen-share.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scroll-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/scroll.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/search-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/search-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/search-slash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/search-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/section.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/send-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/send-to-back.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/send.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/separator-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/separator-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/server-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/server-crash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/server-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/server.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/settings-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/settings.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shapes.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/share-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/share.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sheet.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shell.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-alert.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-ban.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-ellipsis.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-half.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-question.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shield.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ship-wheel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ship.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shirt.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shopping-bag.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shopping-basket.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shopping-cart.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shovel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shower-head.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shrink.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shrub.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/shuffle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sigma.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signal-high.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signal-low.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signal-medium.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signal-zero.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signature.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signpost-big.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/signpost.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/siren.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/skip-back.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/skip-forward.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/skull.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/slack.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/slash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/slice.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sliders-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/smartphone-charging.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/smartphone-nfc.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/smartphone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/smile-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/smile.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/snail.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/snowflake.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sofa.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/soup.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/space.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/spade.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sparkle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sparkles.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/speaker.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/speech.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/spell-check-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/spell-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/spline.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/split.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/spray-can.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sprout.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-activity.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-down-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-down-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-out-down-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-out-down-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-out-up-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-out-up-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-up-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-up-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-arrow-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-asterisk.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-bottom-dashed-scissors.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-chart-gantt.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-check-big.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-chevron-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-chevron-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-chevron-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-chevron-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-dashed-bottom-code.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-dashed-bottom.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-dashed-kanban.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-dashed-mouse-pointer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-divide.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-equal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-function.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-kanban.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-library.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-m.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-menu.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-mouse-pointer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-parking-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-parking.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-percent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-pi.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-pilcrow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-play.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-power.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-radical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-scissors.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-sigma.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-slash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-split-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-split-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-stack.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-terminal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-user-round.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-user.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/square.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/squircle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/squirrel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/stamp.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/star-half.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/star-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/star.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/step-back.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/step-forward.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/stethoscope.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sticker.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sticky-note.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/store.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/stretch-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/stretch-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/strikethrough.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/subscript.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sun-dim.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sun-medium.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sun-moon.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sun-snow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sun.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sunrise.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sunset.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/superscript.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/swatch-book.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/swiss-franc.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/switch-camera.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/sword.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/swords.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/syringe.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/table-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/table-cells-merge.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/table-cells-split.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/table-columns-split.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/table-properties.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/table-rows-split.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/table.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tablet-smartphone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tablet.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tablets.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tag.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tags.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tally-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tally-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tally-3.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tally-4.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tally-5.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tangent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/target.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/telescope.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tent-tree.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/terminal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/test-tube-diagonal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/test-tube.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/test-tubes.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/text-cursor-input.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/text-cursor.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/text-quote.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/text-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/text-select.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/theater.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/thermometer-snowflake.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/thermometer-sun.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/thermometer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/thumbs-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/thumbs-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ticket-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ticket-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ticket-percent.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ticket-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ticket-slash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ticket-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ticket.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/timer-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/timer-reset.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/timer.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/toggle-left.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/toggle-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tornado.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/torus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/touchpad-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/touchpad.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tower-control.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/toy-brick.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tractor.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/traffic-cone.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/train-front-tunnel.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/train-front.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/train-track.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tram-front.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/trash-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/trash.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tree-deciduous.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tree-palm.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tree-pine.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/trees.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/trello.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/trending-down.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/trending-up.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/triangle-alert.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/triangle-right.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/triangle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/trophy.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/truck.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/turtle.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tv-minimal-play.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tv-minimal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/tv.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/twitch.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/twitter.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/type-outline.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/type.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/umbrella-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/umbrella.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/underline.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/undo-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/undo-dot.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/undo.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/unfold-horizontal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/unfold-vertical.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ungroup.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/university.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/unlink-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/unlink.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/unplug.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/upload.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/usb.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-check.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-cog.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-minus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-pen.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-plus.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-search.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/users-round.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/users.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/utensils-crossed.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/utensils.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/utility-pole.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/variable.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/vault.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/vegan.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/venetian-mask.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/vibrate-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/vibrate.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/video-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/video.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/videotape.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/view.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/voicemail.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/volume-1.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/volume-2.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/volume-x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/volume.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/vote.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wallet-cards.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wallet-minimal.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wallet.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wallpaper.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wand-sparkles.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wand.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/warehouse.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/washing-machine.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/watch.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/waves.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/waypoints.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/webcam.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/webhook-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/webhook.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/weight.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wheat-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wheat.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/whole-word.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wifi-high.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wifi-low.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wifi-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wifi-zero.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wifi.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wind.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wine-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wine.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/workflow.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/worm.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wrap-text.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/wrench.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/x.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/youtube.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/zap-off.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/zap.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/iconsAndAliases.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
