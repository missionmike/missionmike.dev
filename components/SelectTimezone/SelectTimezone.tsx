import React, { ChangeEventHandler } from 'react';

const SelectTimezone = ({
  onChange = () => {
    return true;
  },
}: {
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <select name="timezone" id="timezone" defaultValue="-0" onChange={onChange ? onChange : null}>
      <option
        value="-12"
        data-timezone-id="International Date Line West"
        data-timezone-adjustment="GMT-12:00"
        data-timezone-region="001"
        data-dst="0"
      >
        (GMT-12:00) International Date Line West
      </option>
      <option
        value="-11"
        data-timezone-id="Pacific/Midway"
        data-timezone-adjustment="GMT-11:00"
        data-timezone-region="UM"
        data-dst="0"
      >
        (GMT-11:00) Pacific/Midway
      </option>
      <option
        value="-11"
        data-timezone-id="Pacific/Niue"
        data-timezone-adjustment="GMT-11:00"
        data-timezone-region="NU"
        data-dst="0"
      >
        (GMT-11:00) Pacific/Niue
      </option>
      <option
        value="-11"
        data-timezone-id="Pacific/Pago_Pago"
        data-timezone-adjustment="GMT-11:00"
        data-timezone-region="AS"
        data-dst="0"
      >
        (GMT-11:00) Pacific/Pago_Pago
      </option>
      <option
        value="-10"
        data-timezone-id="America/Adak"
        data-timezone-adjustment="GMT-10:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-10:00) America/Adak (supports DST)
      </option>
      <option
        value="-10"
        data-timezone-id="Pacific/Honolulu"
        data-timezone-adjustment="GMT-10:00"
        data-timezone-region="US"
        data-dst="0"
      >
        (GMT-10:00) Pacific/Honolulu
      </option>
      <option
        value="-10"
        data-timezone-id="Pacific/Rarotonga"
        data-timezone-adjustment="GMT-10:00"
        data-timezone-region="CK"
        data-dst="0"
      >
        (GMT-10:00) Pacific/Rarotonga
      </option>
      <option
        value="-10"
        data-timezone-id="Pacific/Tahiti"
        data-timezone-adjustment="GMT-10:00"
        data-timezone-region="PF"
        data-dst="0"
      >
        (GMT-10:00) Pacific/Tahiti
      </option>
      <option
        value="-9.5"
        data-timezone-id="Pacific/Marquesas"
        data-timezone-adjustment="GMT-09:30"
        data-timezone-region="PF"
        data-dst="0"
      >
        (GMT-09:30) Pacific/Marquesas
      </option>
      <option
        value="-9"
        data-timezone-id="America/Anchorage"
        data-timezone-adjustment="GMT-09:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-09:00) America/Anchorage (supports DST)
      </option>
      <option
        value="-9"
        data-timezone-id="America/Juneau"
        data-timezone-adjustment="GMT-09:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-09:00) America/Juneau (supports DST)
      </option>
      <option
        value="-9"
        data-timezone-id="America/Metlakatla"
        data-timezone-adjustment="GMT-09:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-09:00) America/Metlakatla (supports DST)
      </option>
      <option
        value="-9"
        data-timezone-id="America/Nome"
        data-timezone-adjustment="GMT-09:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-09:00) America/Nome (supports DST)
      </option>
      <option
        value="-9"
        data-timezone-id="America/Sitka"
        data-timezone-adjustment="GMT-09:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-09:00) America/Sitka (supports DST)
      </option>
      <option
        value="-9"
        data-timezone-id="America/Yakutat"
        data-timezone-adjustment="GMT-09:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-09:00) America/Yakutat (supports DST)
      </option>
      <option
        value="-9"
        data-timezone-id="Pacific/Gambier"
        data-timezone-adjustment="GMT-09:00"
        data-timezone-region="PF"
        data-dst="0"
      >
        (GMT-09:00) Pacific/Gambier
      </option>
      <option
        value="-8"
        data-timezone-id="America/Dawson"
        data-timezone-adjustment="GMT-08:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-08:00) America/Dawson (supports DST)
      </option>
      <option
        value="-8"
        data-timezone-id="America/Los_Angeles"
        data-timezone-adjustment="GMT-08:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-08:00) America/Los_Angeles (supports DST)
      </option>
      <option
        value="-8"
        data-timezone-id="America/Tijuana"
        data-timezone-adjustment="GMT-08:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-08:00) America/Tijuana
      </option>
      <option
        value="-8"
        data-timezone-id="America/Vancouver"
        data-timezone-adjustment="GMT-08:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-08:00) America/Vancouver (supports DST)
      </option>
      <option
        value="-8"
        data-timezone-id="America/Whitehorse"
        data-timezone-adjustment="GMT-08:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-08:00) America/Whitehorse (supports DST)
      </option>
      <option
        value="-8"
        data-timezone-id="Pacific/Pitcairn"
        data-timezone-adjustment="GMT-08:00"
        data-timezone-region="PN"
        data-dst="0"
      >
        (GMT-08:00) Pacific/Pitcairn
      </option>
      <option
        value="-7"
        data-timezone-id="America/Boise"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-07:00) America/Boise (supports DST)
      </option>
      <option
        value="-7"
        data-timezone-id="America/Cambridge_Bay"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-07:00) America/Cambridge_Bay (supports DST)
      </option>
      <option
        value="-7"
        data-timezone-id="America/Chihuahua"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-07:00) America/Chihuahua
      </option>
      <option
        value="-7"
        data-timezone-id="America/Creston"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="CA"
        data-dst="0"
      >
        (GMT-07:00) America/Creston
      </option>
      <option
        value="-7"
        data-timezone-id="America/Dawson_Creek"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="CA"
        data-dst="0"
      >
        (GMT-07:00) America/Dawson_Creek
      </option>
      <option
        value="-7"
        data-timezone-id="America/Denver"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-07:00) America/Denver (supports DST)
      </option>
      <option
        value="-7"
        data-timezone-id="America/Edmonton"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-07:00) America/Edmonton (supports DST)
      </option>
      <option
        value="-7"
        data-timezone-id="America/Fort_Nelson"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="CA"
        data-dst="0"
      >
        (GMT-07:00) America/Fort_Nelson
      </option>
      <option
        value="-7"
        data-timezone-id="America/Hermosillo"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-07:00) America/Hermosillo
      </option>
      <option
        value="-7"
        data-timezone-id="America/Inuvik"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-07:00) America/Inuvik (supports DST)
      </option>
      <option
        value="-7"
        data-timezone-id="America/Mazatlan"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-07:00) America/Mazatlan
      </option>
      <option
        value="-7"
        data-timezone-id="America/Ojinaga"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-07:00) America/Ojinaga
      </option>
      <option
        value="-7"
        data-timezone-id="America/Phoenix"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="US"
        data-dst="0"
      >
        (GMT-07:00) America/Phoenix
      </option>
      <option
        value="-7"
        data-timezone-id="America/Yellowknife"
        data-timezone-adjustment="GMT-07:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-07:00) America/Yellowknife (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Bahia_Banderas"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-06:00) America/Bahia_Banderas
      </option>
      <option
        value="-6"
        data-timezone-id="America/Belize"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="BZ"
        data-dst="0"
      >
        (GMT-06:00) America/Belize
      </option>
      <option
        value="-6"
        data-timezone-id="America/Chicago"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-06:00) America/Chicago (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Costa_Rica"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="CR"
        data-dst="0"
      >
        (GMT-06:00) America/Costa_Rica
      </option>
      <option
        value="-6"
        data-timezone-id="America/El_Salvador"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="SV"
        data-dst="0"
      >
        (GMT-06:00) America/El_Salvador
      </option>
      <option
        value="-6"
        data-timezone-id="America/Guatemala"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="GT"
        data-dst="0"
      >
        (GMT-06:00) America/Guatemala
      </option>
      <option
        value="-6"
        data-timezone-id="America/Indiana/Knox"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-06:00) America/Indiana/Knox (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Indiana/Tell_City"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-06:00) America/Indiana/Tell_City (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Managua"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="NI"
        data-dst="0"
      >
        (GMT-06:00) America/Managua
      </option>
      <option
        value="-6"
        data-timezone-id="America/Matamoros"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-06:00) America/Matamoros
      </option>
      <option
        value="-6"
        data-timezone-id="America/Menominee"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-06:00) America/Menominee (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Merida"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-06:00) America/Merida
      </option>
      <option
        value="-6"
        data-timezone-id="America/Mexico_City"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-06:00) America/Mexico_City
      </option>
      <option
        value="-6"
        data-timezone-id="America/Monterrey"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-06:00) America/Monterrey
      </option>
      <option
        value="-6"
        data-timezone-id="America/North_Dakota/Beulah"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-06:00) America/North_Dakota/Beulah (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/North_Dakota/Center"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-06:00) America/North_Dakota/Center (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/North_Dakota/New_Salem"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-06:00) America/North_Dakota/New_Salem (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Rainy_River"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-06:00) America/Rainy_River (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Rankin_Inlet"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-06:00) America/Rankin_Inlet (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Regina"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="CA"
        data-dst="0"
      >
        (GMT-06:00) America/Regina
      </option>
      <option
        value="-6"
        data-timezone-id="America/Resolute"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-06:00) America/Resolute (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="America/Swift_Current"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="CA"
        data-dst="0"
      >
        (GMT-06:00) America/Swift_Current
      </option>
      <option
        value="-6"
        data-timezone-id="America/Tegucigalpa"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="HN"
        data-dst="0"
      >
        (GMT-06:00) America/Tegucigalpa
      </option>
      <option
        value="-6"
        data-timezone-id="America/Winnipeg"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-06:00) America/Winnipeg (supports DST)
      </option>
      <option
        value="-6"
        data-timezone-id="Pacific/Galapagos"
        data-timezone-adjustment="GMT-06:00"
        data-timezone-region="EC"
        data-dst="0"
      >
        (GMT-06:00) Pacific/Galapagos
      </option>
      <option
        value="-5"
        data-timezone-id="America/Atikokan"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CA"
        data-dst="0"
      >
        (GMT-05:00) America/Atikokan
      </option>
      <option
        value="-5"
        data-timezone-id="America/Bogota"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CO"
        data-dst="0"
      >
        (GMT-05:00) America/Bogota
      </option>
      <option
        value="-5"
        data-timezone-id="America/Cancun"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="MX"
        data-dst="0"
      >
        (GMT-05:00) America/Cancun
      </option>
      <option
        value="-5"
        data-timezone-id="America/Cayman"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="KY"
        data-dst="0"
      >
        (GMT-05:00) America/Cayman
      </option>
      <option
        value="-5"
        data-timezone-id="America/Detroit"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Detroit (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Eirunepe"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-05:00) America/Eirunepe
      </option>
      <option
        value="-5"
        data-timezone-id="America/Grand_Turk"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="TC"
        data-dst="0"
      >
        (GMT-05:00) America/Grand_Turk
      </option>
      <option
        value="-5"
        data-timezone-id="America/Guayaquil"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="EC"
        data-dst="0"
      >
        (GMT-05:00) America/Guayaquil
      </option>
      <option
        value="-5"
        data-timezone-id="America/Havana"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CU"
        data-dst="0"
      >
        (GMT-05:00) America/Havana
      </option>
      <option
        value="-5"
        data-timezone-id="America/Indiana/Indianapolis"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Indiana/Indianapolis (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Indiana/Marengo"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Indiana/Marengo (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Indiana/Petersburg"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Indiana/Petersburg (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Indiana/Vevay"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Indiana/Vevay (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Indiana/Vincennes"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Indiana/Vincennes (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Indiana/Winamac"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Indiana/Winamac (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Iqaluit"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-05:00) America/Iqaluit (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Jamaica"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="JM"
        data-dst="0"
      >
        (GMT-05:00) America/Jamaica
      </option>
      <option
        value="-5"
        data-timezone-id="America/Kentucky/Louisville"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Kentucky/Louisville (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Kentucky/Monticello"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/Kentucky/Monticello (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Lima"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="PE"
        data-dst="0"
      >
        (GMT-05:00) America/Lima
      </option>
      <option
        value="-5"
        data-timezone-id="America/Nassau"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="BS"
        data-dst="0"
      >
        (GMT-05:00) America/Nassau
      </option>
      <option
        value="-5"
        data-timezone-id="America/New_York"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="US"
        data-dst="1"
      >
        (GMT-05:00) America/New_York (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Nipigon"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-05:00) America/Nipigon (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Panama"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="PA"
        data-dst="0"
      >
        (GMT-05:00) America/Panama
      </option>
      <option
        value="-5"
        data-timezone-id="America/Pangnirtung"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-05:00) America/Pangnirtung (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Port-au-Prince"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="HT"
        data-dst="0"
      >
        (GMT-05:00) America/Port-au-Prince
      </option>
      <option
        value="-5"
        data-timezone-id="America/Rio_Branco"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-05:00) America/Rio_Branco
      </option>
      <option
        value="-5"
        data-timezone-id="America/Thunder_Bay"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-05:00) America/Thunder_Bay (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="America/Toronto"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-05:00) America/Toronto (supports DST)
      </option>
      <option
        value="-5"
        data-timezone-id="Pacific/Easter"
        data-timezone-adjustment="GMT-05:00"
        data-timezone-region="CL"
        data-dst="0"
      >
        (GMT-05:00) Pacific/Easter
      </option>
      <option
        value="-4"
        data-timezone-id="America/Anguilla"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="AI"
        data-dst="0"
      >
        (GMT-04:00) America/Anguilla
      </option>
      <option
        value="-4"
        data-timezone-id="America/Antigua"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="AG"
        data-dst="0"
      >
        (GMT-04:00) America/Antigua
      </option>
      <option
        value="-4"
        data-timezone-id="America/Aruba"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="AW"
        data-dst="0"
      >
        (GMT-04:00) America/Aruba
      </option>
      <option
        value="-4"
        data-timezone-id="America/Barbados"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BB"
        data-dst="0"
      >
        (GMT-04:00) America/Barbados
      </option>
      <option
        value="-4"
        data-timezone-id="America/Blanc-Sablon"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="CA"
        data-dst="0"
      >
        (GMT-04:00) America/Blanc-Sablon
      </option>
      <option
        value="-4"
        data-timezone-id="America/Boa_Vista"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-04:00) America/Boa_Vista
      </option>
      <option
        value="-4"
        data-timezone-id="America/Campo_Grande"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-04:00) America/Campo_Grande
      </option>
      <option
        value="-4"
        data-timezone-id="America/Caracas"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="VE"
        data-dst="0"
      >
        (GMT-04:00) America/Caracas
      </option>
      <option
        value="-4"
        data-timezone-id="America/Cuiaba"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-04:00) America/Cuiaba
      </option>
      <option
        value="-4"
        data-timezone-id="America/Curacao"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="CW"
        data-dst="0"
      >
        (GMT-04:00) America/Curacao
      </option>
      <option
        value="-4"
        data-timezone-id="America/Dominica"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="DM"
        data-dst="0"
      >
        (GMT-04:00) America/Dominica
      </option>
      <option
        value="-4"
        data-timezone-id="America/Glace_Bay"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-04:00) America/Glace_Bay (supports DST)
      </option>
      <option
        value="-4"
        data-timezone-id="America/Goose_Bay"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-04:00) America/Goose_Bay (supports DST)
      </option>
      <option
        value="-4"
        data-timezone-id="America/Grenada"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="GD"
        data-dst="0"
      >
        (GMT-04:00) America/Grenada
      </option>
      <option
        value="-4"
        data-timezone-id="America/Guadeloupe"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="GP"
        data-dst="0"
      >
        (GMT-04:00) America/Guadeloupe
      </option>
      <option
        value="-4"
        data-timezone-id="America/Guyana"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="GY"
        data-dst="0"
      >
        (GMT-04:00) America/Guyana
      </option>
      <option
        value="-4"
        data-timezone-id="America/Halifax"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-04:00) America/Halifax (supports DST)
      </option>
      <option
        value="-4"
        data-timezone-id="America/Kralendijk"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BQ"
        data-dst="0"
      >
        (GMT-04:00) America/Kralendijk
      </option>
      <option
        value="-4"
        data-timezone-id="America/La_Paz"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BO"
        data-dst="0"
      >
        (GMT-04:00) America/La_Paz
      </option>
      <option
        value="-4"
        data-timezone-id="America/Lower_Princes"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="SX"
        data-dst="0"
      >
        (GMT-04:00) America/Lower_Princes
      </option>
      <option
        value="-4"
        data-timezone-id="America/Manaus"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-04:00) America/Manaus
      </option>
      <option
        value="-4"
        data-timezone-id="America/Marigot"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="MF"
        data-dst="0"
      >
        (GMT-04:00) America/Marigot
      </option>
      <option
        value="-4"
        data-timezone-id="America/Martinique"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="MQ"
        data-dst="0"
      >
        (GMT-04:00) America/Martinique
      </option>
      <option
        value="-4"
        data-timezone-id="America/Moncton"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-04:00) America/Moncton (supports DST)
      </option>
      <option
        value="-4"
        data-timezone-id="America/Montserrat"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="MS"
        data-dst="0"
      >
        (GMT-04:00) America/Montserrat
      </option>
      <option
        value="-4"
        data-timezone-id="America/Port_of_Spain"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="TT"
        data-dst="0"
      >
        (GMT-04:00) America/Port_of_Spain
      </option>
      <option
        value="-4"
        data-timezone-id="America/Porto_Velho"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-04:00) America/Porto_Velho
      </option>
      <option
        value="-4"
        data-timezone-id="America/Puerto_Rico"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="PR"
        data-dst="0"
      >
        (GMT-04:00) America/Puerto_Rico
      </option>
      <option
        value="-4"
        data-timezone-id="America/Santo_Domingo"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="DO"
        data-dst="0"
      >
        (GMT-04:00) America/Santo_Domingo
      </option>
      <option
        value="-4"
        data-timezone-id="America/St_Barthelemy"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BL"
        data-dst="0"
      >
        (GMT-04:00) America/St_Barthelemy
      </option>
      <option
        value="-4"
        data-timezone-id="America/St_Kitts"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="KN"
        data-dst="0"
      >
        (GMT-04:00) America/St_Kitts
      </option>
      <option
        value="-4"
        data-timezone-id="America/St_Lucia"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="LC"
        data-dst="0"
      >
        (GMT-04:00) America/St_Lucia
      </option>
      <option
        value="-4"
        data-timezone-id="America/St_Thomas"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="VI"
        data-dst="0"
      >
        (GMT-04:00) America/St_Thomas
      </option>
      <option
        value="-4"
        data-timezone-id="America/St_Vincent"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="VC"
        data-dst="0"
      >
        (GMT-04:00) America/St_Vincent
      </option>
      <option
        value="-4"
        data-timezone-id="America/Thule"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="GL"
        data-dst="0"
      >
        (GMT-04:00) America/Thule
      </option>
      <option
        value="-4"
        data-timezone-id="America/Tortola"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="VG"
        data-dst="0"
      >
        (GMT-04:00) America/Tortola
      </option>
      <option
        value="-4"
        data-timezone-id="Atlantic/Bermuda"
        data-timezone-adjustment="GMT-04:00"
        data-timezone-region="BM"
        data-dst="0"
      >
        (GMT-04:00) Atlantic/Bermuda
      </option>
      <option
        value="-3.5"
        data-timezone-id="America/St_Johns"
        data-timezone-adjustment="GMT-03:30"
        data-timezone-region="CA"
        data-dst="1"
      >
        (GMT-03:30) America/St_Johns (supports DST)
      </option>
      <option
        value="-3"
        data-timezone-id="America/Araguaina"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Araguaina
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Buenos_Aires"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Buenos_Aires
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Catamarca"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Catamarca
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Cordoba"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Cordoba
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Jujuy"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Jujuy
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/La_Rioja"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/La_Rioja
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Mendoza"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Mendoza
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Rio_Gallegos"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Rio_Gallegos
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Salta"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Salta
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/San_Juan"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/San_Juan
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/San_Luis"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/San_Luis
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Tucuman"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Tucuman
      </option>
      <option
        value="-3"
        data-timezone-id="America/Argentina/Ushuaia"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AR"
        data-dst="0"
      >
        (GMT-03:00) America/Argentina/Ushuaia
      </option>
      <option
        value="-3"
        data-timezone-id="America/Asuncion"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="PY"
        data-dst="0"
      >
        (GMT-03:00) America/Asuncion
      </option>
      <option
        value="-3"
        data-timezone-id="America/Bahia"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Bahia
      </option>
      <option
        value="-3"
        data-timezone-id="America/Belem"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Belem
      </option>
      <option
        value="-3"
        data-timezone-id="America/Cayenne"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="GF"
        data-dst="0"
      >
        (GMT-03:00) America/Cayenne
      </option>
      <option
        value="-3"
        data-timezone-id="America/Fortaleza"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Fortaleza
      </option>
      <option
        value="-3"
        data-timezone-id="America/Maceio"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Maceio
      </option>
      <option
        value="-3"
        data-timezone-id="America/Miquelon"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="PM"
        data-dst="0"
      >
        (GMT-03:00) America/Miquelon
      </option>
      <option
        value="-3"
        data-timezone-id="America/Montevideo"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="UY"
        data-dst="0"
      >
        (GMT-03:00) America/Montevideo
      </option>
      <option
        value="-3"
        data-timezone-id="America/Nuuk"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region=""
        data-dst="0"
      >
        (GMT-03:00) America/Nuuk
      </option>
      <option
        value="-3"
        data-timezone-id="America/Paramaribo"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="SR"
        data-dst="0"
      >
        (GMT-03:00) America/Paramaribo
      </option>
      <option
        value="-3"
        data-timezone-id="America/Punta_Arenas"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="CL"
        data-dst="0"
      >
        (GMT-03:00) America/Punta_Arenas
      </option>
      <option
        value="-3"
        data-timezone-id="America/Recife"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Recife
      </option>
      <option
        value="-3"
        data-timezone-id="America/Santarem"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Santarem
      </option>
      <option
        value="-3"
        data-timezone-id="America/Santiago"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="CL"
        data-dst="0"
      >
        (GMT-03:00) America/Santiago
      </option>
      <option
        value="-3"
        data-timezone-id="America/Sao_Paulo"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-03:00) America/Sao_Paulo
      </option>
      <option
        value="-3"
        data-timezone-id="Antarctica/Palmer"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT-03:00) Antarctica/Palmer
      </option>
      <option
        value="-3"
        data-timezone-id="Antarctica/Rothera"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT-03:00) Antarctica/Rothera
      </option>
      <option
        value="-3"
        data-timezone-id="Atlantic/Stanley"
        data-timezone-adjustment="GMT-03:00"
        data-timezone-region="FK"
        data-dst="0"
      >
        (GMT-03:00) Atlantic/Stanley
      </option>
      <option
        value="-2"
        data-timezone-id="America/Noronha"
        data-timezone-adjustment="GMT-02:00"
        data-timezone-region="BR"
        data-dst="0"
      >
        (GMT-02:00) America/Noronha
      </option>
      <option
        value="-2"
        data-timezone-id="Atlantic/South_Georgia"
        data-timezone-adjustment="GMT-02:00"
        data-timezone-region="GS"
        data-dst="0"
      >
        (GMT-02:00) Atlantic/South_Georgia
      </option>
      <option
        value="-1"
        data-timezone-id="America/Scoresbysund"
        data-timezone-adjustment="GMT-01:00"
        data-timezone-region="GL"
        data-dst="0"
      >
        (GMT-01:00) America/Scoresbysund
      </option>
      <option
        value="-1"
        data-timezone-id="Atlantic/Azores"
        data-timezone-adjustment="GMT-01:00"
        data-timezone-region="PT"
        data-dst="0"
      >
        (GMT-01:00) Atlantic/Azores
      </option>
      <option
        value="-1"
        data-timezone-id="Atlantic/Cape_Verde"
        data-timezone-adjustment="GMT-01:00"
        data-timezone-region="CV"
        data-dst="0"
      >
        (GMT-01:00) Atlantic/Cape_Verde
      </option>
      <option
        value="-0"
        data-timezone-id="UTC"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="001"
        data-dst="0"
      >
        (GMT-00:00) GMT / UTC
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Abidjan"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="CI"
        data-dst="0"
      >
        (GMT-00:00) Africa/Abidjan
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Accra"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="GH"
        data-dst="0"
      >
        (GMT-00:00) Africa/Accra
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Bamako"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="ML"
        data-dst="0"
      >
        (GMT-00:00) Africa/Bamako
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Banjul"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="GM"
        data-dst="0"
      >
        (GMT-00:00) Africa/Banjul
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Bissau"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="GW"
        data-dst="0"
      >
        (GMT-00:00) Africa/Bissau
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Conakry"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="GN"
        data-dst="0"
      >
        (GMT-00:00) Africa/Conakry
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Dakar"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="SN"
        data-dst="0"
      >
        (GMT-00:00) Africa/Dakar
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Freetown"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="SL"
        data-dst="0"
      >
        (GMT-00:00) Africa/Freetown
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Lome"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="TG"
        data-dst="0"
      >
        (GMT-00:00) Africa/Lome
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Monrovia"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="LR"
        data-dst="0"
      >
        (GMT-00:00) Africa/Monrovia
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Nouakchott"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="MR"
        data-dst="0"
      >
        (GMT-00:00) Africa/Nouakchott
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Ouagadougou"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="BF"
        data-dst="0"
      >
        (GMT-00:00) Africa/Ouagadougou
      </option>
      <option
        value="-0"
        data-timezone-id="Africa/Sao_Tome"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="ST"
        data-dst="0"
      >
        (GMT-00:00) Africa/Sao_Tome
      </option>
      <option
        value="-0"
        data-timezone-id="America/Danmarkshavn"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="GL"
        data-dst="0"
      >
        (GMT-00:00) America/Danmarkshavn
      </option>
      <option
        value="-0"
        data-timezone-id="Antarctica/Troll"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT-00:00) Antarctica/Troll
      </option>
      <option
        value="-0"
        data-timezone-id="Atlantic/Canary"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="ES"
        data-dst="0"
      >
        (GMT-00:00) Atlantic/Canary
      </option>
      <option
        value="-0"
        data-timezone-id="Atlantic/Faroe"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="FO"
        data-dst="0"
      >
        (GMT-00:00) Atlantic/Faroe
      </option>
      <option
        value="-0"
        data-timezone-id="Atlantic/Madeira"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="PT"
        data-dst="0"
      >
        (GMT-00:00) Atlantic/Madeira
      </option>
      <option
        value="-0"
        data-timezone-id="Atlantic/Reykjavik"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="IS"
        data-dst="0"
      >
        (GMT-00:00) Atlantic/Reykjavik
      </option>
      <option
        value="-0"
        data-timezone-id="Atlantic/St_Helena"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="SH"
        data-dst="0"
      >
        (GMT-00:00) Atlantic/St_Helena
      </option>
      <option
        value="-0"
        data-timezone-id="Europe/Dublin"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="IE"
        data-dst="0"
      >
        (GMT-00:00) Europe/Dublin
      </option>
      <option
        value="-0"
        data-timezone-id="Europe/Guernsey"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="GG"
        data-dst="0"
      >
        (GMT-00:00) Europe/Guernsey
      </option>
      <option
        value="-0"
        data-timezone-id="Europe/Isle_of_Man"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="IM"
        data-dst="0"
      >
        (GMT-00:00) Europe/Isle_of_Man
      </option>
      <option
        value="-0"
        data-timezone-id="Europe/Jersey"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="JE"
        data-dst="0"
      >
        (GMT-00:00) Europe/Jersey
      </option>
      <option
        value="-0"
        data-timezone-id="Europe/Lisbon"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="PT"
        data-dst="0"
      >
        (GMT-00:00) Europe/Lisbon
      </option>
      <option
        value="-0"
        data-timezone-id="Europe/London"
        data-timezone-adjustment="GMT-00:00"
        data-timezone-region="GB"
        data-dst="0"
      >
        (GMT-00:00) Europe/London
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Algiers"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="DZ"
        data-dst="0"
      >
        (GMT+01:00) Africa/Algiers
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Bangui"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="CF"
        data-dst="0"
      >
        (GMT+01:00) Africa/Bangui
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Brazzaville"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="CG"
        data-dst="0"
      >
        (GMT+01:00) Africa/Brazzaville
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Casablanca"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="MA"
        data-dst="0"
      >
        (GMT+01:00) Africa/Casablanca
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Ceuta"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="ES"
        data-dst="0"
      >
        (GMT+01:00) Africa/Ceuta
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Douala"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="CM"
        data-dst="0"
      >
        (GMT+01:00) Africa/Douala
      </option>
      <option
        value="1"
        data-timezone-id="Africa/El_Aaiun"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="EH"
        data-dst="0"
      >
        (GMT+01:00) Africa/El_Aaiun
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Kinshasa"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="CD"
        data-dst="0"
      >
        (GMT+01:00) Africa/Kinshasa
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Lagos"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="NG"
        data-dst="0"
      >
        (GMT+01:00) Africa/Lagos
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Libreville"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="GA"
        data-dst="0"
      >
        (GMT+01:00) Africa/Libreville
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Luanda"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="AO"
        data-dst="0"
      >
        (GMT+01:00) Africa/Luanda
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Malabo"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="GQ"
        data-dst="0"
      >
        (GMT+01:00) Africa/Malabo
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Ndjamena"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="TD"
        data-dst="0"
      >
        (GMT+01:00) Africa/Ndjamena
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Niamey"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="NE"
        data-dst="0"
      >
        (GMT+01:00) Africa/Niamey
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Porto-Novo"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="BJ"
        data-dst="0"
      >
        (GMT+01:00) Africa/Porto-Novo
      </option>
      <option
        value="1"
        data-timezone-id="Africa/Tunis"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="TN"
        data-dst="0"
      >
        (GMT+01:00) Africa/Tunis
      </option>
      <option
        value="1"
        data-timezone-id="Arctic/Longyearbyen"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="SJ"
        data-dst="0"
      >
        (GMT+01:00) Arctic/Longyearbyen
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Amsterdam"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="NL"
        data-dst="0"
      >
        (GMT+01:00) Europe/Amsterdam
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Andorra"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="AD"
        data-dst="0"
      >
        (GMT+01:00) Europe/Andorra
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Belgrade"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="RS"
        data-dst="0"
      >
        (GMT+01:00) Europe/Belgrade
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Berlin"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="DE"
        data-dst="0"
      >
        (GMT+01:00) Europe/Berlin
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Bratislava"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="SK"
        data-dst="0"
      >
        (GMT+01:00) Europe/Bratislava
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Brussels"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="BE"
        data-dst="0"
      >
        (GMT+01:00) Europe/Brussels
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Budapest"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="HU"
        data-dst="0"
      >
        (GMT+01:00) Europe/Budapest
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Busingen"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="DE"
        data-dst="0"
      >
        (GMT+01:00) Europe/Busingen
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Copenhagen"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="DK"
        data-dst="0"
      >
        (GMT+01:00) Europe/Copenhagen
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Gibraltar"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="GI"
        data-dst="0"
      >
        (GMT+01:00) Europe/Gibraltar
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Ljubljana"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="SI"
        data-dst="0"
      >
        (GMT+01:00) Europe/Ljubljana
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Luxembourg"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="LU"
        data-dst="0"
      >
        (GMT+01:00) Europe/Luxembourg
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Madrid"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="ES"
        data-dst="0"
      >
        (GMT+01:00) Europe/Madrid
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Malta"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="MT"
        data-dst="0"
      >
        (GMT+01:00) Europe/Malta
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Monaco"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="MC"
        data-dst="0"
      >
        (GMT+01:00) Europe/Monaco
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Oslo"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="NO"
        data-dst="0"
      >
        (GMT+01:00) Europe/Oslo
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Paris"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="FR"
        data-dst="0"
      >
        (GMT+01:00) Europe/Paris
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Podgorica"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="ME"
        data-dst="0"
      >
        (GMT+01:00) Europe/Podgorica
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Prague"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="CZ"
        data-dst="0"
      >
        (GMT+01:00) Europe/Prague
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Rome"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="IT"
        data-dst="0"
      >
        (GMT+01:00) Europe/Rome
      </option>
      <option
        value="1"
        data-timezone-id="Europe/San_Marino"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="SM"
        data-dst="0"
      >
        (GMT+01:00) Europe/San_Marino
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Sarajevo"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="BA"
        data-dst="0"
      >
        (GMT+01:00) Europe/Sarajevo
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Skopje"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="MK"
        data-dst="0"
      >
        (GMT+01:00) Europe/Skopje
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Stockholm"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="SE"
        data-dst="0"
      >
        (GMT+01:00) Europe/Stockholm
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Tirane"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="AL"
        data-dst="0"
      >
        (GMT+01:00) Europe/Tirane
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Vaduz"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="LI"
        data-dst="0"
      >
        (GMT+01:00) Europe/Vaduz
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Vatican"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="VA"
        data-dst="0"
      >
        (GMT+01:00) Europe/Vatican
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Vienna"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="AT"
        data-dst="0"
      >
        (GMT+01:00) Europe/Vienna
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Warsaw"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="PL"
        data-dst="0"
      >
        (GMT+01:00) Europe/Warsaw
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Zagreb"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="HR"
        data-dst="0"
      >
        (GMT+01:00) Europe/Zagreb
      </option>
      <option
        value="1"
        data-timezone-id="Europe/Zurich"
        data-timezone-adjustment="GMT+01:00"
        data-timezone-region="CH"
        data-dst="0"
      >
        (GMT+01:00) Europe/Zurich
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Blantyre"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="MW"
        data-dst="0"
      >
        (GMT+02:00) Africa/Blantyre
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Bujumbura"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="BI"
        data-dst="0"
      >
        (GMT+02:00) Africa/Bujumbura
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Cairo"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="EG"
        data-dst="0"
      >
        (GMT+02:00) Africa/Cairo
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Gaborone"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="BW"
        data-dst="0"
      >
        (GMT+02:00) Africa/Gaborone
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Harare"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="ZW"
        data-dst="0"
      >
        (GMT+02:00) Africa/Harare
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Johannesburg"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="ZA"
        data-dst="0"
      >
        (GMT+02:00) Africa/Johannesburg
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Khartoum"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="SD"
        data-dst="0"
      >
        (GMT+02:00) Africa/Khartoum
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Kigali"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="RW"
        data-dst="0"
      >
        (GMT+02:00) Africa/Kigali
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Lubumbashi"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="CD"
        data-dst="0"
      >
        (GMT+02:00) Africa/Lubumbashi
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Lusaka"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="ZM"
        data-dst="0"
      >
        (GMT+02:00) Africa/Lusaka
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Maputo"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="MZ"
        data-dst="0"
      >
        (GMT+02:00) Africa/Maputo
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Maseru"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="LS"
        data-dst="0"
      >
        (GMT+02:00) Africa/Maseru
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Mbabane"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="SZ"
        data-dst="0"
      >
        (GMT+02:00) Africa/Mbabane
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Tripoli"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="LY"
        data-dst="0"
      >
        (GMT+02:00) Africa/Tripoli
      </option>
      <option
        value="2"
        data-timezone-id="Africa/Windhoek"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="NA"
        data-dst="0"
      >
        (GMT+02:00) Africa/Windhoek
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Amman"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="JO"
        data-dst="0"
      >
        (GMT+02:00) Asia/Amman
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Beirut"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="LB"
        data-dst="0"
      >
        (GMT+02:00) Asia/Beirut
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Damascus"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="SY"
        data-dst="0"
      >
        (GMT+02:00) Asia/Damascus
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Famagusta"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="CY"
        data-dst="0"
      >
        (GMT+02:00) Asia/Famagusta
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Gaza"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="PS"
        data-dst="0"
      >
        (GMT+02:00) Asia/Gaza
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Hebron"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="PS"
        data-dst="0"
      >
        (GMT+02:00) Asia/Hebron
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Jerusalem"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="IL"
        data-dst="0"
      >
        (GMT+02:00) Asia/Jerusalem
      </option>
      <option
        value="2"
        data-timezone-id="Asia/Nicosia"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="CY"
        data-dst="0"
      >
        (GMT+02:00) Asia/Nicosia
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Athens"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="GR"
        data-dst="0"
      >
        (GMT+02:00) Europe/Athens
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Bucharest"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="RO"
        data-dst="0"
      >
        (GMT+02:00) Europe/Bucharest
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Chisinau"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="MD"
        data-dst="0"
      >
        (GMT+02:00) Europe/Chisinau
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Helsinki"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="FI"
        data-dst="0"
      >
        (GMT+02:00) Europe/Helsinki
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Kaliningrad"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+02:00) Europe/Kaliningrad
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Kiev"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="UA"
        data-dst="0"
      >
        (GMT+02:00) Europe/Kiev
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Mariehamn"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="AX"
        data-dst="0"
      >
        (GMT+02:00) Europe/Mariehamn
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Riga"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="LV"
        data-dst="0"
      >
        (GMT+02:00) Europe/Riga
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Sofia"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="BG"
        data-dst="0"
      >
        (GMT+02:00) Europe/Sofia
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Tallinn"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="EE"
        data-dst="0"
      >
        (GMT+02:00) Europe/Tallinn
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Uzhgorod"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="UA"
        data-dst="0"
      >
        (GMT+02:00) Europe/Uzhgorod
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Vilnius"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="LT"
        data-dst="0"
      >
        (GMT+02:00) Europe/Vilnius
      </option>
      <option
        value="2"
        data-timezone-id="Europe/Zaporozhye"
        data-timezone-adjustment="GMT+02:00"
        data-timezone-region="UA"
        data-dst="0"
      >
        (GMT+02:00) Europe/Zaporozhye
      </option>
      <option
        value="3.5"
        data-timezone-id="Asia/Tehran"
        data-timezone-adjustment="GMT+03:30"
        data-timezone-region="IR"
        data-dst="0"
      >
        (GMT+03:30) Asia/Tehran
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Addis_Ababa"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="ET"
        data-dst="0"
      >
        (GMT+03:00) Africa/Addis_Ababa
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Asmara"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="ER"
        data-dst="0"
      >
        (GMT+03:00) Africa/Asmara
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Dar_es_Salaam"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="TZ"
        data-dst="0"
      >
        (GMT+03:00) Africa/Dar_es_Salaam
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Djibouti"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="DJ"
        data-dst="0"
      >
        (GMT+03:00) Africa/Djibouti
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Juba"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="SS"
        data-dst="0"
      >
        (GMT+03:00) Africa/Juba
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Kampala"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="UG"
        data-dst="0"
      >
        (GMT+03:00) Africa/Kampala
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Mogadishu"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="SO"
        data-dst="0"
      >
        (GMT+03:00) Africa/Mogadishu
      </option>
      <option
        value="3"
        data-timezone-id="Africa/Nairobi"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="KE"
        data-dst="0"
      >
        (GMT+03:00) Africa/Nairobi
      </option>
      <option
        value="3"
        data-timezone-id="Antarctica/Syowa"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT+03:00) Antarctica/Syowa
      </option>
      <option
        value="3"
        data-timezone-id="Asia/Aden"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="YE"
        data-dst="0"
      >
        (GMT+03:00) Asia/Aden
      </option>
      <option
        value="3"
        data-timezone-id="Asia/Baghdad"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="IQ"
        data-dst="0"
      >
        (GMT+03:00) Asia/Baghdad
      </option>
      <option
        value="3"
        data-timezone-id="Asia/Bahrain"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="BH"
        data-dst="0"
      >
        (GMT+03:00) Asia/Bahrain
      </option>
      <option
        value="3"
        data-timezone-id="Asia/Kuwait"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="KW"
        data-dst="0"
      >
        (GMT+03:00) Asia/Kuwait
      </option>
      <option
        value="3"
        data-timezone-id="Asia/Qatar"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="QA"
        data-dst="0"
      >
        (GMT+03:00) Asia/Qatar
      </option>
      <option
        value="3"
        data-timezone-id="Asia/Riyadh"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="SA"
        data-dst="0"
      >
        (GMT+03:00) Asia/Riyadh
      </option>
      <option
        value="3"
        data-timezone-id="Europe/Istanbul"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="TR"
        data-dst="0"
      >
        (GMT+03:00) Europe/Istanbul
      </option>
      <option
        value="3"
        data-timezone-id="Europe/Kirov"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+03:00) Europe/Kirov
      </option>
      <option
        value="3"
        data-timezone-id="Europe/Minsk"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="BY"
        data-dst="0"
      >
        (GMT+03:00) Europe/Minsk
      </option>
      <option
        value="3"
        data-timezone-id="Europe/Moscow"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+03:00) Europe/Moscow
      </option>
      <option
        value="3"
        data-timezone-id="Europe/Simferopol"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="UA"
        data-dst="0"
      >
        (GMT+03:00) Europe/Simferopol
      </option>
      <option
        value="3"
        data-timezone-id="Indian/Antananarivo"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="MG"
        data-dst="0"
      >
        (GMT+03:00) Indian/Antananarivo
      </option>
      <option
        value="3"
        data-timezone-id="Indian/Comoro"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="KM"
        data-dst="0"
      >
        (GMT+03:00) Indian/Comoro
      </option>
      <option
        value="3"
        data-timezone-id="Indian/Mayotte"
        data-timezone-adjustment="GMT+03:00"
        data-timezone-region="YT"
        data-dst="0"
      >
        (GMT+03:00) Indian/Mayotte
      </option>
      <option
        value="4"
        data-timezone-id="Asia/Baku"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="AZ"
        data-dst="0"
      >
        (GMT+04:00) Asia/Baku
      </option>
      <option
        value="4"
        data-timezone-id="Asia/Dubai"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="AE"
        data-dst="0"
      >
        (GMT+04:00) Asia/Dubai
      </option>
      <option
        value="4"
        data-timezone-id="Asia/Muscat"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="OM"
        data-dst="0"
      >
        (GMT+04:00) Asia/Muscat
      </option>
      <option
        value="4"
        data-timezone-id="Asia/Tbilisi"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="GE"
        data-dst="0"
      >
        (GMT+04:00) Asia/Tbilisi
      </option>
      <option
        value="4"
        data-timezone-id="Asia/Yerevan"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="AM"
        data-dst="0"
      >
        (GMT+04:00) Asia/Yerevan
      </option>
      <option
        value="4"
        data-timezone-id="Europe/Astrakhan"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+04:00) Europe/Astrakhan
      </option>
      <option
        value="4"
        data-timezone-id="Europe/Samara"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+04:00) Europe/Samara
      </option>
      <option
        value="4"
        data-timezone-id="Europe/Saratov"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+04:00) Europe/Saratov
      </option>
      <option
        value="4"
        data-timezone-id="Europe/Ulyanovsk"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+04:00) Europe/Ulyanovsk
      </option>
      <option
        value="4"
        data-timezone-id="Europe/Volgograd"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+04:00) Europe/Volgograd
      </option>
      <option
        value="4"
        data-timezone-id="Indian/Mahe"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="SC"
        data-dst="0"
      >
        (GMT+04:00) Indian/Mahe
      </option>
      <option
        value="4"
        data-timezone-id="Indian/Mauritius"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="MU"
        data-dst="0"
      >
        (GMT+04:00) Indian/Mauritius
      </option>
      <option
        value="4"
        data-timezone-id="Indian/Reunion"
        data-timezone-adjustment="GMT+04:00"
        data-timezone-region="RE"
        data-dst="0"
      >
        (GMT+04:00) Indian/Reunion
      </option>
      <option
        value="4.5"
        data-timezone-id="Asia/Kabul"
        data-timezone-adjustment="GMT+04:30"
        data-timezone-region="AF"
        data-dst="0"
      >
        (GMT+04:30) Asia/Kabul
      </option>
      <option
        value="5.75"
        data-timezone-id="Asia/Kathmandu"
        data-timezone-adjustment="GMT+05:45"
        data-timezone-region="NP"
        data-dst="0"
      >
        (GMT+05:45) Asia/Kathmandu
      </option>
      <option
        value="5.5"
        data-timezone-id="Asia/Colombo"
        data-timezone-adjustment="GMT+05:30"
        data-timezone-region="LK"
        data-dst="0"
      >
        (GMT+05:30) Asia/Colombo
      </option>
      <option
        value="5.5"
        data-timezone-id="Asia/Kolkata"
        data-timezone-adjustment="GMT+05:30"
        data-timezone-region="IN"
        data-dst="0"
      >
        (GMT+05:30) Asia/Kolkata
      </option>
      <option
        value="5"
        data-timezone-id="Antarctica/Mawson"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT+05:00) Antarctica/Mawson
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Aqtau"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="KZ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Aqtau
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Aqtobe"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="KZ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Aqtobe
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Ashgabat"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="TM"
        data-dst="0"
      >
        (GMT+05:00) Asia/Ashgabat
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Atyrau"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="KZ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Atyrau
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Dushanbe"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="TJ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Dushanbe
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Karachi"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="PK"
        data-dst="0"
      >
        (GMT+05:00) Asia/Karachi
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Oral"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="KZ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Oral
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Qyzylorda"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="KZ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Qyzylorda
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Samarkand"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="UZ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Samarkand
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Tashkent"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="UZ"
        data-dst="0"
      >
        (GMT+05:00) Asia/Tashkent
      </option>
      <option
        value="5"
        data-timezone-id="Asia/Yekaterinburg"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+05:00) Asia/Yekaterinburg
      </option>
      <option
        value="5"
        data-timezone-id="Indian/Kerguelen"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="TF"
        data-dst="0"
      >
        (GMT+05:00) Indian/Kerguelen
      </option>
      <option
        value="5"
        data-timezone-id="Indian/Maldives"
        data-timezone-adjustment="GMT+05:00"
        data-timezone-region="MV"
        data-dst="0"
      >
        (GMT+05:00) Indian/Maldives
      </option>
      <option
        value="6"
        data-timezone-id="Antarctica/Vostok"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT+06:00) Antarctica/Vostok
      </option>
      <option
        value="6"
        data-timezone-id="Asia/Almaty"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="KZ"
        data-dst="0"
      >
        (GMT+06:00) Asia/Almaty
      </option>
      <option
        value="6"
        data-timezone-id="Asia/Bishkek"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="KG"
        data-dst="0"
      >
        (GMT+06:00) Asia/Bishkek
      </option>
      <option
        value="6"
        data-timezone-id="Asia/Dhaka"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="BD"
        data-dst="0"
      >
        (GMT+06:00) Asia/Dhaka
      </option>
      <option
        value="6"
        data-timezone-id="Asia/Omsk"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+06:00) Asia/Omsk
      </option>
      <option
        value="6"
        data-timezone-id="Asia/Qostanay"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region=""
        data-dst="0"
      >
        (GMT+06:00) Asia/Qostanay
      </option>
      <option
        value="6"
        data-timezone-id="Asia/Thimphu"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="BT"
        data-dst="0"
      >
        (GMT+06:00) Asia/Thimphu
      </option>
      <option
        value="6"
        data-timezone-id="Asia/Urumqi"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="CN"
        data-dst="0"
      >
        (GMT+06:00) Asia/Urumqi
      </option>
      <option
        value="6"
        data-timezone-id="Indian/Chagos"
        data-timezone-adjustment="GMT+06:00"
        data-timezone-region="IO"
        data-dst="0"
      >
        (GMT+06:00) Indian/Chagos
      </option>
      <option
        value="6.5"
        data-timezone-id="Asia/Yangon"
        data-timezone-adjustment="GMT+06:30"
        data-timezone-region="MM"
        data-dst="0"
      >
        (GMT+06:30) Asia/Yangon
      </option>
      <option
        value="6.5"
        data-timezone-id="Indian/Cocos"
        data-timezone-adjustment="GMT+06:30"
        data-timezone-region="CC"
        data-dst="0"
      >
        (GMT+06:30) Indian/Cocos
      </option>
      <option
        value="7"
        data-timezone-id="Antarctica/Davis"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT+07:00) Antarctica/Davis
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Bangkok"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="TH"
        data-dst="0"
      >
        (GMT+07:00) Asia/Bangkok
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Barnaul"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+07:00) Asia/Barnaul
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Ho_Chi_Minh"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="VN"
        data-dst="0"
      >
        (GMT+07:00) Asia/Ho_Chi_Minh
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Hovd"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="MN"
        data-dst="0"
      >
        (GMT+07:00) Asia/Hovd
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Jakarta"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="ID"
        data-dst="0"
      >
        (GMT+07:00) Asia/Jakarta
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Krasnoyarsk"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+07:00) Asia/Krasnoyarsk
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Novokuznetsk"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+07:00) Asia/Novokuznetsk
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Novosibirsk"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+07:00) Asia/Novosibirsk
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Phnom_Penh"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="KH"
        data-dst="0"
      >
        (GMT+07:00) Asia/Phnom_Penh
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Pontianak"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="ID"
        data-dst="0"
      >
        (GMT+07:00) Asia/Pontianak
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Tomsk"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+07:00) Asia/Tomsk
      </option>
      <option
        value="7"
        data-timezone-id="Asia/Vientiane"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="LA"
        data-dst="0"
      >
        (GMT+07:00) Asia/Vientiane
      </option>
      <option
        value="7"
        data-timezone-id="Indian/Christmas"
        data-timezone-adjustment="GMT+07:00"
        data-timezone-region="CX"
        data-dst="0"
      >
        (GMT+07:00) Indian/Christmas
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Brunei"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="BN"
        data-dst="0"
      >
        (GMT+08:00) Asia/Brunei
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Choibalsan"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="MN"
        data-dst="0"
      >
        (GMT+08:00) Asia/Choibalsan
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Hong_Kong"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="HK"
        data-dst="0"
      >
        (GMT+08:00) Asia/Hong_Kong
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Irkutsk"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+08:00) Asia/Irkutsk
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Kuala_Lumpur"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="MY"
        data-dst="0"
      >
        (GMT+08:00) Asia/Kuala_Lumpur
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Kuching"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="MY"
        data-dst="0"
      >
        (GMT+08:00) Asia/Kuching
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Macau"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="MO"
        data-dst="0"
      >
        (GMT+08:00) Asia/Macau
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Makassar"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="ID"
        data-dst="0"
      >
        (GMT+08:00) Asia/Makassar
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Manila"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="PH"
        data-dst="0"
      >
        (GMT+08:00) Asia/Manila
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Shanghai"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="CN"
        data-dst="0"
      >
        (GMT+08:00) Asia/Shanghai
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Singapore"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="SG"
        data-dst="0"
      >
        (GMT+08:00) Asia/Singapore
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Taipei"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="TW"
        data-dst="0"
      >
        (GMT+08:00) Asia/Taipei
      </option>
      <option
        value="8"
        data-timezone-id="Asia/Ulaanbaatar"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="MN"
        data-dst="0"
      >
        (GMT+08:00) Asia/Ulaanbaatar
      </option>
      <option
        value="8"
        data-timezone-id="Australia/Perth"
        data-timezone-adjustment="GMT+08:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+08:00) Australia/Perth (supports DST)
      </option>
      <option
        value="8.75"
        data-timezone-id="Australia/Eucla"
        data-timezone-adjustment="GMT+08:45"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+08:45) Australia/Eucla (supports DST)
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Chita"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="RU"
        data-dst="1"
      >
        (GMT+09:00) Asia/Chita
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Dili"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="TL"
        data-dst="0"
      >
        (GMT+09:00) Asia/Dili
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Jayapura"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="ID"
        data-dst="0"
      >
        (GMT+09:00) Asia/Jayapura
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Khandyga"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+09:00) Asia/Khandyga
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Pyongyang"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="KP"
        data-dst="0"
      >
        (GMT+09:00) Asia/Pyongyang
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Seoul"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="KR"
        data-dst="0"
      >
        (GMT+09:00) Asia/Seoul
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Tokyo"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="JP"
        data-dst="0"
      >
        (GMT+09:00) Asia/Tokyo
      </option>
      <option
        value="9"
        data-timezone-id="Asia/Yakutsk"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+09:00) Asia/Yakutsk
      </option>
      <option
        value="9"
        data-timezone-id="Pacific/Palau"
        data-timezone-adjustment="GMT+09:00"
        data-timezone-region="PW"
        data-dst="0"
      >
        (GMT+09:00) Pacific/Palau
      </option>
      <option
        value="9.5"
        data-timezone-id="Australia/Darwin"
        data-timezone-adjustment="GMT+09:30"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+09:30) Australia/Darwin (supports DST)
      </option>
      <option
        value="10"
        data-timezone-id="Antarctica/DumontDUrville"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="AQ"
        data-dst="1"
      >
        (GMT+10:00) Antarctica/DumontDUrville
      </option>
      <option
        value="10"
        data-timezone-id="Asia/Ust-Nera"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+10:00) Asia/Ust-Nera
      </option>
      <option
        value="10"
        data-timezone-id="Asia/Vladivostok"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+10:00) Asia/Vladivostok
      </option>
      <option
        value="10"
        data-timezone-id="Australia/Brisbane"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+10:00) Australia/Brisbane (supports DST)
      </option>
      <option
        value="10"
        data-timezone-id="Australia/Lindeman"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+10:00) Australia/Lindeman (supports DST)
      </option>
      <option
        value="10"
        data-timezone-id="Pacific/Chuuk"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="FM"
        data-dst="1"
      >
        (GMT+10:00) Pacific/Chuuk
      </option>
      <option
        value="10"
        data-timezone-id="Pacific/Guam"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="GU"
        data-dst="0"
      >
        (GMT+10:00) Pacific/Guam
      </option>
      <option
        value="10"
        data-timezone-id="Pacific/Port_Moresby"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="PG"
        data-dst="0"
      >
        (GMT+10:00) Pacific/Port_Moresby
      </option>
      <option
        value="10"
        data-timezone-id="Pacific/Saipan"
        data-timezone-adjustment="GMT+10:00"
        data-timezone-region="MP"
        data-dst="0"
      >
        (GMT+10:00) Pacific/Saipan
      </option>
      <option
        value="10.5"
        data-timezone-id="Australia/Adelaide"
        data-timezone-adjustment="GMT+10:30"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+10:30) Australia/Adelaide (supports DST)
      </option>
      <option
        value="10.5"
        data-timezone-id="Australia/Broken_Hill"
        data-timezone-adjustment="GMT+10:30"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+10:30) Australia/Broken_Hill (supports DST)
      </option>
      <option
        value="11"
        data-timezone-id="Antarctica/Casey"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="AQ"
        data-dst="1"
      >
        (GMT+11:00) Antarctica/Casey (supports DST)
      </option>
      <option
        value="11"
        data-timezone-id="Antarctica/Macquarie"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="AU"
        data-dst="0"
      >
        (GMT+11:00) Antarctica/Macquarie
      </option>
      <option
        value="11"
        data-timezone-id="Asia/Magadan"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+11:00) Asia/Magadan
      </option>
      <option
        value="11"
        data-timezone-id="Asia/Sakhalin"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+11:00) Asia/Sakhalin
      </option>
      <option
        value="11"
        data-timezone-id="Asia/Srednekolymsk"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+11:00) Asia/Srednekolymsk
      </option>
      <option
        value="11"
        data-timezone-id="Australia/Currie"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+11:00) Australia/Currie (supports DST)
      </option>
      <option
        value="11"
        data-timezone-id="Australia/Hobart"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+11:00) Australia/Hobart (supports DST)
      </option>
      <option
        value="11"
        data-timezone-id="Australia/Lord_Howe"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+11:00) Australia/Lord_Howe (supports DST)
      </option>
      <option
        value="11"
        data-timezone-id="Australia/Melbourne"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+11:00) Australia/Melbourne (supports DST)
      </option>
      <option
        value="11"
        data-timezone-id="Australia/Sydney"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="AU"
        data-dst="1"
      >
        (GMT+11:00) Australia/Sydney (supports DST)
      </option>
      <option
        value="11"
        data-timezone-id="Pacific/Bougainville"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="PG"
        data-dst="0"
      >
        (GMT+11:00) Pacific/Bougainville
      </option>
      <option
        value="11"
        data-timezone-id="Pacific/Efate"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="VU"
        data-dst="0"
      >
        (GMT+11:00) Pacific/Efate
      </option>
      <option
        value="11"
        data-timezone-id="Pacific/Guadalcanal"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="SB"
        data-dst="0"
      >
        (GMT+11:00) Pacific/Guadalcanal
      </option>
      <option
        value="11"
        data-timezone-id="Pacific/Kosrae"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="FM"
        data-dst="0"
      >
        (GMT+11:00) Pacific/Kosrae
      </option>
      <option
        value="11"
        data-timezone-id="Pacific/Noumea"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="NC"
        data-dst="0"
      >
        (GMT+11:00) Pacific/Noumea
      </option>
      <option
        value="11"
        data-timezone-id="Pacific/Pohnpei"
        data-timezone-adjustment="GMT+11:00"
        data-timezone-region="FM"
        data-dst="0"
      >
        (GMT+11:00) Pacific/Pohnpei
      </option>
      <option
        value="12"
        data-timezone-id="Asia/Anadyr"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+12:00) Asia/Anadyr
      </option>
      <option
        value="12"
        data-timezone-id="Asia/Kamchatka"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="RU"
        data-dst="0"
      >
        (GMT+12:00) Asia/Kamchatka
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Funafuti"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="TV"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Funafuti
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Kwajalein"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="MH"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Kwajalein
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Majuro"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="MH"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Majuro
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Nauru"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="NR"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Nauru
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Norfolk"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="NF"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Norfolk
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Tarawa"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="KI"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Tarawa
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Wake"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="UM"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Wake
      </option>
      <option
        value="12"
        data-timezone-id="Pacific/Wallis"
        data-timezone-adjustment="GMT+12:00"
        data-timezone-region="WF"
        data-dst="0"
      >
        (GMT+12:00) Pacific/Wallis
      </option>
      <option
        value="13"
        data-timezone-id="Antarctica/McMurdo"
        data-timezone-adjustment="GMT+13:00"
        data-timezone-region="AQ"
        data-dst="0"
      >
        (GMT+13:00) Antarctica/McMurdo
      </option>
      <option
        value="13"
        data-timezone-id="Pacific/Auckland"
        data-timezone-adjustment="GMT+13:00"
        data-timezone-region="NZ"
        data-dst="0"
      >
        (GMT+13:00) Pacific/Auckland
      </option>
      <option
        value="13"
        data-timezone-id="Pacific/Enderbury"
        data-timezone-adjustment="GMT+13:00"
        data-timezone-region="KI"
        data-dst="0"
      >
        (GMT+13:00) Pacific/Enderbury
      </option>
      <option
        value="13"
        data-timezone-id="Pacific/Fakaofo"
        data-timezone-adjustment="GMT+13:00"
        data-timezone-region="TK"
        data-dst="0"
      >
        (GMT+13:00) Pacific/Fakaofo
      </option>
      <option
        value="13"
        data-timezone-id="Pacific/Fiji"
        data-timezone-adjustment="GMT+13:00"
        data-timezone-region="FJ"
        data-dst="0"
      >
        (GMT+13:00) Pacific/Fiji
      </option>
      <option
        value="13"
        data-timezone-id="Pacific/Tongatapu"
        data-timezone-adjustment="GMT+13:00"
        data-timezone-region="TO"
        data-dst="0"
      >
        (GMT+13:00) Pacific/Tongatapu
      </option>
      <option
        value="13.75"
        data-timezone-id="Pacific/Chatham"
        data-timezone-adjustment="GMT+13:45"
        data-timezone-region="NZ"
        data-dst="0"
      >
        (GMT+13:45) Pacific/Chatham
      </option>
      <option
        value="14"
        data-timezone-id="Pacific/Apia"
        data-timezone-adjustment="GMT+14:00"
        data-timezone-region="WS"
        data-dst="0"
      >
        (GMT+14:00) Pacific/Apia
      </option>
      <option
        value="14"
        data-timezone-id="Pacific/Kiritimati"
        data-timezone-adjustment="GMT+14:00"
        data-timezone-region="KI"
        data-dst="0"
      >
        (GMT+14:00) Pacific/Kiritimati
      </option>
    </select>
  );
};

export default SelectTimezone;
