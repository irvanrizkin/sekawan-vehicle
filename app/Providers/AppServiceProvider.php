<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('approve-reservation', function (User $user) {
            return $user->role === 'manager';
        });

        Gate::define('assign-reservation', function (User $user) {
            return $user->role === 'admin';
        });

        Gate::define('export-excel', function (User $user) {
            return $user->role === 'admin';
        });
    }
}
