//Icons import
import { GiThermometerScale, GiChemicalTank } from 'react-icons/gi'
import { MdOutlineContactPhone } from 'react-icons/md'
import { BsCashStack } from 'react-icons/bs'
import { LuCalendarClock } from 'react-icons/lu'
import { RiWaterPercentLine } from 'react-icons/ri'
import { SiCoffeescript } from 'react-icons/si'
import { TbReportAnalytics } from 'react-icons/tb'

export const tools = [
  // Report Genrator
  {
    toolTitle: {
      ua: UAlocalization.reportGenerator.title,
      ru: RUlocalization.reportGenerator.title
    },
    toolDescription: {
      ua: UAlocalization.reportGenerator.description,
      ru: RUlocalization.reportGenerator.description
    },
    toolID: '06',
    toolSlug: 'report-generator',
    toolVersion: '1.1',
    tool: ReportGenerator,
    icon: <TbReportAnalytics />
  }
]
