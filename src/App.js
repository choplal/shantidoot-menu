export default function App() {
  return (
    <div className="flex justify-center bg-sky-200 print:bg-white">
      
      <div className="w-[794px] min-h-[1123px] px-16 py-10 text-[15px] leading-7 text-black font-semibold print:text-black font-serif">

        {/* Royal Header */}
        <div className="text-center mb-10">

          {/* Curved Gradient Header */}
          <div
            className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700
                       text-white
                       rounded-b-[50px]
                       py-8
                       shadow-lg"
          >

            <h1 className="text-6xl tracking-[8px] font-extrabold drop-shadow-md">
              SHANTIDOOT
            </h1>

            <h2 className="text-2xl tracking-[5px] font-bold mt-2 opacity-95">
              RESTAURANT
            </h2>

            <p className="mt-3 text-lg font-semibold opacity-90">
              (शांतिदूत रेस्टोरेंट)
            </p>

          </div>

          {/* Info Section */}
          <div className="mt-5 space-y-2">

            <p className="text-gray-900 text-base font-semibold">
              Jabalpur Bypass Road, SH-22, Gadarwara (M.P.)
            </p>

            <p className="text-blue-900 text-lg font-bold">
              📞 9399110810
            </p>

            <div className="w-28 h-[2px] bg-blue-900 mx-auto"></div>

            <p className="text-indigo-900 text-base tracking-[3px] uppercase font-bold">
              Opening Time : 8:00 AM
            </p>

            <p className="text-indigo-900 text-base tracking-[3px] uppercase font-bold">
              Closing Time : 10:30 PM
            </p>

            <div className="w-28 h-[2px] bg-blue-900 mx-auto"></div>

          </div>
        </div>


       {/* Elegant Pricing Note */}
<div className="flex justify-center mb-16">
  <div className="px-8 py-3 rounded-full 
                  bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                  text-black 
                  text-sm 
                  font-bold 
                  tracking-[3px] 
                  shadow-md">

    PRICES SHOWN AS FULL / HALF • SINGLE PRICE = FULL ONLY

  </div>
</div>


        {/* Menu Grid */}
        <div className="columns-2 gap-20">

          <MenuSection title="THANDA GARAM">
            <Item name="TEA / BLACK TEA" price="20" />
            <Item name="HOT COFFEE" price="30" />
            <Item name="COLD COFFEE" price="90" />
            <Item name="COLD COFFEE WITH ICE CREAM" price="120" />
            <Item name="BUTTERMILK" price="35" />
            <Item name="LASSI" price="90" />
            <Item name="MINIRAL WATER" price= "20" />
            <Item name="COLD DRINK (750 ml)" price= "45" />
            <Item name="COLD DRINK (250 ml)" price= "25" />
            <Item name="FRESH LIME WATER" price= "35" />
            <Item name="FRESH LIME SODA" price= "45" />
            <Item name="SODA" price= "25" />
          </MenuSection>

          <MenuSection title="SNACKS">
            <Item name="FINGER CHIPS" price="90" />
            <Item name="VEG PAKODA" price="110" />
            <Item name="PANEER PAKODA" price="220" />
            <Item name="ONION PAKODA" price= "100" />
            <Item name="CHANA ROAST" price="140" />
            <Item name="PEANUT MASLALA" price= "130" />
            <Item name="PEANUT FRY" price= "110" />
            <Item name="PANEER TIKKA (8 PCS)" price="270" />
          </MenuSection>

         
          <MenuSection title="🌶 SPECIAL DISHES (SPICY)">
            <Item name="PANEER ANGARA" price="320" />
<Item name="KAJU ANGARA" price="320" />
<Item name="PANEER KOFTA ANGARA" price="320" />
<Item name="MUSHROOM ANGARA" price="320" />
<Item name="VEG KOFTA ANGARA" price="260" />
          </MenuSection>

                     <MenuSection title="ROTI">
            <Item name="PLAIN ROTI (TAWA/TANDOORI)"price="14"/>
            <Item name="BUTTER ROTI (TAWA/TANDOORI)" price="17" />
            <Item name="PLAIN NAAN" price="35" />
            <Item name="BUTTER NAAN" price="45" />
            <Item name="LACHHA PARATHA" price="40" />
            <Item name="GARLIC NAAN" price="70" />
            <Item name="PANEER KULCHA" price="100" />
            <Item name="ONION KULCHA" price="70" />
            <Item name="MISSI ROTI" price="40" />
            <Item name="STUFF KULCHA" price="80" />
          </MenuSection>

                   <MenuSection title="RICE">
            <Item name="PLAIN RICE" price="110 / 80" />
            <Item name="JEERA RICE" price="120 / 90" />
            <Item name="TAMATO RICE" price="130 / 90" />
            <Item name="VEG PULAO" price="180" />
            <Item name="VEG BIRYANI" price="190" />
            <Item name="KHICHADI" price="120 / 80" />
            <Item name="BUTTER KHICHADI" price="170 / 100" />
            <Item name="KAJU PULAO" price="230" />
            <Item name="LEMON RICE" price="170" />
            <Item name="PANEER PULAO" price="190" />
            <Item name="MUTTER PULAO" price="170" />
            <Item name="MASALA RICE" price="160 / 90" />
            <Item name="ONION RICE" price="130 / 90" />

          </MenuSection>

          <MenuSection title="SOUTH INDIAN">
            <Item name="PLAIN UTTAPAM" price= "70" />
            <Item name="IDLI FRY" price= "100" />
            <Item name="BUTTER MASALA DOSA" price= "110" />
            <Item name="PLAIN DOSA" price="80" />
            <Item name="MASALA DOSA" price="90" />
            <Item name="IDLI SAMBAR" price="90" />
            <Item name="ONION UTTAPAM" price="80" />
            <Item name="PANEER DOSA" price="120" />
          </MenuSection>

                    <MenuSection title="PANEER (MAIN)">
            <Item name="PANEER PUNJABI" price="260 / 140" />
            <Item name="PANEER KOLHAPURI" price="220" />
            <Item name="PANEER BUTTER MASALA" price= "240/130" />
            <Item name="PANEER SHAHI" price="240 / 130" />
            <Item name="PANEER DHABA" price="240 / 130" />
            <Item name="PANEER MUTTER" price="220 / 130" />
            <Item name="PANEER PALAK" price="210 / 130" />
            <Item name="KAJU CURRY" price="240 / 130" />
            <Item name="PANEER CORN" price="240 / 130" />
            <Item name="CORN PALAK" price="180 / 130" />
            <Item name="CHEESE BUTTER MASALA" price= "270/140" />
            <Item name="MUSHROOM PALAK" price="270 / 140" />
            <Item name="MUSHROOM MASALA" price="260 / 140" />
            <Item name="MUSHROOM MUTTER" price="260 / 130" />
            <Item name="MUSHROOM PANEER" price= "280" />
            <Item name="PANEER KOFTA" price="290" />
            <Item name="PANEER PASANDA" price="290" />
            <Item name="PANEER BHURJI" price="280" />
            <Item name="PANEER LABABDAR" price="280" />
            <Item name="PANEER HYDERABADI" price="280" />
            <Item name="PANEER CHATPATA" price="260" />
            <Item name="PANEER TAKATAK" price="260" />
            <Item name="PANEER METHI MALAI" price="260" />
            <Item name="PANEER TIKKA MASALA" price="290" />
            <Item name="PANEER JAIPURI" price="260" />
            <Item name="PANEER KADAI" price="260" />
            <Item name="PANEER MASALA" price="250 / 160" />
            <Item name="KAJU PANEER" price="290 / 160" />
          </MenuSection>
          
          <MenuSection title="BREAKFAST">
    <Item name="PLAIN PARATHA" price="30" />
    <Item name="ALOO PARATHA" price="55" />
    <Item name="GOBHI PARATHA" price="55" />
    <Item name="MOOLI PARATHA" price="55" />
    <Item name="PANEER PARATHA" price="120" />
    <Item name="CHOLA BHATURA" price="120" />
    <Item name="PURI SABJI" price="120" />
    <Item name="PARATHA WITH CURD (1 PC.)" price="90" />
</MenuSection>
         <MenuSection title="PAPAD">
    <Item name="PAPAD FRY" price="20" />
    <Item name="PAPAD ROAST" price="15" />
    <Item name="PAPAD MASALA" price="35" />
    <Item name="PAPAD KACHUMMER" price="60" />
</MenuSection>

<MenuSection title="SALAD">
    <Item name="GREEN SALAD" price="80" />
    <Item name="ONION SALAD" price="80" />
    <Item name="CUCUMBER SALAD" price="90" />
    <Item name="TOMATO SALAD" price="70" />
    <Item name="KACHUMBAR SALAD" price="90" />
</MenuSection>

<MenuSection title="SOUP">
    <Item name="TOMATO SOUP" price="90" />
    <Item name="HOT & SOUR SOUP" price="90" />
    <Item name="VEG MANCHOW SOUP" price="90" />
    <Item name="MUSHROOM SOUP" price="100" />
</MenuSection>

<MenuSection title="CHINESE">
    <Item name="VEG MOMO STEAM (8 PC)" price="140" />
    <Item name="VEG MOMO FRIED (8 PC)" price="160" />
    <Item name="VEG CHOWMEIN" price="130 / 90" />
    <Item name="VEG HAKKA NOODLES" price="140" />
    <Item name="VEG MANCHURIAN" price="160 / 90" />
    <Item name="VEG FRIRD RICE" price="160" />
    <Item name="CHANA CHILLY" price="170" />
    <Item name="VEG KOTHE" price="180" />
    <Item name="CHILLY PANEER" price="220" />
    <Item name="PANEER 65" price="230" />
    <Item name="HARA BHARA KABAB" price="220" />
    <Item name="CHILLY POTATO" price="190" />
    <Item name="CRISPY CORN" price="190" />
    <Item name="MUSHROOM CHILLY" price="220" />
</MenuSection>

          <MenuSection title="INDIAN VEG">
            <Item name="KADAI KOFTA" price="230" />
            <Item name="CHANA MASALA" price="170 / 90" />
            <Item name="VEG KOFTA" price="180" />
            <Item name="GOBI MUTTER" price="160 / 90" />
            <Item name="TOMATO CHUTNEY" price="160" />
            <Item name="METHI MUTTER MALAI" price="180 / 120" />
            <Item name="MALAI KOFTA" price="220" />
            <Item name="STUFFED TOMATO" price="190" />
            <Item name="STUFFED CAPSICUM" price="190" />
            <Item name="MIX VEG" price="180 / 110" />
            <Item name="BHINDI FRY" price="160 / 100" />
            <Item name="BHINDI KURKURE" price="170" />
            <Item name="BHINDI MASALA" price="170 / 110" />
            <Item name="SEV TOMATO" price="180 / 110" />
            <Item name="GOBI MASALA" price="160 / 90" />
            <Item name="ALOO GOBI" price="170 / 90" />
            <Item name="ALOO MUTTER" price="170 / 90" />
            <Item name="ALOO MUTTER TOMATO" price="170 / 90" />
            <Item name="ALOO JEERA" price="160 / 90" />
            <Item name="ALOO METHI MUTTER" price="170 / 90" />
            <Item name="ALOO CHOLE" price="190 / 100" />
            <Item name="ALOO DUM" price="190" />
            <Item name="ALOO METHI" price="170 / 90" />
            <Item name="MUTTER MASALA" price="180 / 100" />
            <Item name="SEV BHAJI" price="190" />
          </MenuSection>

          <MenuSection title="DAL">
            <Item name="DAL FRY" price="120 / 80" />
            <Item name="DAL TADKA" price="130 / 90" />
            <Item name="DAL BUTTER FRY" price="160/100" />
            <Item name="DAL SNACKS" price="160" />
          </MenuSection>
          <MenuSection title="DAHI & RAITA">
    <Item name="PLAIN DAHI" price="100 / 60" />
    <Item name="DAHI TADKA" price="110 / 70" />
    <Item name="BUNDI RAITA" price="100 / 60" />
    <Item name="VEG RAITA" price="100 / 60" />
    <Item name="CUCUMBER RAITA" price="90 / 50" />
          </MenuSection>

          <MenuSection title="SWEETS & DESSERTS">
    <Item name="RASGULLA (1PC)" price="20" />
    <Item name="GULABJAMUN (1PC)" price="20" />
</MenuSection>

 
   <MenuSection title="EXTRA ITEMS">
            <Item name="BUTTER CUBES" price="10" />
          </MenuSection>
          
 <MenuSection title="SPECIAL THALI">
  <Item name="PRICE" price="320" />
  <p className="text-sm text-blue-900 mt-3 leading-6 italic font-medium tracking-wide">
    INCLUDES: 4 BUTTER ROTI, PANEER DISH, SEASONAL VEG,
    DAL FRY, JEERA RICE, SALAD, PAPAD, RAITA, SWEET
  </p>
</MenuSection>

        </div>

<div className="break-inside-avoid flex justify-center mt-20 mb-16">

  <div className="relative w-[440px] aspect-square flex items-center justify-center">

    {/* Outer Medal */}
    <div
      className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-2xl"
      style={{
        clipPath:
          "polygon(50% 0%, 60% 8%, 72% 4%, 78% 14%, 90% 10%, 92% 22%, 100% 30%, 96% 42%, 100% 50%, 96% 58%, 100% 70%, 92% 78%, 90% 90%, 78% 86%, 72% 96%, 60% 92%, 50% 100%, 40% 92%, 28% 96%, 22% 86%, 10% 90%, 8% 78%, 0% 70%, 4% 58%, 0% 50%, 4% 42%, 0% 30%, 8% 22%, 10% 10%, 22% 14%, 28% 4%, 40% 8%)",
      }}
    ></div>

    {/* Inner Circle */}
    <div className="
      relative 
      w-[330px] 
      aspect-square 
      rounded-full 
      bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300
      border-[5px] border-yellow-800 
      shadow-inner
      flex flex-col items-center justify-center 
      text-center 
      px-8 py-8
    ">

      {/* Top Stars */}
      <div className="text-yellow-800 text-sm tracking-[6px] mb-2">
        ★ ★ ★ ★ ★
      </div>

      {/* Ribbon */}
      <div className="flex items-center justify-center shadow-md mb-3">
        <div className="bg-white text-yellow-700 font-bold tracking-[4px] px-4 py-1 text-xs">
          BEST
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold tracking-[4px] px-5 py-1 text-xs">
          SELLER
        </div>
      </div>

      {/* Middle Stars */}
      <div className="text-yellow-800 text-sm tracking-[6px] mb-3">
        ★ ★ ★ ★ ★
      </div>

      {/* Menu Items */}
      <div className="space-y-1 text-[#5a2e00] font-semibold text-[13px] leading-4">
        <p>★ PANEER ANGARA ★</p>
        <p>★ MUSHROOM ANGARA ★</p>
        <p>★ PANEER KOLHAPURI ★</p>
        <p>★ VEG MOMO (STEAM & FRIED) ★</p>
        <p>★ BUTTER PANEER MASALA ★</p>
        <p>★ DHABA PANEER ★</p>
      </div>

    </div>

  </div>
</div>

        {/* Stylish Elegant Footer */}
        <div className="mt-20 text-center">
          <div
            className="relative py-10 px-6 rounded-t-[50px] 
            bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 
            text-white shadow-xl"
          >
            <p className="text-lg italic font-medium tracking-wide">
              ऑर्डर देने के बाद भोजन तैयार होने में 20–30 मिनट का समय लगेगा
            </p>

            <p className="text-base mt-3 italic opacity-90">
              After placing your order, it will take 20–30 minutes to prepare
            </p>

            <div className="w-28 h-[2px] bg-white mx-auto my-6 opacity-70"></div>

            <p className="text-3xl font-bold tracking-[4px] font-serif">
              Thank You For Visiting
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function MenuSection({ title, children }) {
  return (
    <div className="break-inside-avoid mb-8">
      <h2 className="text-blue-900 text-2xl font-extrabold tracking-[4px] mb-6 relative uppercase">
        {title}
        <span className="block w-12 h-[2px] bg-yellow-600 mt-2"></span>
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Item({ name, price }) {
  return (
    <div
      className="flex justify-between items-center w-full text-gray-800 font-medium"
    >
      <div>{name}</div>
      <div className="font-semibold text-black">₹ {price}</div>
    </div>
  );
}