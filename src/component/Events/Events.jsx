import { useTranslation } from "react-i18next";
import { tableData } from "../../data/EventData";
import Title from "../Title/Title";

export default function Events() {
  const { t } = useTranslation();

  return (
    <div id="events" className="px-6 md:px-16 xl:!px-32 flex flex-col items-center justify-center gap-5 bg-[#FBEBEB] border-b border-[#e6e9f2] py-14">
      
      <Title tit={t(tableData.titEvent)} />

      <p className="text-2xl">{t(tableData.descEvent)}</p>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableData.headers.map((header, index) => (
                <th key={index} className="px-6 py-3 w-1/3">
                  {t(header)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.rows.map((row, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {t(row.dayKey)}
                </td>

                <td className="px-6 py-4">{row.date}</td>

                <td className="px-6 py-4">{t(row.courseKey)}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
