import React from 'react';
import { LayoutDashboard, Users, FileText, Settings, LogOut, TrendingUp, DollarSign, PieChart } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0a0a0a] border-r border-white/5 p-6 flex flex-col">
        <div className="mb-12">
           <span className="text-xl font-black font-heading text-white">NEX<span className="text-gold">SPHERE</span></span>
           <p className="text-[8px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-1">Admin Panel</p>
        </div>

        <nav className="space-y-2 flex-grow">
           {[
             { name: 'Dashboard', icon: LayoutDashboard, active: true },
             { name: 'Leads', icon: Users },
             { name: 'Blog Posts', icon: FileText },
             { name: 'Service Data', icon: PieChart },
             { name: 'Settings', icon: Settings },
           ].map((item) => (
             <button key={item.name} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-gold text-navy font-bold' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>
               <item.icon className="w-5 h-5" />
               <span className="text-sm">{item.name}</span>
             </button>
           ))}
        </nav>

        <button className="flex items-center space-x-3 text-red-500 px-4 py-3 hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-bold">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-10">
        <header className="flex justify-between items-center mb-12">
           <h1 className="text-3xl font-heading font-black text-white">Dashboard Overview</h1>
           <div className="flex items-center space-x-4">
              <div className="text-right">
                 <p className="text-white text-sm font-bold">Pooja Solanki</p>
                 <p className="text-slate-500 text-xs">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                 <Users className="text-gold w-5 h-5" />
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           {[
             { label: 'Total Inquiries', value: '48', icon: DollarSign, trend: '+12%' },
             { label: 'Blog Views', value: '1,240', icon: TrendingUp, trend: '+5%' },
             { label: 'Active Services', value: '15', icon: PieChart, trend: 'Stable' },
           ].map((stat) => (
             <div key={stat.label} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <stat.icon className="text-gold w-6 h-6" />
                   </div>
                   <span className="text-green-500 text-xs font-bold">{stat.trend}</span>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-white tracking-tighter">{stat.value}</p>
             </div>
           ))}
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8">
           <h2 className="text-xl font-bold text-white mb-6">Recent Inquiries</h2>
           <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-none">
                   <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800" />
                      <div>
                         <p className="text-white text-sm font-bold">Lead Candidate #{i}</p>
                         <p className="text-slate-500 text-xs">Interested in US Taxation</p>
                      </div>
                   </div>
                   <button className="text-gold text-xs font-black uppercase tracking-widest hover:underline">View Proposal</button>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
