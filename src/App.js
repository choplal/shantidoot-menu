export default function App() {
  return (
    <div className="flex justify-center bg-black print:bg-black">
      <div className="w-[794px] min-h-[1123px] px-16 py-14 text-[14px] leading-7 text-white font-serif">

        {/* Royal Header */}
        <div className="text-center mb-12">
          <div className="h-[2px] bg-yellow-600 mb-6"></div>

          <h1 className="text-5xl tracking-[6px] font-bold text-yellow-500">
            SHANTIDOOT
          </h1>
          <h2 className="text-xl tracking-[4px] text-yellow-400 mt-2">
            RESTAURANT
          </h2>
          <p className="text-yellow-500 mt-3 text-lg">
            (शांतिदूत रेस्टोरेंट)
          </p>

          <p className="text-gray-400 text-sm mt-4">
            Jabalpur Bypass Road, SH-22, Gadarwara (M.P.)
          </p>
          <p className="text-gray-400 text-sm">
            📞 9399110810
          </p>

          <div className="mt-4 space-y-1">
  <div className="w-20 h-[1px] bg-yellow-600 mx-auto"></div>

  <p className="text-yellow-400 text-sm tracking-[3px] uppercase font-semibold">
    Opening Time : 8:00 AM
  </p>

  <p className="text-gray-300 text-sm tracking-[3px] uppercase">
    Closing Time : 10:30 PM
  </p>

  <div className="w-20 h-[1px] bg-yellow-600 mx-auto"></div>
</div>


          <div className="h-[2px] bg-yellow-600 mt-6"></div>
        </div>

        {/* Pricing Note */}
        <div className="text-center text-xs text-yellow-500 tracking-widest mb-14">
          PRICES SHOWN AS FULL / HALF • SINGLE PRICE = FULL ONLY
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
            <Item name="COLD DRINK (750 ml)" price= "50" />
            <Item name="COLD DRINK (200 ml)" price= "20" />
            <Item name="FRESH LIME WATER" price= "35" />
            <Item name="FRESH LIME SODA" price= "45" />
            <Item name="SODA" price= "25" />
          </MenuSection>

          <MenuSection title="SNACKS">
            <Item name="FINGER CHIPS" price="90" />
            <Item name="VEG PAKODA" price="110" />
            <Item name="PANEER PAKODA" price="180" />
            <Item name="ONION PAKODA" price= "100" />
            <Item name="CHANA ROAST" price="140" />
            <Item name="PEANUT MASLALA" price= "130" />
            <Item name="PEANUT FRY" price= "110" />
            <Item name="PANEER TIKKA (8 PCS)" price="270" />
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
          
          <MenuSection title="EXTRA ITEMS">
            <Item name="BUTTER CUBES" price="10" />
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

 <MenuSection title="🌶 SPECIAL DISHES (SPICY)">
            <Item name="PANEER ANGARA" price="320" />
<Item name="KAJU ANGARA" price="320" />
<Item name="PANEER KOFTA ANGARA" price="320" />
<Item name="MUSHROOM ANGARA" price="320" />
<Item name="VEG KOFTA ANGARA" price="260" />
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

<MenuSection title="SOUP">
    <Item name="TOMATO SOUP" price="90" />
    <Item name="HOT & SOUR SOUP" price="90" />
    <Item name="VEG MANCHOW SOUP" price="90" />
    <Item name="MUSHROOM SOUP" price="100" />
</MenuSection>

<MenuSection title="CHINESE">
    <Item name="VEG MOMOS (8 PC)" price="140" />
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
            <Item name="BHINDI MASALA" price="160 / 90" />
            <Item name="GOBI MUTTER" price="160 / 90" />
            <Item name="ALOO MUTTER" price="170 / 90" />
            <Item name="ALOO MUTTER TOMATO" price="170 / 90" />
            <Item name="TOMATO CHUTNEY" price="160" />
            <Item name="ALOO JEERA" price="160 / 90" />
            <Item name="METHI MUTTER MALAI" price="180 / 120" />
            <Item name="ALOO METHI MUTTER" price="170 / 90" />
            <Item name="MALAI KOFTA" price="220" />
            <Item name="STUFFED TOMATO" price="190" />
            <Item name="STUFFED CAPSICUM" price="190" />
            <Item name="MIX VEG" price="180 / 110" />
            <Item name="BHINDI FRY" price="160 / 100" />
            <Item name="BHINDI KURKURE" price="170" />
            <Item name="BHINDI MASALA" price="170 / 110" />
            <Item name="SEV TOMATO" price="180 / 110" />
            <Item name="GOBI MASALA" price="160 / 90" />
            <Item name="ALOO DUM" price="190" />
            <Item name="ALOO METHI" price="170 / 90" />
            <Item name="MUTTER MASALA" price="180 / 100" />
            <Item name="ALOO CHOLE" price="190 / 100" />
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

          <MenuSection title="SWEETS & DESSERTS">
    <Item name="RASGULLA (1PC)" price="20" />
    <Item name="GULABJAMUN (1PC)" price="20" />
</MenuSection>
          

          <MenuSection title="SPECIAL THALI">
            <Item name="PRICE" price="320" />
            <p className="text-xs text-gray-400 mt-3 leading-5">
              INCLUDES: 4 BUTTER ROTI, PANEER DISH, SEASONAL VEG,
              DAL FRY, JEERA RICE, SALAD, PAPAD, RAITA, SWEET
            </p>
          </MenuSection>
        </div>

        {/* Footer */}
       <div className="text-center mt-16 border-t border-yellow-600 pt-6 space-y-2">

  <p className="text-yellow-400 text-sm tracking-wide">
    ऑर्डर देने के बाद भोजन तैयार होने में 20–30 मिनट का समय लगेगा
  </p>

  <p className="text-gray-300 text-sm tracking-wide">
    After placing your order, it will take 20–30 minutes to prepare
  </p>

  <p className="text-yellow-500 text-sm tracking-[3px] uppercase font-semibold">
    Thank You For Visiting
  </p>

</div>
      </div>
    </div>
  );
}

function MenuSection({ title, children }) {
  return (
    <div className="break-inside-avoid mb-8">
      <h2 className="text-yellow-500 text-xl font-semibold tracking-[3px] mb-6 relative">
        {title}
        <span className="block w-12 h-[2px] bg-yellow-600 mt-2"></span>
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Item({ name, price }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%"
    }}>
      <div>{name}</div>
      <div>₹ {price}</div>
    </div>
  );
}

