import svgPaths from "./svg-siklij73in";
import imgImage from "./a7ca30f63c11ae37e7becc94d18408d214dfc0b0.png";
import imgAb6AXuABnt8NkXcuNjDdPg7HlHgRscrsxyQeEc70BOqLcdVc4GTgXwZ03KIk2CwYjZGgMf5FytkNrWeLTEUDwyGdHtFO39CiSs14OvMjf1JU8P8S2I8Bdj5MNgLh7NkpXwTjq6TwK71TNqZObCwmGF7F2O2CyZnJflngHQuDuz9R4QOGhRagLShQNzhOuOhfuF4VUgC7OHlHHr3S9OazpDh8Nu8Wd2OWigqRDksNku6FD1A from "./d3805f93a33dafb1f6daec9f6214421e58b4cefa.png";
import imgAb6AXuDsIz2F78Si6DoY4ZSiOoBfFmUqaXhH2CbWmZdzpsQlSsn2MxbufGJi59JNz1UcK4Dzt5Afa8WtXzt6MDkUd5NNo7CFyUNDaWtp9Hup4ZNgSri8OAlf20XyItgziJzhyMn5LbSzMiDNm8TvWIakgQMoW3V2X2V0Lbd1MetHdfXvavTpDVroANhVzM8LrSuVAkVebHvmCx1QPPjFjYfTdPyOmeXcXzRwg41WeoCWkyJ311Xs6HYog from "./fa808efa3dda285418950c76ca09cf630b55cf50.png";
import imgAb6AXuDNt44V58AxfbmgK3ZzG3UGrJxNlnscVs95HdBcY6G1QSvdb1Nvli6OyvOLrMnea59VhvCjfhIsN1OUDhDNkMv9ZNGWagob7Gj8I3NCKoUz2DVrmdFsZrLpdI1TVxSy677LXrpUkdhVysX2KvtmFftX2WFXVwza7Jt8DRQvXoToJMyu1Z93OdOv617UkQpigmHMar9DzYm2GczRxpIXgoJkR3Ezj9ITgYpZfPgZzEgLr5QJ8A from "./c6e4a0acdd9fde3e53064ae5ce27f0eb5abfcf4c.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-heading font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[64px] text-center tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[80px]">{`Podcast & Testimonies`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] pb-[0.69px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Discover divine wisdom and inspiring life stories through our curated</p>
        <p className="leading-[28.8px]">collection of spiritual discourses and personal transformations.</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14.9px] items-center max-w-[inherit] px-[64px] relative size-full">
          <Heading />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p39dff800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#002366] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[0] not-italic pb-[4px] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-heading font-bold justify-center relative shrink-0 text-[#001a4d] text-[24px]">
        <p className="leading-[24px]">The Quiet Voice</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[#444650] text-[12px] tracking-[0.6px]">
        <p className="leading-[14.4px]">Episode 42 • 18 min</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background />
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] w-full">
          <p className="leading-[25.6px] mb-0">Learning to discern the divine whisper</p>
          <p className="leading-[25.6px]">amidst the noise of modern life.</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#ffd700] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[14px] pt-[14.7px] px-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Listen Now</p>
        </div>
      </div>
    </div>
  );
}

function AudioCard() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] relative rounded-[12px] shrink-0 w-full" data-name="Audio Card 1">
      <div aria-hidden className="absolute border border-[rgba(227,226,232,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[15.3px] items-start p-[25px] relative size-full">
        <Container1 />
        <Container3 />
        <Button />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p39dff800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#002366] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[0] not-italic pb-[4px] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-heading font-bold justify-center relative shrink-0 text-[#001a4d] text-[24px]">
        <p className="leading-[24px]">Faith in Action</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[#444650] text-[12px] tracking-[0.6px]">
        <p className="leading-[14.4px]">Episode 41 • 24 min</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] w-full">
          <p className="leading-[25.6px] mb-0">Real stories of community impact</p>
          <p className="leading-[25.6px] mb-0">driven by deep-rooted spiritual</p>
          <p className="leading-[25.6px]">conviction.</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#ffd700] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2px] py-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Listen Now</p>
        </div>
      </div>
    </div>
  );
}

function AudioCard1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] relative rounded-[12px] shrink-0 w-full" data-name="Audio Card 2">
      <div aria-hidden className="absolute border border-[rgba(227,226,232,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Container4 />
        <Container6 />
        <Button1 />
      </div>
    </div>
  );
}

function SideCards() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch pb-[181.26px] relative row-1 self-start shrink-0" data-name="Side Cards">
      <AudioCard />
      <AudioCard1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 21">
        <g id="Container">
          <path d="M0 21V0L16.5 10.5L0 21V21" fill="var(--fill-0, #001A4D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ffd700] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[80px] top-1/2" data-name="Overlay+Shadow" />
      <Container8 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Link">
      <Background2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[424.86px] relative shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-0.35%] max-w-none top-0 w-[100.7%]" src={imgImage} />
          </div>
        </div>
        <div className="absolute bg-[rgba(0,26,77,0.2)] inset-0" data-name="Overlay" />
        <Link />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[11.667px] top-1/2" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p20dd1580} fill="var(--fill-0, #735C00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold justify-center leading-[0] left-[26.02px] not-italic text-[#735c00] text-[12px] top-[calc(50%-0.7px)] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[14.4px]">FEATURED EPISODE</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-heading font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[32px] w-full">
        <p className="leading-[41.6px]">Kupembedza Mulengi mwa chikhalidwe chathu</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[5.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] w-full">
        <p className="leading-[25.6px] mb-0">An exploration of honoring the Creator through the rich tapestry of our cultural</p>
        <p className="leading-[25.6px] mb-0">heritage. This deep dive into tradition and faith examines how our roots amplify our</p>
        <p className="leading-[25.6px]">spiritual communication.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #001A4D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Watch Full Video</p>
      </div>
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center pt-[12.5px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-start p-[32px] relative size-full">
        <Container10 />
        <Heading1 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function LargeFeaturedVideo() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] col-[1/span_8] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Large Featured Video">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container7 />
        <Container9 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(227,226,232,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SectionFeaturedMediaBentoGrid() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Section - Featured Media Bento Grid">
      <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_705.23px] max-w-[inherit] px-[64px] relative size-full">
        <SideCards />
        <LargeFeaturedVideo />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[16.8px]">VOICES OF TRUTH</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-heading font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[32px] whitespace-nowrap">
        <p className="leading-[41.6px]">Powerful Testimonies</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[313.39px]" data-name="Container">
      <Container18 />
      <Heading2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #1A1B20)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#757682] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #1A1B20)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#757682] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Ab6AXuABnt8NkXcuNjDdPg7HlHgRscrsxyQeEc70BOqLcdVc4GTgXwZ03KIk2CwYjZGgMf5FytkNrWeLTEUDwyGdHtFO39CiSs14OvMjf1JU8P8S2I8Bdj5MNgLh7NkpXwTjq6TwK71TNqZObCwmGF7F2O2CyZnJflngHQuDuz9R4QOGhRagLShQNzhOuOhfuF4VUgC7OHlHHr3S9OazpDh8Nu8Wd2OWigqRDksNku6FD1A() {
  return (
    <div className="max-w-[302px] pointer-events-none relative rounded-[9999px] shrink-0 size-[64px]" data-name="AB6AXuABnt8NkXcuNJDdPG7hlHgRscrsxyQE_Ec70bOQLcdVC4gTGXwZ03KIk2Cw__yjZGgMf5fytkNrWe_L_tE_UDwyGdHtF-o39CISs_14OvMJF1j_U8P8s2I8Bdj5mNG_Lh7nkpXWTjq6TwK71TNqZObCwmG_f7F2o2cyZNJflngHQuDUZ9R4qOGhRagLShQNzhOuOhfu-_f4vUgC7OHlH-HR3S9-OazpDh8Nu8WD2oWigqRDksNku6fD1A">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute h-[179.02%] left-0 max-w-none top-[-39.51%] w-full" src={imgAb6AXuABnt8NkXcuNjDdPg7HlHgRscrsxyQeEc70BOqLcdVc4GTgXwZ03KIk2CwYjZGgMf5FytkNrWeLTEUDwyGdHtFO39CiSs14OvMjf1JU8P8S2I8Bdj5MNgLh7NkpXwTjq6TwK71TNqZObCwmGF7F2O2CyZnJflngHQuDuz9R4QOGhRagLShQNzhOuOhfuF4VUgC7OHlHHr3S9OazpDh8Nu8Wd2OWigqRDksNku6FD1A} />
      </div>
      <div aria-hidden className="absolute border-2 border-[rgba(255,215,0,0.3)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Sarah M.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[14.4px]">Community Leader</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[127.05px]" data-name="Container">
      <Heading3 />
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Ab6AXuABnt8NkXcuNjDdPg7HlHgRscrsxyQeEc70BOqLcdVc4GTgXwZ03KIk2CwYjZGgMf5FytkNrWeLTEUDwyGdHtFO39CiSs14OvMjf1JU8P8S2I8Bdj5MNgLh7NkpXwTjq6TwK71TNqZObCwmGF7F2O2CyZnJflngHQuDuz9R4QOGhRagLShQNzhOuOhfuF4VUgC7OHlHHr3S9OazpDh8Nu8Wd2OWigqRDksNku6FD1A />
        <Container24 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans italic italic justify-center leading-[0] relative shrink-0 text-[#444650] text-[16px] w-full">
          <p className="leading-[25.6px] mb-0">{`"The Lord Overtone podcasts have`}</p>
          <p className="leading-[25.6px] mb-0">been a sanctuary for my soul.</p>
          <p className="leading-[25.6px] mb-0">{`Listening to 'Kupembedza Mulengi'`}</p>
          <p className="leading-[25.6px] mb-0">changed how I view my cultural</p>
          <p className="leading-[25.6px]">{`identity within my faith."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function TestimonyCard() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Testimony Card 1">
      <div aria-hidden className="absolute border border-[rgba(197,198,210,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Container23 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Ab6AXuDsIz2F78Si6DoY4ZSiOoBfFmUqaXhH2CbWmZdzpsQlSsn2MxbufGJi59JNz1UcK4Dzt5Afa8WtXzt6MDkUd5NNo7CFyUNDaWtp9Hup4ZNgSri8OAlf20XyItgziJzhyMn5LbSzMiDNm8TvWIakgQMoW3V2X2V0Lbd1MetHdfXvavTpDVroANhVzM8LrSuVAkVebHvmCx1QPPjFjYfTdPyOmeXcXzRwg41WeoCWkyJ311Xs6HYog() {
  return (
    <div className="max-w-[302px] pointer-events-none relative rounded-[9999px] shrink-0 size-[64px]" data-name="AB6AXuDSIz2F78si6doY4zSIOoBfFmUQAXhH2CbWMZdzpsQlSsn2mxbufGJi59jNZ1UcK4Dzt5afa8WtXZT6mDkUd5nNo7cFyU-nDaWTP9hup4zNGSri8oALF20_-XyITGZIJzhyMn5LbSZMiDNm8tvWIakgQMoW3v2x2V0Lbd1MetHdfXvavTpDVroANhVzM8LrSU-vAkVEBHvmCX1qPPjFJYfTDPyOME_xcXZRwg41weoCWkyJ311XS6hYog">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute h-[179.02%] left-0 max-w-none top-[-39.51%] w-full" src={imgAb6AXuDsIz2F78Si6DoY4ZSiOoBfFmUqaXhH2CbWmZdzpsQlSsn2MxbufGJi59JNz1UcK4Dzt5Afa8WtXzt6MDkUd5NNo7CFyUNDaWtp9Hup4ZNgSri8OAlf20XyItgziJzhyMn5LbSzMiDNm8TvWIakgQMoW3V2X2V0Lbd1MetHdfXvavTpDVroANhVzM8LrSuVAkVebHvmCx1QPPjFjYfTdPyOmeXcXzRwg41WeoCWkyJ311Xs6HYog} />
      </div>
      <div aria-hidden className="absolute border-2 border-[rgba(255,215,0,0.3)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">David K.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[14.4px]">Educator</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[67.16px]" data-name="Container">
      <Heading4 />
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Ab6AXuDsIz2F78Si6DoY4ZSiOoBfFmUqaXhH2CbWmZdzpsQlSsn2MxbufGJi59JNz1UcK4Dzt5Afa8WtXzt6MDkUd5NNo7CFyUNDaWtp9Hup4ZNgSri8OAlf20XyItgziJzhyMn5LbSzMiDNm8TvWIakgQMoW3V2X2V0Lbd1MetHdfXvavTpDVroANhVzM8LrSuVAkVebHvmCx1QPPjFjYfTdPyOmeXcXzRwg41WeoCWkyJ311Xs6HYog />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans italic italic justify-center leading-[0] relative shrink-0 text-[#444650] text-[16px] w-full">
          <p className="leading-[25.6px] mb-0">{`"Finding content that is both`}</p>
          <p className="leading-[25.6px] mb-0">intellectually stimulating and</p>
          <p className="leading-[25.6px] mb-0">spiritually nourishing is rare. This</p>
          <p className="leading-[25.6px] mb-0">ministry hits that perfect balance</p>
          <p className="leading-[25.6px]">{`every single time."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container38 />
        <Container39 />
        <Container40 />
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function TestimonyCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Testimony Card 2">
      <div aria-hidden className="absolute border border-[rgba(197,198,210,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Container33 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Ab6AXuDNt44V58AxfbmgK3ZzG3UGrJxNlnscVs95HdBcY6G1QSvdb1Nvli6OyvOLrMnea59VhvCjfhIsN1OUDhDNkMv9ZNGWagob7Gj8I3NCKoUz2DVrmdFsZrLpdI1TVxSy677LXrpUkdhVysX2KvtmFftX2WFXVwza7Jt8DRQvXoToJMyu1Z93OdOv617UkQpigmHMar9DzYm2GczRxpIXgoJkR3Ezj9ITgYpZfPgZzEgLr5QJ8A() {
  return (
    <div className="max-w-[302px] pointer-events-none relative rounded-[9999px] shrink-0 size-[64px]" data-name="AB6AXuDNt44V58AxfbmgK3zzG3uGrJXNlnscVs9_5HdBcY6G1qSvdb_1Nvli6oyvOLrMnea59vhvCjfhIsN1oUDhDNkMv9zN_gWagob7Gj8i3nCKoUZ2dVrmdFSZrLpdI1T-VXSy677lXRPUkdhVysX2KVTM-Fft-X2wF-XVwza7jt8dRQvXoToJMyu1Z93OdOV617ukQpigmHMar9dzYM2GczRxpIXgoJkR3ezj9ITgYpZfPg_zzEgLR5qJ8A">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgAb6AXuDNt44V58AxfbmgK3ZzG3UGrJxNlnscVs95HdBcY6G1QSvdb1Nvli6OyvOLrMnea59VhvCjfhIsN1OUDhDNkMv9ZNGWagob7Gj8I3NCKoUz2DVrmdFsZrLpdI1TVxSy677LXrpUkdhVysX2KvtmFftX2WFXVwza7Jt8DRQvXoToJMyu1Z93OdOv617UkQpigmHMar9DzYm2GczRxpIXgoJkR3Ezj9ITgYpZfPgZzEgLr5QJ8A} />
      </div>
      <div aria-hidden className="absolute border-2 border-[rgba(255,215,0,0.3)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">John Phiri</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[14.4px]">Student</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[81.47px]" data-name="Container">
      <Heading5 />
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Ab6AXuDNt44V58AxfbmgK3ZzG3UGrJxNlnscVs95HdBcY6G1QSvdb1Nvli6OyvOLrMnea59VhvCjfhIsN1OUDhDNkMv9ZNGWagob7Gj8I3NCKoUz2DVrmdFsZrLpdI1TVxSy677LXrpUkdhVysX2KvtmFftX2WFXVwza7Jt8DRQvXoToJMyu1Z93OdOv617UkQpigmHMar9DzYm2GczRxpIXgoJkR3Ezj9ITgYpZfPgZzEgLr5QJ8A />
        <Container44 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans italic italic justify-center leading-[0] relative shrink-0 text-[#444650] text-[16px] w-full">
          <p className="leading-[25.6px] mb-0">{`"As a young seeker, I found clarity`}</p>
          <p className="leading-[25.6px] mb-0">through the podcast episodes. The</p>
          <p className="leading-[25.6px] mb-0">cultural perspective on faith is exactly</p>
          <p className="leading-[25.6px]">{`what my generation needs to hear."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #FFD700)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[19.59px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[0.59px] relative size-full">
        <Container48 />
        <Container49 />
        <Container50 />
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function TestimonyCard2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Testimony Card 3">
      <div aria-hidden className="absolute border border-[rgba(197,198,210,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[23.4px] items-start pb-[58.6px] pt-[33px] px-[33px] relative size-full">
        <Container43 />
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <TestimonyCard />
      <TestimonyCard1 />
      <TestimonyCard2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[64px] relative size-full">
        <Container16 />
        <Container22 />
      </div>
    </div>
  );
}

function TestimoniesSection() {
  return (
    <div className="bg-[#f4f3f9] content-stretch flex flex-col items-start pb-[96px] pt-[152.01px] relative shrink-0 w-full" data-name="Testimonies Section">
      <Container15 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start pb-[120px] pt-[128px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionFeaturedMediaBentoGrid />
      <TestimoniesSection />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.59px] right-0 top-[-1px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-heading font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffd700] text-[24px] whitespace-nowrap">
        <p className="leading-[33.6px]">Lord Overtone</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[49.59px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[25.6px] mb-0">A ministry dedicated to high-vibrational</p>
        <p className="leading-[25.6px] mb-0">spiritual content and community</p>
        <p className="leading-[25.6px]">empowerment.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pf778600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(227,226,232,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3e330400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(227,226,232,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container59 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-0 right-0 top-[150.37px]" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[190.38px] max-w-[320px] relative shrink-0 w-[320px]" data-name="Container">
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffd700] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[16.8px]">LINKS</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Support</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[131.25px]" data-name="Container">
      <Heading6 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffd700] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[16.8px]">SUPPORT</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffd700] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Donate</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Partnerships</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[99.7px]" data-name="Container">
      <Heading7 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[96px] h-[137px] items-start relative shrink-0" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container60 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[337.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold justify-center leading-[0] left-0 not-italic text-[12px] text-[rgba(227,226,232,0.7)] top-[6.5px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[14.4px]">© 2024 Lord Overtone Ministry. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Facebook</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">YouTube</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(227,226,232,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Link8 />
        <Link9 />
        <Link10 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1280px] pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(227,226,232,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a1b20] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[95.99px] items-start px-[64px] py-[120px] relative size-full">
        <Container53 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
        <g id="Container">
          <path d={svgPaths.pd20f980} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#001a4d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]" data-name="Background">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001a4d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">The Quiet Voice</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[14.4px]">Episode 42</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[127.48px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[308px]" data-name="Container">
      <Background3 />
      <Container68 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[14px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
        <g id="Container">
          <path d="M0 14V0L11 7L0 14V14" fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#001a4d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container73 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Button → shuffle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p310f3a00} fill="var(--fill-0, #001A4D)" id="Button â shuffle" />
        </svg>
      </div>
      <div className="h-[12px] relative shrink-0 w-[13px]" data-name="Button → skip_previous">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
          <path d={svgPaths.p2ee7f2e0} fill="var(--fill-0, #001A4D)" id="Button â skip_previous" />
        </svg>
      </div>
      <Button5 />
      <div className="h-[12px] relative shrink-0 w-[13px]" data-name="Button → skip_next">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
          <path d={svgPaths.p6f94780} fill="var(--fill-0, #001A4D)" id="Button â skip_next" />
        </svg>
      </div>
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Button → repeat">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.pd921fe8} fill="var(--fill-0, #001A4D)" id="Button â repeat" />
        </svg>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[33.08px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold justify-center leading-[0] left-0 not-italic text-[#444650] text-[12px] top-[6.5px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[14.4px]">04:12</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e3e2e8] flex-[1_0_0] h-[6px] min-w-px overflow-clip relative rounded-[9999px]" data-name="Background">
      <div className="absolute bg-[#001a4d] inset-[0_66.67%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[33.89px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold justify-center leading-[0] left-0 not-italic text-[#444650] text-[12px] top-[6.5px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[14.4px]">18:45</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Background4 />
      <Container76 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[552px]" data-name="Container">
      <Container72 />
      <Container74 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.5">
        <g id="Container">
          <path d={svgPaths.p51fc680} fill="var(--fill-0, #444650)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e3e2e8] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-[96px]" data-name="Background">
      <div className="absolute bg-[#001a4d] bottom-0 left-0 right-1/4 top-0" data-name="Background" />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[14px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
        <g id="Container">
          <path d={svgPaths.p3666eb80} fill="var(--fill-0, #444650)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[308px]" data-name="Container">
      <Container78 />
      <Background5 />
      <Container79 />
    </div>
  );
}

function Container65() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center max-w-[inherit] relative size-full">
        <Container66 />
        <Container71 />
        <Container77 />
      </div>
    </div>
  );
}

function PersistentAudioPlayer() {
  return (
    <div className="absolute bg-white bottom-[0.23px] content-stretch drop-shadow-[0px_-4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start left-0 pb-[16px] pt-[17px] px-[24px] w-[1280px]" data-name="Persistent Audio Player">
      <div aria-hidden className="absolute border-[rgba(197,198,210,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container65 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-[154.2px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-heading font-bold justify-center leading-[0] left-0 not-italic text-[#001a4d] text-[24px] top-[16px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[33.6px]">Lord Overtone</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Home</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">About Us</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[#735c00] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Podcast</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Testimonies</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Gallery</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444650] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#001a4d] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Sign Up</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] py-[16px] relative size-full">
          <Container81 />
          <Container82 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(250,248,255,0.8)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[1280px]" data-name="TopNavBar">
      <div aria-hidden className="absolute border-[rgba(197,198,210,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container80 />
    </div>
  );
}

export default function TestimoniesLordOvertone() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Testimonies - Lord Overtone">
      <Main />
      <Footer />
      <PersistentAudioPlayer />
      <TopNavBar />
    </div>
  );
}