import React, {useEffect, useState} from 'react'
import Table from 'antd/es/table'
import Column from 'antd/es/table/Column'
import {Fish} from '../types/dto'
import fishesApi from '../services/fishesApi'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'
import './FishesTable.css'
import {Select} from 'antd'

const FishesTableByParameter: React.FC = () => {

  const [fishes, setFishes] = useState<Fish[]>([])
  const [selectedParameter, setSelectedParameter] = useState('')
  const [parameters, setParameters] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fishesApi.getFishes()
      const allFishes = response.data.map((fish: Fish) => ({...fish}))

      const uniqueParameters = Array.from(new Set(allFishes.map((fish: Fish) => fish.parameter)))
      setParameters(uniqueParameters as string[])
    }
    fetchData().then(r => r)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fishesApi.getFishesByParameter(selectedParameter)
      const fetchedFishes = response.data.map((fish: Fish) => ({...fish}))
      setFishes(fetchedFishes)
    }
    fetchData().then(r => r)
  }, [selectedParameter])

  const handleParameterChange = (value: string) => {
    setSelectedParameter(value)
  }

  const stationFilters = Array.from(new Set(fishes.map(fish => fish.station)))
    .sort()
    .map(station => ({
      text: station,
      value: station,
    }))

  const tissueFilters = Array.from(new Set(fishes.map(fish => fish.tissue)))
    .sort()
    .map(tissue => ({
      text: tissue,
      value: tissue,
    }))

  const parameterFilters = Array.from(new Set(fishes.map(fish => fish.parameter)))
    .sort()
    .map(parameter => ({
      text: parameter,
      value: parameter,
    }))

  const speciesFilters = Array.from(new Set(fishes.map(fish => fish.species)))
    .sort()
    .map(species => ({
      text: species,
      value: species,
    }))

  const individualsFilters = Array.from(new Set(fishes.map(fish => fish.individuals)))
    .sort()
    .map(individuals => ({
      text: individuals,
      value: individuals,
    }))

  const unitsFilters = Array.from(new Set(fishes.map(fish => fish.units)))
    .sort()
    .map(units => ({
      text: units,
      value: units,
    }))

  const qualityFilters = Array.from(new Set(fishes.map(fish => fish.quality)))
    .sort()
    .map(quality => ({
      text: quality,
      value: quality,
    }))

  return (
    <>
      <Header/>

      <div className="container-fluid">
        <div className="row">

          <Sidebar/>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Zivis (pēc parametra)</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                </div>
              </div>
            </div>

            <p>
              <span className="px-1">Filtrēt pēc parametra:</span>

              <Select defaultValue={selectedParameter} style={{width: 120}} onChange={handleParameterChange}>
                {parameters.map(parameter => (
                  <Select.Option key={parameter} value={parameter}>{parameter}</Select.Option>
                ))}
              </Select>
            </p>

            <div className="table-responsive small">
              <Table rowKey="id" dataSource={fishes} size="small"
                pagination={{position: ['bottomCenter'], pageSize: 20}}>
                <Column title="#" dataIndex="id" key="id" sorter={(a: Fish, b: Fish) => a.id - b.id}/>
                <Column title="Project" dataIndex="project" key="project"
                  sorter={(a: Fish, b: Fish) => a.project.localeCompare(b.project)}/>
                <Column title="Trip" dataIndex="trip" key="trip"
                  sorter={(a: Fish, b: Fish) => a.trip.localeCompare(b.trip)}/>
                <Column title="Longitude" dataIndex="longitude" key="longitude"
                  sorter={(a: Fish, b: Fish) => a.longitude - b.longitude}/>
                <Column title="Latitude" dataIndex="latitude" key="latitude"
                  sorter={(a: Fish, b: Fish) => a.latitude - b.latitude}/>
                <Column title="DateTime" dataIndex="dateTime" key="dateTime"
                  sorter={(a: Fish, b: Fish) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()}/>
                <Column title="Station" dataIndex="station" key="station"
                  sorter={(a: Fish, b: Fish) => a.station.localeCompare(b.station)}
                  filters={stationFilters}
                  onFilter={(value, record) => record.station.indexOf(value as string) === 0}/>
                <Column title="Bott Depth M" dataIndex="bottDepthM" key="bottDepthM"
                  sorter={(a: Fish, b: Fish) => a.bottDepthM - b.bottDepthM}/>
                <Column title="Sample ID" dataIndex="sampleId" key="sampleId"
                  sorter={(a: Fish, b: Fish) => a.sampleId - b.sampleId}/>
                <Column title="Parameter" dataIndex="parameter" key="parameter"
                  sorter={(a: Fish, b: Fish) => a.parameter.localeCompare(b.parameter)}
                  filters={parameterFilters}
                  onFilter={(value, record) => record.parameter.indexOf(value as string) === 0}/>
                <Column title="Tissue" dataIndex="tissue" key="tissue"
                  sorter={(a: Fish, b: Fish) => a.tissue.localeCompare(b.tissue)}
                  filters={tissueFilters}
                  onFilter={(value, record) => record.tissue.indexOf(value as string) === 0}/>
                <Column title="Species" dataIndex="species" key="species"
                  sorter={(a: Fish, b: Fish) => a.species.localeCompare(b.species)}
                  filters={speciesFilters}
                  onFilter={(value, record) => record.species.indexOf(value as string) === 0}/>
                <Column title="Individuals" dataIndex="individuals" key="individuals"
                  sorter={(a: Fish, b: Fish) => a.individuals - b.individuals}
                  filters={individualsFilters}
                  onFilter={(value, record) => record.individuals === value}/>
                <Column title="Value" dataIndex="value" key="value"
                  sorter={(a: Fish, b: Fish) => a.value - b.value}/>
                <Column title="Units" dataIndex="units" key="units"
                  sorter={(a: Fish, b: Fish) => a.units.localeCompare(b.units)}
                  filters={unitsFilters}
                  onFilter={(value, record) => record.units.indexOf(value as string) === 0}/>
                <Column title="Quality" dataIndex="quality" key="quality"
                  sorter={(a: Fish, b: Fish) => a.quality.localeCompare(b.quality)}
                  filters={qualityFilters}
                  onFilter={(value, record) => record.quality.indexOf(value as string) === 0}/>
              </Table>
            </div>
          </main>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default FishesTableByParameter
