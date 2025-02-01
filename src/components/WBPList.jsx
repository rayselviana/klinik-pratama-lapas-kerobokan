import React from 'react';

const WBPList = ({ wbpData }) => {
  return (
    <div>
      {wbpData.map((wbp) => (
        <div key={wbp.nomor} className="wbp-card">
           <div><strong>Nomor:</strong> {wbp.nomor || '-'}</div>
          <div><strong>No. Registrasi:</strong> {wbp.no_registrasi || '-'}</div>
          <div><strong>Nama:</strong> {wbp.nama || '-'}</div>
          <div><strong>Alamat:</strong> {wbp.alamat || '-'}</div>
          <div><strong>Provinsi:</strong> {wbp.provinsi || '-'}</div>
          <div><strong>Kota:</strong> {wbp.kota || '-'}</div>
          <div><strong>Tempat Lahir:</strong> {wbp.tempat_lahir || '-'}</div>
          <div><strong>Tanggal Lahir:</strong> {wbp.tanggal_lahir || '-'}</div>
          <div><strong>Usia:</strong> {wbp.usia || '-'}</div>
          <div><strong>Jenis Kelamin:</strong> {wbp.jenis_kelamin || '-'}</div>
          <div><strong>Negara:</strong> {wbp.negara || '-'}</div>
          <div><strong>Undang-undang:</strong> {wbp.uu || '-'}</div>
          <div><strong>Nomor Putusan Akhir:</strong> {wbp.no_putusan || '-'}</div>
          <div><strong>Jenis Kejahatan:</strong> {wbp.jenis_kejahatan || '-'}</div>
          <div><strong>Tanggal Mulai Ditahan:</strong> {wbp.tanggal_mulai_ditahan || '-'}</div>
          <div><strong>Tgl Ekspirasi:</strong> {wbp.tgl_ekspirasi || '-'}</div>
          <div><strong>2/3 Masa Pidana:</strong> {wbp["2per3_pidana"] || '-'}</div>
          <div><strong>Lokasi Blok:</strong> {wbp.lokasi_blok || '-'}</div>
          <div><strong>Lokasi Sel:</strong> {wbp.lokasi_sel || '-'}</div>
          <div><strong>Total Bulan Remisi:</strong> {wbp.total_bulan_remisi || '-'}</div>
          <div><strong>Total Hari Remisi:</strong> {wbp.total_hari_remisi || '-'}</div>
          <div><strong>Subsider Tahun:</strong> {wbp.subsider_tahun || '-'}</div>
          <div><strong>Subsider Bulan:</strong> {wbp.subsider_bulan || '-'}</div>
          <div><strong>Subsider Hari:</strong> {wbp.subsider_hari || '-'}</div>
          <div><strong>Total Hukuman (tahun bulan hari):</strong> {wbp.total_hukuman || '-'}</div>
          <div><strong>Nama Ayah:</strong> {wbp.nama_ayah || '-'}</div>
          <div><strong>Nama Ibu:</strong> {wbp.nama_ibu || '-'}</div>
          <div><strong>Nomor Induk KTP:</strong> {wbp.nomor_induk_ktp || '-'}</div>
          <div><strong>Status WBP:</strong> {wbp.status_wbp || '-'}</div>
        </div>
      ))}
    </div>
  );
};

export default WBPList;